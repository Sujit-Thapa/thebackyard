"use client";
import React, { JSX, useState, useEffect } from "react";

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
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        {/* Top / Hero */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              className="w-9 h-9 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 13c1.2-1 2.8-1 4 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-semibold tracking-tight">
              The Backyard
            </span>
          </div>

          <nav className="text-sm text-gray-600">
            <a className="px-3 py-1 rounded hover:bg-gray-100" href="#menu">
              Menu
            </a>
            <a className="px-3 py-1 rounded hover:bg-gray-100" href="#space">
              Space
            </a>
            <a className="px-3 py-1 rounded hover:bg-gray-100" href="#contact">
              Contact
            </a>
          </nav>
        </header>
        <section
          id="menu"
          className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {/* Menu preview */}
          <div className="md:col-span-2 bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">Menu highlights</h2>
                <p className="mt-1 text-sm text-gray-500 max-w-prose">
                  A concise selection of house favorites — thoughtfully prepared
                  and easy to enjoy.
                </p>
              </div>
              <div className="text-xs text-gray-500">Updated today</div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">House Espresso</div>
                    <div className="text-xs text-gray-500">
                      Rich, balanced, and nutty
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$3.50</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Cappuccino</div>
                    <div className="text-xs text-gray-500">
                      Velvety milk, fine crema
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$4.25</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Seasonal Scone</div>
                    <div className="text-xs text-gray-500">
                      Buttery and flaky
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$3.00</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Matcha Latte</div>
                    <div className="text-xs text-gray-500">
                      Ceremonial-grade matcha
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$4.50</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Iced Brew</div>
                    <div className="text-xs text-gray-500">
                      Slow drip, bright finish
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$3.75</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Almond Croissant</div>
                    <div className="text-xs text-gray-500">
                      Toasted almond filling
                    </div>
                  </div>
                  <div className="text-sm font-semibold">$4.00</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                aria-label="View full menu"
                className="text-sm px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                View full menu
              </button>
              <button
                aria-label="Order online"
                className="text-sm px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
              >
                Order online
              </button>
              <div className="ml-auto text-xs text-gray-500">
                Vegan and gluten-free options available
              </div>
            </div>
          </div>

          {/* Special card / Quick info */}
          <aside className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-gray-100 grid place-items-center text-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 12h18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 3v18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">Special of the day</div>
                <div className="text-xs text-gray-500">
                  Honey latte — lightly sweetened with local honey
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">Opening hours</div>
                <div className="font-medium">8:00 — 16:00</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">Seating</div>
                <div className="font-medium">Indoor & Outdoor</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">Takeaway</div>
                <div className="font-medium">Available</div>
              </div>
            </div>

            <div className="pt-2 mt-auto">
              <button
                className="w-full text-sm px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-500"
                aria-label="Try special"
              >
                Try today's special
              </button>
            </div>
          </aside>
        </section>

        {/* Card */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-medium">
              A calm place for coffee and conversation
            </h1>
            <p className="mt-2 text-sm text-gray-600 max-w-prose">
              Minimal, mindful, and freshly brewed. Stop by for a quiet moment
              or take a cup to go.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                aria-label="View menu"
                className="text-sm px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                View menu
              </button>
              <button
                aria-label="Book a table"
                className="text-sm px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
              >
                Book a table
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-start gap-2">
              <div className="w-10 h-10 rounded-md bg-gray-100 grid place-items-center text-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 8h12v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold">Simple Menu</h3>
              <p className="text-xs text-gray-500">
                Coffee, tea, and a curated selection of pastries.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="w-10 h-10 rounded-md bg-gray-100 grid place-items-center text-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 3v18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12h18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold">Quiet Space</h3>
              <p className="text-xs text-gray-500">
                Plants, soft light, and comfortable seating.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="w-10 h-10 rounded-md bg-gray-100 grid place-items-center text-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 7v10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12h10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold">Local Ingredients</h3>
              <p className="text-xs text-gray-500">
                Thoughtfully sourced and seasonal.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div id="space" className="grid grid-cols-3 gap-3 mb-8">
            <img
              src="/images/cafe1.jpg"
              alt="Cafe interior"
              className="col-span-1 h-24 w-full object-cover rounded-md filter grayscale"
            />
            <img
              src="/images/cafe2.jpg"
              alt="Coffee and treats"
              className="col-span-1 h-24 w-full object-cover rounded-md filter grayscale"
            />
            <img
              src="/images/cafe3.jpg"
              alt="Garden seating"
              className="col-span-1 h-24 w-full object-cover rounded-md filter grayscale"
            />
          </div>

          {/* Contact */}
          <div id="contact" className="border-t border-gray-100 pt-6">
            <h2 className="text-sm font-medium mb-3">Contact</h2>
            <form className="grid gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                aria-label="Your name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                aria-label="Your email"
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                rows={3}
                aria-label="Your message"
                required
              />
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="accent-gray-900"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                  aria-label="Agree to privacy policy"
                />
                I agree to the privacy policy
              </label>

              <div className="flex items-center justify-between mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800"
                  aria-label="Send message"
                >
                  Send
                </button>
                <div className="text-xs text-gray-500">
                  {status === "sent"
                    ? "Message sent ✓"
                    : "We reply within 24 hours"}
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} The Backyard — Minimal café experience
        </footer>
      </div>
    </main>
  );
}
