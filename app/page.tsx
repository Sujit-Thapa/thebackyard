import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-4xl font-bold mb-4 text-green-900">
        Welcome to The Backyard Café
      </h1>
      <p className="text-lg text-green-800 mb-8 text-center max-w-xl">
        Relax, unwind, and enjoy fresh coffee and homemade treats in our cozy
        garden-inspired café.
      </p>
      <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
        View Menu
      </button>
    </div>
  );
};

export default page;
