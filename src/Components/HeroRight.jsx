import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";

export default function HeroRight() {
  return (
    <div className="relative mx-auto h-[410px] w-full max-w-[560px] sm:h-[540px] lg:h-[620px]">
      <div className="absolute left-[2%] top-8 h-[250px] w-[32%] overflow-hidden rounded-full shadow-lg sm:top-10 sm:h-[360px] lg:h-[380px]">
        <img src={img1} alt="Streetwear model" className="h-full w-full object-cover" />
      </div>

      <div className="absolute left-1/2 top-16 z-10 h-[290px] w-[36%] -translate-x-1/2 overflow-hidden rounded-full shadow-xl sm:top-24 sm:h-[420px]">
        <img src={img2} alt="Streetwear model" className="h-full w-full object-cover" />
      </div>

      <div className="absolute right-[2%] top-32 h-[250px] w-[32%] overflow-hidden rounded-full shadow-lg sm:top-44 sm:h-[360px] lg:h-[380px]">
        <img src={img3} alt="Streetwear model" className="h-full w-full object-cover" />
      </div>

      <div className="absolute left-1/2 top-3 z-20 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:top-12 sm:text-sm">
        <span className="font-bold">100%</span>
        <span>Satisfaction Guaranteed</span>
      </div>

      <div className="absolute bottom-20 left-0 z-20 flex max-w-[190px] gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:bottom-28 sm:text-sm">
        <span className="text-lg">"</span>
        <span>Limited Edition Designs</span>
      </div>

      <div className="absolute bottom-2 right-2 z-20 flex max-w-[220px] gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:bottom-6 sm:right-16 sm:text-sm">
        <span className="text-lg">"</span>
        <span>Designed For Self Expression</span>
      </div>
    </div>
  );
}
