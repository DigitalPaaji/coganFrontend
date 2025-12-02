"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 80,
        filter: "blur(10px)",  
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%", // when 85% of screen reached
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="m-2 lg:m-4 rounded-4xl border border-amber-400">
    <div className="w-full min-h-screen flex flex-col items-center justify-end relative py-20  ">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full rounded-4xl object-cover "
        >
          <source src="/Images/about.mp4" type="video/mp4" />
        </video>

          <div className="absolute inset-0 rounded-4xl bg-gradient-to-b from-black/50 via-black/70 to-black/60" />


      {/* Floating Form With Scroll Animation */}
   <form
  ref={formRef}
  className="
    opacity-0 translate-y-10
    animate-float relative z-30 
    w-[90%] md:w-[70%] lg:w-[55%] max-w-3xl 
    p-8 rounded-xl border-2 border-white 
    bg-white/10 backdrop-blur-xl 
    shadow-[0_0_40px_rgba(255,255,255,0.6)_inset,0_0_20px_rgba(255,255,255,0.90)] 
    flex flex-col gap-5
  "
>
  <div className="text-center text-white text-4xl font-semibold tracking-[6px] drop-shadow-md">
    CONTACT
  </div>

  {/* Name */}
  <input
    type="text"
    placeholder="Your Full Name"
    className="input-box"
  />

  {/* Email */}
  <input
    type="email"
    placeholder="Your Work Email Address"
    className="input-box"
  />

  {/* Company */}
  <input
    type="text"
    placeholder="Company Name"
    className="input-box"
  />

  {/* Role */}
  <input
    type="text"
    placeholder="Your Role (e.g., CEO, Head of Operations)"
    className="input-box"
  />

{/* What do you need help with? (Dropdown) */}
<div className="relative">
  <select
    className="
      input-box
      w-full
      text-black
      appearance-none
      bg-white
      hover:bg-black
      hover:text-white
      transition-all duration-300
      cursor-pointer
    "
  >
    <option value="" disabled selected>
      What do you need help with?
    </option>
    <option className="text-black">I need a full System Audit (Consultation)</option>
    <option className="text-black">I want to build a Custom AI Model</option>
    <option className="text-black">I need help with Infrastructure & Automation</option>
    <option className="text-black">General Inquiry</option>
  </select>


</div>


  {/* Message */}
  <textarea
    placeholder="Briefly describe your biggest operational challenge."
    rows="4"
    className="input-box resize-none"
  ></textarea>

  <button
    className="
      h-14 text-white text-xl tracking-wider 
      border border-white 
      bg-linear-to-r from-black via-neutral-800 to-black
      hover:shadow-[0_0_6px_#fff] 
      hover:scale-[1.03]
      transition-all duration-300
    "
  >
    Submit
  </button>
</form>


      {/* Rays */}
      <div className="relative bottom-0 z-20 animate-rays">
        <svg
          fill="none"
          viewBox="0 0 299 152"
          height="15em"
          width="58em"
          className="w-[20em] md:w-[40em] lg:w-[58em] h-[10em] md:h-[15em] object-contain overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#paint0_linear_8_3)"
            d="M149.5 152H133.42L0 0H149.5H299L165.58 152H149.5Z"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_8_3"
              x1="149.5"
              y1="152"
              x2="150.12"
              y2="12.1981"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f7f0f0"></stop>
              <stop offset="1" stopColor="#65EDFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Disk Image */}
      <div className="relative z-10 -mt-3">
        <Image
          src="/Images/disk.png"
          alt="Hole"
          width={250}
          height={100}
          className="object-cover border-2"
        />
      </div>
    </div>
    </div>
  );
}
