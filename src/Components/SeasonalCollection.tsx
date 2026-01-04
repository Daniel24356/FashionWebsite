import img1 from "../assets/collection-1.jpg";
import img2 from "../assets/collection-2.jpg";

export default function SeasonalCollection() {
  return (
    <section className="w-full bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-20">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-rubik font-semibold text-black">
            Seasonal Collection
          </h2>

          <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            Every Season Brings A New Drop—Bold Designs, Clean Fits, And
            Statement Pieces Made For The Streets
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={img1}
              alt="Cooperate"
              className="
                w-full h-[380px] object-cover
                scale-110
                transition-transform duration-700 ease-out
                group-hover:scale-100
              "
            />

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <span className="px-10 py-2 rounded-full bg-white text-xs font-semibold tracking-wide text-black shadow">
                COOPERATE
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={img2}
              alt="Street Wear"
              className="
                w-full h-[380px] object-cover
                scale-110
                transition-transform duration-700 ease-out
                group-hover:scale-100
              "
            />

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <span className="px-10 py-2 rounded-full bg-white text-xs font-semibold tracking-wide text-black shadow">
                STREET WEAR
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
