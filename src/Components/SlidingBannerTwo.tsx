const messages = [
  "LOOK BETTER",
  "WEAR COMFORTABLE",
  "ACTIVE WEARS",
  "STREET READY",
];

export default function SlidingBannerTwo() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-16">
        {[...messages, ...messages, ...messages].map((message, index) => (
          <div key={`${message}-${index}`} className="flex items-center gap-8 sm:gap-12">
            <h2 className="whitespace-nowrap font-rubik text-sm font-normal tracking-wide text-white sm:text-[18px]">
              {message}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
