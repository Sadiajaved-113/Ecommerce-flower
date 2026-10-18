
import React from "react";

const contactDetails = [
  {
    title: "Email Us",
    detail: "hello@bloomsworth.com",
    icon: "mail",
  },
  {
    title: "Call Us",
    detail: "+61 2 1234 5678",
    icon: "phone",
  },
  {
    title: "Our Location",
    detail: "123 Flower Lane, Sydney, NSW 2000, Australia",
    icon: "location",
  },
  {
    title: "Opening Hours",
    detail: "Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 4:00 PM\nSun: Closed",
    icon: "clock",
  },
];

const benefits = [
  {
    title: "Fresh Flowers",
    subtitle: "Always handpicked",
    icon: "flower",
  },
  {
    title: "Secure Payments",
    subtitle: "Shop with confidence",
    icon: "shield",
  },
  {
    title: "Fast & Reliable Delivery",
    subtitle: "Across Australia",
    icon: "truck",
  },
  {
    title: "Dedicated Support",
    subtitle: "We're here for you",
    icon: "heart",
  },
];

function ContactIcon({ type, className = "h-6 w-6" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M6.6 3.5 9.4 7l-1.8 2a15 15 0 0 0 7.4 7.4l2-1.8 3.5 2.8-.7 3a2 2 0 0 1-2.2 1.4A18.5 18.5 0 0 1 3.2 7.4a2 2 0 0 1 1.4-2.2l2-.7Z" />
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    flower: (
      <>
        <path d="M12 12c-4-1-5-5-2-7 2-1 4 1 4 3 3-3 6-1 5 2-1 2-3 3-7 2Z" />
        <path d="M12 12c-3-4-7-2-6 1 1 3 4 3 6 1-1 4 2 6 4 4 2-2 0-5-4-6Z" />
        <path d="M12 12v9M8 21h8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    truck: (
      <>
        <path d="M2 5h12v12H2zM14 9h5l3 4v4h-8z" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...common}
    >
      {paths[type]}
    </svg>
  );
}

function FloralDivider() {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-[#B98A3E] sm:w-24" />

      <ContactIcon
        type="flower"
        className="h-6 w-6 text-[#B98A3E]"
      />

      <span className="h-px w-16 bg-[#B98A3E] sm:w-24" />
    </div>
  );
}

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Bloomsworth enquiry: ${data.get("subject")}`
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n\n` +
      `Message:\n${data.get("message")}`
    );

    window.location.href =
      `mailto:hello@bloomsworth.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="
        relative isolate overflow-hidden
        bg-[#FBF0EA]
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-12 lg:py-24
      "
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-24 -top-24 -z-10
          h-72 w-72 rounded-full bg-[#F3DCD2]/70 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-24 -right-24 -z-10
          h-80 w-80 rounded-full bg-[#EED8C8]/70 blur-3xl
        "
      />

      <div className="mx-auto max-w-[1350px]">

        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="
            text-xs font-semibold uppercase tracking-[0.3em]
            text-[#B98A3E] sm:text-sm
          ">
            Get in Touch
          </p>

          <h2 className="
            mt-3 font-serif font-medium tracking-tight
            text-[#4E1626]
            text-[36px] leading-tight
            sm:text-[46px] md:text-[54px]
          ">
            We're Here to Help
          </h2>

          <FloralDivider />

          <p className="
            mx-auto mt-5 max-w-xl
            text-sm font-light leading-7 text-[#75645C]
            sm:text-base
          ">
            Have a question about a bouquet or need help
            choosing the perfect flowers? We'd love to hear
            from you.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="
          grid grid-cols-1 gap-6
          lg:grid-cols-[1.02fr_0.98fr]
          lg:gap-7
        ">

          {/* LEFT: Bouquet and contact details */}
          <div className="
            grid grid-cols-1 overflow-hidden rounded-2xl
            border border-[#EED8CE]
            bg-[#FFFCFA]/75
            sm:grid-cols-[0.9fr_1.1fr]
          ">

            {/* Bouquet image */}
            <div className="
              relative min-h-[300px] overflow-hidden
              bg-[#F6E2D9]
              sm:min-h-full
            ">
              <img
                src="/about-flowers.png"
                alt="Beautiful hand-tied pink and cream flower bouquet"
                className="
                  absolute inset-0 h-full w-full
                  object-cover object-center
                "
              />

              <div className="
                pointer-events-none absolute inset-0
                bg-gradient-to-t from-[#4E1626]/15
                via-transparent to-white/10
              " />
            </div>

            {/* Contact information */}
            <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
              <p className="
                text-xs font-semibold uppercase
                tracking-[0.25em] text-[#B98A3E]
              ">
                Contact Us
              </p>

              <h3 className="
                mt-3 font-serif text-3xl leading-tight
                text-[#4E1626]
              ">
                Let's make something beautiful.
              </h3>

              <div className="mt-4 h-px w-14 bg-[#B98A3E]" />

              <div className="mt-6 space-y-6">
                {contactDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5"
                  >
                    <div className="
                      flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-full
                      bg-[#F7E1DA] text-[#6E2438]
                    ">
                      <ContactIcon type={item.icon} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h4 className="
                        font-serif text-lg font-medium
                        text-[#4E1626]
                      ">
                        {item.title}
                      </h4>

                      <p className="
                        mt-1 whitespace-pre-line break-words
                        text-sm leading-6 text-[#806D64]
                      ">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="
            rounded-2xl border border-[#EED8CE]
            bg-[#FFFCFA]/80 p-6
            sm:p-8 lg:p-10
          ">
            <p className="
              text-xs font-semibold uppercase
              tracking-[0.25em] text-[#B98A3E]
            ">
              Send Us a Message
            </p>

            <h3 className="
              mt-3 font-serif text-3xl leading-tight
              text-[#4E1626] sm:text-[34px]
            ">
              We'd love to hear from you
            </h3>

            <p className="
              mt-3 text-sm leading-6 text-[#806D64]
            ">
              Fill in the form below and we'll get back
              to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">

              {/* Name and email */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name *"
                    autoComplete="name"
                    required
                    className="
                      w-full rounded-lg border border-[#E7CFC4]
                      bg-transparent px-4 py-3.5
                      text-sm text-[#4E1626]
                      outline-none transition
                      placeholder:text-[#927D72]
                      focus:border-[#9B4054]
                      focus:ring-2 focus:ring-[#9B4054]/10
                    "
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Your email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address *"
                    autoComplete="email"
                    required
                    className="
                      w-full rounded-lg border border-[#E7CFC4]
                      bg-transparent px-4 py-3.5
                      text-sm text-[#4E1626]
                      outline-none transition
                      placeholder:text-[#927D72]
                      focus:border-[#9B4054]
                      focus:ring-2 focus:ring-[#9B4054]/10
                    "
                  />
                </label>
              </div>

              {/* Subject */}
              <label className="block">
                <span className="sr-only">Subject</span>
                <select
                  name="subject"
                  defaultValue=""
                  required
                  className="
                    w-full rounded-lg border border-[#E7CFC4]
                    bg-[#FFFCFA] px-4 py-3.5
                    text-sm text-[#806D64]
                    outline-none transition
                    focus:border-[#9B4054]
                    focus:ring-2 focus:ring-[#9B4054]/10
                  "
                >
                  <option value="" disabled>
                    Select a subject *
                  </option>
                  <option value="Bouquet enquiry">
                    Bouquet enquiry
                  </option>
                  <option value="Order and delivery">
                    Order and delivery
                  </option>
                  <option value="Custom arrangement">
                    Custom arrangement
                  </option>
                  <option value="Returns or issue">
                    Returns or issue
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </label>

              {/* Message */}
              <label className="block">
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help... *"
                  required
                  className="
                    w-full resize-y rounded-lg
                    border border-[#E7CFC4]
                    bg-transparent px-4 py-3.5
                    text-sm leading-6 text-[#4E1626]
                    outline-none transition
                    placeholder:text-[#927D72]
                    focus:border-[#9B4054]
                    focus:ring-2 focus:ring-[#9B4054]/10
                  "
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="
                  group flex w-full items-center
                  justify-center gap-3 rounded-lg
                  bg-[#4E1626] px-6 py-4
                  text-sm font-semibold tracking-wide
                  text-white transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#6E2438]
                  hover:shadow-lg
                  focus:outline-none focus:ring-2
                  focus:ring-[#9B4054] focus:ring-offset-2
                "
              >
                Send Message

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    h-4 w-4 transition-transform
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </form>

            {/* Decorative footer */}
            <FloralDivider />

            <p className="
              mt-4 text-center font-serif
              text-sm italic text-[#7C3549]
              sm:text-base
            ">
              Every bouquet begins with a little thoughtfulness.
            </p>
          </div>
        </div>

        {/* Benefits row */}
        <div className="
          mt-12 grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:mt-16 lg:grid-cols-4 lg:gap-4
        ">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`
                flex items-center justify-center gap-4
                ${index !== 0 ? "lg:border-l lg:border-[#E6C8BA]" : ""}
                lg:px-4
              `}
            >
              <div className="shrink-0 text-[#6E2438]">
                <ContactIcon
                  type={benefit.icon}
                  className="h-9 w-9"
                />
              </div>

              <div>
                <h4 className="
                  font-serif text-base font-medium
                  text-[#4E1626]
                ">
                  {benefit.title}
                </h4>

                <p className="mt-1 text-xs text-[#8A7971]">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
