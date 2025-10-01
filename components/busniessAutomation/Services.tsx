"use client";

import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import {
  brainwaveWhiteSymbol,
  check,
  play,
  service1,
  service2,
  service3,
} from "@/public/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import Generating from "./Generating";
import ChatBubbleWing from "@/public/assets/svg/ChatBubbleWing";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const popImage = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function Services() {
  const { scrollY } = useViewportScroll();

  const parallaxY2 = useTransform(scrollY, [0, 500], [0, -50]);
  const parallaxY3 = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section id="how-to-use" className="pt-[100px] text-[#EBE9E3]">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] pt-[7rem]">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
          className={""}
          tag={""}
        />

        <div
          className="relative mb-12 flex flex-col lg:flex-row items-center border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-3xl overflow-hidden p-6 lg:p-20"
          style={{ minHeight: 620 }}
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <Image
              className="w-full h-full object-cover md:object-right"
              width={800}
              alt="Smartest AI"
              height={730}
              src={service1}
            />
          </div>
          <div className="relative z-10 max-w-[400px] mt-8 lg:mt-0 lg:ml-auto text-left">
            <h4 className="text-[2rem] leading-normal mb-4">Smartest AI</h4>
            <p className="body-2 mb-12 text-n-3 text-[#ADA8C3]">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-[#343436]   border-n-6 "
                >
                  <Image width={24} height={24} src={check} alt="check" />
                  <p className="ml-4 text-[1rem]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <Generating className="absolute left-4 right-4 bottom-4 border border-[#343436]  lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            style={{ y: parallaxY2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={popImage}
            className="relative min-h-[39rem] border border-[#343436] hover:border-[#FED51C] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-3xl overflow-hidden"
          >
            <Image
              src={service2}
              alt="Photo editing"
              fill
              className="object-cover"
              priority
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 rounded-3xl"
            >
              <h4 className="text-[2rem] leading-[1.1em] mb-4">
                Photo editing
              </h4>
              <p className="text-[#ffffff] mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app&apos;s photo
                editing feature. Try it now!
              </p>
            </motion.div>
            <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem]">
              Hey TetraFlow, enhance this photo
            </div>
          </motion.div>

          <motion.div
            style={{ y: parallaxY3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="p-4 bg-[#16131D] rounded-3xl overflow-hidden lg:min-h-[46rem]"
          >
            <div className="py-12 px-4 xl:px-8">
              <h4 className="text-[2rem] leading-[1.1em] mb-4">
                Video generation
              </h4>
              <p className="text-[#7A778D] mb-[2rem] text-n-3">
                The worlds most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 border border-[#FED51C] md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 bg-[#252134] md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <Image src={item} width={24} height={24} alt="icon" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[20rem] md:h-[25rem] bg-black rounded-xl overflow-hidden">
              <Image
                src={service3}
                alt="Scary robot"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-[#252134] rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
                Video generated!
                <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-[#AC6AFF] rounded-[0.75rem]">
                  <Image
                    src={brainwaveWhiteSymbol}
                    width={26}
                    height={26}
                    alt="Brainwave"
                  />
                </div>
                <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
                  just now
                </p>
                <ChatBubbleWing
                  className="absolute right-full bottom-0 -scale-x-100"
                  pathClassName="fill-n-6"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
                <Image
                  src={play}
                  width={24}
                  height={24}
                  alt="Play"
                  className="object-contain mr-3"
                />
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-[#AC6AFF]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
