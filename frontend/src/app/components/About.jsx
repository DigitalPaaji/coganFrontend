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
          <source src="/Images/team.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 lg:px-14 max-w-4xl text-white">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bangers-regular border-b-2 text-4xl lg:text-6xl  
                         font-medium leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
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
         Our Philosophy: Core & Momentum.
<br /> <br />
COGAN stands for Core Operational Growth & Analysis Network.
<br /> <br />

             Our name, derived from the Irish meaning `Son of a Warrior`, and our symbol, the Triskelion, define our singular focus and 360 coverage: Every business needs a stable core and the dynamic momentum to thrive.
           <br />  We are not just system integrators.  We are the architects of your AI-Powered organization. We build the stable system, and we automate the movement.

            </motion.p>


          </div>
        </div>
      </div>
    </div>
  );
}
