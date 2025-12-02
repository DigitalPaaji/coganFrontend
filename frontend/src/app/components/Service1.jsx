"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="m-2 lg:m-4">
      <div className="relative h-[97vh] w-full overflow-hidden rounded-4xl">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/system.mp4" type="video/mp4" />
        </video>

        {/* Fixed Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-end py-24 justify-end text-right">
          <div className="px-6 lg:px-14 max-w-5xl text-white">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y:                    40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="bangers-regular text-4xl md:text-6xl lg:text-7xl                       leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
            AI Infrastructure and Process Automation

              {/* <span className="block text-lg md:text-2xl opacity-80 my-4 lg:my-8">
                [The Core Blueprint]
              </span> */}
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 md:text-lg xl:text-xl opacity-80"
            >
       <span className="text-2xl">  The Unification of Systems </span> <br /><br />
             We design and implement the robust infrastructure that underpins your future growth. We stop the chaos of scattered tools, creating a unified, intelligent network where data flows seamlessly. This is the Core Blueprint for efficiency.

         
         
            </motion.p>

            {/* BUTTON */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-14"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative px-8 py-4 rounded-full border border-white/30 text-lg font-medium
                           hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                <span className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-white animate-ping" />
                  Get Connected
                </span>
              </motion.button>
            </motion.div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
