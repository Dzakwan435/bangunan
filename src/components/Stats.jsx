import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '28', label: 'Tahun pengalaman' },
  { value: '140+', label: 'Proyek selesai' },
  { value: '2,4 jt m²', label: 'Area terbangun' },
  { value: '12', label: 'Kota di Indonesia' },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#F4F2EE] border-t border-b border-[#11111124]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`py-9 px-6 sm:px-8 flex flex-col gap-2 ${
              idx > 0 ? 'md:border-l border-[#11111124]' : ''
            } ${idx % 2 !== 0 ? 'border-l md:border-l-0 border-[#11111124]' : ''} ${
              idx >= 2 ? 'border-t md:border-t-0 border-[#11111124]' : ''
            }`}
          >
            <span className="font-cormorant text-4xl sm:text-[46px] font-normal leading-none text-[#111111]">
              {stat.value}
            </span>
            <span className="font-inter text-[11.5px] uppercase tracking-[0.14em] font-medium text-[#6B6862]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
