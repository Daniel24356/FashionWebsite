import { ArrowUpRight, Star } from "lucide-react";

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
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
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
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex min-h-72 flex-col rounded-2xl border border-gray-300 bg-[rgb(232,234,234)] p-5 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-black">{item.text}</p>

              <div className="mt-auto flex items-center gap-4 pt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-black">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
