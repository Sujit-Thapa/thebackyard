"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

const menuSections = [
  {
    title: "Espresso drinks",
    items: [
      { name: "House Espresso", desc: "Single or double shot", price: "$3.50" },
      { name: "Cappuccino", desc: "Perfectly balanced milk and espresso", price: "$4.25" },
      { name: "Flat White", desc: "Velvety microfoam", price: "$4.50" },
      { name: "Cortado", desc: "1:1 espresso and steamed milk", price: "$3.75" },
    ],
  },
  {
    title: "Pastries & more",


const highlights = [
  { title: "Specialty roasts", text: "Coffee sourced with care from small-batch roasters." },
  { title: "Quiet workspace", text: "A calm environment for remote work, reading, and downtime." },
  { title: "Fresh bakes", text: "Every pastry is prepared in-house and served warm." },
  { title: "Neighborhood feel", text: "The kind of place that makes you want to stay a little longer." },
];

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
    <div id="top" className="flex min-h-screen flex-col bg-stone-50 text-gray-900">
      <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-gray-900 text-lg">
              ☕
            </div>
            <span className="text-lg font-medium tracking-[0.2em] text-gray-900">
              THE BACKYARD
            </span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-600 md:flex">
            {[
              { name: "Home", href: "#top" },
              { name: "About", href: "#about" },
              { name: "Menu", href: "#menu" },
              { name: "Visit", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="transition hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm transition hover:bg-gray-50 md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
              {[
                { name: "Home", href: "#top" },
                { name: "About", href: "#about" },
                { name: "Menu", href: "#menu" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 transition hover:text-gray-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(249,245,237,0.95))]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-700">
                Slow mornings, warm afternoons
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                The Backyard Café
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                A calm neighborhood café for exceptional coffee, handcrafted pastries, and a little more breathing room in your day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Visit us today
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Explore the menu
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Freshly roasted", value: "Every morning" },
                { label: "Open daily", value: "7am - 6pm" },
                { label: "Neighborhood favorite", value: "Since 2021" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-1 font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                A calm corner for coffee, conversation, and focus.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                We built The Backyard to feel like an exhale in the middle of a busy day. Thoughtful coffee, warm pastries, and a space that invites you to slow down.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-stone-100 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Today’s promise</p>
                <p className="mt-3 text-xl font-semibold text-gray-900">
                  Freshly brewed coffee, beautifully prepared food, and a peaceful place to stay awhile.
                </p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p>• Open every day from 7:00 AM to 6:00 PM</p>
                <p>• Free Wi-Fi for guests working remotely</p>
                <p>• Quiet evenings with soft playlists and warm lighting</p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">Menu highlights</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  A curated selection of comfort and craft.
                </h2>
              </div>
              <a href="#contact" className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
                Reserve a seat →
              </a>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {menuSections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-gray-200 bg-stone-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  <div className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                        </div>
                        <p className="font-semibold text-gray-900">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="space" className="bg-stone-100 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">Our space</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Designed for relaxed focus and easy conversation.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { icon: "🪑", title: "Comfortable seating", desc: "Soft chairs and long tables for lingering in comfort." },
                { icon: "📶", title: "Fast WiFi", desc: "Reliable connection for remote work or a quick catch-up." },
                { icon: "🤫", title: "Quiet atmosphere", desc: "Thoughtfully paced music and warm lighting all day long." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl">{feature.icon}</p>
                  <h3 className="mt-3 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">Hours</h3>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Monday – Friday</p>
                <p className="font-medium text-gray-900">7:00 AM – 6:00 PM</p>
                <p className="mt-3">Saturday – Sunday</p>
                <p className="font-medium text-gray-900">8:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">Location</h3>
              <div className="mt-4 space-y-2 text-gray-600">
                <p className="font-medium text-gray-900">123 Backyard Lane</p>
                <p>Downtown District</p>
                <p>Easy to reach on foot or by bike</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.35em] text-gray-500">Contact</h3>
              <div className="mt-4 space-y-2 text-gray-600">
                <p className="font-medium text-gray-900">(555) 123-4567</p>
                <p>hello@thebackyard.cafe</p>
                <p>Reserve a seat in advance</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Stay updated</h2>
            <p className="mt-4 text-gray-300">
              Receive news about seasonal menu items, special events, and early access offers.
            </p>

            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                required
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 outline-none ring-0 transition focus:border-white"
              />
              <button
                disabled={status === "sending"}
                type="submit"
                className="rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Subscribe"}
              </button>
            </form>

            {status === "sent" && <p className="mt-3 text-sm text-green-300">✓ Thanks for subscribing!</p>}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
