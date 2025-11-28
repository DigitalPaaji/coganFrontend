"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="m-2 lg:m-4">
      <div className="relative h-[97vh]  w-full overflow-hidden text-white flex items-center justify-center rounded-4xl">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/banner.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/50" />

        {/* --- TOP HEADER (LOGO LEFT + CONNECT BUTTON RIGHT) --- */}
        <div className="absolute top-5 left-8 right-8 flex items-center justify-between z-20">

          {/* Logo */}
          <img
            src="/Images/logoW.webp"     // <-- replace with your logo file
            alt="COGAN Logo"
            className="w-28 md:w-28 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          />

          {/* Connect Button (Top-right) */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="px-6 py-3 rounded-full border-2 border-white text-sm md:text-lg
                       backdrop-blur-[3px]"
          >
            Connect
          </motion.button>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bangers-regular border-y-2 text-4xl md:text-6xl lg:text-8xl font-bold leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
          >
            Core Growth, Powered by Intelligent Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl opacity-80"
          >
            COGAN - Core Operational Growth & Analysis Network
          </motion.p>

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
