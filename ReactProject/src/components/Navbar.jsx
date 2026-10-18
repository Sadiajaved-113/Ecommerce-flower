
import React from "react";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without jumping
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 bg-white">

      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleSmoothScroll(e, "#home")}
        className="flex items-center gap-2 font-serif text-2xl font-semibold text-[#4E1626] tracking-wide"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M12 3c1.8 1.6 2.8 3.4 2.8 5.2 0 1.6-1.2 2.8-2.8 2.8s-2.8-1.2-2.8-2.8C9.2 6.4 10.2 4.6 12 3z" />
          <path d="M12 21c-1.8-1.6-2.8-3.4-2.8-5.2 0-1.6 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c0 1.8-1 3.6-2.8 5.2z" />
          <path d="M3 12c1.6-1.8 3.4-2.8 5.2-2.8 1.6 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8C6.4 14.8 4.6 13.8 3 12z" />
          <path d="M21 12c-1.6 1.8-3.4 2.8-5.2 2.8-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.8 0 3.6 1 5.2 2.8z" />
        </svg>

        Bloomsworth
      </a>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-sm font-medium tracking-wide pb-1 border-b-2 transition-all duration-300 ${
                link.active
                  ? "border-[#B98A3E] text-[#2A211E] opacity-100"
                  : "border-transparent text-[#2A211E] opacity-80 hover:opacity-100 hover:border-[#B98A3E]"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Wishlist"
          className="w-9 h-9 rounded-full bg-[#FBF0EA] hover:bg-[#F3E2D8] flex items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4E1626"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>

        {/* Cart */}
        <button
          type="button"
          aria-label="Shopping cart"
          className="relative w-9 h-9 rounded-full bg-[#FBF0EA] hover:bg-[#F3E2D8] flex items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4E1626"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>

          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#6E2438] text-white text-[9px] font-semibold flex items-center justify-center">
            2
          </span>
        </button>

        {/* Account */}
        <button
          type="button"
          aria-label="My account"
          className="w-9 h-9 rounded-full bg-[#FBF0EA] hover:bg-[#F3E2D8] flex items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4E1626"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>

      </div>
    </nav>
  );
}
