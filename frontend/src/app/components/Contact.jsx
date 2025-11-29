"use client";
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-end relative py-20 bg-black">
      {/* Floating Form */}
      <form
        className="
          animate-float relative z-30 
          w-[90%] 
          md:w-[70%] 
          lg:w-[55%] 
          max-w-3xl 
          p-8 
          rounded-xl 
          border border-white 
          bg-white/10 
          backdrop-blur-md 
          shadow-[0_0_40px_rgba(255,255,255,0.2)_inset,0_0_20px_rgba(255,255,255,0.15)] 
          flex flex-col gap-5
        "
      >
        <div className="text-center text-white text-4xl font-semibold tracking-[6px] drop-shadow-md">
          CONTACT
        </div>

        {/* Inputs */}
        <input type="text" placeholder="Full Name" className="input-box" />
        <input type="email" placeholder="Email Address" className="input-box" />
        <input type="text" placeholder="Phone Number" className="input-box" />
        <input type="text" placeholder="Subject" className="input-box" />
        <textarea
          placeholder="Message"
          rows="4"
          className="input-box resize-none"
        ></textarea>

        <button
          className="
            h-14 
            text-white 
            text-xl 
            tracking-wider 
            border border-white 
            bg-gradient-to-r from-black via-neutral-800 to-black
            hover:shadow-[0_0_6px_#fff] 
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          Send Message
        </button>
      </form>
      {/* Rays */}{" "}
      <div className="relative -bottom-6 z-20 animate-rays">
        {" "}
        <svg
          fill="none"
          viewBox="0 0 299 152"
          height="9em"
          width="58em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            fill="url(#paint0_linear_8_3)"
            d="M149.5 152H133.42L0 0H149.5H299L165.58 152H149.5Z"
          ></path>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_8_3"
              x1="149.5"
              y1="152"
              x2="150.12"
              y2="12.1981"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#00E0FF"></stop>{" "}
              <stop offset="1" stopColor="#65EDFF" stopOpacity="0"></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
        </svg>{" "}
      </div>{" "}
      {/* Emitter */}{" "}
      {/* <div className="relative -mt-4 z-10">
        {" "}
        <svg
          fill="none"
          viewBox="0 0 160 61"
          height="61"
          width="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
        </svg>{" "}
      </div> */}
      {/* Bottom Image Instead of SVG */}
      <div className="relative -mt-4 z-10 opacity-80">
        <Image
          src="/Images/hole.png"
          alt="Hole"
          width={250}
          height={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}
