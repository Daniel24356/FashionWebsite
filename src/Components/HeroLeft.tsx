import { RefreshCcw, ThumbsUp, Truck } from "lucide-react";

export default function HeroLeft() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
        <h1 className="text-5xl font-bold leading-[1.05] text-black sm:text-6xl">
          Define Your <br />
          Style
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-7 text-gray-800 sm:text-base lg:mx-0">
          Bold Streetwear Inspired By Real Culture - Crafted For Comfort,
          Movement, And Everyday Confidence.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
          <button className="rounded-md bg-black px-8 py-3 text-sm font-medium text-white shadow transition hover:bg-gray-800">
            Shop The Drop
          </button>

          <button className="rounded-md border border-gray-300 px-8 py-3 text-sm font-medium transition hover:bg-gray-100">
            View All Styles
          </button>
        </div>

        <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 text-xs text-gray-800 sm:mt-14 sm:text-sm lg:mx-0 lg:flex lg:items-center lg:gap-14">
          {[
            { icon: RefreshCcw, label: "Hassle-Free", sublabel: "Returns" },
            { icon: ThumbsUp, label: "100% Cotton", sublabel: "Made In China" },
            { icon: Truck, label: "Free", sublabel: "Shipping" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 px-2 py-4 lg:min-h-0 lg:bg-transparent lg:p-0"
              >
                <Icon className="h-5 w-5" />
                <span className="text-center">
                  {item.label}
                  <br />
                  {item.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
