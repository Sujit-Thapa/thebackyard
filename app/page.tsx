"use client";
import React, { useState } from "react";

export default function Page(): JSX.Element {
  const [nwq, setNwq] = useState("");
  React.useEffect(() => {
    if (nwq.trim()) console.log("nwq:", nwq);
  }, [nwq]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real submit logic (API call, validation, etc.)
    console.log({ name, email, message, agree });
    alert("Thanks! Your message has been submitted.");
    setName("");
    setEmail("");
    setMessage("");
    setAgree(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-200 px-4">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-16">
        <h1 className="text-5xl font-extrabold mb-4 text-green-900 drop-shadow-lg">
          Welcome to The Backyard Café
        </h1>
        <p className="text-xl text-green-800 mb-8 text-center max-w-2xl">
          Relax, unwind, and enjoy fresh coffee and homemade treats in our cozy
          garden-inspired café.
        </p>
        <button
          aria-label="View menu"
          className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition font-semibold text-lg"
        >
          View Menu
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-2" aria-hidden>
            ☕
          </span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Fresh Coffee
          </h2>
          <p className="text-green-700 text-center">
            Sourced locally and brewed to perfection, every cup is a delight.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-2" aria-hidden>
            🍰
          </span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Homemade Treats
          </h2>
          <p className="text-green-700 text-center mb-4">
            Enjoy our daily selection of cakes, pastries, and healthy snacks.
          </p>
          <button
            type="button"
            aria-label="See treats"
            className="px-4 py-2 bg-green-100 text-green-800 rounded-full shadow-sm hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 text-sm"
          >
            See Treats
          </button>
        </div>

        <div
          role="article"
          aria-label="Garden Ambience"
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="text-4xl mb-3" aria-hidden>
            🌿
          </span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Garden Ambience
          </h2>
          <p className="text-green-700 text-center mb-4">
            Experience tranquility in our lush, plant-filled café space.
          </p>
          <button
            type="button"
            aria-label="Learn more about ambience"
            className="px-4 py-2 bg-green-100 text-green-800 rounded-full shadow-sm hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 text-sm"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-4xl py-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
          Our Space
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="/images/cafe1.jpg"
            alt="Cafe interior"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/images/cafe2.jpg"
            alt="Coffee and treats"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src="/images/cafe3.jpg"
            alt="Garden seating"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl py-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Get in Touch</h2>
        <p className="text-green-700 mb-6 text-center">
          Have questions or want to book a table? Reach out to us!
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Your name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Your email"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={3}
            aria-label="Your message"
            required
          />
          <label className="flex items-center gap-2 text-green-800">
            <input
              type="checkbox"
              className="accent-green-600"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
              aria-label="Agree to privacy policy"
            />
            I agree to the privacy policy
          </label>
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition font-semibold text-lg"
            aria-label="Send message"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
