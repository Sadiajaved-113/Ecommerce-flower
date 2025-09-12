import { useState } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  MessageSquare,
  User,
  ChevronDown,
} from "lucide-react";
import React from "react";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [category, setCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = [ "Dell", "HP", "Lenovo", "Acer", "Asus", "Macbook"];

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="bg-black text-white flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-14 object-contain ml-20" />

        {/* Search bar */}
        <div className="flex mx-4 w-[600px] relative">
          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-l w-[80px] justify-between"
            >
              <span>{category}</span>
              <ChevronDown size={16} className="text-black" />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md w-[150px] z-50">
                {options.map((opt) => (
                  <li
                    key={opt}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => {
                      setCategory(opt);
                      setIsOpen(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search laptop"
            className="flex-1 px-3 py-2 border-t border-b border-gray-300 focus:outline-none text-black"
          />

          {/* Search button */}
          <button className="bg-orange-500 px-3 flex items-center justify-center rounded-r">
            <Search className="text-white" size={20} />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <User size={18} />
            <span className="text-sm mr-20">
              Hello,
              <br/>
               <span className="font-semibold">Signin/Register</span>
            </span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer mr-10">
            <ShoppingCart size={20} />
            <span className="text-sm">Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#1c2c3d] text-white flex items-center px-4 py-2 text-sm">
        <button className="flex items-center gap-1 mr-6">
          <Menu size={20} />
          <span>All</span>
        </button>
        <div className="flex gap-6 flex-1">
          <span className="cursor-pointer">Today's Deals</span>
          <span className="cursor-pointer">Customer Services</span>
          <span className="cursor-pointer">Return & Order</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart size={18} />
            <span>Wishlist</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MessageSquare size={18} />
            <span>Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
