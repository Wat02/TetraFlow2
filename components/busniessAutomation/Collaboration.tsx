"use client";

import { collabContent, collabText, collabApps } from "@/constants";
import React from "react";
import Image from "next/image";
import { brainwaveSymbol, check } from "@/public/assets";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Collaboration() {
  return (
    <section className="pt-[100px] text-[#EBE9E3]">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex lg:gap-20">
        <motion.div
          className="max-w-[25rem]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-[1.75rem] leading-[2.5rem] md:text-[3rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8"
          >
            AI Chat App for seamless collaboration
          </motion.h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[22rem] mb-10 md:mb-14"
          >
            {collabContent.map((item) => (
              <motion.li key={item.id} variants={fadeUp} className="mb-3 py-3">
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="check" />
                  <h6 className="text-[1.5rem] leading-[1.1em] font-semibold ml-5">
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p className="font-light text-[0.9rem] leading-[1.6em] mt-3 text-n-4">
                    {item.text}
                  </p>
                )}
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            variants={fadeUp}
            className="bg-[#FFFFFF] pt-[10px] pb-[10px] pl-[30px] pr-[30px] text-black rounded-md"
          >
            Try it now
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:ml-auto xl:w-[38rem] mt-12 lg:mt-0"
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative left-1/2 flex w-[22rem] aspect-square border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100"
          >
            <div className="flex w-60 aspect-square m-auto border border-[#343436] border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * (360 / collabApps.length)
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] rounded-xl -rotate-${
                      index * (360 / collabApps.length)
                    }`}
                  >
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Collaboration;
