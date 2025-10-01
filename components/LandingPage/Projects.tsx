"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ui from "@/public/ui.jpg";
import Homedecor from "@/public/homeDecor.png";
import Nudge from "@/public/Agency.png";
import Design from "@/public/design.png";
import Link from "next/link";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Projects() {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <div className="box box1">
            <section id="box1">
              <section className="bg-black pt-[2rem] pb-[2rem] md:pt-[0rem] md:pb-[0rem]">
                <motion.div
                  className="bg-black rounded-tl-[50px] rounded-tr-[50px] pt-[8%] pb-[10%] flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariant}
                >
                  <Image
                    src={Homedecor}
                    width={1500}
                    height={1500}
                    alt="decor"
                  />
                </motion.div>
              </section>
            </section>
          </div>

          <div className="box ">
            <section id="box1">
              <section className="bg-[#F0F4F8] rounded-tl-[50px] rounded-tr-[50px] pt-[5%] pb-[5%] ">
                <motion.h2
                  className="text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold ml-[7.5%] pt-[2rem]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  Real-world{" "}
                  <span className="text-[#B6274B] font-bold">results</span>
                </motion.h2>

                <div className="flex items-center justify-center pt-[3%]">
                  <div className="w-[90%] border-t-2 border-[#C2C6D1]" />
                </div>
                <Link href="https://home-decor-psi.vercel.app/">
                  <motion.h3
                    className="ml-[7%] text-[1.4rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[5.5%] font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    AluDoors – High-End Doors
                  </motion.h3>
                </Link>

                <motion.div
                  className="container mx-auto"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="grid grid-cols-12 gap-1"
                    variants={containerVariant}
                  >
                    <motion.div
                      className="col-span-12 md:col-span-8"
                      variants={itemVariant}
                    >
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={Homedecor}
                              alt="Decorative"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-[2.6rem] font-bold text-center uppercase w-[75%] leading-[1.1em]">
                              Connect with customers Experience built for
                              <span className="text-[#FCEF5F] font-black">
                                {" "}
                                world-leading marketers
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-end justify-end pt-[10px] mr-[1rem]">
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="col-span-12 md:col-span-4 w-full"
                      variants={itemVariant}
                    >
                      <div className="pl-[30px] pr-[30px] rounded-[10px]">
                        <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-black pb-[1rem] pt-[1.5rem]">
                          AluDoors
                        </h1>
                        <p className="text-[0.9rem] md:text-[1.1rem] leading-[1.8em] text-black w-[95%] md:w-full  pb-[1.5rem]">
                          From the start, TetraFlow showcased their expertise by
                          crafting a clean, modern home decor site. Their
                          seamless design and smooth animations perfectly
                          highlight products, delivering a polished and
                          user-friendly experience.
                        </p>
                      </div>

                      <div className="flex flex-row ml-[23px] pt-[5%]">
                        <Image
                          src={ui}
                          width={50}
                          height={50}
                          alt="avatar"
                          className="rounded-full"
                        />
                        <div className="ml-[20px]">
                          <p className="text-[1.3rem] leading-[1em] font-semibold">
                            Jovan Jeremic
                          </p>
                          <p className="pt-[10px] text-[1.1rem] leading-[1em] font-normal">
                            Ux/ui Designer
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <Link href="https://tetra-flow.vercel.app/">
                  <motion.h3
                    className="ml-[7%] text-[1.4rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[5rem] md:pt-[5.5%] font-semibold "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Nudge–Premium Digital Solutions{" "}
                  </motion.h3>
                </Link>

                <motion.div
                  className="container mx-auto"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="grid grid-cols-12 gap-1"
                    variants={containerVariant}
                  >
                    <motion.div
                      className="col-span-12 md:col-span-8"
                      variants={itemVariant}
                    >
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={Nudge}
                              alt="Decorative"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-[2.6rem] font-bold text-center uppercase w-[75%] leading-[1.1em]">
                              Delivering{" "}
                              <span className="uppercase font-black text-[#A54CFE]">
                                top-tier
                              </span>{" "}
                              digital experiences across the globe
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-end justify-end pt-[10px] mr-[1rem]">
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="col-span-12 md:col-span-4 w-full"
                      variants={itemVariant}
                    >
                      <div className="pl-[30px] pr-[30px] rounded-[10px]">
                        <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-black pb-[1rem] pt-[1rem]">
                          Nudge
                        </h1>
                        <p className="text-[0.9rem] md:text-[1.1rem] leading-[1.8em] text-black w-[95%] md:w-full pb-[1rem]">
                          Nudge delivers cutting-edge digital solutions with
                          custom web design and powerful marketing strategies.
                          We craft unique, high-performance websites tailored to
                          help your brand grow and stand out.
                        </p>
                      </div>

                      <div className="flex flex-row ml-[23px] pt-[5%] pb-[1rem]">
                        <Image
                          src={ui}
                          width={50}
                          height={50}
                          alt="avatar"
                          className="rounded-full"
                        />
                        <div className="ml-[20px]">
                          <p className="text-[1.3rem] leading-[1em] font-semibold">
                            Jovan Jeremic
                          </p>
                          <p className="pt-[10px] text-[1.1rem] leading-[1em] font-normal">
                            Ux/ui Designer
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="flex items-center justify-center pt-[3%]">
                  <div className="w-[90%] border-t-2 border-[#C2C6D1]" />
                </div>
                <Link href="https://interior-design2-sigma.vercel.app/">
                  <motion.h3
                    className="text-[1.4rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[5.5%] font-semibold ml-[7%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    DeCoreDesign – Interior Design
                  </motion.h3>
                </Link>

                <motion.div
                  className="container mx-auto"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="grid grid-cols-12 gap-1"
                    variants={containerVariant}
                  >
                    <motion.div
                      className="col-span-12 md:col-span-8"
                      variants={itemVariant}
                    >
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={Design}
                              alt="Decorative"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-[2.6rem] font-bold text-center uppercase w-[75%] leading-[1.1em]">
                              Creative that performs,{" "}
                              <span className="font-black text-[#B5274B]">
                                design that converts
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-end justify-end pt-[10px] mr-[1rem] pb-[1rem]">
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="col-span-12 md:col-span-4 w-full"
                      variants={itemVariant}
                    >
                      <div className="pl-[30px] pr-[30px] rounded-[10px]">
                        <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-black pb-[1rem]">
                          DeCoreDesign
                        </h1>
                        <p className="text-[0.9rem] md:text-[1.1rem] leading-[1.8em] text-black w-[95%] md:w-full pb-[1rem]">
                          DeCoreDesign blends contemporary aesthetics with
                          functional interior solutions. We craft tailored
                          spaces that elevate lifestyle and reflect unique
                          identities—offering architecture, interior styling,
                          and spatial planning for modern living.
                        </p>
                      </div>

                      <div className="flex flex-row ml-[23px] pt-[5%]">
                        <Image
                          src={ui}
                          width={50}
                          height={50}
                          alt="avatar"
                          className="rounded-full"
                        />
                        <div className="ml-[20px]">
                          <p className="text-[1.3rem] leading-[1em] font-semibold">
                            Jovan Jeremic
                          </p>
                          <p className="pt-[10px] text-[1.1rem] leading-[1em] font-normal">
                            Ux/ui Designer
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="container mx-auto pt-[4rem] border border-[#CCCFD5] rounded-[10px] pb-[4rem] pl-[2rem] mt-[4rem]">
                  <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-12">
                      <motion.h3
                        className="text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        Explore Our{" "}
                        <span className="text-[#B6274B] font-bold">
                          Next.js
                        </span>{" "}
                        Web Creations
                      </motion.h3>
                      <motion.p
                        className="text-[1rem] md:text-[1.125rem]  leading-[1.6em] pt-[20px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        Explore our case studies and recent projects expertly
                        built with Next.js technology.
                      </motion.p>
                      <motion.div
                        className="pt-[2rem]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <button className="bg-[#B6274B] text-white pt-[1rem] pb-[1rem] pr-[3rem] pl-[3rem] rounded-[8px] text-[1.2rem] font-semibold leading-[1.1em]">
                          See all projects
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
