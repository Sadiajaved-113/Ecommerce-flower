import React from "react";

export default function About() {
  return (
    <section className="py-16 px-6 text-center bg-white mt-15">
      <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">
        About Us
      </h3>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Laptop Recommendations Made Easy
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-6">
        Choosing the right laptop can be overwhelming with so many options available. 
        Our Laptop Recommendation System simplifies the process by suggesting the best 
        laptops based on your budget, preferred brand, and usage needs. Whether you're 
        a student, gamer, or professional, we help you make an informed choice quickly 
        and confidently.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
        Read more
      </button>
    </section>
  );
}
