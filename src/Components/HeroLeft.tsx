import { RefreshCcw, ThumbsUp, Truck } from "lucide-react";

export default function HeroLeft() {
  return (
    <section className="w-full">
      <div className="max-w-xl">
        
        {/* Heading */}
        <h1 className="text-[56px] leading-[1.1] font-bold text-black">
          Define Your <br />
          Style
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base font-medium text-gray-800 max-w-md">
          Bold Streetwear Inspired By Real Culture – Crafted For Comfort,
          Movement, And Everyday Confidence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-800 transition">
            Shop The Drop
          </button>

          <button className="px-8 py-3 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 transition">
            View All Styles
          </button>
        </div>

        {/* Features */}
        <div className="mt-16 flex items-center gap-14 text-sm text-gray-800">
          
          <div className="flex flex-col items-center gap-2">
            <RefreshCcw className="w-5 h-5" />
            <span className="text-center">Hassle-Free<br />Returns</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-center">
              100% Cotton<br />Made In China
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Truck className="w-5 h-5" />
            <span className="text-center">Free<br />Shipping</span>
          </div>

        </div>
      </div>
    </section>
  );
}
