import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from './Icons';

export const projectData = [
  {
    id: 'menara-sagara',
    title: 'Menara Sagara',
    category: 'Perkantoran',
    location: 'Jakarta Selatan',
    year: '2024',
    subtitle: 'Jakarta Selatan · Perkantoran · 2024',
    image: '/images/menara-sagara.jpg',
    description: 'Sebuah landmark perkantoran premium setinggi 36 lantai di kawasan bisnis Jakarta Selatan. Mengintegrasikan teknologi efisiensi energi terdepan, pencahayaan alami optimal, dan sertifikasi bangunan hijau tingkat platinum.',
    stats: [
      { label: 'Luas Bangunan', value: '48.000 m²' },
      { label: 'Tinggi Lantai', value: '36 Lantai' },
      { label: 'Sertifikasi', value: 'Green Building Platinum' },
    ]
  },
  {
    id: 'residensi-arunika',
    title: 'Residensi Arunika',
    category: 'Hunian',
    location: 'Bandung',
    year: '2023',
    subtitle: 'Bandung · Hunian · 2023',
    image: '/images/residensi-arunika.jpg',
    stagger: true,
    description: 'Kompleks hunian privat di perbukitan Bandung yang menyatu dengan kontur alam. Dirancang dengan pendekatan arsitektur tropis kontemporer, material kayu lokal berkualitas, dan sirkulasi udara alami.',
    stats: [
      { label: 'Unit Tersedia', value: '24 Villa Eksklusif' },
      { label: 'Luas Lahan', value: '2.8 Hektar' },
      { label: 'Konsep', value: 'Tropical Modern Biophilic' },
    ]
  },
  {
    id: 'kawasan-lumbung',
    title: 'Kawasan Lumbung',
    category: 'Mixed-use',
    location: 'Surabaya',
    year: '2025',
    subtitle: 'Surabaya · Mixed-use · 2025',
    image: '/images/kawasan-lumbung.jpg',
    description: 'Kawasan terpadu multifungsi yang menyatukan ruang retail, perkantoran kreatif, dan residensial dalam satu ekosistem ramah pejalan kaki. Menghadirkan ruang publik terbuka hijau di pusat kota Surabaya.',
    stats: [
      { label: 'Total Area', value: '65.000 m²' },
      { label: 'Fasilitas', value: 'Retail, Plaza & Office' },
      { label: 'Status', value: 'Selesai Tahap 1' },
    ]
  },
];

export default function Projects({ onSelectProject }) {
  return (
    <section id="proyek" className="w-full bg-[#F4F2EE] py-28 sm:py-36 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14 sm:gap-16">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 max-w-[640px]"
          >
            <span className="font-inter text-[11.5px] uppercase tracking-[0.16em] font-medium text-[#6B6862]">
              (03) Proyek Pilihan
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal tracking-[-0.01em] text-[#111111]">
              Karya yang membentuk cakrawala.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[13.5px] sm:text-[14px] leading-relaxed text-[#6B6862] max-w-[320px]"
          >
            Sebagian dari 140+ proyek yang telah kami wujudkan.
          </motion.p>
        </div>

        {/* 3 Columns Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {projectData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-5 cursor-pointer group ${
                project.stagger ? 'md:pt-16' : ''
              }`}
              onClick={() => onSelectProject && onSelectProject(project)}
            >
              {/* Image Container */}
              <div className="relative w-full h-[380px] sm:h-[440px] overflow-hidden rounded-[3px] bg-[#E8E5DF]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#111111]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Title, Subtitle & Arrow */}
              <div className="flex items-start justify-between border-b border-[#11111124] pb-4 pt-1">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-cormorant text-2xl font-medium text-[#111111] group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-[12px] text-[#6B6862]">
                    {project.subtitle}
                  </p>
                </div>
                <div className="text-[#111111] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 pt-1">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={1.25} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
