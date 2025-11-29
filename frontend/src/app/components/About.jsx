"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="m-2 lg:m-4">
      {/* Fixed Height + Rounded Wrapper (same as Banner) */}
      <div className="relative h-[97vh] w-full overflow-hidden rounded-4xl">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/about.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 lg:px-14 max-w-4xl text-white">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="bangers-regular border-b-2 text-6xl md:text-9xl xl:text-[140px]
                         font-bold leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
              About Us
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="mt-6 md:text-lg xl:text-xl opacity-80"
            >
              We are Cogan.life — more than just system integrators.
              Our name, derived from the Irish meaning ‘Son of a Warrior,’
              and our symbol, the Triskelion, reflect our philosophy:
              every business needs a stable core and dynamic momentum to thrive.
            </motion.p>

            {/* Connect Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
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
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
