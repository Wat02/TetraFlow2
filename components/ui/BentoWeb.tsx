"use client";

import React from "react";
import { motion } from "framer-motion";

function BentoWeb() {
  const items = [
    {
      id: "01",
      title: (
        <>
          Conversion-
          <br />
          driven design
        </>
      ),
      description:
        "More than just visuals, TetraFlow delivers strategic design solutions that boost website conversions and enhance the user journey.",
      borderColor: "border-[#FDD41D]",
      widthClass: "w-[65%]",
      marginTop: "mt-[4rem]",
      marginRight: "mr-[5px]",
      colSpanMd: 6,
    },
    {
      id: "02",
      title: (
        <>
          User-facing <br /> approach
        </>
      ),
      description:
        "Crafting websites centered on end-users, applying proven UX/UI methods to ensure seamless experiences and higher retention.",
      borderColor: "border-[#343436]",
      widthClass: "w-full",
      marginTop: "mt-[4rem]",
      marginRight: "mr-[5px]",
      colSpanMd: 3,
    },
    {
      id: "03",
      title: "Quick turnaround",
      description:
        "We know fast time-to-market matters. No more waiting weeks or months for a simple component or landing page to be designed.",
      borderColor: "border-[#343436]",
      widthClass: "w-full",
      marginTop: "mt-[4rem]",
      marginRight: "",
      colSpanMd: 3,
    },
    {
      id: "04",
      title: <>Scalable systems</>,
      description:
        "Creating future-proof, component-based systems that let you scale design smoothly—no bottlenecks, just peace of mind.",
      borderColor: "border-[#343436]",
      widthClass: "w-full",
      marginTop: "mt-[1rem]",
      marginRight: "mr-[5px]",
      colSpanMd: 3,
    },
    {
      id: "05",
      title: "Integrated with your team",
      description:
        "No gatekeeping—straight access to the design lead and designer handling your project.",
      borderColor: "border-[#FDD51C]",
      widthClass: "w-full",
      marginTop: "mt-[1rem]",
      marginRight: "",
      colSpanMd: 3,
    },
    {
      id: "06",
      title: <>Enterprise design team</>,
      description:
        "Our in-house design teams work is trusted and approved by leading enterprises such as Upwork and Next.js.",
      borderColor: "border-[#FDD51C]",
      widthClass: "w-[65%]",
      marginTop: "mt-[1rem]",
      marginRight: "mr-[5px]",
      colSpanMd: 6,
    },
  ];

  const fadeScaleVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          {items.map(
            (
              {
                id,
                title,
                description,
                widthClass,
                marginTop,
                marginRight,
                colSpanMd,
              },
              index
            ) => (
              <motion.div
                key={index}
                className={`col-span-12 md:col-span-${colSpanMd} border border-[#343436] hover:border-[#B5274B] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] pt-[1.5rem] pr-[1.5rem] pl-[1.5rem] pb-[4rem] ${marginTop} ${marginRight} rounded-[8px]`}
                variants={fadeScaleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
              >
                <p className="mb-[2rem] text-[.75rem] leading-[1.6em]">{id}</p>
                <h3 className="max-w-[13rem] text-[1.8rem] leading-[1.2em] mb-[.75rem] font-semibold ">
                  {title}
                </h3>
                <p
                  className={`${widthClass} text-[1rem] leading-[1.6em] tracking-[.03em]`}
                >
                  {description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default BentoWeb;
