import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-12 bg-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full border border-gray-300 grid place-items-center text-lg">
              ☕
            </div>
            <span className="font-semibold">The Backyard</span>
          </div>
          <p className="text-sm text-gray-500">
            Minimal coffee culture with intention.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Hours</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
            <p>Sat – Sun: 8:00 AM – 5:00 PM</p>
            <p className="text-gray-400 text-xs mt-2">Closed Mondays in July</p>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Connect</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>📍 123 Backyard Lane</p>
            <p>📧 hello@thebackyard.cafe</p>
            <p>📞 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-10 pt-6">
        <p className="text-center text-xs text-gray-400">
          © 2026 The Backyard. Crafted with intention.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
