"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function BentoPricing() {
  return (
    <section className="px-4 md:px-0 pt-[1rem]">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-12 gap-[1] md:gap-6">
          {/* Starting Plan */}
          <motion.div
            className="col-span-12 md:col-span-4 border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  mt-10 rounded-lg pb-8 md:pb-0"
            variants={fadeUpVariants}
          >
            <motion.h3
              className="text-4xl leading-tight font-semibold text-[#EBE9E3] max-w-[240px] mx-7 pt-12"
              variants={fadeUpVariants}
            >
              Starting
            </motion.h3>
            <motion.p
              className="mx-7 text-sm md:text-xs text-[#EBE9E3] py-1"
              variants={fadeUpVariants}
            >
              Basic plan — perfect for launching your online business.
            </motion.p>
            <motion.div
              className="flex justify-center pt-3"
              variants={fadeUpVariants}
            >
              <div className="w-11/12 border-t-2 border-[#FED61B]" />
            </motion.div>
            <motion.h3
              className="text-5xl leading-tight tracking-wide text-[#EBE9E3] max-w-[320px] mx-7 mt-8 font-semibold"
              variants={fadeUpVariants}
            >
              2500$
            </motion.h3>
            <motion.p
              className="mx-7 text-base pt-1 leading-relaxed text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              Lifetime Access with One Payment
            </motion.p>

            <motion.div
              className="pt-12 mx-auto w-max md:ml-[18%]"
              variants={fadeUpVariants}
            >
              <button className="bg-[#202020] text-[#EBE9E3] py-4 px-20 rounded-lg hover:bg-yellow-500 transition">
                Email Our Team
              </button>
            </motion.div>

            <motion.div className="mx-7 pt-4" variants={fadeUpVariants}>
              <h3 className="pb-2 font-semibold text-xl leading-relaxed text-[#EBE9E3]">
                Whats included
              </h3>
              <ul className="text-base leading-relaxed text-[#EBE9E3] space-y-1 font-medium">
                <li>Full custom Next.js development (no templates)</li>
                <li>Custom Figma design</li>
                <li>New logo design</li>
                <li>SEO-optimized copywriting</li>
                <li>Professional image sourcing</li>
                <li>Multilingual translation</li>
                <li>12h update response time</li>
                <li>1 month free maintenance</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="col-span-12 md:col-span-4 border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  mt-[1rem] md:mt-10 rounded-lg pb-8 md:pb-5"
            variants={fadeUpVariants}
          >
            <motion.h3
              className="text-4xl leading-tight font-semibold text-[#EBE9E3] max-w-[240px] mx-7 pt-12"
              variants={fadeUpVariants}
            >
              Premium
            </motion.h3>
            <motion.p
              className="mx-7 text-sm md:text-xs py-1 text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              Advanced Plan — built to scale and grow your online business.
            </motion.p>
            <motion.div
              className="flex justify-center pt-3"
              variants={fadeUpVariants}
            >
              <div className="w-11/12 border-t-2 border-[#FED61B]" />
            </motion.div>
            <motion.h3
              className="text-5xl leading-tight tracking-wide text-[#EBE9E3] max-w-[320px] mx-7 mt-8 font-semibold"
              variants={fadeUpVariants}
            >
              4000$
            </motion.h3>
            <motion.p
              className="mx-7 text-base pt-1 leading-relaxed text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              Lifetime Access with One Payment
            </motion.p>

            <motion.div
              className="pt-12 mx-auto w-max md:ml-[18%]"
              variants={fadeUpVariants}
            >
              <button className="bg-[#202020] text-white py-4 px-20 rounded-lg hover:bg-yellow-500 transition">
                Email Our Team
              </button>
            </motion.div>

            <motion.h3
              className="pb-2 font-semibold text-xl leading-relaxed pt-4 mx-7 text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              Adds to Starting Plan:
            </motion.h3>
            <motion.ul
              className="text-base leading-relaxed space-y-1 font-medium mx-7 text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              <li>Social media copywriting</li>
              <li>Email marketing campaigns</li>
              <li>E-brochure, modern business card, and flyer </li>
              <li>Full SMMA management and Google My Business setup</li>
            </motion.ul>

            <motion.h3
              className="pb-2 font-semibold text-xl leading-relaxed mt-6 mx-7 text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              Possible future costs:
            </motion.h3>
            <motion.ul
              className="text-base leading-relaxed space-y-1 font-medium mx-7 text-[#EBE9E3]"
              variants={fadeUpVariants}
            >
              <li>Instagram, Facebook, and Google ads</li>
              <li>TikTok advertising campaigns</li>
              <li>Comprehensive email marketing strategy</li>
              <li>Complete business automation solutions</li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-4 space-y-6 pt-[1rem] md:pt-[2.6rem]"
            variants={fadeUpVariants}
          >
            <motion.div
              className="border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  rounded-lg mt-[1rem] md:mt-0 pb-10 px-6"
              variants={fadeUpVariants}
            >
              <motion.h3
                className="text-3xl leading-tight font-semibold text-[#EBE9E3] max-w-[240px] pt-12"
                variants={fadeUpVariants}
              >
                Schedule a call
              </motion.h3>
              <motion.p
                className="text-sm md:text-[0.9rem] pt-1 pb-1 max-w-lg text-[#EBE9E3]"
                variants={fadeUpVariants}
              >
                Ready to elevate your business? Lets connect and explore how we
                can help you grow.
              </motion.p>
              <motion.div
                className="pt-12 mx-auto w-max"
                variants={fadeUpVariants}
              >
                <button className="bg-[#202020] text-[#EBE9E3] py-4 px-20 rounded-lg hover:bg-yellow-500 transition">
                  Send us Email
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  rounded-lg pb-10 px-6"
              variants={fadeUpVariants}
            >
              <motion.h3
                className="text-2xl leading-tight font-semibold text-[#EBE9E3] w-[90%] pt-12"
                variants={fadeUpVariants}
              >
                Pricing tailored specifically to fit your local market.
              </motion.h3>
              <motion.p
                className="text-sm md:text-xs pt-1 pb-1 max-w-md text-[#EBE9E3]"
                variants={fadeUpVariants}
              >
                We ensure you receive the most competitive pricing in your area.
              </motion.p>
              <motion.div
                className="pt-12 mx-auto w-max"
                variants={fadeUpVariants}
              >
                <button className="bg-[#202020] text-[#EBE9E3] py-4 px-20 rounded-lg hover:bg-yellow-500 transition">
                  Send us Email
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-lg pb-[4.4rem] px-6 flex items-center justify-center"
              variants={fadeUpVariants}
            >
              <motion.h3
                className="text-2xl leading-tight font-semibold text-[#EBE9E3] max-w-xl pt-[20%] text-center"
                variants={fadeUpVariants}
              >
                Have questions? Reach out to us anytime.
              </motion.h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default BentoPricing;
