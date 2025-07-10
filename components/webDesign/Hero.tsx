"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ScrollAreaHorizontalDemo } from "@/components/ui/Horizontal";
import { FlipWordsDemo } from "../ui/FlipWord";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="pt-[4rem]">
      <motion.div
        className="container mx-auto text-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <div className="justify-center flex mx-auto">
              <button
                className="border-[.0625rem] border-[[#EBE9E3] rounded-[6.25rem] pr-[.90rem] pl-[.90rem] pt-[.70rem] pb-[.70rem] text-[#EBE9E3]"
                type="button"
              >
                Expert B2B Next.js Design Agency
              </button>
            </div>

            <motion.h2
              variants={fadeSlideUp}
              className="text-[3rem] md:text-[5rem] leading-[1.1em] font-semibold pt-[1.5rem] pb-[1.2rem] text-[#EBE9E3] "
            >
              <span className="inline-flex items-center">
                <FlipWordsDemo />
              </span>{" "}
              Web Design <br /> Made{" "}
              <span className="text-[#FED51C] font-bold uppercase">
                to Convert
              </span>
            </motion.h2>

            <motion.p
              variants={fadeSlideLeft}
              className="text-[0.9rem] md:text-[1rem] leading-[1.6em] tracking-[.03em] text-[#EBE9E3]"
            >
              Elevate your brand with conversion-driven design that connects
              with your audience, <br />
              shares your story, and delivers qualified MQLs straight to your
              pipeline.
            </motion.p>

            <motion.div
              variants={fadeSlideUp}
              className="flex flex-row justify-center mx-auto pt-[2rem] gap-8"
            >
              <button
                className="bg-[#FED51C] pt-[0.5rem] md:pt-[1.25rem] pb-[0.5rem] md:pb-[1.1em] pr-[0.5rem] md:pr-[2rem] pl-[0.5rem] md:pl-[2rem] leading-[1em] text-[1.2rem] md:text-[1.25rem] font-semibold rounded-[5px] ml-[1rem] md:ml-[0]"
                type="button"
              >
                Email Our Team
              </button>
              <h4 className="underline underline-offset-8 pt-[1rem] text-[1rem] md:text-[1.2rem] font-semibold text-[#EBE9E3]">
                Discover Our Design Services
              </h4>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="pt-[4rem]"
      >
        <ScrollAreaHorizontalDemo />
      </motion.div>
    </section>
  );
}

export default Hero;
