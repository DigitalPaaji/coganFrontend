"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // START LOADING

    try {
      const sendingdata = {
        formdata: formData,
        sendto: ["pahujakashish18@gmail.com"],
        subject: "Cogan.Life Contact Form",
      };

      const res = await fetch("https://mail.zerobugs.cloud/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendingdata),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong!");
      // small shake animation on error
      formRef.current.classList.add("shake");
      setTimeout(() => formRef.current.classList.remove("shake"), 500);
    } finally {
      setLoading(false); // STOP LOADING
    }
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 80, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      <style>{`
        .shake {
          animation: shakeAnim 0.4s ease-in-out;
        }
        @keyframes shakeAnim {
          0% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(-6px); }
          100% { transform: translateX(0); }
        }

        .input-box:focus {
          outline: none !important;
          border-color: #ffffffcc;
          box-shadow: 0 0 12px rgba(255,255,255,0.4);
          backdrop-filter: blur(2px);
        }
      `}</style>

      <div className="m-2 lg:m-4 rounded-4xl border border-amber-400">
        <div className="w-full min-h-screen relative py-20 px-6 lg:px-24 ">

          <img
            src={"/Images/contact.jpg"}
            className="absolute inset-0 w-full h-full rounded-4xl object-cover"
          />

          <div className="absolute inset-0 rounded-4xl bg-linear-to-r from-white/20 via-[#000000cc] to-white/10" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
              opacity-0 translate-y-10
              relative z-30 
              w-[90%] md:w-[70%] lg:w-[55%] max-w-3xl 
              p-8 rounded-xl border-2 border-white 
              bg-white/10 backdrop-blur-xl 
              shadow-[0_0_40px_rgba(255,255,255,0.6)_inset,0_0_20px_rgba(255,255,255,0.90)] 
              flex flex-col gap-5
            "
          >
            <div className="text-center text-white text-3xl lg:text-4xl tracking-[6px] drop-shadow-md">
              CONTACT
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input-box"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Work Email Address"
              className="input-box"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input-box"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="role"
              placeholder="Your Role (e.g., CEO, Head of Operations)"
              className="input-box"
              value={formData.role}
              onChange={handleChange}
            />

            <select
              name="topic"
              className="
                input-box w-full text-black appearance-none 
                hover:bg-black hover:text-white transition-all duration-300 cursor-pointer
              "
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option  className="bg-black/90 text-white hover:bg-white hover:text-white" value="" disabled>
                Select what you need help with
              </option>
              <option className="bg-black/90 text-white hover:bg-white hover:text-white">I need a full System Audit (Consultation)</option>
              <option  className="bg-black/90 text-white hover:bg-white hover:text-white">I want to build a Custom AI Model</option>
              <option  className="bg-black/90 text-white hover:bg-white hover:text-white">I need help with Infrastructure & Automation</option>
              <option  className="bg-black/90 text-white hover:bg-white hover:text-white">General Inquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="Briefly describe your biggest operational challenge."
              rows="4"
              className="input-box resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* LOADING BUTTON */}
            <button
              disabled={loading}
              className={`
                h-14 text-white text-xl tracking-wider 
                border border-white 
                bg-linear-to-r from-black via-neutral-800 to-black cursor-pointer
                transition-all duration-300
                ${loading ? "opacity-70 cursor-not-allowed scale-[1.00]" : "hover:shadow-[0_0_6px_#fff] hover:scale-[1.03]"}
              `}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
