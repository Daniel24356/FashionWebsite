import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"

export default function SlidingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      {/* TRACK */}
      <div className="flex w-max animate-marquee items-center gap-16">

        {/* ITEM 1 */}
        <div className="flex items-center gap-12">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={profile1}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-gray-400 text-3xl font-rubik font-light tracking-wide whitespace-nowrap">
            Crafted For Modern Man
          </h2>

        </div>

        {/* DUPLICATE FOR SEAMLESS LOOP */}
        <div className="flex items-center gap-12">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={profile2}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-gray-400 text-3xl font-rubik font-light tracking-wide whitespace-nowrap">
            Crafted For Modern Man
          </h2>
        </div>

          <div className="flex items-center gap-12">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={profile1}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-gray-400 text-3xl font-rubik font-light tracking-wide whitespace-nowrap">
            Crafted For Modern Man
          </h2>

        </div>

      </div>
    </div>
  );
}
