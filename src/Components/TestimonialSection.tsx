import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    name: "Raymond K",
    image: "https://i.pravatar.cc/100?img=12",
    text: "I Absolutely Love These Clothes! The Designs Are So Unique And Trendy, And The Quality Feels Premium. Every Time I Wear Them, I Get Compliments. Definitely My Go-To Brand For Streetwear!",
  },
  {
    name: "Jamal R",
    image: "https://i.pravatar.cc/100?img=32",
    text: "Hands Down One Of The Best Fashion Lines I've Tried. The Fit Is Perfect, The Materials Are Comfortable, And The Style Really Stands Out. You Can Tell A Lot Of Thought Goes Into Every Piece.",
  },
  {
    name: "Emily D",
    image: "https://i.pravatar.cc/100?img=47",
    text: "I'm Obsessed! From The Colors To The Patterns, Everything Is On Point. It's Clear This Brand Knows How To Balance Fashion With Comfort. I've Already Recommended It To All My Friends!",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <SectionReveal className="flex flex-col items-start gap-6 sm:flex-row sm:justify-between" delay={0.08}>
          <div className="max-w-xl">
            <h2 className="font-rubik text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Fashion That Speaks For Itself
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Discover Fashion That Goes Beyond Trends - Pieces Designed To
              Express Your Personality, Elevate Your Everyday Style, And Make A
              Statement Wherever You Go
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-100">
            See All
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </SectionReveal>

        <SectionReveal className="mt-10 sm:mt-16" delay={0.16}>
          <div className="mb-4 flex items-center justify-end gap-2 sm:mb-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-black transition hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-black text-white transition hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[28px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                <div className="flex min-h-[320px] flex-col rounded-[28px] border border-gray-300 bg-[rgb(232,234,234)] p-6 shadow-sm sm:p-8 lg:p-10">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-black sm:text-base">
                    {testimonials[activeIndex].text}
                  </p>

                  <div className="mt-auto flex items-center gap-4 pt-8">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span className="text-sm font-semibold text-black">
                      {testimonials[activeIndex].name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
