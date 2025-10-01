"use client";

import React from "react";
import { motion } from "framer-motion";

function OurSolution() {
  return (
    <section className="pt-[5rem] md:pt-[150px] ">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <motion.h1
              className="text-[#EBE9E3] pl-[2.5%] text-[2.5rem] md:text-[4rem] font-semibold leading-[1.1em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              Our <span className="text-[#FED71A]">Approach</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-[50px]">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 pb-[1.8rem]">
            <motion.h3
              className="text-[#EBE9E3] pl-[2.5%] md:pl-[0] text-[1.5rem] md:text-[1.75rem] font-semibold leading-[1.3em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Switch to Next.js
            </motion.h3>
            <motion.p
              className="tracking-[.03em] text-[0.9rem] md:text-[1rem] pl-[2.5%] md:pl-[0] leading-[1.6em] text-[#EBE9E3] font-medium pt-[10px] w-[90%] md:w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Harness tailored design freedom and TetraFlows skilled migration
              to elevate your brand and speed up marketing success.
            </motion.p>
          </div>

         
          <div className="col-span-12 md:col-span-4 pb-[1.8rem]">
            <motion.h3
              className="text-[#EBE9E3] text-[1.5rem] md:text-[1.75rem] pl-[2.5%] md:pl-[0] font-semibold leading-[1.3em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Increase visitors and sales
            </motion.h3>
            <motion.p
              className="tracking-[.03em] text-[0.9rem] md:text-[1rem] pl-[2.5%] md:pl-[0] leading-[1.6em] text-[#EBE9E3] font-medium pt-[10px] w-[85%] md:w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Tap Next.js true power with our expert guidance to draw, involve,
              and turn visitors into repeat buyers.
            </motion.p>
          </div>

        
          <div className="col-span-12 md:col-span-4 pb-[1.8rem]">
            <motion.h3
              className="text-[#EBE9E3] text-[1.5rem] md:text-[1.75rem] pl-[2.5%] md:pl-[0] font-semibold leading-[1.3em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Optimize your assets
            </motion.h3>
            <motion.p
              className="tracking-[.03em] text-[0.9rem] md:text-[1rem] pl-[2.5%] md:pl-[0] leading-[1.6em] text-[#EBE9E3] font-medium pt-[10px] w-[90%] md:w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Boost your web and marketing strength with our expert Next.js
              team—fully integrated for less than the price of one full-time
              employee.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
