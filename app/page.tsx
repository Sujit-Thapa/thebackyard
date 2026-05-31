"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Page() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      console.log({ email });
      setStatus("sent");
      setEmail("");
    }, 1000);
  };

  useEffect(() => {
    if (status === "sent") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-gray-900 grid place-items-center text-lg">
              ☕
            </div>
            <span className="text-lg font-light tracking-wide">
              The Backyard
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm">
            {[
              { name: "About", href: "#about" },
              { name: "Menu", href: "#menu" },
              { name: "Space", href: "#space" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-sm border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 transition"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Menu", href: "#menu" },
                { name: "Space", href: "#space" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="text-center max-w-2xl">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Welcome to
          </p>
          <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            The Backyard
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            A quiet sanctuary for exceptional coffee, fresh pastries, and
            meaningful conversations. Where every cup is crafted with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium">
              Visit us today
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
              View menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">About us</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Backyard was born from a simple belief: that coffee is more
                than just a beverage. It's a moment. A pause. A connection.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We source the finest beans from specialty roasters, prepare
                every drink with care, and create a space where you can focus,
                relax, or simply be.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No noise. No rush. Just intentional craft and genuine
                hospitality.
              </p>
            </div>
            <div className="h-80 bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl flex items-center justify-center text-5xl">
              ☕
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Menu highlights</h2>
          <p className="text-gray-600 mb-12">
            Carefully curated selection of our finest offerings.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coffee */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Espresso Drinks</h3>
              {[
                {
                  name: "House Espresso",
                  desc: "Single or double shot",
                  price: "$3.50",
                },
                {
                  name: "Cappuccino",
                  desc: "Perfectly balanced milk and espresso",
                  price: "$4.25",
                },
                {
                  name: "Flat White",
                  desc: "Velvety microfoam",
                  price: "$4.50",
                },
                {
                  name: "Cortado",
                  desc: "1:1 espresso and steamed milk",
                  price: "$3.75",
                },
                {
                  name: "Iced Americano",
                  desc: "Crisp and refreshing",
                  price: "$4.00",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start pb-4 border-b border-gray-100"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <p className="font-medium text-gray-900">{item.price}</p>
                </div>
              ))}
            </div>

            {/* Pastries & Other */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Pastries & More</h3>
              {[
                {
                  name: "Croissant",
                  desc: "Buttery and fresh daily",
                  price: "$3.50",
                },
                {
                  name: "Seasonal Scone",
                  desc: "With clotted cream & jam",
                  price: "$4.50",
                },
                {
                  name: "Blueberry Muffin",
                  desc: "House-baked",
                  price: "$3.75",
                },
                {
                  name: "Matcha Latte",
                  desc: "Ceremonial grade matcha",
                  price: "$5.00",
                },
                {
                  name: "Honey Latte",
                  desc: "Today's special",
                  price: "$4.75",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start pb-4 border-b border-gray-100"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <p className="font-medium text-gray-900">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-12 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium">
            See full menu
          </button>
        </div>
      </section>

      {/* Space Section */}
      <section id="space" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Our space</h2>
          <p className="text-gray-600 mb-12">
            Designed for quiet focus and authentic connection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "🪑",
                title: "Comfortable seating",
                desc: "Carefully chosen furniture for hours of work or relaxation",
              },
              {
                icon: "📶",
                title: "Fast WiFi",
                desc: "Reliable connection for remote workers and students",
              },
              {
                icon: "🤫",
                title: "Quiet environment",
                desc: "Soft music and minimal noise for focus",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition"
              >
                <p className="text-3xl mb-3">{feature.icon}</p>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((img) => (
              <div
                key={img}
                className="h-64 bg-gray-200 rounded-xl overflow-hidden relative group"
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-100 flex items-center justify-center text-6xl">
                  {["🌿", "☕", "🍃"][img - 1]}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday – Friday</p>
                <p className="font-medium text-gray-900">7:00 AM – 6:00 PM</p>
                <p className="mt-3">Saturday – Sunday</p>
                <p className="font-medium text-gray-900">8:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Location
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium text-gray-900">123 Backyard Lane</p>
                <p>Downtown District</p>
                <p>Perfect for walking distance</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium text-gray-900">(555) 123-4567</p>
                <p>hello@thebackyard.cafe</p>
                <p>Reserve a seat in advance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Stay updated</h2>
          <p className="text-gray-300 mb-8">
            Get news about new menu items, events, and specials delivered to
            your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              required
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
            />
            <button
              disabled={status === "sending"}
              type="submit"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 disabled:opacity-60 transition font-medium"
            >
              {status === "sending" ? "Sending..." : "Subscribe"}
            </button>
          </form>

          {status === "sent" && (
            <p className="mt-3 text-sm text-green-300">
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
