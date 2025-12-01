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
          <source src="/Images/about.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 lg:px-14 max-w-4xl text-white">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bangers-regular border-b-2 text-6xl md:text-9xl 
                         font-bold leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
              About Us
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className="mt-6 md:text-lg xl:text-xl opacity-80"
            >
            <b>  Our Philosophy: Core & Momentum.</b>
<br /> <br />
<b>COGAN</b> stands for <b>Core Operational Growth & Analysis Network.</b>
<br /> <br />

             Our name, derived from the Irish meaning <b>`Son of a Warrior`</b>, and our symbol, the <b>Triskelion</b>, define our singular focus and 360 coverage: Every business needs a stable core and the dynamic momentum to thrive.
           <br />  We are not just system integrators. <b> We are the architects of your AI-Powered organization.</b> We build the stable system, and we automate the movement.

            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
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
