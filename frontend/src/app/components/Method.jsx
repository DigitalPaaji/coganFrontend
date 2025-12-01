"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="m-2 lg:m-4">
      {/* Fixed Height + Rounded Wrapper */}
      <div className="relative h-[97vh] w-full overflow-hidden rounded-4xl">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/service1.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/0 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-end text-right">
          <div className="px-6 lg:px-14 max-w-4xl text-white">

            {/* SCROLL-TRIGGER HEADING */}
            <motion.h1
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bangers-regular text-8xl md:text-[100px] lg:text-[140px] xl:text-[200px]
                         font-bold leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
              THE <br /> COGAN <br /> METHOD
              <span className="block text-lg md:text-2xl opacity-80">
                (The Core Blueprint)
              </span>
            </motion.h1>

          </div>
        </div>

      </div>
    </div>
  );
}
