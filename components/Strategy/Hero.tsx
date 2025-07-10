"use client";

import React from "react";
import Image from "next/image";
import ui from "@/public/ui.jpg";
import { motion } from "framer-motion";

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
  },
};

function Hero() {
  return (
    <section className=" text-[#EBE9E3] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Animated Text */}
          <motion.div
            className="md:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textVariant}
          >
            <motion.span
              variants={itemVariant}
              className="inline-block px-6 py-2 border border-white text-sm font-semibold rounded-full tracking-wide"
            >
              ★ Top-Rated 4.5-Star Agency
            </motion.span>

            <motion.h1
              variants={itemVariant}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-xl"
            >
              Full-service social media tailored for your business
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="text-base sm:text-lg text-[#b6b1c0] leading-relaxed max-w-lg"
            >
              Trusted by clients worldwide, we deliver top-quality digital
              solutions with a 4.5-star rating for excellence and reliability.
            </motion.p>

            <motion.a
              variants={itemVariant}
              href="#services"
              className="inline-block text-lg font-medium underline underline-offset-8 hover:text-white transition"
            >
              Explore services
            </motion.a>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="md:col-span-6 flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={imageVariant}
          >
            <div className="w-full max-w-[550px] rounded-2xl overflow-hidden shadow-xl border border-[#343436]">
              <Image
                src={ui}
                alt="UI Preview"
                width={550}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
