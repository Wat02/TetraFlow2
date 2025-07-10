"use client";

import React from "react";
import Heading from "./Heading";
import { roadmap } from "@/constants";
import { check2, grid, loading1 } from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import brackets from "@/public/assets/svg/Brackets";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imagePopVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Roadmap() {
  return (
    <section className="overflow-hidden pt-[100px] text-[#EBE9E3]" id="roadmap">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] md:pb-10">
        <Heading
          tag="Ready to get started"
          title="What were working on"
          className={""}
          text={""}
        />

        <motion.div
          className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <motion.div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful
                    ? "border border-[#FED51C] hover:border-[#343436] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                    : "border border-[#343436] hover:border-[#B5274B] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] "
                }`}
                key={item.id}
                variants={itemVariants}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full pointer-events-none select-none">
                    <Image
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                      priority
                    />
                  </div>
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <div className={`tagline flex items-center`}>
                        {brackets("left")}
                        <div className="mx-3">{item.date}</div>
                        {brackets("right")}
                      </div>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <Image
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    {/* Image with pop animation */}
                    <motion.div
                      className="mb-10 -my-10 -mx-15"
                      variants={imagePopVariants}
                    >
                      <Image
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                        priority
                      />
                    </motion.div>

                    <motion.h4
                      className="text-[2rem] leading-[1.1em] mb-4"
                      variants={itemVariants}
                    >
                      {item.title}
                    </motion.h4>

                    <motion.p
                      className="text-[#706E82] text-n-4"
                      variants={itemVariants}
                    >
                      {item.text}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <button className="bg-[#FFFFFF] pt-[10px] pb-[10px] pl-[30px] pr-[30px] text-black rounded-md">
            Our roadmap
          </button>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
