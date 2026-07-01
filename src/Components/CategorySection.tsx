import cat1 from "../assets/cat-1.jpeg";
import cat2 from "../assets/cat-2.jpeg";
import cat3 from "../assets/cat-3.jpeg";
import SectionReveal from "./SectionReveal";

const categories = [
  {
    title: "Beatiful Mistake",
    image: cat1,
  },
  {
    title: "Live Free White",
    image: cat2,
  },
  {
    title: "Live Free Black",
    image: cat3,
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <SectionReveal className="mb-10 text-center sm:mb-14" delay={0.08}>
          <h2 className="font-rubik text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
            Categories
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-rubik leading-6 text-gray-600 md:text-base">
            From Everyday Essentials To Statement Pieces - Find Your Fit.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {categories.map((category, index) => (
            <SectionReveal
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 sm:col-span-1" : ""}`}
              delay={index * 0.08}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-[260px] w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100 sm:h-[360px] lg:h-[400px]"
              />

              <div className="absolute bottom-4 left-1/2 w-max -translate-x-1/2">
                <span className="rounded-full bg-white/90 px-6 py-2 text-xs font-semibold tracking-wide text-black backdrop-blur-sm sm:px-8">
                  {category.title}
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
