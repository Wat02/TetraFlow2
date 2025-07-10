"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const AnimateIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

function OurServices() {
  const servicesRow1 = [
    "UI/UX Design",
    "Next.js Development",
    "On-Page SEO",
    "Website Migration",
    "Logo Design",
    "Web Translation",
    "Email Marketing",
  ];

  const servicesRow2 = [
    "Google My Business Management",
    "Google Ads Campaigns",
    "TikTok Advertising",
    "Business Automation",
    "Copywriting for All Platforms",
    "Full Social Media Marketing (SMMA)",
    "Physical Marketing Materials",
  ];

  return (
    <section className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        {/* <AnimateIn> */}
        <h2 className="text-3xl md:text-5xl text-center text-[#EBE9E3] font-bold leading-tight mb-10">
          Our services grow as your business does
        </h2>
        {/* </AnimateIn> */}

        {/* Services Row 1 */}
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {servicesRow1.map((service, i) => (
              <motion.button
                key={i}
                className="text-[#EBE9E3] border border-white hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] px-5 py-2 text-lg rounded-full whitespace-nowrap"
                variants={fadeUp(0.05 * i)}
                initial="hidden"
                animate="visible"
              >
                {service}
              </motion.button>
            ))}
          </div>
        </AnimateIn>

        {/* Services Row 2 */}
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {servicesRow2.map((service, i) => (
              <motion.button
                key={i}
                className="text-white border border-white  hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  px-5 py-2 text-lg rounded-full whitespace-nowrap"
                variants={fadeUp(0.05 * i)}
                initial="hidden"
                animate="visible"
              >
                {service}
              </motion.button>
            ))}
          </div>
        </AnimateIn>

        {/* Referral Section */}
        <AnimateIn delay={0.3}>
          <div className="bg-[#B6274B] text-center py-10 px-4 rounded-lg mt-10">
            <h3 className="text-2xl font-semibold text-[#EBE9E3] mb-2">
              Refer & Earn 5%
            </h3>
            <p className="text-[#EBE9E3]">
              Get 5% commission on all future purchases from clients you refer.
            </p>
            <h2 className="pt-4 underline underline-offset-8 text-[#EBE9E3] cursor-pointer">
              Contact us via email to get started.
            </h2>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default OurServices;
