"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Testamonial from "../ui/Testamonial";

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const steps = [
  "Discovery & Research",
  "Concept & wireframing",
  "Design & prototyping",
  "Handoff & implementation",
];

const Enterprise: React.FC = () => (
  <section className="pt-32 px-4 md:px-8 text-[#EBE9E3]">
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="text-center">
        <h2 className="text-[2rem] md:text-[4rem] font-semibold leading-tight">
          Enterprise-tested design process that delivers results
        </h2>
        <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-relaxed tracking-wide">
          These B2B brands have embraced TetaFlow design philosophy <br />
          to elevate their online presence and drive website growth.
        </p>
      </header>

      {/* Process Cards */}
      <motion.div
        className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step}
            variants={cardVariant}
            transition={{ delay: idx * 0.15 }}
            className={`flex flex-col p-6 bg-transparent rounded-lg border ${
              idx % 2
                ? "border-[#FDD51C] hover:border-[#B5274B] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] "
                : "border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] "
            }`}
          >
            <h5 className="text-[1.5rem] font-semibold leading-snug mb-3">
              {step}
            </h5>
            <p className="text-[0.7rem] md:text-[0.9rem] w-[90%] leading-relaxed flex-grow">
              Step {idx + 1}: {step} — An in-depth exploration of how this phase
              fuels powerful, enterprise-level design solutions.
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Referral CTA */}
      <div className="mt-16 bg-[#B6274B] text-center py-12 rounded-lg">
        <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
          Refer us & earn 5% from recommendation
        </h3>
        <p className="mb-4 ">
          Earn 5% for every new client from your referrals.
        </p>
        <button className="underline underline-offset-8 text-[#EBE9E3]">
          Send us email
        </button>
      </div>

      {/* Testimonial */}
      <div className="mt-16">
        <Testamonial />
      </div>
    </div>
  </section>
);

export default Enterprise;
