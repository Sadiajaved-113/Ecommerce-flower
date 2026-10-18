
import React from "react";

const products = [
  {
    id: 1,
    name: "Blush Harmony",
    description:
      "A delicate mix of pink roses, carnations and seasonal blooms.",
    price: 75,
    image: "/blush-harmony.jpeg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Classic Romance",
    description:
      "Timeless red roses, beautifully arranged for your special moments.",
    price: 85,
    image: "/classic-romance.jpeg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Spring Whisper",
    description:
      "A fresh and cheerful blend of roses, daisies and seasonal stems.",
    price: 68,
    image: "/spring-whisper.jpeg",
    badge: null,
  },
  {
    id: 4,
    name: "Pure Elegance",
    description:
      "Graceful lilies and roses for a truly unforgettable gift.",
    price: 90,
    image: "/pure-elegance.png",
    badge: null,
  },
];

function Products() {
  const handleAddToCart = (product) => {
    // Connect your cart functionality here.
    console.log(`${product.name} added to cart`);
  };

  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        bg-[#F8EAE4]
        px-5
        py-16
        sm:px-8
        sm:py-20
        md:px-10
        md:py-24
        lg:px-12
      "
    >
      <div className="relative z-10 mx-auto max-w-[1300px]">

        {/* SECTION HEADER */}
        <div className="mb-10 text-center sm:mb-12">
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#B98A3E]
              sm:text-sm
            "
          >
            Best Sellers
          </p>

          <h2
            className="
              font-serif
              text-[34px]
              font-medium
              leading-tight
              tracking-tight
              text-[#4E1626]
              sm:text-[42px]
              md:text-[50px]
            "
          >
            Featured Flowers
          </h2>

          {/* GOLD DECORATIVE DIVIDER */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#B98A3E] sm:w-16" />

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

            <span className="h-px w-14 bg-[#B98A3E] sm:w-16" />
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-[500px]
              text-sm
              font-light
              leading-7
              text-[#75645C]
              sm:text-base
            "
          >
            Hand-tied with care, our most loved arrangements
            bring beauty, joy and a little more love to every occasion.
          </p>
        </div>

        {/* PRODUCT GRID */}
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
          {products.map((product) => (
            <article
              key={product.id}
              className="
                group
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-[#EADFD9]
                bg-[#FFFCFA]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#DCC8BE]
                hover:shadow-[0_14px_35px_rgba(78,22,38,0.09)]
              "
            >
              {/* PRODUCT IMAGE */}
              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-[#F8E3DB]
                "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* PRODUCT BADGE */}
                {product.badge && (
                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      rounded-full
                      bg-[#FFFDFC]/95
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#8E4054]
                      shadow-sm
                    "
                  >
                    {product.badge}
                  </span>
                )}

                {/* CART ICON */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#EADFD9]
                    bg-[#FFFCFA]
                    text-[#6E2438]
                    shadow-sm
                    transition-colors
                    duration-300
                    hover:bg-[#4E1626]
                    hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
                    <circle cx="10" cy="21" r="1" />
                    <circle cx="18" cy="21" r="1" />
                  </svg>
                </button>
              </div>

              {/* PRODUCT DETAILS */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  items-center
                  px-4
                  pb-5
                  pt-8
                  text-center
                  sm:px-5
                  sm:pb-6
                "
              >
                <h3
                  className="
                    font-serif
                    text-xl
                    font-medium
                    text-[#4E1626]
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-2
                    min-h-[48px]
                    text-sm
                    font-light
                    leading-6
                    text-[#75645C]
                  "
                >
                  {product.description}
                </p>

                {/* PRICE */}
                <p
                  className="
                    mt-4
                    text-xl
                    font-semibold
                    text-[#A73750]
                  "
                >
                  ${product.price.toFixed(2)}
                </p>

                {/* ADD TO CART */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="
                    group/button
                    mt-5
                    inline-flex
                    min-h-[46px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#4E1626]
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#6E2438]
                  "
                >
                  Add to cart

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
                      group-hover/button:translate-x-1
                    "
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW ALL FLOWERS */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="/products"
            className="
              group
              inline-flex
              min-h-[46px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#B98A3E]
              px-7
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#9B7136]
              transition-all
              duration-300
              hover:bg-[#4E1626]
              hover:border-[#4E1626]
              hover:text-white
              sm:px-9
            "
          >
            View all flowers

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

      </div>
    </section>
  );
}

export default Products;
