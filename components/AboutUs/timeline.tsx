"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Analysis",
    description:
      "We dive deep into your brand to uncover its core message and guide the strategy forward.",
  },
  {
    title: "Concept",
    description:
      "We develop custom concepts that bring your vision to life with compelling visual mood boards.",
  },
  {
    title: "Budgeting",
    description:
      "Our pricing is clear and transparent—no surprises, just honest value.",
  },
  {
    title: "Execution & Review",
    description:
      "We deliver engaging content and measure results to optimize ongoing success.",
  },
];

const wordAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 20,
  });
  const svgParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const svgParallaxSpring = useSpring(svgParallax, {
    stiffness: 80,
    damping: 18,
  });

  const headline = "about us";
  const words = headline.split(" ");

  return (
    <section
      ref={containerRef}
      className=" text-white py-20 px-6 sm:px-12 md:px-20 lg:px-28 font-sans relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-[3.75rem] sm:text-6xl md:text-7xl lg:text-[8rem] font-extrabold mb-12 tracking-tight"
          aria-label={headline}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordAnimation}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-block", marginRight: "0.5ch" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-base sm:text-lg font-medium tracking-wide">
          Based in Niš
        </p>
        <p className="text-base sm:text-lg font-medium tracking-wide mb-[1rem] md:mb-8">
          Serving Worldwide
        </p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[1.1rem] md:text-[1.5rem] sm:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          TetraFlow is a dynamic team of Next.js developers, designers,
          marketers, and strategists passionate about creating custom digital
          experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[0.9rem] text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          We craft unique, high-impact solutions tailored to each clients brand,
          combining creativity with cutting-edge technology to deliver websites
          and campaigns that truly stand out. Our diverse expertise ensures
          fresh perspectives and exceptional results—turning visitors into loyal
          customers and projects into lasting success stories.
        </motion.p>
      </div>

      <div className="relative mt-32 max-w-7xl mx-auto ">
        <motion.svg
          viewBox="0 0 400 1000"
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[60vw] max-w-[400px] h-[1000px] z-0 select-none pointer-events-none hidden md:block"
          preserveAspectRatio="xMidYMin slice"
          aria-hidden="true"
          focusable="false"
          style={{ y: svgParallaxSpring }}
        >
          <motion.path
            d="M 200 0 C 300 150, 100 300, 200 450 S 300 750, 200 1000"
            stroke="#FED51C"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </motion.svg>

        <div className="relative z-10 flex flex-col gap-32 mt-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:items-start md:gap-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.25 }}
            >
              <div className="max-w-md">
                <h3 className="text-white text-xl font-semibold capitalize tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
