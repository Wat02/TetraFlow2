"use client";

import React from "react";
import Design from "../webDesign/Design";
import { motion } from "framer-motion";

const headingVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 * custom,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  }),
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + 0.15 * custom,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Finding() {
  return (
    <section className="pt-[2rem] md:pt-[7rem] px-6 sm:px-10 md:px-16 lg:px-24 min-h-screen">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            className="col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              custom={0}
              variants={headingVariant}
              className="text-[#FED61B] uppercase font-extrabold leading-[1.1em] text-[3rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] max-w-full select-none"
            >
              #findingmy
            </motion.h2>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6 flex items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              custom={1}
              variants={paragraphVariant}
              className="text-white text-[1rem] md:text-[1.2rem] sm:text-[1.3rem] leading-[1.6em] ml-0 md:ml-[4rem] max-w-[90%] md:max-w-[85%]"
            >
              Meet our teams inspiring stories. See the passion behind their
              work and get a glimpse of their lives beyond the office.
            </motion.p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6 flex items-center justify-start md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              custom={2}
              variants={headingVariant}
              className="text-white font-extrabold hidden md:block leading-[1em] text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] select-none max-w-full"
            >
              Flow
            </motion.h2>
          </motion.div>

          <div className="col-span-12  mt-8">
            <Design />
          </div>

          <motion.p
            className="col-span-12 text-white text-center pt-12 text-[1.3rem] leading-[1.2em] underline cursor-pointer select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            learn more
          </motion.p>
        </div>
      </div>
    </section>
  );
}
