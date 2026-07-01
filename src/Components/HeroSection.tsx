import img1 from "../assets/img-1.jpeg";
import img2 from "../assets/img-2.jpeg";
import img3 from "../assets/img-3.jpeg";
import { RefreshCcw, ThumbsUp, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-12 lg:py-10 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-rubik text-5xl font-normal leading-[1.05] text-black sm:text-6xl lg:text-[60px] lg:leading-[1.2]">
              CREST IS  <br /> DIVINE
            </h1>

            <motion.p
              className="mx-auto mt-5 max-w-md text-sm font-medium leading-7 text-gray-800 sm:text-base lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Bold Streetwear Inspired By Real Culture - Crafted For Comfort,
              Movement, And Everyday Confidence.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <button className="rounded-md bg-black px-8 py-3 text-sm font-medium text-white shadow transition hover:bg-gray-800">
                Shop The Drop
              </button>

              <button className="rounded-md border border-gray-300 px-8 py-3 text-sm font-medium transition hover:bg-gray-100">
                View All Styles
              </button>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 text-xs text-gray-800 sm:mt-14 sm:text-sm lg:mx-0 lg:flex lg:items-center lg:gap-14"
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
              {/* {[RefreshCcw, ThumbsUp, Truck].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 px-2 py-4 lg:min-h-0 lg:bg-transparent lg:p-0"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))} */}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — cascading image layout */}
          <div className="relative mx-auto h-[480px] w-full max-w-[420px] sm:h-[620px] sm:max-w-[480px] lg:h-[700px] lg:max-w-[560px]">
            {/* Image 1 - top left */}
            <motion.div
              className="absolute left-0 top-0 z-0 h-[55%] w-[34%] overflow-hidden rounded-full shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={img1} alt="Model" className="h-full w-full object-cover" />
            </motion.div>

            {/* Image 2 - middle, overlapping image 1 */}
            <motion.div
              className="absolute left-[26%] top-[18%] z-10 h-[62%] w-[36%] overflow-hidden rounded-full shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img src={img2} alt="Model" className="h-full w-full object-cover" />
            </motion.div>

            {/* Image 3 - bottom right, overlapping image 2 */}
            <motion.div
              className="absolute right-0 top-[38%] z-20 h-[58%] w-[34%] overflow-hidden rounded-full shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img src={img3} alt="Model" className="h-full w-full object-cover" />
            </motion.div>

            {/* Badge - 100% Satisfaction Guaranteed (top, floating) */}
            <motion.div
              className="absolute left-[28%] top-[5%] z-30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-bold">100%</span>
                <span>Satisfaction Guaranteed</span>
              </motion.div>
            </motion.div>

            {/* Badge - Limited Edition Designs (bottom left, floating) */}
            <motion.div
              className="absolute bottom-[16%] left-0 z-30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="flex max-w-[190px] gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <span className="text-lg">"</span>
                <span>Limited Edition Designs</span>
              </motion.div>
            </motion.div>

            {/* Badge - Designed For Self Expression (bottom, floating) */}
            <motion.div
              className="absolute bottom-0 left-[16%] z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className="flex max-w-[220px] gap-2 rounded-xl bg-white px-4 py-3 text-xs font-medium shadow-md sm:text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <span className="text-lg">"</span>
                <span>Designed For Self Expression</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}