import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from './Icons';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Perencanaan & Desain',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate submission finish
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Perencanaan & Desain',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111111]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#F4F2EE] border border-[#11111124] rounded-lg shadow-2xl p-6 sm:p-10 z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#111111] hover:text-[#6B6862] transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-inter text-[11px] uppercase tracking-[0.16em] font-medium text-[#6B6862]">
                  Konsultasi Properti
                </span>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-[#111111]">
                  Diskusikan Visi Bangunan Anda
                </h3>
                <p className="font-inter text-[13px] text-[#6B6862]">
                  Tim ahli kami siap mendengarkan rencana proyek hunian, komersial, atau kawasan Anda.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-inter text-[11px] uppercase tracking-wider font-medium text-[#111111] mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Hendra Kusuma"
                    className="w-full bg-white border border-[#11111124] rounded px-4 py-2.5 font-inter text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-[11px] uppercase tracking-wider font-medium text-[#111111] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full bg-white border border-[#11111124] rounded px-4 py-2.5 font-inter text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-[11px] uppercase tracking-wider font-medium text-[#111111] mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 812 xxxx xxxx"
                      className="w-full bg-white border border-[#11111124] rounded px-4 py-2.5 font-inter text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-[11px] uppercase tracking-wider font-medium text-[#111111] mb-1.5">
                    Kategori Layanan
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-[#11111124] rounded px-4 py-2.5 font-inter text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  >
                    <option>Perencanaan &amp; Desain</option>
                    <option>Konstruksi Bangunan</option>
                    <option>Pengembangan Kawasan Mixed-Use</option>
                    <option>Manajemen &amp; Perawatan Properti</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-[11px] uppercase tracking-wider font-medium text-[#111111] mb-1.5">
                    Deskripsi Rencana / Kebutuhan
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan lokasi, luas lahan/bangunan, atau target waktu proyek Anda..."
                    className="w-full bg-white border border-[#11111124] rounded px-4 py-2.5 font-inter text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#111111] text-[#F4F2EE] font-inter text-[13px] tracking-wider uppercase font-medium py-3.5 rounded hover:bg-neutral-800 transition-colors"
              >
                <span>Kirim Permintaan Konsultasi</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#111111] text-[#F4F2EE] flex items-center justify-center text-2xl mb-2">
                ✓
              </div>
              <h3 className="font-cormorant text-3xl font-medium text-[#111111]">
                Terima Kasih, {formData.name || 'Bapak/Ibu'}
              </h3>
              <p className="font-inter text-[14px] leading-relaxed text-[#6B6862] max-w-sm">
                Permintaan konsultasi Anda telah kami terima. Tim representatif Abbas Building akan menghubungi Anda melalui WhatsApp / Email dalam kurun waktu 1x24 jam kerja.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#111111] text-[#F4F2EE] font-inter text-[12px] uppercase tracking-wider px-6 py-2.5 rounded hover:bg-neutral-800 transition-colors"
              >
                Tutup
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
