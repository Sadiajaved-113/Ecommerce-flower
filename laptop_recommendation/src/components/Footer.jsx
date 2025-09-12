import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Back to top */}
      <div className="bg-gray-700 py-3 text-center text-sm cursor-pointer hover:underline">
        Back to top
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-10 text-sm">
        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-white mb-3 ml-20">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline ml-20">Help Center</a></li>
            <li><a href="#" className="underline ml-20">Track My Order</a></li>
            <li><a href="#" className="underline ml-20">Return a Laptop</a></li>
            <li><a href="#" className="underline ml-20">Feedback</a></li>
            <li><a href="#" className="underline ml-20">Reviews</a></li>
            <li><a href="#" className="underline ml-20">Privacy & Security</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-white mb-3 ml-20">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline ml-20">Who We Are</a></li>
            <li><a href="#" className="underline ml-20">Our Mission</a></li>
            <li><a href="#" className="underline ml-20">Admin</a></li>
            <li><a href="#" className="underline ml-20">Contact Us</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-white mb-3">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline">Login / Register</a></li>
            <li><a href="#" className="underline">My Profile</a></li>
            <li><a href="#" className="underline">Order History</a></li>
            <li><a href="#" className="underline">Saved Addresses</a></li>
            <li><a href="#" className="underline">Wishlist</a></li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div>
          <h3 className="font-semibold text-white mb-3">Tools & Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline">Laptop Recommender Tool</a></li>
            <li><a href="#" className="underline">Compare Laptops</a></li>
            <li><a href="#" className="underline">Deals & Offers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 text-center text-xs text-gray-400">
        <p>© 2025 Laptop Recommender. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Your Privacy Choices</a>
        </div>
      </div>
    </footer>
  );
}
