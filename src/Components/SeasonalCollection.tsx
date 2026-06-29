import img1 from "../assets/collection-1.jpg";
import img2 from "../assets/collection-2.jpg";

const collections = [
  {
    title: "COOPERATE",
    image: img1,
  },
  {
    title: "STREET WEAR",
    image: img2,
  },
];

export default function SeasonalCollection() {
  return (
    <section className="w-full bg-white pb-14 pt-16 sm:pb-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-rubik text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
            Seasonal Collection
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:mt-6 md:text-base">
            Every Season Brings A New Drop - Bold Designs, Clean Fits, And
            Statement Pieces Made For The Streets
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 md:gap-10">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-[280px] w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100 sm:h-[380px]"
              />

              <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
                <span className="rounded-full bg-white px-8 py-2 text-xs font-semibold tracking-wide text-black shadow sm:px-10">
                  {collection.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
