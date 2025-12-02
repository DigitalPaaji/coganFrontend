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
               <div className="relative z-10 h-full flex items-center py-24 justify-end text-end">
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
                      What We Do

                   </motion.h1>
       
                   {/* Paragraph */}
                   <motion.p
                     initial={{ opacity: 0, y: 60 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                     className="mt-6 md:text-lg xl:text-xl opacity-80"
                   >
          We Handle the Grunt Work.        
<br /><br />
We audit all your existing tools—CRM, Finance, Project Management, and more—and unify them into one clear system. The result is immediate clarity, faster execution, and a single source of truth for your entire operation.
<br /><br />
      We audit all your existing tools—CRM, Finance, Project Management, and more—and unify them into one clear system. The result is immediate clarity, faster execution, and a single source of truth for your entire operation.

                   </motion.p>
       
       
                 </div>
               </div>

      </div>
    </div>
  );
}
