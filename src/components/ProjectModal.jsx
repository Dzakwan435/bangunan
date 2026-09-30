import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose, onConsultClick }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#F4F2EE] border border-[#11111124] rounded-lg shadow-2xl overflow-hidden z-10 my-8 flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-[#111111]/60 text-white rounded-full hover:bg-[#111111] transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Project Image Header */}
          <div className="relative w-full h-[280px] sm:h-[340px] bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F4F2EE]">
              <span className="font-inter text-[11px] uppercase tracking-[0.16em] font-medium text-[#9E9B95]">
                {project.subtitle}
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-normal text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <p className="font-inter text-[14px] leading-relaxed text-[#6B6862]">
              {project.description}
            </p>

            {/* Stats / Specifications */}
            {project.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#11111124] py-4">
                {project.stats.map((s, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-inter text-[10.5px] uppercase tracking-wider text-[#6B6862]">
                      {s.label}
                    </span>
                    <span className="font-cormorant text-lg font-medium text-[#111111]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto font-inter text-[12px] uppercase tracking-wider text-[#111111] px-5 py-2.5 border border-[#11111140] rounded hover:bg-[#11111110] transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  onClose();
                  onConsultClick && onConsultClick();
                }}
                className="w-full sm:w-auto font-inter text-[12px] uppercase tracking-wider text-[#F4F2EE] bg-[#111111] px-6 py-2.5 rounded hover:bg-neutral-800 transition-colors"
              >
                Konsultasikan Proyek Serupa
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
