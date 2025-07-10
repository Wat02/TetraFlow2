"use client";

import React from "react";
import Image from "next/image";
import { pricing } from "@/constants";
import { check } from "@/public/assets";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function PricingList() {
  return (
    <div className="flex gap-6 max-lg:flex-wrap pt-[100px]">
      {pricing.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="text-[2rem] leading-[1.1em] mb-4">{item.title}</h4>
          <p className="text-[#b6b1c0] min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[2rem] leading-[1.1em]">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <button className="w-full mb-6">
            {item.price ? "Get started" : "Contact us"}
          </button>
          <ul>
            {item.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start py-5 border-t border-[#343436]"
              >
                <Image src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default PricingList;
