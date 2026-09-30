import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Deterministic PRNG to match procedural layout
function hashString(str) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

function createRng(seed) {
  let s = seed;
  return function () {
    s = (s + 1831565813) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function HeroSkyline3D({
  backgroundColor = '#F4F2EE',
  lineColor = '#111111',
  lineOpacity = 0.5,
  buildingCount = 18,
  maxHeight = 32,
  rotationSpeed = 0.05,
  mouseParallax = true,
  fogEnabled = true,
}) {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const isTransparent = backgroundColor.trim().toLowerCase() === 'transparent';
    const clearColor = new THREE.Color(isTransparent ? '#F4F2EE' : backgroundColor);

    if (fogEnabled) {
      scene.fog = new THREE.Fog(clearColor, 20, 120);
    }

    // Camera setup
    const aspect = Math.max(width, 1) / Math.max(height, 1);
    const camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 1000);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(clearColor, isTransparent ? 0 : 1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Main Group
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Generate Buildings
    const gridCount = Math.max(4, Math.floor(buildingCount));
    const halfGrid = (gridCount - 1) / 2;
    const spacing = 3.2;
    const rng = createRng(hashString(`${gridCount}-${maxHeight}`));

    const geometries = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(lineColor),
      transparent: true,
      opacity: lineOpacity,
      linewidth: 1,
    });

    for (let x = 0; x < gridCount; x++) {
      for (let z = 0; z < gridCount; z++) {
        const bWidth = 1 + rng() * 1.3;
        const bDepth = 1 + rng() * 1.3;
        const bHeight = 1.8 + Math.pow(rng(), 1.45) * Math.max(2, maxHeight);
        const offsetX = (rng() - 0.5) * 0.35;
        const offsetZ = (rng() - 0.5) * 0.35;

        const posX = (x - halfGrid) * spacing + offsetX;
        const posZ = (z - halfGrid) * spacing + offsetZ;

        const boxGeo = new THREE.BoxGeometry(bWidth, bHeight, bDepth);
        const edgesGeo = new THREE.EdgesGeometry(boxGeo);
        geometries.push(boxGeo, edgesGeo);

        const wireframe = new THREE.LineSegments(edgesGeo, lineMaterial);
        wireframe.position.set(posX, bHeight / 2, posZ);
        cityGroup.add(wireframe);
      }
    }

    // Grid Helper at ground
    const gridHelperSize = Math.max(40, Math.floor(gridCount * 4));
    const gridHelperDivisions = Math.max(10, Math.floor(gridCount * 2));
    const gridHelper = new THREE.GridHelper(
      gridHelperSize,
      gridHelperDivisions,
      new THREE.Color(lineColor),
      new THREE.Color(lineColor)
    );
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = lineOpacity * 0.18;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = lineOpacity * 0.18;
    }
    cityGroup.add(gridHelper);

    // Mouse movement listener
    const handleMouseMove = (e) => {
      if (!mouseParallax || !container) return;
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
      const ny = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
      mouseRef.current.x = nx;
      mouseRef.current.y = ny;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    if (mouseParallax) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const newWidth = Math.max(1, Math.round(entry.contentRect.width));
      const newHeight = Math.max(1, Math.round(entry.contentRect.height));
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    });
    resizeObserver.observe(container);

    // Animation Loop
    const orbitDistance = Math.max(24, gridCount * 2.4);
    const cameraHeight = Math.max(14, maxHeight * 0.75);
    const parallaxIntensity = Math.max(1.2, gridCount * 0.05);

    let startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerp
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * 0.04;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * 0.04;

      const px = mouseParallax ? smoothMouseRef.current.x * parallaxIntensity * 2 : 0;
      const py = mouseParallax ? smoothMouseRef.current.y * parallaxIntensity * 2 : 0;

      camera.position.x = Math.cos(elapsed * rotationSpeed) * orbitDistance + px;
      camera.position.z = Math.sin(elapsed * rotationSpeed * 0.85) * orbitDistance - py;
      camera.position.y = cameraHeight + Math.sin(elapsed * rotationSpeed * 0.55) * 2.2 - py * 0.3;
      camera.lookAt(0, maxHeight * 0.22, 0);

      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (mouseParallax) {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      resizeObserver.disconnect();

      if (renderer.domElement && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      geometries.forEach((geo) => geo.dispose());
      lineMaterial.dispose();
      gridHelper.geometry.dispose();
      if (Array.isArray(gridHelper.material)) {
        gridHelper.material.forEach((m) => m.dispose());
      } else {
        gridHelper.material.dispose();
      }
      renderer.dispose();
    };
  }, [backgroundColor, lineColor, lineOpacity, buildingCount, maxHeight, rotationSpeed, mouseParallax, fogEnabled]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ background: backgroundColor }}
      aria-label="Wireframe city skyline"
    />
  );
}
