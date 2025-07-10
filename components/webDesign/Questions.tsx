import React from "react";
import Acor from "@/Design/Acor";

function questions() {
  return (
    <section className="pt-[7rem] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 text-[#EBE9E3]">
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold text-center">
              Frequently asked questions we hear.
            </h2>
          </div>
          <div className="col-span-12 w-full md:w-[60%] ml-[5%] md:ml-[20%] pt-[3rem] text-[#EBE9E3] ">
            <Acor
              title="What makes your web design process different from other agencies?"
              description="We focus on performance-driven design with a strategic foundation—built to convert, scale, and represent your brand authentically. No fluff, just high-impact results."
            />
            <Acor
              title="How long does it typically take to complete a custom website?"
              description="Depending on project scope, a custom website can take anywhere from 3 to 8 weeks. We provide clear timelines and hit every milestone without compromising on quality."
            />
            <Acor
              title="Do you design websites from scratch or use templates?"
              description="We design everything from scratch in Figma—tailored to your brand, goals, and user needs. Every layout is 100% custom and built for performance."
            />
            <Acor
              title="How involved will I be in the design process?"
              description="You're involved at every key stage. We work collaboratively—sharing design drafts, gathering your feedback, and making sure the final product reflects your vision."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default questions;
