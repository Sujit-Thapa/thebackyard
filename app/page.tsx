"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      console.log({ name, email, message, agree });
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setAgree(false);
    }, 1000);
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
            {["menu", "space", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-zinc-900 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-sm border px-3 py-1.5 rounded-lg"
          >
            Menu
          </button>
        </header>

        {menuOpen && (
          <div className="sm:hidden mb-10 flex flex-col gap-4 text-sm text-zinc-600">
            <a href="#menu">Menu</a>
            <a href="#space">Space</a>
            <a href="#contact">Contact</a>
          </div>
        )}

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
                <div
                  key={item}
                  className="flex justify-between text-sm border-b border-zinc-100 pb-2"
                >
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
              {[
                ["Hours", "8:00 – 16:00"],
                ["Seating", "Indoor & Outdoor"],
                ["Takeaway", "Available"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-zinc-500">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <button className="mt-auto px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm hover:bg-emerald-500 transition">
              Try today’s special
            </button>
          </aside>
        </section>

        {/* Gallery */}
        <section id="space" className="grid grid-cols-3 gap-4 mb-20">
          {["cafe1", "cafe2", "cafe3"].map((img) => (
            <div
              key={img}
              className="relative h-40 rounded-2xl overflow-hidden"
            >
              <Image
                src={`/images/${img}.jpg`}
                alt="Cafe"
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
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
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-zinc-900/10 outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-zinc-900/10 outline-none"
            />
            <textarea
              required
              rows={3}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-zinc-900/10 outline-none"
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
                disabled={status === "sending"}
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm hover:bg-zinc-800 disabled:opacity-60 transition"
              >
                {status === "sending" ? "Sending..." : "Send message"}
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
