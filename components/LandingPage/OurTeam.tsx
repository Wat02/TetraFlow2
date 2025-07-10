"use client";

import React, { useRef } from "react";
import Image from "next/image";
import ourTeam from "@/public/OurTeam.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function OurTeam() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const headline =
    "We create future-ready solutions for todays most forward-thinking businesses.";
  const words = headline.split(" ");

  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div
            ref={ref}
            className="col-span-12 md:col-span-12 pt-[3rem] md:pt-[6rem] bg-no-repeat bg-contain pb-[2rem]"
          >
            <motion.div
              style={{ y }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="block ml-auto mr-auto w-[95%]"
            >
              <Image
                src={ourTeam}
                height={1500}
                width={1500}
                alt="team photo"
                className="rounded-2xl w-full object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-12 pl-[2.5%]">
            <motion.h1
              className="text-[#EBE9E3] text-[1.5rem] md:text-[45px] leading-[2.5rem] md:leading-[55px] font-normal w-[100%] md:w-[47%] flex flex-wrap"
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
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
