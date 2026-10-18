
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FBF5F0]
        px-6
        py-16
        sm:px-8
        sm:py-20
        md:px-10
        md:py-24
        lg:px-12
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1300px]
          grid-cols-1
          items-center
          gap-10
          md:gap-12
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-12
        "
      >
        {/* LEFT: ABOUT CONTENT */}
        <div className="order-2 min-w-0 lg:order-1">
          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#B98A3E]
              sm:text-sm
            "
          >
            Our Story
          </p>

          <h2
            className="
              max-w-[520px]
              font-serif
              text-[42px]
              font-medium
              leading-[1.08]
              tracking-tight
              text-[#4E1626]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[62px]
            "
          >
            Flowers,
            <br />

            <em className="font-normal text-[#8E4054]">
              thoughtfully
            </em>

            <br />

            chosen.
          </h2>

          {/* Gold Decorative Line */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-16 bg-[#B98A3E] sm:w-20" />

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-[#B98A3E]"
              aria-hidden="true"
            >
              <path
                d="M12 3c1.4 3.8 3.2 5.6 7 7-3.8 1.4-5.6 3.2-7 7-1.4-3.8-3.2-5.6-7-7 3.8-1.4 5.6-3.2 7-7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <span className="h-px w-16 bg-[#B98A3E] sm:w-20" />
          </div>

          {/* Description */}
          <div
            className="
              mt-7
              max-w-[490px]
              space-y-4
              text-[15px]
              font-light
              leading-[1.9]
              text-[#75645C]
              sm:text-base
            "
          >
            <p>
              At Bloomsworth, we believe flowers are more
              than just gifts — they’re a way to express what
              words sometimes can’t. Our hand-tied bouquets
              are crafted with care, using fresh, seasonal
              blooms from trusted small growers.
            </p>

            <p>
              We’re passionate about creating beautiful
              arrangements for life’s meaningful moments,
              while also making thoughtful choices for a
              more sustainable tomorrow.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/about"
            className="
              group
              mt-8
              inline-flex
              min-h-[54px]
              items-center
              gap-3
              bg-[#4E1626]
              px-7
              py-4
              text-sm
              font-medium
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#6E2438]
              hover:shadow-lg
              sm:px-9
            "
          >
            Discover our story

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* RIGHT: LARGER FLOWER IMAGE */}
        <div className="order-1 flex min-w-0 items-center lg:order-2">
          <div
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-xl
              bg-[#F8E3DB]
              shadow-[0_12px_35px_rgba(78,22,38,0.07)]
            "
          >
            <img
              src="/about-flowers.png"
              alt="A hand-tied bouquet of blush pink and cream flowers wrapped with a soft burgundy ribbon"
              className="
                block
                h-auto
                w-full
                object-contain
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.02]
              "
            />

            {/* Subtle image overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#4E1626]/10
                via-transparent
                to-white/5
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
