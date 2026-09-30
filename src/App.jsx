import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F4F2EE] text-[#111111] selection:bg-[#111111] selection:text-[#F4F2EE]">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Wireframe Canvas */}
        <Hero />

        {/* Stats Grid */}
        <Stats />

        {/* (01) Tentang Kami */}
        <About />

        {/* (02) Layanan */}
        <Services />

        {/* (03) Proyek Pilihan */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Philosophy & Values */}
        <Values />

        {/* (04) Kontak */}
        <Contact onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultClick={() => setIsConsultationOpen(true)}
      />
    </div>
  );
}
