"use client";

import React from "react";
import { motion } from "framer-motion";

const popInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function BentoWeb() {
  return (
    <section>
      <div className="container mx-auto px-4 text-[#EBE9E3]">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            className="col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popInVariant}
          >
            <h2 className="font-bold text-[2rem] md:text-[3.5rem] leading-[1.1em] w-full md:w-[55%] mx-auto md:ml-0 pt-[5rem] pb-[2rem] md:pb-[0]">
              Boundary-Breaking Next.js Agency
            </h2>
          </motion.div>

          {[
            {
              id: "01",
              title: "Proven with enterprise-level projects",
              description:
                "Though we're a young team, we've successfully tackled complex builds. We move fast, avoid bottlenecks, and deliver custom, high-impact results—without the overhead.",
              col: "md:col-span-6",
            },
            {
              id: "02",
              title: "Complex sites made simple.",
              description:
                " We create user-friendly, scalable websites designed for marketing teams—easy to manage and built to keep GTM experts ahead of the curve.",
              col: "md:col-span-3",
            },
            {
              id: "03",
              title: "Build to scale",
              description:
                "Websites crafted the right way—scalable, high-performance solutions built to manage 150k+ CMS items effortlessly.",
              col: "md:col-span-3",
            },
            {
              id: "04",
              title: "QA & SEO Optimization",
              description:
                "Pixel-perfect sites optimized for Google. Every launch is vetted by our in-house SEO and QA experts for flawless performance.",
              col: "md:col-span-3",
            },
            {
              id: "05",
              title: "Crafted to expand",
              description:
                "Our solutions grow with your business, ensuring seamless scalability and lasting performance every step of the way.",
              col: "md:col-span-3",
            },
            {
              id: "06",
              title: "Smooth Onboarding & Learning",
              description:
                "We help you improve results by sharing proven strategies and best practices. Our guidance empowers you to attract more leads and grow your business with confidence.",
              col: "md:col-span-6",
            },
          ].map(({ id, title, description, col }, i) => (
            <motion.div
              key={i}
              className={`col-span-12 ${col} border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] pt-6 pr-6 pl-6 pb-16 rounded-[8px]`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popInVariant}
              transition={{ delay: 0.15 * i }}
            >
              <p className="mb-4 text-[0.75rem] leading-[1.6em]">{id}</p>
              <h3 className="text-[1.5rem] md:text-[2rem] leading-[1.2em] mb-3 font-semibold">
                {title}
              </h3>
              <p className="text-[1rem] leading-[1.6em] tracking-[0.03em]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BentoWeb;
