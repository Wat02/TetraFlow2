"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// const iconVariant = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

function OneStep() {
  return (
    <section className="pt-[2rem] md:pt-20 text-[#EBE9E3] ">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <motion.div
            variants={fadeUpVariant}
            className="md:col-span-12 space-y-6"
          >
            <p className="text-xl md:text-2xl font-medium">
              Complete solutions for your social media presence
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl">
              Complete Social Media Solutions Built to Scale and Drive Growth —
              Starting Now
            </h2>
            <p className="text-base md:text-lg text-[#b6b1c0] max-w-2xl ml-auto pt-6">
              GTM leaders choose TetraFlow to migrate and scale their social
              media presence. They leverage our full team of consultants, visual
              designers, developers, and growth experts. Together, we deliver
              seamless growth and lasting impact.
            </p>
          </motion.div>

          {/* Platform Icons/Text */}
          {/* {["Instagram", "Facebook", "Tiktok", "Google"].map((platform, i) => (
            <motion.div
              key={platform}
              className="md:col-span-3 text-center pt-16"
              variants={iconVariant}
            >
              <h3 className="text-xl font-semibold tracking-wide">
                {platform}
              </h3>
            </motion.div>
          ))} */}
        </motion.div>

        {/* Closing Text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-xl md:text-2xl font-medium text-center pt-24"
        >
          Complete digital presence and beyond.
        </motion.p>
      </div>
    </section>
  );
}

export default OneStep;
