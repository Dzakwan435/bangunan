import React from 'react';
import { motion } from 'framer-motion';
import { LocationIcon, PhoneIcon, MailIcon, ArrowUpRight } from './Icons';

export default function Contact({ onOpenConsultation }) {
  return (
    <section id="kontak" className="w-full bg-[#F4F2EE] py-28 sm:py-36 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        {/* Main CTA Block */}
        <div className="flex flex-col items-start gap-7 max-w-[800px]">
          <span className="font-inter text-[11.5px] uppercase tracking-[0.16em] font-medium text-[#6B6862]">
            (04) Kontak
          </span>
          
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] font-normal tracking-[-0.02em] text-[#111111]">
            Mari wujudkan proyek Anda berikutnya.
          </h2>

          <button
            onClick={onOpenConsultation}
            className="group mt-2 inline-flex items-center gap-2.5 bg-[#111111] text-[#F4F2EE] font-inter text-[13px] tracking-[0.04em] font-medium px-7 py-4 rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-sm"
          >
            <span>Jadwalkan Konsultasi</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3-Column Info Bar */}
        <div className="border-t border-b border-[#11111124] py-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Kantor Pusat */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#111111]">
              <LocationIcon className="w-4 h-4 text-[#111111]" />
              <span className="font-inter text-[11.5px] uppercase tracking-[0.14em] font-medium text-[#6B6862]">
                Kantor Pusat
              </span>
            </div>
            <p className="font-inter text-[14px] leading-relaxed text-[#111111]">
              Jl. Senopati No. 88, Jakarta Selatan 12190
            </p>
          </div>

          {/* Telepon */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#111111]">
              <PhoneIcon className="w-4 h-4 text-[#111111]" />
              <span className="font-inter text-[11.5px] uppercase tracking-[0.14em] font-medium text-[#6B6862]">
                Telepon
              </span>
            </div>
            <a
              href="tel:+622150881998"
              className="font-inter text-[14px] text-[#111111] hover:text-[#6B6862] transition-colors"
            >
              +62 21 5088 1998
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#111111]">
              <MailIcon className="w-4 h-4 text-[#111111]" />
              <span className="font-inter text-[11.5px] uppercase tracking-[0.14em] font-medium text-[#6B6862]">
                Email
              </span>
            </div>
            <a
              href="mailto:halo@abbasbuilding.co.id"
              className="font-inter text-[14px] text-[#111111] hover:text-[#6B6862] transition-colors"
            >
              halo@abbasbuilding.co.id
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
