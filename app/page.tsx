"use client";
import React, { JSX, useEffect, useState } from "react";

export default function Page(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    if (status === "sent") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message, agree });
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
    setAgree(false);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-zinc-300 grid place-items-center">
              ☕
            </div>
            <span className="text-lg font-semibold tracking-tight">
              The Backyard
            </span>
          </div>

          <nav className="hidden sm:flex gap-6 text-sm text-zinc-500">
            <a href="#menu" className="hover:text-zinc-900 transition">
              Menu
            </a>
            <a href="#space" className="hover:text-zinc-900 transition">
              Space
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-20 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
            A calm place for coffee and conversation
          </h1>
          <p className="mt-4 text-[15px] text-zinc-500 leading-relaxed">
            Minimal, mindful, and freshly brewed. Come for a quiet moment or
            take a cup to go.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition">
              Book a table
            </button>
            <button className="px-5 py-2.5 rounded-xl border border-zinc-200 text-sm hover:bg-zinc-100 transition">
              View menu
            </button>
          </div>
        </section>

        {/* Menu */}
        <section
          id="menu"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-semibold mb-1">Menu highlights</h2>
            <p className="text-sm text-zinc-500 mb-8">
              A small selection of house favorites.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ["House Espresso", "$3.50"],
                ["Cappuccino", "$4.25"],
                ["Seasonal Scone", "$3.00"],
                ["Matcha Latte", "$4.50"],
                ["Iced Brew", "$3.75"],
                ["Almond Croissant", "$4.00"],
              ].map(([item, price]) => (
                <div key={item} className="flex justify-between text-sm">
                  <span className="font-medium">{item}</span>
                  <span className="text-zinc-500">{price}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition">
              Order online
            </button>
          </div>

          {/* Info Card */}
          <aside className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col gap-6">
            <div>
              <div className="text-sm font-semibold">Today’s special</div>
              <div className="text-sm text-zinc-500">
                Honey latte with local honey
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Hours</span>
                <span>8:00 – 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Seating</span>
                <span>Indoor & Outdoor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Takeaway</span>
                <span>Available</span>
              </div>
            </div>

            <button className="mt-auto px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm hover:bg-emerald-500 transition">
              Try today’s special
            </button>
          </aside>
        </section>

        {/* Gallery */}
        <section id="space" className="grid grid-cols-3 gap-4 mb-20">
          {["cafe1", "cafe2", "cafe3"].map((img) => (
            <img
              key={img}
              src={`/images/${img}.jpg`}
              alt="Cafe"
              className="h-40 w-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition"
            />
          ))}
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="max-w-xl bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-lg font-semibold mb-4">Contact</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
            <textarea
              required
              rows={3}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />

            <label className="flex items-center gap-2 text-xs text-zinc-500">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              I agree to the privacy policy
            </label>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition"
              >
                Send message
              </button>
              <span className="text-xs text-zinc-500">
                {status === "sent" ? "Message sent ✓" : "We reply within 24h"}
              </span>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
