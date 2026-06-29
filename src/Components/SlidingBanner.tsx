import profile1 from "../assets/profile-1.jpg";
import profile2 from "../assets/profile-2.jpg";

const bannerItems = [
  { image: profile1, text: "Crafted For Modern Man" },
  { image: profile2, text: "Built For Daily Motion" },
  { image: profile1, text: "Limited Runs, Clean Fits" },
  { image: profile2, text: "Crafted For Modern Man" },
];

export default function SlidingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4 sm:py-6">
      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-16">
        {[...bannerItems, ...bannerItems].map((item, index) => (
          <div key={`${item.text}-${index}`} className="flex items-center gap-6 sm:gap-12">
            <div className="h-11 w-11 overflow-hidden rounded-full sm:h-14 sm:w-14">
              <img
                src={item.image}
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="whitespace-nowrap font-rubik text-xl font-light tracking-wide text-gray-400 sm:text-3xl">
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
