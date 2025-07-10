"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: (direction: "left" | "right" | "up" | "scale") => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "up":
        return { opacity: 0, y: 50 };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function PricingHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-12 gap-1 text-center pt-[3rem]"
        >
          {/* Yellow small text from left */}
          <p className="col-span-12 text-[#FED51C] text-[1.125rem] leading-[1em] font-semibold">
            Next.js Development Packages
          </p>

          {/* Main heading from right */}
          <motion.h1
            custom="right"
            variants={textVariants}
            className="col-span-12 text-[2rem] md:text-[4rem] leading-[1.1em] mt-[0.5rem] mb-[1rem] text-[#EBE9E3]"
          >
            One subscription. <br /> Total growth support.
          </motion.h1>

          {/* Paragraph block scaling up */}
          <motion.div
            custom="scale"
            variants={textVariants}
            className="col-span-12 max-w-2xl mx-auto"
          >
            <p className="text-[1.25rem] leading-[1.6em] text-[#EBE9E3] mt-[1rem]">
              Build a high-performing website that drives real results. Get full
              access to GTM strategy, digital design, Next.js development, SEO,
              and more—powered by our expert in-house team for faster, smarter,
              and scalable growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero;
