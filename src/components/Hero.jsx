import React from 'react';
import { motion } from 'framer-motion';
import HeroSkyline3D from './HeroSkyline3D';
import { ArrowDownRight } from './Icons';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[760px] flex flex-col justify-end overflow-hidden pb-16 sm:pb-20 px-6 sm:px-12">
      {/* 3D Wireframe Canvas Background */}
      <HeroSkyline3D
        backgroundColor="#F4F2EE"
        lineColor="#111111"
        lineOpacity={0.48}
        buildingCount={18}
        maxHeight={32}
        rotationSpeed={0.05}
        mouseParallax={true}
        fogEnabled={true}
      />

      {/* Subtle Bottom Gradient Overlay for readability */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(244, 242, 238, 0) 0%, rgba(244, 242, 238, 0.6) 50%, rgba(244, 242, 238, 0.96) 90%, #F4F2EE 100%)',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-16">
        {/* Left Headline Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[720px]"
        >
          <p className="font-inter text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-medium text-[#111111] mb-5 sm:mb-6">
            Pengembang Properti · Est. 1998
          </p>
          <h1 className="font-cormorant text-[46px] sm:text-[68px] lg:text-[88px] xl:text-[96px] font-normal leading-[0.96] tracking-[-0.02em] text-[#111111]">
            Membangun ruang yang bertahan melampaui zaman.
          </h1>
        </motion.div>

        {/* Right Description & Action Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[340px] flex flex-col items-start gap-6 lg:gap-8"
        >
          <p className="font-inter text-[13.5px] sm:text-[14px] leading-[1.65] text-[#6B6862]">
            Abbas Building merancang dan mengembangkan hunian, perkantoran, dan kawasan terpadu dengan presisi arsitektural dan integritas material.
          </p>
          
          <a
            href="#proyek"
            className="group inline-flex items-center gap-2.5 bg-[#111111] text-[#F4F2EE] font-inter text-[13px] tracking-[0.04em] font-medium px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-sm"
          >
            <span>Lihat Portofolio</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
