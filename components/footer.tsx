import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-200 bg-white">
    <div className="mx-auto max-w-4xl px-6 py-8">
      <div className="flex items-center justify-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gray-900 text-sm text-white">☕</div>
        <span className="text-sm font-medium tracking-[0.2em]">THE BACKYARD</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
        <a href="#about" className="transition-colors hover:text-gray-900">About</a>
        <a href="#menu" className="transition-colors hover:text-gray-900">Menu</a>
        <a href="#contact" className="transition-colors hover:text-gray-900">Contact</a>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">© 2026 The Backyard Café</p>
    </div>
  </footer>
);

export default Footer;
