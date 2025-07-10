"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen items-center overflow-hidden px-8 py-20 ">
      {/* Left Side (Text) */}
      <div className=" mb-10 md:mb-0">
        <h1 className="text-[2.5rem] md:text-[4rem] font-bold leading-[1.1em]  mb-[1.5rem] w-[100%] md:w-[80%] text-[#EBE9E3]">
          Full-Stack Web <br />
          Design <span className="text-shadow-amber-300">Services</span>
        </h1>
        <p className="text-[1.1rem] md:text-[1.3rem] text-[#EBE9E3] w-[100%] md:w-[70%] font-medium leading-[1.6em]">
          We build scalable, high-performance websites with Next.js and Tailwind
          CSS and Framer-Motion
        </p>
      </div>

      {/* Right Side (Parallax Image) */}
      <div
        ref={ref}
        className="w-full md:w-1/2   flex justify-center relative h-full md:h-auto pt-[2%] pb-[2%]"
      >
        <motion.div
          style={{ y }}
          className="w-full h-full pt-[1rem] pl-[1rem] pr-[0] md:pr-[8rem] rounded-[0.5rem] shadow-lg flex flex-col gap-y-6"
        >
          {/* Replace with an <img> or animated content */}
          {[1].map((item) => (
            <div key={item} className="text-[#EBE9E3]">
              <h4 className="text-[3rem] md:text-[2.5rem] leading-[1.2em] mb-[0.75rem] font-semibold mt-[11rem] md:mt-[0]">
                UX/UI
              </h4>
              <p className="text-[1rem] leading-[1.6em] tracking-[.03em] font-medium w-full md:w-[78%]">
                Attract, engage, and convert with user-centric designs that
                reflect your brand and boost conversions.
              </p>
            </div>
          ))}
          {[1].map((item) => (
            <div key={item} className="text-[#EBE9E3]">
              <h4 className="text-[2.5rem] leading-[1.2em] mb-[0.75rem] font-semibold">
                Wireframing
              </h4>
              <p className="text-[1rem] leading-[1.6em] tracking-[.03em] font-medium w-full md:w-[78%]">
                Developing detailed blueprints and mapping seamless user
                journeys that guide visitors to key conversion points.
              </p>
            </div>
          ))}
          {[1].map((item) => (
            <div key={item} className="text-[#EBE9E3]">
              <h4 className="text-[2.5rem] leading-[1.2em] mb-[0.75rem] font-semibold">
                Website Re-design
              </h4>
              <p className="text-[1rem] leading-[1.6em] tracking-[.03em] font-medium w-full md:w-[78%]">
                Revamping your site with fresh layouts and improved UX to
                enhance engagement and drive more conversions.
              </p>
            </div>
          ))}
          {[1].map((item) => (
            <div key={item} className="text-[#EBE9E3]">
              <h4 className="text-[2.5rem] leading-[1.2em] mb-[0.75rem] font-semibold">
                Responsive Design
              </h4>
              <p className="text-[1rem] leading-[1.6em] tracking-[.03em] font-medium w-full md:w-[78%]">
                Ensuring your website looks and works flawlessly on all devices,
                delivering a smooth user experience everywhere.
              </p>
            </div>
          ))}
          {[1].map((item) => (
            <div key={item} className="text-[#EBE9E3]">
              <h4 className="text-[2.5rem] leading-[1.2em] mb-[0.75rem] font-semibold">
                Illustration Design
              </h4>
              <p className="text-[1rem] leading-[1.6em] tracking-[.03em] font-medium w-full md:w-[78%]">
                Crafting custom illustrations that bring your brand to life and
                create a memorable visual impact. Ask ChatGPT
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
