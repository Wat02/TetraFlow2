import React from "react";
import HoverAnimation from "./HoverAnimation";

function Design() {
  return (
    <section className="pt-[7rem] text-[#EBE9E3]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <p className="text-[1.2rem] mb-[1.5rem] font-semibold leading-[1em] ml-[1rem]">
              Premium Design{" "}
            </p>
            <h2 className="text-[2rem] md:text-[3.2rem] leading-[1.1em] w-[95%] md:w-[80%] ml-[1rem] font-semibold mb-[1.5rem]">
              We focus on business impact — but if you want awards,{" "}
              <span>weve got those too.</span>
            </h2>
            <div className="flex items-center justify-center pt-[3%]">
              <div className="w-full border-t-2 border-[#FED61B]" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              Best Next.js Team for Scalable Web Solutions
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation
              label="Enterprise partner of the year"
              image="/ui.jpg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              Conversion-Focused Web Design
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation label="Honorable mention" image="/ui.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              Scalable Next.js Development
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation label="Honorable mention" image="/ui.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              On-Page SEO That Delivers Results
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation label="Honorable mention" image="/ui.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              End-to-End Digital Marketing
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation label="Honorable mention" image="/ui.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <h3 className="text-[1.5rem] md:text-[1.8rem] w-[70%] md:w-full leading-[1.2em] ml-[1rem] md:ml-[0rem] font-semibold mt-[3rem] mb-[0] md:mb-[3rem]">
              Smarter Business Automation
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 justify-start md:justify-center mx-0 ml-[1rem] md:mx-auto">
            <HoverAnimation label="Honorable mention" image="/ui.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center pb-[5rem]">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
      </div>
    </section>
  );
}

export default Design;
