import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Raymond K",
    image: "https://i.pravatar.cc/100?img=12",
    text: `I Absolutely Love These Clothes! The Designs
Are So Unique And Trendy, And The Quality Feels
Premium. Every Time I Wear Them, I Get
Compliments. Definitely My Go-To Brand For
Streetwear!`,
  },
  {
    name: "Jamal R",
    image: "https://i.pravatar.cc/100?img=32",
    text: `Hands Down One Of The Best Fashion Lines I’ve
Tried. The Fit Is Perfect, The Materials Are
Comfortable, And The Style Really Stands Out.
You Can Tell A Lot Of Thought Goes Into Every
Piece`,
  },
  {
    name: "Emily D",
    image: "https://i.pravatar.cc/100?img=47",
    text: `I’m Obsessed! From The Colors To The Patterns,
Everything Is On Point. It’s Clear This Brand
Knows How To Balance Fashion With Comfort.
I’ve Already Recommended It To All My Friends!`,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-20">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-rubik font-semibold text-black">
              Fashion That Speaks For Itself
            </h2>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Discover Fashion That Goes Beyond Trends—Pieces Designed
              To Express Your Personality, Elevate Your Everyday Style,
              And Make A Statement Wherever You Go
            </p>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-black hover:bg-gray-100 transition">
            See All
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 bg-[rgb(232,234,234)] p-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-black leading-relaxed whitespace-pre-line">
                {item.text}
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-black">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
