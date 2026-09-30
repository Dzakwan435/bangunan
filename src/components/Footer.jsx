import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F2EE] border-t border-[#11111118] py-8 sm:py-10 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-cormorant text-xl font-medium tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          Abbas Building
        </a>

        <p className="font-inter text-[12px] text-[#6B6862]">
          © {new Date().getFullYear()} PT Abbas Building Indonesia
        </p>
      </div>
    </footer>
  );
}
