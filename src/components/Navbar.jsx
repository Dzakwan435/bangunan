import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#proyek' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F4F2EE]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#11111114]'
          : 'bg-transparent py-7 sm:py-8'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-cormorant text-2xl sm:text-[26px] font-medium tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          Abbas Building
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-inter text-[12px] uppercase tracking-[0.16em] font-medium text-[#111111] hover:text-[#6B6862] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center justify-center font-inter text-[12px] uppercase tracking-[0.14em] font-medium text-[#111111] border border-[#111111] rounded-full px-5 py-2.5 overflow-hidden transition-all duration-300 hover:bg-[#111111] hover:text-[#F4F2EE]"
          >
            <span className="relative z-10">Hubungi Kami</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-[70px] bg-[#F4F2EE] border-b border-[#1111111a] px-6 py-8 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter text-sm uppercase tracking-[0.16em] font-medium text-[#111111] py-2 border-b border-[#11111110]"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full mt-4 font-inter text-xs uppercase tracking-[0.14em] font-medium text-[#F4F2EE] bg-[#111111] rounded-full py-3.5 text-center"
              >
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
