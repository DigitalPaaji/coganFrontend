"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  const text = "DISCOVER THE AI OF COGAN";
  return (
    <section id="hero">
      <div className="p-2 md:p-4">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">

          {/* Monochrome gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/90 to-black/30 rounded-2xl md:rounded-3xl" />

          {/* Monochrome Grid */}
          <div className="absolute inset-0 opacity-30 
            bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_100%),linear-gradient(transparent_95%,rgba(255,255,255,0.1)_100%)] 
            
            rounded-2xl md:rounded-3xl"
          />

          {/* Horizontal lines */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                style={{ top: `${(i + 1) * 12}%`, left: "0%" }}
              />
            ))}
          </div>

          <video
            src="/banner.mp4"
            autoPlay
            loop
            muted
            className="rounded-2xl md:rounded-3xl h-[90vh] sm:h-[70vh] md:h-[96vh] w-full object-cover grayscale"
          />

          {/* MAIN CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
              className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 px-4 text-center"
            >

              {/* TITLE MONOCHROME */}
              <div className="relative">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {text.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -80, rotateX: 180, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      whileHover={{
                        y: -10,
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      transition={{
                        delay: 0.3 + index * 0.05,
                        duration: 0.8,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="
                        text-black
                        text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                        font-black tracking-wider uppercase
                         relative cursor-pointer
                      "
                      style={{
                        textShadow: `
                          0 0 20px rgba(255,255,255,0.9),
                          0 0 40px rgba(255,255,255,0.6)
                        `,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}

                      <motion.span
                        className="absolute inset-0 opacity-20 blur-md"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                        style={{
                          textShadow: `
                            0 0 25px rgba(255,255,255,1),
                            0 0 60px rgba(255,255,255,0.7)
                          `,
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* STATUS PANEL MONOCHROME */}
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6, type: "spring" }}
                className="
                  relative flex items-center gap-3
                  px-5 py-3 sm:px-6 sm:py-4
                  bg-black/50 backdrop-blur-xl
                  rounded-2xl border border-white/30 shadow-2xl
                "
              >
                {/* Core */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                  <div className="absolute inset-0 bg-white rounded-full blur-sm" />
                </motion.div>

                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm sm:text-base tracking-widest uppercase">
                    Neural Core Active
                  </span>
                  <motion.span
                    className="text-gray-300 text-xs font-mono"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Processing...
                  </motion.span>
                </div>

                {/* Binary */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 opacity-60">
                  {[1, 0, 1, 1, 0, 0, 1, 0, 1, 1].map((bit, i) => (
                    <motion.span
                      key={i}
                      className="text-white text-xs font-mono"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      {bit}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
