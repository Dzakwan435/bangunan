import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    num: '01 — Presisi',
    desc: 'Setiap garis, sambungan, dan material diuji sebelum diputuskan.',
  },
  {
    num: '02 — Keberlanjutan',
    desc: 'Desain pasif, material lokal, dan efisiensi energi sebagai standar.',
  },
  {
    num: '03 — Integritas',
    desc: 'Kontrak transparan, jadwal jujur, dan kualitas tanpa kompromi.',
  },
];

export default function Values() {
  return (
    <section className="w-full bg-[#E8E5DF] text-[#111111] py-28 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Large Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1000px]"
        >
          <blockquote className="font-cormorant text-2xl sm:text-3xl lg:text-[36px] font-normal leading-[1.3] text-[#111111]">
            “Kami tidak sekadar membangun gedung. Kami menyusun ruang tempat kehidupan berlangsung selama puluhan tahun.”
          </blockquote>
        </motion.div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {values.map((val, idx) => (
            <motion.div
              key={val.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="border-t border-[#111111] pt-6 flex flex-col gap-3.5"
            >
              <h3 className="font-cormorant text-[20px] sm:text-[22px] font-medium text-[#111111]">
                {val.num}
              </h3>
              <p className="font-inter text-[13.5px] leading-[1.65] text-[#6B6862]">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
