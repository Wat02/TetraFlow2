"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "30+", color: "#00E599" },
  { value: "30+", color: "#B1BFFF" },
  { value: "30+", color: "#A54CFE" },
  { value: "30+", color: "#FF3266" },
];

const servicesRow1 = [
  "ui/ux design",
  "Next.js Development",
  "On-Page SEO",
  "Migration",
  "Logo design",
  "Website Tranaslion",
  "Email marketing",
];

const servicesRow2 = [
  "Google My Business",
  "Google ads",
  "Tiktok campain",
  "Bussins automation",
  "Copy for all pratforms",
  "full Smma",
  "All fisical contetn",
];

function TrackAgency() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="pt-[5rem] text-[#EBE9E3] overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div style={{ position: "sticky", top: "10vh", zIndex: 1 }}>
          <div className="grid grid-cols-12 gap-1">
            <motion.div
              style={{ y: yHeadline }}
              className="col-span-12 md:col-span-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[2rem] md:text-[3.5rem] ml-[1rem] md:ml-[0] leading-[1.1em] font-semibold"
              >
                Next.js development agency with a proven track record
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 md:col-span-4 pt-[1rem] md:pt-[3rem]"
            >
              <p className="text-[1rem] tracking-[.03rem]  ml-[1rem] md:ml-[0] leading-[1.6em] w-[60%]">
                #1 Next.js Enterprise agency for projects
              </p>
            </motion.div>

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="col-span-12 md:col-span-3 pt-[5rem]"
              >
                <h4
                  className="mb-[1rem] text-[3.5rem] leading-[1.1em] ml-[1rem] md:ml-[0] font-semibold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </h4>
                <p className="text-[1rem] leading-[1.6em] ml-[1rem] md:ml-[0] pb-[1rem] tracking-[.03em]">
                  In-house Next.js experts
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center pt-[5%]"
        >
          <div className="w-full border-t-2 border-[#FED61B] mt-[3rem]" />
        </motion.div>
      </div>

      
      <div className="container mx-auto pt-[5rem]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold"
        >
          We can integrate... well anything
        </motion.h2>

        {[servicesRow1, servicesRow2].map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-12 gap-1 pt-[2rem] text-center"
          >
            <div className="col-span-12">
              <div className="flex flex-wrap justify-center gap-2">
                {row.map((service, index) => (
                  <motion.button
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white border border-white hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] px-[1.25rem] py-[.75rem] text-[1.25rem] leading-[1.6em] rounded-[30px]"
                  >
                    {service}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center justify-center mx-auto mt-[3rem]"
        >
          <button className="bg-[#FED71A] text-black px-6 py-3 rounded-md font-medium">
            Send us an email
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default TrackAgency;
