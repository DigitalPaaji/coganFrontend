'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -45
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const text = "We integrate your scattered business tools and deploy custom AI to eliminate friction and drive efficiency.";

  // Split text into words for individual animation
  const words = text.split(' ');

  return (
    <section 
      ref={ref}
      className="py-24 bg-white flex items-center justify-center px-4 relative"
    >
      <div className=" mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          <div className="bangers-regular flex flex-wrap justify-center gap-x-3 gap-y-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="  inline-block bg-gradient-to-r from-gray-800 via-black to-gray-900 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: index % 2 === 0 ? '0% 50%' : '100% 50%'
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            <b>We Handle the Grunt Work.</b> <br /><br />
We are the architects who integrate your systems and deploy AI to handle the grunt work. We build things that change everything for small businesses - System Network , Custom AI Agents 
          </p>
        </motion.div>


       
      </div>

      <div>


        
      </div>
    </section>
  );
}

export default TextSection;