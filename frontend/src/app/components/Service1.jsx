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
          className="absolute inset-0 w-full h-full object-cover rotate-y-180"
        >
          <source src="/Images/method.mp4" type="video/mp4" />
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
              className="bangers-regular text-4xl md:text-5xl lg:text-7xl                       leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
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
       <span className="text-2xl">  <strong className="text-2xl"> The Unification of Systems       </strong></span> <br /><br />
             We design and implement the robust infrastructure that underpins your future growth. We stop the chaos of scattered tools, creating a unified, intelligent network where data flows seamlessly. This is the Core Blueprint for efficiency.

         
         
            </motion.p>

     

          </div>
        </div>
      </div>
    </div>
  );
}
