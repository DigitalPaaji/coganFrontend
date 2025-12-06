"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
   
      <div className="relative  w-full overflow-hidden py-24">

        {/* Background Video */}
        <img
          src={'/Images/moon.gif'}
          className="absolute inset-0 w-full h-full object-cover "
        />
        
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/team.mp4" type="video/mp4" />
        </video> */}

        {/* Dark overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 h-full ">
          <div className="px-6 lg:px-14  text-white mb-12">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="bangers-regular text-4xl lg:text-6xl leading-tight 
                         drop-shadow-[0_4px_25px_rgba(255,255,255,0.7)]"
            >
              The Brains Behind
           
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-lg opacity-80"
            >
            <span className=" md:text-lg xl:text-xl">
            <strong className="text-2xl">
            Driven by Experience. Built for the Future.      </strong> </span>
<br /><br />
             We are a specialized team of architects, engineers, and strategists with a shared commitment to operational excellence. Our decades of experience in technical content, systems integration, and AI deployment ensure we deliver solutions that are not just intelligent, but rock-solid.
              <br /><br />
        We translate complex technology into concrete business outcomes.

            </motion.p>



          </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 lg:px-14">
  
  {/* Team Member Card */}
  <div className="relative overflow-hidden border rounded-tl-4xl rounded-br-4xl  shadow-2xl group">
    
    {/* IMAGE */}
    <img
      src="/Images/5.png"
      alt="Team Member"
      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

    {/* NAME & DESIGNATION */}
    <div className="absolute bottom-0 left-4 text-white backdrop-blur-xs w-full py-4 ">
      <h3 className="text-xl drop-shadow-lg">Kashish</h3>
      <p className="text-sm opacity-80 ">Founder & AI Engineer</p>
    </div>

  </div>

    <div className="relative overflow-hidden border rounded-tl-4xl rounded-br-4xl  shadow-2xl group">
    
    {/* IMAGE */}
    <img
      src="/Images/1.png"
      alt="Team Member"
      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

    {/* NAME & DESIGNATION */}
    <div className="absolute bottom-0 left-4 text-white backdrop-blur-xs w-full py-4 ">
      <h3 className="text-xl drop-shadow-lg">Kashish</h3>
      <p className="text-sm opacity-80 ">Founder & AI Engineer</p>
    </div>

  </div>


    <div className="relative overflow-hidden border rounded-tl-4xl rounded-br-4xl  shadow-2xl group">
    
    {/* IMAGE */}
    <img
      src="/Images/2.png"
      alt="Team Member"
      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

    {/* NAME & DESIGNATION */}
    <div className="absolute bottom-0 left-4 text-white backdrop-blur-xs w-full py-4 ">
      <h3 className="text-xl drop-shadow-lg">Kashish</h3>
      <p className="text-sm opacity-80 ">Founder & AI Engineer</p>
    </div>

  </div>


    <div className="relative overflow-hidden border rounded-tl-4xl rounded-br-4xl  shadow-2xl group">
    
    {/* IMAGE */}
    <img
      src="/Images/4.png"
      alt="Team Member"
      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

    {/* NAME & DESIGNATION */}
    <div className="absolute bottom-0 left-4 text-white backdrop-blur-xs w-full py-4 ">
      <h3 className="text-xl drop-shadow-lg">Kashish</h3>
      <p className="text-sm opacity-80 ">Founder & AI Engineer</p>
    </div>

  </div>


    <div className="relative overflow-hidden border rounded-tl-4xl rounded-br-4xl  shadow-2xl group">
    
    {/* IMAGE */}
    <img
      src="/Images/3.png"
      alt="Team Member"
      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

    {/* NAME & DESIGNATION */}
    <div className="absolute bottom-0 left-4 text-white backdrop-blur-xs w-full py-4 ">
      <h3 className="text-xl drop-shadow-lg">Kashish</h3>
      <p className="text-sm opacity-80 ">Founder & AI Engineer</p>
    </div>

  </div>

</div>


        </div>
      </div>

  );
}
