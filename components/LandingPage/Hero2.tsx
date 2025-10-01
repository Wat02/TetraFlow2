"use client";

import React, { useRef } from "react";

function Hero2() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="pb-[2rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 pt-[80px]">
            <h4 className="text-[1.5rem] md:text-[2.625rem] leading-[1.2em] font-semibold text-[#FED71A] mb-[0rem] md:mb-[1.5rem] ml-[10px] md:ml-[0]">
              Your Premium
            </h4>
          </div>

          <div className="col-span-12 md:col-span-6 pt-[80px] justify-end text-end hidden md:flex">
            <button className="border border-[#747474] hover:border-[#FF3266]  transition-all ease-out pt-[20px] pb-[20px] pr-[50px] pl-[50px] text-[#EBE9E3] rounded-[90px] text-[20px] font-bold leading-[28px]">
              Award-Winning Web Experts
            </button>
          </div>

          <div className="col-span-12 md:col-span-12">
            <h1 className="text-[3.2rem] md:text-[12vw] leading-[1em] pt-[2rem] text-[#EBE9E3] ml-[10px] md:ml-[0]">
              Digital Partner.
            </h1>
          </div>

          <div className="col-span-12 md:col-span-6 pt-[20px] md:pt-[40px]">
            <p className="text-[#EBE9E3] text-[1.25rem] leading-[1.6em] font-semibold ml-[10px] md:ml-[0]">
              Elevate your brand with unique websites and expert social media
              ads. Expand Your Business.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pt-[40px] text-start md:text-end justify-start md:justify-end ml-[10px] md:ml-[0]">
            <button className="text-black bg-[#FED71A] leading-[1em] text-center relative overflow-hidden text-[1.25rem] pt-[1.5rem] pb-[1.5rem] pr-[2rem] pl-[2rem] font-medium rounded-[.25rem]">
              Grow Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
