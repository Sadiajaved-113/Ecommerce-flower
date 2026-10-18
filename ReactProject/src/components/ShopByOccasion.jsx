import React from "react";

const occasions = [
  {
    title: "Birthday",
    description: "Make their day extra special",
    image: "/birthday.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <rect x="4" y="9" width="16" height="11" rx="1.5" />
        <path d="M4 13h16" />
        <path d="M12 9v11" />
        <path d="M8 9c-1.5 0-2.5-.8-2.5-2S6.5 5 8 5c2 0 4 4 4 4" />
        <path d="M16 9c1.5 0 2.5-.8 2.5-2S17.5 5 16 5c-2 0-4 4-4 4" />
      </svg>
    ),
    accent: "#F9E1DF",
  },

  {
    title: "Anniversary",
    description: "Celebrate your love",
    image: "/anniversary.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <path d="M12 20s-7-4.5-7-9.5C5 7.7 6.8 6 9.1 6c1.4 0 2.4.7 2.9 1.6C12.5 6.7 13.5 6 14.9 6 17.2 6 19 7.7 19 10.5 19 15.5 12 20 12 20Z" />
      </svg>
    ),
    accent: "#F8E3DB",
  },

  {
    title: "Just Because",
    description: "Because every day matters",
    image: "/just-because.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <path d="M12 20V8" />
        <path d="M12 11c-3.5 0-5.5-2-5.5-4.5C9.5 6.5 12 8 12 11Z" />
        <path d="M12 14c3.5 0 5.5-2 5.5-4.5C14.5 9.5 12 11 12 14Z" />
        <path d="M12 8c-2-2.5-1.8-4.5 0-5.5C13.8 3.5 14 5.5 12 8Z" />
      </svg>
    ),
    accent: "#EEF1DE",
  },

  {
    title: "Congratulations",
    description: "Cheer for their success",
    image: "/congratulations.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <path d="M7 3h10v5c0 3.5-2.2 5.8-5 5.8S7 11.5 7 8V3Z" />
        <path d="M7 5H4v1.5C4 10 5.5 12 8 12" />
        <path d="M17 5h3v1.5c0 3.5-1.5 5.5-4 5.5" />
        <path d="M12 13.8V18" />
        <path d="M8 21h8" />
        <path d="M9 18h6" />
      </svg>
    ),
    accent: "#EEE5F1",
  },
];

export default function ShopByOccasion() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFDFC]
        px-6
        py-16

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-20
      "
    >
      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="mx-auto max-w-[1200px]">

        <div className="mb-10 text-center sm:mb-12">

          <h2
            className="
              font-serif
              text-[30px]
              font-medium
              leading-tight
              text-[#4E1626]

              sm:text-[34px]
              md:text-[36px]
            "
          >
            Shop by Occasion
          </h2>

          {/* Gold decorative flourish */}
          <div className="mt-2 flex items-center justify-center gap-3">

            <span
              className="
                h-px
                w-16
                bg-[#B98A3E]

                sm:w-20
              "
            />

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-[#B98A3E]"
            >
              <path
                d="M12 3c1.4 3.8 3.2 5.6 7 7-3.8 1.4-5.6 3.2-7 7-1.4-3.8-3.2-5.6-7-7 3.8-1.4 5.6-3.2 7-7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <span
              className="
                h-px
                w-16
                bg-[#B98A3E]

                sm:w-20
              "
            />

          </div>

          <p
            className="
              mx-auto
              mt-4
              max-w-[500px]
              text-[14px]
              leading-7
              font-light
              text-[#756A64]

              sm:text-[15px]
            "
          >
            Find the perfect flowers for life's special moments.
          </p>

        </div>


        {/* =========================
            OCCASION CARDS
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            sm:gap-6

            lg:grid-cols-4
          "
        >
          {occasions.map((occasion) => (
            <article
              key={occasion.title}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#EADFD9]
                bg-[#FFFDFC]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#DCCBC3]
                hover:shadow-[0_14px_35px_rgba(78,22,38,0.08)]
              "
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className="
                  relative
                  h-[205px]
                  overflow-hidden

                  sm:h-[210px]
                "
                style={{
                  backgroundColor: occasion.accent,
                }}
              >
                <img
                  src={occasion.image}
                  alt={`${occasion.title} flowers`}
                  className="
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-[1.04]
                  "
                />

                {/* Soft image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/5
                  "
                />
              </div>


              {/* =========================
                  ICON
              ========================== */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[178px]
                  z-10
                  flex
                  h-14
                  w-14
                  -translate-x-1/2
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-[#E8DDD7]
                  bg-[#FFFDFC]

                  text-[#6E2438]

                  shadow-[0_3px_12px_rgba(78,22,38,0.08)]

                  transition-all
                  duration-300

                  group-hover:scale-105
                  group-hover:border-[#D8C3BA]
                "
              >
                {occasion.icon}
              </div>


              {/* =========================
                  CARD CONTENT
              ========================== */}
              <div
                className="
                  flex
                  min-h-[150px]
                  flex-col
                  items-center
                  px-5
                  pb-6
                  pt-10
                  text-center
                "
              >

                <h3
                  className="
                    font-serif
                    text-[19px]
                    font-medium
                    text-[#4E1626]
                  "
                >
                  {occasion.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-[13.5px]
                    font-light
                    text-[#756A64]
                  "
                >
                  {occasion.description}
                </p>


                {/* =========================
                    SHOP NOW
                ========================== */}
                <button
                  className="
                    group/link
                    mt-auto
                    inline-flex
                    items-center
                    gap-1.5

                    pt-4

                    text-[13.5px]
                    font-medium
                    text-[#9B4054]

                    transition-colors
                    duration-200

                    hover:text-[#6E2438]
                  "
                >
                  Shop now

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="
                      h-3.5
                      w-3.5

                      transition-transform
                      duration-200

                      group-hover/link:translate-x-1
                    "
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}