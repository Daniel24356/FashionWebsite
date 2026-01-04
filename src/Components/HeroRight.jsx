export default function HeroRight() {
  return (
    <div className="relative w-full h-[620px] flex items-center justify-center">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-10 w-[210px] h-[420px] rounded-full overflow-hidden shadow-lg">
        <img
          src="/img/model-left.jpg"
          alt="Streetwear model"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CENTER IMAGE */}
      <div className="absolute left-[140px] top-28 w-[230px] h-[460px] rounded-full overflow-hidden shadow-xl z-10">
        <img
          src="/img/model-center.jpg"
          alt="Streetwear model"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute left-[310px] top-48 w-[210px] h-[420px] rounded-full overflow-hidden shadow-lg">
        <img
          src="/img/model-right.jpg"
          alt="Streetwear model"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TOP BADGE */}
      <div className="absolute top-6 left-[170px] bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex items-center gap-2">
        <span className="font-bold">100%</span>
        <span>Satisfaction Guaranteed</span>
      </div>

      {/* LEFT LABEL */}
      <div className="absolute bottom-32 left-[-10px] bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex gap-2">
        <span className="text-lg">“</span>
        <span>Limited Edition Designs</span>
      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-6 left-[160px] bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex gap-2">
        <span className="text-lg">“</span>
        <span>Designed For Self Expression</span>
      </div>

    </div>
  );
}
