import React from "react";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[calc(100vh-74px)]
        min-h-[560px]
        overflow-hidden
        bg-[#FBF0EA]
      "
    >
      {/* =========================
          FLOWER IMAGE
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-0
          z-0
          flex
          h-full
          w-[520px]
          items-center
          justify-end

          sm:w-[570px]
          md:right-[-35px]
          md:w-[620px]
          lg:right-[-40px]
          lg:w-[660px]
          xl:right-[-25px]
          xl:w-[690px]
        "
      >
        <img
          src="/flower1.png"
          alt="Peach and pink flower bouquet"
          className="
            block
            h-full
            w-auto
            max-w-none
            object-contain
            object-right
            select-none
          "
        />
      </div>

      {/* =========================
          SOFT LEFT GRADIENT
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(
            to_right,
            #FBF0EA_0%,
            rgba(251,240,234,0.99)_25%,
            rgba(251,240,234,0.94)_38%,
            rgba(251,240,234,0.65)_52%,
            rgba(251,240,234,0.22)_68%,
            rgba(251,240,234,0)_84%
          )]
        "
      />

      {/* =========================
          SOFT WHITE GLOW
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          z-[1]
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-white/30
          blur-3xl
        "
      />

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-6
            sm:px-8
            md:px-14
            lg:px-16
            xl:px-8
          "
        >
          <div className="max-w-[520px]">

            {/* =========================
                HEADING
            ========================== */}
            <h1
              className="
                font-serif
                font-medium
                text-[44px]
                leading-[1.02]
                tracking-tight
                text-[#4E1626]

                sm:text-[50px]
                md:text-[60px]
                lg:text-[64px]
                xl:text-[68px]
              "
            >
              Flowers make
              <br />

              <em className="italic text-[#6E2438]">
                memories
              </em>
            </h1>

            {/* =========================
                GOLD FLOURISH
            ========================== */}
            <svg
              className="
                mt-2
                h-[14px]
                w-[250px]

                sm:w-[280px]
                md:w-[330px]
              "
              viewBox="0 0 340 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8c40-10 80-10 100 0s70 8 110-2 90-8 126 2"
                stroke="#B98A3E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* =========================
                DESCRIPTION
            ========================== */}
            <p
              className="
                mt-6
                max-w-[430px]
                text-[15.5px]
                leading-[1.7]
                font-light
                text-[#5C5049]

                sm:text-[16px]
                md:text-[16.5px]
              "
            >
              Hand-tied arrangements sourced from small growers,
              delivered same-day in a recyclable wrap. Every bouquet is
              built to say something you can't quite put into words.
            </p>

            {/* =========================
                BUTTONS
            ========================== */}
            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-7
                gap-y-4
              "
            >

              {/* ORDER NOW */}
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-sm
                  bg-[#4E1626]
                  px-7
                  py-3.5

                  text-[14px]
                  font-semibold
                  tracking-wide
                  text-white

                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#6E2438]
                  hover:shadow-md

                  active:translate-y-0
                "
              >
                Order now

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              {/* VIEW LOOKBOOK */}
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  py-2

                  text-[14px]
                  font-medium
                  text-[#2A211E]

                  transition-all
                  duration-300

                  hover:text-[#6E2438]
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8B9B2]

                    transition-all
                    duration-300

                    group-hover:border-[#6E2438]
                    group-hover:bg-[#6E2438]/5
                  "
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                </span>

                View lookbook
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE BOTTOM FADE
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-[2]
          h-16
          bg-gradient-to-t
          from-[#FBF0EA]
          to-transparent
          lg:hidden
        "
      />
    </section>
  );
}