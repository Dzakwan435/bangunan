import React from 'react';
import { motion } from 'framer-motion';
import {
  DraftingCompassIcon,
  ConstructionIcon,
  BuildingIcon,
  PropertyManagementIcon,
} from './Icons';

const services = [
  {
    num: '01',
    icon: DraftingCompassIcon,
    title: 'Perencanaan & Desain',
    desc: 'Studi kelayakan, masterplan, dan desain arsitektur yang menghormati konteks lahan.',
  },
  {
    num: '02',
    icon: ConstructionIcon,
    title: 'Konstruksi',
    desc: 'Manajemen konstruksi dengan standar mutu, waktu, dan keselamatan yang ketat.',
  },
  {
    num: '03',
    icon: BuildingIcon,
    title: 'Pengembangan Kawasan',
    desc: 'Hunian, perkantoran, dan kawasan mixed-use yang dirancang untuk tumbuh bersama kota.',
  },
  {
    num: '04',
    icon: PropertyManagementIcon,
    title: 'Manajemen Properti',
    desc: 'Perawatan aset, penyewaan, dan layanan purnajual untuk menjaga nilai jangka panjang.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="w-full bg-[#111111] text-[#F4F2EE] py-28 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 max-w-[640px]"
          >
            <span className="font-inter text-[11.5px] uppercase tracking-[0.16em] font-medium text-[#9E9B95]">
              (02) Layanan
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal tracking-[-0.01em] text-[#F4F2EE]">
              Satu mitra, dari visi hingga serah terima.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[13.5px] sm:text-[14px] leading-relaxed text-[#9E9B95] max-w-[300px]"
          >
            Layanan terpadu untuk investor, korporasi, dan keluarga.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#F4F2EE24] border border-[#F4F2EE24]">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#111111] p-8 sm:p-9 min-h-[340px] flex flex-col justify-between transition-all duration-300 hover:bg-[#161616]"
              >
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-cormorant text-2xl font-light text-[#9E9B95] group-hover:text-[#F4F2EE] transition-colors">
                    {service.num}
                  </span>
                  <div className="text-[#F4F2EE] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7" strokeWidth={1.25} />
                  </div>
                </div>

                {/* Bottom Block: Title & Description */}
                <div className="flex flex-col gap-3.5 pt-12">
                  <h3 className="font-cormorant text-2xl font-medium text-[#F4F2EE]">
                    {service.title}
                  </h3>
                  <p className="font-inter text-[13px] leading-[1.65] text-[#9E9B95]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
