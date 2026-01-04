import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import { RefreshCcw, ThumbsUp, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-20 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[60px] leading-[1.2] font-rubik font-normal text-black">
              Define Your <br /> Style
            </h1>

            <motion.p
              className="mt-6 text-base font-medium text-gray-800 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Bold Streetwear Inspired By Real Culture – Crafted For Comfort,
              Movement, And Everyday Confidence.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-800 transition">
                Shop The Drop
              </button>

              <button className="px-8 py-3 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 transition">
                View All Styles
              </button>
            </motion.div>

            <motion.div
              className="mt-16 flex items-center gap-14 text-sm text-gray-800"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
              {[RefreshCcw, ThumbsUp, Truck].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-center">
                    {i === 0 && <>Hassle-Free<br />Returns</>}
                    {i === 1 && <>100% Cotton<br />Made In China</>}
                    {i === 2 && <>Free<br />Shipping</>}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative w-full h-[620px] flex items-center justify-center">

            {/* Left Image */}
            <motion.div
              className="absolute left-0 top-10 w-[200px] h-[380px] rounded-full overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={img1} alt="Model" className="w-full h-full object-cover" />
            </motion.div>

            {/* Center Image */}
            <motion.div
              className="absolute left-[140px] top-28 w-[210px] h-[420px] rounded-full overflow-hidden shadow-xl z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img src={img2} alt="Model" className="w-full h-full object-cover" />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute left-[310px] top-48 w-[200px] h-[380px] rounded-full overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img src={img3} alt="Model" className="w-full h-full object-cover" />
            </motion.div>

            {/* Top Badge */}
            <motion.div
              className="absolute top-16 left-[150px] bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-bold">100%</span>
              <span>Satisfaction Guaranteed</span>
            </motion.div>

            {/* Left Label */}
            <motion.div
              className="absolute bottom-32 left-[-10px] z-10 bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-lg">“</span>
              <span>Limited Edition Designs</span>
            </motion.div>

            {/* Bottom Label */}
            <motion.div
              className="absolute bottom-6 left-[160px] bg-white px-5 py-3 rounded-xl shadow-md text-sm font-medium flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-lg">“</span>
              <span>Designed For Self Expression</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
