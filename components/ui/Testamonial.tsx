import React from "react";
import { AnimatedTestimonialsDemo } from "../LandingPage/CorTestamonila";

function Testamonial() {
  return (
    <section className="pt-[15%]">
      <div className="mx-auto">
        <h2 className="text-[#EBE9E3]  pl-[3%] text-[1.5rem] md:text-[4rem] font-semibold leading-[1.1em]">
          What Our Clients Have to Say
        </h2>
        <div className="flex items-center justify-center pt-[3%]">
          <div className="w-[95%] border-t-2 border-[#FED61B]" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testamonial;
