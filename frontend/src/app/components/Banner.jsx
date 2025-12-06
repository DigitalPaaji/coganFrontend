"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="m-2 lg:m-4">
      <div className="relative h-[80vh] lg:h-[97vh]  w-full overflow-hidden text-white flex items-end p-6 lg:p-12 xl:p-24 justify-start rounded-4xl">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/girl.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/00 to-black/0" />

        {/* --- TOP HEADER (LOGO LEFT + CONNECT BUTTON RIGHT) --- */}
        <div className="absolute top-5 left-8 right-8 flex items-center justify-between z-20">

          {/* Logo */}
          <img
            src="/Images/logoW.webp"     // <-- replace with your logo file
            alt="COGAN Logo"
            className=" rotate-[85deg] w-20 md:w-24 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          />

          {/* Connect Button (Top-right) */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="px-6 py-3 rounded-full border-2 border-white text-lg
                       backdrop-blur-[3px]"
          >
            cogan.life
          </motion.button>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-start px-6 max-w-4xl  backdrop-blur-[3px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bangers-regular  text-3xl md:text-4xl xl:text-6xl  leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
          >
            THE CORE OPERATIONAL GROWTH & ANALYSIS NETWORK.
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl opacity-80  "
          >
            COGAN - 
We build the core system. We deploy the AI co-pilot.


          </motion.p> */}

          {/* 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative px-8 py-4 rounded-full border border-white/30 text-lg font-medium
                         hover:bg-white hover:text-black transition-all backdrop-blur-md"
            >
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white animate-ping" />
                Connect
              </span>
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
