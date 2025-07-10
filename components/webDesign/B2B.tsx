"use client";

import React from "react";
import { motion } from "framer-motion";
import BentoWeb from "../ui/BentoWeb";
import { FollowingPointerCardDemo } from "../ui/Pointer";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // slightly faster transition
  },
};

function B2B() {
  return (
    <section className="pt-[5rem] text-[#EBE9E3] px-4 sm:px-6 md:px-0">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-6">
          {/* Header */}
          <div className="col-span-12 text-center">
            <p className="mb-3 text-[1rem] sm:text-[1.2rem] leading-[1.6em]">
              Tailored for marketing and GTM experts
            </p>
            <h2 className="text-[2.25rem] sm:text-[3.5rem] leading-[1.1em] font-semibold">
              Why do B2B brands trust
              <br />
              TetraFlow?
            </h2>
          </div>

          {/* BentoWeb Component */}
          <motion.div
            className="col-span-12"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          >
            <BentoWeb />
          </motion.div>

          {/* Latest Design Wins */}
          <div className="col-span-12 text-center pt-[2rem] sm:pt-[3rem] pb-[2rem] sm:pb-[3rem]">
            <h2 className="text-[2.5rem] sm:text-[4rem] leading-[1.1em] font-semibold">
              Latest design <span className="text-[#FDD51C]">wins</span>
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.6] tracking-[0.1em] pt-[1rem] max-w-xl mx-auto">
              Helping marketing teams turn websites into powerful lead
              generation machines, one site at a time.
            </p>
          </div>

          {/* Following Pointer Demos */}

          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "Nudge — Your Design Learning Partner",
                author: "TetraFlow - Studio",
                date: "10th of February 2012",
                title: "Nudge — Your Design Learning Partner",
                description:
                  "Nudge empowers aspiring designers with hands-on learning, combining expert-led courses and real-world projects. We focus on practical skills and modern design tools to help you grow confidently and create impactful work.",
                image: "/Agency.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "AluDoors",
                author: "TetaFlow - Studio",
                date: "15th of June 2017",
                title: "AluDoors – High-End Aluminum Doors",
                description:
                  "From the start, TetraFlow showcased their expertise by crafting a clean, modern home decor site. Their seamless design and smooth animations perfectly highlight products, delivering a polished and user-friendly experience.",
                image: "/homeDecor.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "DeCoreDesign – Interior & Design Studio",
                author: "TetraFlow - Studio",
                date: "15th of June 2020",
                title: "DeCoreDesign – Interior & Design Studio",
                description:
                  "DeCoreDesign blends contemporary aesthetics with functional interior solutions. We craft tailored spaces that elevate lifestyle and reflect unique identities—offering architecture, interior styling, and spatial planning for modern living.",
                image: "/design.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "Horizon Five — Future-Ready Digital Solutions",
                author: "TetaFlow - Studios",
                date: "15th of June 2021",
                title: "Horizon Five — Future-Ready Digital Solutions",
                description:
                  "Horizon Five creates innovative web products with sleek design and advanced technology, helping businesses grow and stay ahead in a fast-changing digital world.",
                image: "/banking.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "Doctor Sigma — Advanced Medical Solutions with Seamless User Experience",
                author: "TetaFlow - Studio",
                date: "15th of June 2023",
                title:
                  "Doctor Sigma — Advanced Medical Solutions with Seamless User Experience",
                description:
                  "Doctor Sigma features a modern, user-friendly design paired with a complex, dynamic form to streamline patient interactions. Built to enhance healthcare services through efficient, intuitive digital tools.",
                image: "/Doctor.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <FollowingPointerCardDemo
              blogContent={{
                slug: "Watfolio — Smart Portfolio Management Made Simple",
                author: "TetraFlow - Studio",
                date: "15th of June 2024",
                title: "Watfolio — Smart Portfolio Management Made Simple",
                description:
                  "Watfolio offers an intuitive platform for managing investments and tracking assets with ease. Featuring sleek design and powerful tools, it empowers users to stay informed and make smarter financial decisions.",
                image: "/portfolio.png",
                authorAvatar: "/profile.jpg",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default B2B;
