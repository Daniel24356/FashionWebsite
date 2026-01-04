import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";
import cat4 from "../assets/cat-4.jpg";

const categories = [
  {
    title: "GIRLS",
    image: cat1,
  },
  {
    title: "MEN",
    image: cat2,
  },
  {
    title: "WOMEN",
    image: cat3,
  },
  {
    title: "BOY",
    image: cat4,
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-20">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-rubik font-semibold text-black">
            Categories
          </h2>
          <p className="mt-4 text-sm md:text-base font-rubik text-gray-600">
            From Everyday Essentials To Statement Pieces—Find Your Fit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="
                  h-[400px] 
                  w-full 
                  object-cover 
                  transform 
                  scale-110 
                  transition-transform 
                  duration-700 
                  ease-out 
                  group-hover:scale-100
                "
              />

              {/* Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="px-8 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-black tracking-wide">
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
