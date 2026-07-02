import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react";
import cat1 from "../assets/cat-1.jpeg";
import cat2 from "../assets/cat-2.jpeg";
import cat3 from "../assets/cat-3.jpeg";
import img1 from "../assets/img-1.jpeg";

const products = [
  {
    title: "CREST BEAUTIFUL MISTAKES KNITT POLO",
    tag: "Featured drop",
    price: "₦175,000",
    oldPrice: "₦200, 000",
    description:
      "A lightweight shell designed for late-night city moves, soft structure, and everyday confidence.",
    image: cat1,
    badge: "New arrival",
    rating: 4.9,
  },
  {
    title: "CREST LIVE FREE TEE",
    tag: "Best seller",
    price: "₦50,000",
    oldPrice: "₦70,000",
    description:
      "Crafted cotton with a clean silhouette, premium finish, and unapologetic streetwear attitude.",
    image: cat2,
    badge: "Limited run",
    rating: 4.8,
  },
  {
    title: "CREST LIVE FREE WHITE TEE",
    tag: "Studio edit",
    price: "₦50,000",
    oldPrice: "₦70,000",
    description:
      "Sharp lines, flexible comfort, and elevated layering for both day and evening wear.",
    image: cat3,
    badge: "Editor pick",
    rating: 5.0,
  },
  {
    title: "CREST BEAUTIFUL MISTAKES",
    tag: "Accessory",
    price: "₦175,000",
    oldPrice: "₦200,000",
    description:
      "The finishing touch for your look with premium texture and a sculpted fit.",
    image: img1,
    badge: "Fresh stock",
    rating: 4.7,
  },
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? products.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === products.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="w-full bg-[#f6f3ee] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Fresh for sale
            </p>
            <h2 className="mt-2 font-rubik text-3xl font-semibold text-black sm:text-4xl">
              Shop the latest essentials
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
              Curated pieces designed to look sharp, feel effortless, and move with your day.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous product"
              onClick={handlePrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-black transition hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={handleNext}
              className="grid h-10 w-10 place-items-center rounded-full bg-black text-white transition hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-gray-200 bg-white p-4 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden rounded-[24px] bg-[#f3efe8]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProduct.title}
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="h-[300px] w-full object-cover sm:h-[380px]"
                />
              </AnimatePresence>

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black backdrop-blur">
                {activeProduct.badge}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {activeProduct.tag}
                </p>
                <h3 className="mt-3 font-rubik text-2xl font-semibold text-black sm:text-3xl">
                  {activeProduct.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
                  {activeProduct.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-medium">{activeProduct.rating}</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-semibold text-black">{activeProduct.price}</span>
                  <span className="text-sm text-gray-500 line-through">{activeProduct.oldPrice}</span>
                </div>

                <button className="mt-5 flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                  <ShoppingBag className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {products.map((product, index) => (
              <button
                key={product.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-3 py-2 text-sm transition ${
                  activeIndex === index
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-black"
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
