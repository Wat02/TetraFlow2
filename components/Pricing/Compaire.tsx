"use client";

import React from "react";
import { motion } from "framer-motion";
import Testamonial from "../ui/Testamonial";
import Traffic from "@/components/LandingPage/Trafic";

const features = [
  "Features",
  "Cost",
  "Time to start",
  "Efficiency",
  "Roadmap",
  "Prior experience",
  "Risk of Project Dropout",
];

const compareData = [
  {
    title: "TetraFlow",
    borderColor: "border-yellow-400",
    bgColor: "bg-[#1a1a1a]",
    details: [
      "Full expert Next.js development team at the cost of hiring one person",
      "Instant project kickoff with streamlined onboarding",
      "Highly trained professionals delivering immediate, high-quality results",
      "Clearly defined project roadmap from day one for total transparency",
      "Over 200 successful projects completed, backed by extensive experience",
      "Zero project dropouts — we finish every project we start",
    ],
  },
  {
    title: "Freelancers",
    borderColor: "border-gray-700",
    bgColor: "bg-[#121212]",
    details: [
      "Limited capacity and expertise compared to a full team",
      "Unpredictable start times and variable availability",
      "Less structured processes and unclear project roadmaps",
      "Fewer completed projects and higher risk of delays",
      "Often lack specialized Next.js knowledge",
      "Potential for dropped projects or missed deadlines",
    ],
  },
  {
    title: "Other Agencies",
    borderColor: "border-gray-700",
    bgColor: "bg-[#121212]",
    details: [
      "Higher costs with larger teams but less flexibility",
      "Longer onboarding and slower project starts",
      "Varying experience and inconsistent results",
      "Less transparent timelines and project roadmaps",
      "Sometimes limited Next.js specialization",
      "Occasional communication issues and delayed deliveries",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Compaire() {
  return (
    <section className="pt-20 px-6 md:px-12 mx-auto text-[#EBE9E3] relative">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg font-semibold uppercase tracking-wide text-[#CCCFD5]">
          See the difference
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
          <span className="text-[#FED51C]">TetraFlow</span> vs Others
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Features Column (desktop only) */}
        <div className="hidden md:flex flex-col min-w-[180px] space-y-16 text-[#9FA4A8] font-medium tracking-wide text-base pt-[11%]">
          {features.map((feature) => (
            <div key={feature} className="relative pl-4">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-[#FED51C] rounded-full" />
              {feature}
            </div>
          ))}
        </div>

        {/* Comparison Cards - vertical on mobile, grid on desktop */}
        <div className="grid gap-6 md:grid-cols-3 w-full">
          {compareData.map(({ title, borderColor, bgColor, details }) => (
            <motion.div
              key={title}
              className={`border ${borderColor} rounded-xl ${bgColor} px-6 py-10 shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-500 cursor-default`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-12 tracking-wide">
                {title}
              </h3>

              <ul className="space-y-10 text-center">
                {details.map((detail, i) => (
                  <li
                    key={i}
                    className="relative text-sm md:text-base leading-relaxed"
                  >
                    <span className="inline-block w-full">{detail}</span>
                    {i < details.length - 1 && (
                      <hr className="border-t border-[#2A2A2A] mt-6" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <Testamonial />
      <Traffic />
    </section>
  );
}
