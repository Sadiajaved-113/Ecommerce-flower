
import React from "react";

const reviews = [
  {
    id: 1,
    image: "/review1.png",
    name: "Emma Rachel",
    role: "Happy Customer",
    initial: "E",
    rating: 5,
    review:
      "The bouquet was absolutely beautiful! Fresh flowers, elegant wrapping and a lovely presentation. It made the occasion feel extra special.",
  },
  {
    id: 2,
    name: "Sophie Williams",
    role: "Happy Customer",
    initial: "S",
    rating: 4.5,
    image: "/reviews2.jpeg",
    review:
      "Such a gorgeous arrangement! The colours were soft and elegant, and the flowers looked wonderful. I would happily order again.",
  },
  {
    id: 3,
    name: "Olivia Martin",
    role: "Happy Customer",
    initial: "O",
    rating: 5,
    image: "/review3.jpeg",
    review:
      "I ordered a bouquet for my mum and she absolutely loved it. Everything looked thoughtful, fresh and beautifully put together.",
  },
  {
    id: 4,
    name: "Charlotte Brown",
    role: "Happy Customer",
    initial: "C",
    rating: 4,
    image: "/review4.jpeg",
    review:
      "Beautiful flowers and lovely presentation. The bouquet was a thoughtful gift and brought a big smile to someone's face.",
  },
  {
    id: 5,
    name: "Amelia Wilson",
    role: "Happy Customer",
    initial: "A",
    rating: 5,
    image: "/review5.jpeg",
    review:
      "The arrangement was elegant and full of lovely details. I really liked the colour combination and the beautiful wrapping.",
  },
  {
    id: 6,
    name: "Isabella Taylor",
    role: "Happy Customer",
    initial: "I",
    rating: 4.5,
    image: "/review6.jpeg",
    review:
      "A lovely experience from choosing the bouquet to gifting it. The flowers made the celebration feel even more memorable.",
  },
];

function StarRating({ rating }) {
  return (
    <div
      className="mt-4 flex items-center gap-1.5"
      aria-label={`${rating} out of 5 stars`}
    >
      <span className="mr-1 font-serif text-3xl text-[#B98A3E]">
        {rating.toFixed(1)}
      </span>

      <div className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill =
            rating >= star
              ? "100%"
              : rating >= star - 0.5
              ? "50%"
              : "0%";

          return (
            <span
              key={star}
              className="relative text-[27px] leading-none text-[#D9C6AD]"
            >
              ★
              <span
                className="absolute inset-y-0 left-0 overflow-hidden text-[#B98A3E]"
                style={{ width: fill }}
              >
                ★
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section
      id="reviews"
      className="
        relative isolate overflow-hidden
        bg-[#FBF0EA]
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-12 lg:py-24
      "
    >
      {/* Soft decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-24 -top-20 -z-10
          h-72 w-72 rounded-full bg-[#F3DCD2]/60 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-24 -right-20 -z-10
          h-80 w-80 rounded-full bg-[#EED8C8]/60 blur-3xl
        "
      />

      <div className="mx-auto max-w-[1250px]">

        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p
            className="
              mb-3 text-xs font-semibold uppercase
              tracking-[0.3em] text-[#B98A3E]
              sm:text-sm
            "
          >
            Kind Words
          </p>

          <h2
            className="
              font-serif font-medium tracking-tight
              text-[#4E1626]
              text-[34px] leading-tight
              sm:text-[43px]
              md:text-[50px]
            "
          >
            Loved by Our Customers
          </h2>

          {/* Gold floral divider */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#B98A3E] sm:w-20" />

            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="h-6 w-6 text-[#B98A3E]"
              aria-hidden="true"
            >
              <path
                d="M16 27V7M16 17C9 17 6 12 6 7c6 0 10 4 10 10ZM16 13c7 0 10-5 10-10-6 0-10 4-10 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="h-px w-14 bg-[#B98A3E] sm:w-20" />
          </div>

          <p
            className="
              mx-auto mt-5 max-w-xl
              text-sm font-light leading-7
              text-[#75645C] sm:text-base
            "
          >
            Every bouquet tells a story. Discover what makes
            our flowers special through the experiences of
            our customers.
          </p>
        </div>

        {/* Six review cards */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-3
          "
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="
                group flex h-full flex-col
                rounded-2xl border border-[#EBCFC5]
                bg-[#FFFCFA]/90 p-6
                shadow-[0_8px_28px_rgba(78,22,38,0.04)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#D8B7A9]
                hover:shadow-[0_16px_36px_rgba(78,22,38,0.09)]
                sm:p-7
              "
            >
              {/* Customer image — added */}
              <div
                className="
                  h-16 w-16 shrink-0 overflow-hidden
                  rounded-full border border-[#E8C9BD]
                  bg-[#F3DCD2]
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Review text */}
              <p
                className="
                  mt-5 flex-1
                  font-serif text-lg leading-[1.7]
                  text-[#4E1626]
                "
              >
                {review.review}
              </p>

              {/* Customer details */}
              <div className="mt-5 border-t border-[#EEDFD7] pt-5">
                <h3 className="font-serif text-lg font-semibold text-[#4E1626]">
                  {review.name}
                </h3>

                <p className="mt-1 text-sm text-[#8A7971]">
                  {review.role}
                </p>

                <StarRating rating={review.rating} />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center sm:mt-14">
          <p className="font-serif text-xl italic text-[#7C3549] sm:text-2xl">
            A little love, delivered in every bouquet
            <span className="ml-2 not-italic text-[#B98A3E]">
              ♡
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Reviews;
