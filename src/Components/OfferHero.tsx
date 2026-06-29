import time from "../assets/time-img.png";

export default function OfferHero() {
  return (
    <section className="relative mt-6 w-full overflow-hidden bg-gradient-to-r from-[rgb(234,232,232)] to-[rgb(202,200,200)] sm:mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:min-h-[500px] lg:px-12 lg:py-14 xl:px-36">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="font-rubik text-3xl font-normal leading-tight text-black sm:text-4xl md:text-[48px] md:leading-tight">
              Act Fast! Incredible <br /> Offer Expires Soon
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-700 lg:mx-0">
              Time Is Running Out On This Incredible Deal. Act Fast To Secure
              Premium Benefit.
            </p>

            <div className="mt-6 grid grid-cols-4 overflow-hidden rounded-2xl border border-[rgb(178,177,177)] sm:inline-grid">
              {[
                { value: "190", label: "Days" },
                { value: "04", label: "Hrs" },
                { value: "38", label: "Mins" },
                { value: "13", label: "Secs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-r border-[rgb(178,177,177)] bg-white/20 px-3 py-3 text-center last:border-r-0 sm:px-5"
                >
                  <p className="font-rubik text-2xl font-normal text-black sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-5 max-w-sm text-xs leading-5 text-gray-700 lg:mx-0">
              Limited Time Offer The Deal Is Available Time December, 2025
              HURRY UP Now!
            </p>

            <button className="mt-8 rounded bg-black px-8 py-3 text-xs font-semibold tracking-wide text-white shadow">
              VIEW COLLECTION
            </button>
          </div>

          <div className="relative mx-auto flex h-72 w-full justify-center sm:h-96 lg:absolute lg:-top-20 lg:right-12 lg:h-auto lg:w-auto xl:right-32">
            <img
              src={time}
              alt="Model"
              className="h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.28)] lg:h-[710px] lg:drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
