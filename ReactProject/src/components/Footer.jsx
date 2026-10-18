
import React from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Shop by Occasion", href: "#occasions" },
  { label: "Customer Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

const supportLinks = [
  { label: "FAQs", href: "/faq" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Care Guide", href: "/care-guide" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

function FooterIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function SocialIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (type === "pinterest") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 15-1 5M11 13c.5 1 1.5 1.5 2.5 1.5 2.5 0 4-2.5 4-5 0-2-1.5-4-4.5-4s-5 2-5 4.5c0 1.5.5 2.5 1.5 3" />
        <path d="m11 13 1-4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FBF0EA] text-[#6C554B]">

      {/* Decorative botanical accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#F3DCD2]/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#E9EEDC]/60 blur-3xl"
      />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-16 sm:px-10 sm:pb-14 sm:pt-20 lg:px-12 lg:pt-24">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:gap-10">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Bloomsworth home"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="h-9 w-9 text-[#B98A3E]"
                aria-hidden="true"
              >
                <path
                  d="M16 28V13M16 19C8 19 5 13 5 8c7 0 11 5 11 11ZM16 14C24 14 27 8 27 3c-7 0-11 5-11 11ZM16 9C11 7 11 3 16 1c5 2 5 6 0 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-serif text-3xl font-semibold tracking-tight text-[#4E1626] sm:text-[34px]">
                Bloomsworth
              </span>
            </a>

            <div className="mt-3 flex items-center gap-3 pl-1">
              <span className="h-px w-8 bg-[#B98A3E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#87664D]">
                Flowers & Gifts
              </span>
              <span className="h-px w-8 bg-[#B98A3E]" />
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#75645C]">
              Beautiful flowers for every occasion.
              Thoughtfully curated, always fresh, and
              delivered with care.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { type: "facebook", label: "Facebook", href: "#" },
                { type: "instagram", label: "Instagram", href: "#" },
                { type: "pinterest", label: "Pinterest", href: "#" },
                { type: "youtube", label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.type}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F0D9D0] bg-[#F7DED5] text-[#4E1626] transition-all duration-300 hover:-translate-y-1 hover:border-[#B98A3E] hover:bg-[#4E1626] hover:text-white"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#4E1626] sm:text-2xl">
              Quick Links
            </h3>

            <div className="mb-5 mt-4 h-px w-12 bg-[#B98A3E]" />

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#8E4054]"
                  >
                    <span className="h-px w-0 bg-[#B98A3E] transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#4E1626] sm:text-2xl">
              Help & Support
            </h3>

            <div className="mb-5 mt-4 h-px w-12 bg-[#B98A3E]" />

            <ul className="space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#8E4054]"
                  >
                    <span className="h-px w-0 bg-[#B98A3E] transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#4E1626] sm:text-2xl">
              Contact Us
            </h3>

            <div className="mb-6 mt-4 h-px w-12 bg-[#B98A3E]" />

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DED5] text-[#6E2438]">
                  <FooterIcon type="email" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h4 className="font-serif text-base font-semibold text-[#4E1626]">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@bloomsworth.com"
                    className="mt-1 block break-words text-sm transition-colors hover:text-[#8E4054]"
                  >
                    hello@bloomsworth.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DED5] text-[#6E2438]">
                  <FooterIcon type="phone" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h4 className="font-serif text-base font-semibold text-[#4E1626]">
                    Call Us
                  </h4>
                  <p className="mt-1 text-sm leading-6">
                    Add your phone number
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DED5] text-[#6E2438]">
                  <FooterIcon type="location" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h4 className="font-serif text-base font-semibold text-[#4E1626]">
                    Our Location
                  </h4>
                  <p className="mt-1 text-sm leading-6">
                    Add your store address here
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DED5] text-[#6E2438]">
                  <FooterIcon type="hours" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h4 className="font-serif text-base font-semibold text-[#4E1626]">
                    Opening Hours
                  </h4>
                  <p className="mt-1 text-sm leading-6">
                    Add your store opening hours here
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative bg-[#4E1626] px-6 py-6 text-white sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 sm:flex-row">

          <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:justify-start">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="h-8 w-8 text-[#D6B16D]"
              aria-hidden="true"
            >
              <path
                d="M16 28V13M16 19C8 19 5 13 5 8c7 0 11 5 11 11ZM16 14C24 14 27 8 27 3c-7 0-11 5-11 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-xs text-white/85 sm:text-sm">
              © {new Date().getFullYear()} Bloomsworth.
              All rights reserved.
            </p>
          </div>

          <p className="font-serif text-base italic text-[#F7DED5] sm:text-lg">
            Flowers make life more beautiful
            <span className="ml-2 text-xl not-italic text-[#D6B16D]">
              ♡
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
