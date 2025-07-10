"use client";

import React from "react";
import { motion } from "framer-motion";
import HoverReveal from "../ui/HoverReveal";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function Service() {
  return (
    <section>
      <motion.div
        className="mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold pl-[6%] md:pl-[3rem] text-white pt-[15%]">
                <span className="text-[2rem] md:text-[4rem]  leading-[1.1em] font-semibold">
                  Problems
                </span>{" "}
                We Solve Together
              </p>
            </motion.div>
            <p className="text-[1rem] md:text-[1.3rem] leading-[1.1em] font-black pl-[6%] md:pl-[3rem] text-white pt-[1.5rem]">
              Click or hover to explore 😌
            </p>
            <div className="flex items-center justify-center pt-[3%]">
              <div className="w-[95%] border-t-2 border-[#FED61B]" />
            </div>
            <div className="pl-[2.5%] pt-[4%]">
              <HoverReveal />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Service;
