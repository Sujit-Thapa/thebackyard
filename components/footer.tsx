import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-white">
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-900 text-white grid place-items-center text-sm">☕</div>
        <span className="text-sm font-medium tracking-wide">The Backyard</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
        <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="/menu" className="hover:text-gray-900 transition-colors">Menu</a>
        <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">© 2026 The Backyard</p>
    </div>
  </footer>
);

export default Footer;
