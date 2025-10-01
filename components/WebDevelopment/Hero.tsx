"use client";

import Image from "next/image";
import ourTeam from "@/public/OurTeam.jpg";
import { motion } from "framer-motion";
import React from "react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const fadeInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

function Hero() {
  return (
    <section className=" text-[#EBE9E3] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            className="col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0)}
          >
            <button className="rounded-[1.875rem] px-4 py-2 border border-white text-white mb-4">
              Next.js Agency for Scalable Web Solutions
            </button>
          </motion.div>

          <motion.div
            className="col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.2)}
          >
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-semibold leading-tight max-w-4xl">
              Migrate growth-ready marketing websites
            </h2>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight(0.4)}
          >
            <p className="tracking-wide text-[1rem] leading-[1.7em] w-[98%] md:w-full mt-4">
              Reduce time-to-market, boost performance, and lower costs with a
              scalable, pixel-perfect Next.js solution—built for effortless
              management and limitless growth.
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6 flex justify-start md:justify-center items-start gap-6 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft(0.6)}
          >
            <button className="text-black bg-[#FED71A] text-[1.125rem] font-medium py-3 px-6 rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
              Send us Email
            </button>
            <p className="text-black text-[1.125rem] font-medium underline underline-offset-8 pt-3 cursor-pointer hover:text-yellow-500 transition-colors duration-300">
              Send us Email
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Image
              src={ourTeam}
              height={1500}
              width={1500}
              alt="team photo"
              className="rounded-2xl w-full object-cover shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
