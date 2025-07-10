"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { curve, robot } from "@/public/assets";
import Generating from "./Generating";
import { heroIcons } from "@/constants";
import Notification from "@/components/busniessAutomation/Notification";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  // Ref for the image container to base scroll progress on
  const ref = useRef<HTMLDivElement>(null);

  // Get scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for main robot image (move vertically on scroll)
  const robotY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Smaller parallax for icons (move horizontally on scroll)
  const iconsX = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const notificationX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="pt-[6rem] text-[#EBE9E3] ">
      <div className="container mx-auto relative px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36">
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-[1.5rem] text-[2.5rem] md:text-[3.8rem] leading-[2.8rem] md:leading-[4.75rem] font-semibold w-full max-w-full">
            Explore the Possibilities of&nbsp;AI&nbsp;Automation with{" "}
            <span className="inline-block relative">
              TetraFlow{" "}
              <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-[1.2rem] leading-[1.75rem] max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 pt-[1rem] w-[70%]">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <button className="bg-[#FFFFFF] pt-[10px] pb-[10px] pl-[30px] pr-[30px] text-black rounded-md hover:bg-gray-200 transition">
            Get started
          </button>
        </div>

        {/* Image & overlays with parallax */}
        <div
          ref={ref}
          className="w-[90%] mx-auto relative z-0 select-none"
          aria-label="AI robot illustration"
        >
          <div className="relative p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative">
                {/* Main robot image with vertical parallax */}
                <motion.div style={{ y: robotY }} className="absolute inset-0">
                  <Image
                    src={robot}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />
                </motion.div>

                {/* Generating component absolutely positioned */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Hero Icons with horizontal parallax */}
                <motion.ul
                  style={{ x: iconsX }}
                  className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[#2f2a3e] backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                  aria-label="Hero feature icons"
                >
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <Image
                        src={icon}
                        width={24}
                        height={25}
                        alt={`Icon ${index + 1}`}
                      />
                    </li>
                  ))}
                </motion.ul>

                {/* Notification box with opposite horizontal parallax */}
                <motion.div
                  style={{ x: notificationX }}
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  aria-label="Notification box"
                >
                  <Notification title="Code generation" className={""} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
