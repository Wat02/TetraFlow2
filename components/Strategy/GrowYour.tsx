"use client";

import React from "react";
import Testamonial from "../ui/Testamonial";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function GrowYour() {
  const cards = [
    {
      id: 1,
      title: "75% Faster GTM",
      desc: "Reduce your go-to-market time from 1 month to just 1 week.",
    },
    {
      id: 2,
      title: "$300K Saved Annually",
      desc: "Significantly cut your yearly development costs with our efficient solutions.",
    },
    {
      id: 3,
      title: "Scalable Solutions",
      desc: "Build with flexibility that grows alongside your business needs.",
    },
    {
      id: 4,
      title: "Seamless Integrations",
      desc: "Connect tools effortlessly for smoother workflows and better ROI.",
    },
    {
      id: 5,
      title: "Dedicated Support",
      desc: "Get expert assistance anytime to keep your project on track.",
    },
  ];

  const buttonsData = [
    [
      {
        label: "Schedule a Consultation",
        text: "Connect with our experts to discuss your project goals and needs.",
      },
    ],
    [
      {
        label: "Get Tailored Solutions",
        text: "Receive personalized recommendations designed to grow your business.",
      },
    ],
    [
      {
        label: "Kickstart Your Project",
        text: "Start with a clear plan and fast onboarding for seamless execution.",
      },
    ],
  ];

  return (
    <section className="pt-[5rem] pb-[5rem] text-[#EBE9E3]">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="mb-[.75rem] text-[2rem] md:text-[3.3rem] leading-[1.1em] font-semibold text-center">
            Driving digital success for your business
          </h2>
          <p className="text-center text-[0.9rem] md:text-[1.2rem] leading-[1.6em]">
            Proven results from real enterprise clients
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-1">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`col-span-12 md:col-span-${
                i < 2 ? 6 : 4
              } border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] p-[2rem] rounded-[8px] mt-[${
                i < 2 ? "3" : "1"
              }rem] ${i === 1 ? "ml-[0.2rem]" : ""} ${
                i === 4 ? "mx-[0.2rem]" : ""
              }`}
            >
              <p className="mb-[2rem] text-[.75rem] leading-[1.6em]">
                0{i + 1}
              </p>
              <h3 className="text-[2rem] md:text-[2.5rem] mb-[.5rem] font-semibold leading-[1.1em]">
                {card.title}
              </h3>
              <p className="text-[0.9rem] md:text-[1rem] leading-[1.6em] w-[80%]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Testamonial />

      <motion.div
        className="col-span-12 pt-[5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="mb-[.75rem] text-[2rem] md:text-[3.3rem] leading-[1.1em] font-semibold text-center">
          Start your project before the next <br />
          bi-weekly meeting.
        </h2>
        <p className="text-center text-[0.9rem] md:text-[1.2rem]  leading-[1.6em]">
          We know speed matters. Thats why weve streamlined our sales <br />{" "}
          onboarding to ensure the quickest, smoothest project launch possible.
        </p>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 mt-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <p className="mb-[2rem] text-[.75rem] leading-[1.6em] ml-[1rem] md:ml-[0rem]">
                0{i + 1}
              </p>
              {buttonsData[i].map(({ label, text }, j) => (
                <div key={j} className="mb-6">
                  <button className="pt-[0.7rem] pb-[0.7rem] pr-[4rem] ml-[1rem] md:ml-[0rem] pl-[4rem] bg-[#FED51C] text-black rounded-[30px] text-[1rem] leading-[1.1em] font-semibold">
                    {label}
                  </button>
                  <p className="mt-2 text-[0.9rem] text-[#EBE9E3] w-[70%] ml-[1rem] md:ml-[0rem]">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrowYour;
