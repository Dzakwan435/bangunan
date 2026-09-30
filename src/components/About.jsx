import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="tentang" className="w-full bg-[#F4F2EE] py-28 sm:py-36 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <span className="font-inter text-[11.5px] uppercase tracking-[0.16em] font-medium text-[#6B6862]">
            (01) Tentang Kami
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal tracking-[-0.01em] text-[#111111]">
            Arsitektur yang tenang, dibangun dengan ketelitian.
          </h2>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col gap-7 lg:pt-11"
        >
          <p className="font-inter text-[14.5px] sm:text-[15px] leading-[1.75] text-[#6B6862]">
            Sejak 1998, Abbas Building menghadirkan properti yang menyatukan fungsi, keindahan, dan nilai investasi jangka panjang. Kami percaya bangunan terbaik adalah yang terasa sederhana — karena setiap detailnya telah dipikirkan.
          </p>
          <p className="font-inter text-[14.5px] sm:text-[15px] leading-[1.75] text-[#6B6862]">
            Dari lahan kosong hingga serah terima kunci, tim arsitek, insinyur, dan pengembang kami bekerja dalam satu alur yang transparan.
          </p>

          {/* Founder Signature Area */}
          <div className="pt-6 border-t border-[#11111124] flex items-center gap-4 mt-2">
            <div>
              <h4 className="font-cormorant text-[20px] font-medium leading-none text-[#111111] mb-1">
                Ir. Hasan Abbas
              </h4>
              <p className="font-inter text-[11px] uppercase tracking-[0.14em] font-medium text-[#6B6862]">
                Pendiri &amp; Direktur Utama
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
