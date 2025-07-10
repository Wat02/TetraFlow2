"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Item = {
  title: string;
  hoverTitle: string;
  image: string;
};

const items: Item[] = [
  {
    title: "01: Web Design",
    hoverTitle: "Unleash AI Power",
    image: "/ui.jpg",
  },
  {
    title: "02: Web Development",
    hoverTitle: "Elevate Your Brand",
    image: "/homeDecor.png",
  },
  {
    title: "03: Social Media Marketing",
    hoverTitle: "Drive Sales",
    image: "/OurTeam.jpg",
  },
  {
    title: "04: Business Automation",
    hoverTitle: "Engage Customers",
    image: "/assets/background.jpg",
  },
  {
    title: "05: Google, Facebook, Tikok, Instagram Ads",
    hoverTitle: "Google,",
    image: "/marketing.jpg",
  },
  {
    title: "06: Website transfer",
    hoverTitle: "Elevate Your Brand",
    image: "/websiteTransfer.jpg",
  },
];

export default function HoverReveal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Text List */}
      <motion.div className="flex flex-col gap-8" variants={containerVariants}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-fit h-[44px] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={itemVariants}
          >
            <motion.div
              initial={false}
              animate={{
                y: hoveredIndex === index ? "-100%" : "0%",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <h1 className="text-[1.8rem] md:text-[2.5rem] font-semibold text-white ml-[1rem] md:ml-[1rem]">
                {item.title}
              </h1>
              <span className="text-[2.5rem] font-semibold leading-tight text-[#FED61B]">
                {item.hoverTitle}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Reveal */}
      <motion.div
        className="relative w-full max-w-[500px] h-[320px] rounded-lg overflow-hidden shadow-2xl"
        variants={itemVariants}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={items[hoveredIndex].image}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={items[hoveredIndex].image}
                alt={items[hoveredIndex].hoverTitle}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover rounded-lg"
                priority={hoveredIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
