import React from "react";

const page = () => {
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
        <button className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition font-semibold text-lg">
          View Menu
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">☕</span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Fresh Coffee
          </h2>
          <p className="text-green-700 text-center">
            Sourced locally and brewed to perfection, every cup is a delight.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🍰</span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Homemade Treats
          </h2>
          <p className="text-green-700 text-center">
            Enjoy our daily selection of cakes, pastries, and healthy snacks.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🌿</span>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Garden Ambience
          </h2>
          <p className="text-green-700 text-center">
            Experience tranquility in our lush, plant-filled café space.
          </p>
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
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={3}
          />
          <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition font-semibold">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-green-800">
        © {new Date().getFullYear()} The Backyard Café. All rights reserved.
      </footer>
    </div>
  );
};

export default page;
