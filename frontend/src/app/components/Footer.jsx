"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from "framer-motion";

export default function About() {
  return (
   
      <div className="relative  w-full overflow-hidden px-6 lg:px-14 pt-24 ">

        {/* Background Video */}
        <img
          src={'/Images/moon.gif'}
          className="absolute inset-0 w-full h-full object-cover "
        />
        


        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="px-6 lg:px-14  text-white ">
<div className="flex gap-4 items-center justify-center">
            <img
            src="/Images/logoW.webp"
            alt="COGAN Logo"
            className="w-28 md:w-28 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          />
      {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="bangers-regular text-4xl md:text-6xl lg:text-8xl font-bold leading-tight 
                         drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
              Cogan
              {/* <span className="block text-lg md:text-2xl opacity-80 my-4 lg:my-8">
                [Your Digital Co-Pilot]
              </span> */}
            </motion.h1>
</div>
      

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 md:text-lg xl:text-xl opacity-80"
            >
             Core Operational Growth & Analysis Network

            </motion.p>


 <div className="flex space-x-4  items-center justify-center mt-4">
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] "><Facebook width={'30'} height={'30'} /></a>
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] "><Instagram width={'30'} height={'30'} /></a>
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] "><Twitter width={'30'} height={'30'} /></a>
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] "><Youtube width={'30'} height={'30'} /></a>
            </div>
          </div>




        </div>
        <div className=" w-full pt-12 text-center ">
           <div className="flex space-x-4  items-center justify-center mt-4">
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] ">📞 +91 8421373429</a>
              <a href="#" className="text-[#f3ecdf] hover:text-[#B67032] ">✉️ support@carboncraft.in</a>
            </div>
          

       <div
            className="py-6 md:text-lg border-t opacity-80  text-gray-300"
            >
        
           <div className="mb-4 flex items-center flex-wrap justify-center gap-12">   <span>📞 +91 8421373429 </span><span> ✉️ support@carboncraft.in </span></div>  
           Copyright © 2025 Cogon • Designed by <a href="https://digitalpaaji.com/" className="text-lime-100 ">
            Digital Paaji
            </a> • All Rights Reserved. • Made with ❤️ in India

            </div>
        </div>
    
      </div>

  );
}
