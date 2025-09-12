import { ThumbsUp } from "lucide-react";
import React from "react";
import Laptop from "../assets/background.jpg"; // replace with your background image

export default function Home() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${Laptop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Laptop Recommender
        </h1>
        <p className="text-sm md:text-xl mb-8">
          Find the perfect laptop based on your budget, brand preference, and usage.Our smart filters
          quickly show the best options for gamers,students, and professionals.
        
        </p>
        <button className="flex items-center ml-60 gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
          <ThumbsUp size={20} /> Recommended
        </button>
      </div>
    </div>
  );
}
