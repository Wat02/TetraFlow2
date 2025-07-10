"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const NextExperts: React.FC = () => {
  const features = [
    {
      title: "Stress-Free Process",
      text: `Managing a Next.js project can be overwhelming, but our dedicated project managers ensure everything runs smoothly from start to finish.`,
    },
    {
      title: "Proactive Growth",
      text: `Not sure what to improve? We take initiative, recommending upgrades that boost your sites performance and growth.`,
    },
    {
      title: "Rapid Bug Fixes",
      text: `Our full in-house team is ready to tackle any issue, day or night, to keep your project running flawlessly.`,
    },
    {
      title: "Transparent Progress",
      text: `With our custom project platform, Notion, you can easily track every task and milestone in real time.`,
    },
  ];

  return (
    <section className="pt-12 md:pt-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Section Title */}
          <div className="col-span-12">
            {/* <AnimatedElement> */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#EBE9E3] max-w-[90%] md:max-w-[65%]">
              Partner with Next.js <span className="text-[#FED51C]">pros</span>{" "}
              focused on your <span className="font-bold">success</span>
            </h2>
            {/* </AnimatedElement> */}
          </div>

          {/* Feature Cards */}
          {features.map((item, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-3 text-[#EBE9E3] pt-10 md:pt-16"
            >
              <AnimatedElement delay={index * 0.2}>
                <h3 className="text-xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#C1C1C1] pt-4 w-[90%]">
                  {item.text}
                </p>
              </AnimatedElement>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextExperts;
