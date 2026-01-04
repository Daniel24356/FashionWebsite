
export default function SlidingBannerTwo() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      {/* TRACK */}
      <div className="flex w-max animate-marquee items-center gap-16">

        {/* ITEM 1 */}
        <div className="flex items-center gap-12">

          <h2 className="text-white text-[18px] font-rubik font-normal tracking-wide whitespace-nowrap">
            LOOK BETTER, WEAR COMFORTABLE, ACTIVE WEARS
          </h2>

        </div>

        {/* DUPLICATE FOR SEAMLESS LOOP */}
        <div className="flex items-center gap-12">

          <h2 className="text-white text-[18px] font-rubik font-normal tracking-wide whitespace-nowrap">
            LOOK BETTER, WEAR COMFORTABLE, ACTIVE WEARS
          </h2>
        </div>

          <div className="flex items-center gap-12">

          <h2 className="text-white text-[18px] font-rubik font-normal tracking-wide whitespace-nowrap">
            LOOK BETTER, WEAR COMFORTABLE, ACTIVE WEARS
          </h2>

        </div>

      </div>
    </div>
  );
}
