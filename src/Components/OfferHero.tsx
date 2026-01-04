import time from "../assets/time-img.png";

export default function OfferHero() {
  return (
    <section className="relative mt-10 w-full overflow-hidden bg-gradient-to-r from-[rgb(234,232,232)] to-[rgb(202,200,200)]">
      <div className="max-w-7xl mx-auto h-[500px] px-36 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[16px] leading-tight md:text-[48px] md:leading-tight font-rubik font-normal text-black">
              Act Fast! Incredible <br /> Offer Expires Soon
            </h1>

            <p className="mt-4 text-sm text-gray-700 max-w-md">
              Time Is Running Out On This Incredible Deal. Act Fast To
              Secure Premium Benefit.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-4 flex gap-0">
              {[
                { value: "190", label: "Days" },
                { value: "04", label: "Hrs" },
                { value: "38", label: "Mins" },
                { value: "13", label: "Secs" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-[rgb(178,177,177)] bg-transparent px-5 py-2 text-center"
                >
                  <p className="text-3xl font-rubik font-normal text-black">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* NOTE */}
            <p className="mt-5 text-xs text-gray-700">
              Limited Time Offer The Deal Is Available Time December,
              2025 HURRY UP Now!
            </p>

            {/* CTA */}
            <button className="mt-8 bg-black text-white px-8 py-3 text-xs font-semibold tracking-wide rounded shadow">
              VIEW COLLECTION
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute -top-20 right-32 hidden lg:flex justify-end">
            <img
              src={time}
              alt="Model"
              className="h-[710px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
