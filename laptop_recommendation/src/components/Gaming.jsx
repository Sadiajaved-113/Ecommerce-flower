import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hp from "../assets/Hp.jpg"; // example local image

const products = [
  {
    id: 1,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 2,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 3,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 4,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 5,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 6,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 7,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  {
    id: 8,
    name: "HP 15s DU2126TU",
    price: "Rs. 83,000.00",
    image: Hp,
  },
  
  
  
];

export default function Gaming() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-10 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Gaming Laptops</h2>
        <a href="#" className="text-orange-500 hover:underline text-sm">
          See More
        </a>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-60 bg-white rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="font-medium text-center">{product.name}</h3>
              <p className="text-gray-700 text-center">{product.price}</p>
              <a
                href="#"
                className="text-blue-600 text-sm mt-2 block text-center"
              >
                see more inf..
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
