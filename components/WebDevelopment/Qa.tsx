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
              title=". Do you offer both design and development in-house?"
              description=" Understand if the agency handles both aspects under one roof or outsources parts of the project."
            />
            <Acor
              title="What technologies do you use for development?"
              description=" Learn whether they work with modern frameworks like Next.js, React, Tailwind css and Framer Motion"
            />
            <Acor
              title="Do you build custom websites or use templates?"
              description="Clarifies whether the solution will be tailored specifically to your brand and needs."
            />
            <Acor
              title=" Will my website be fully responsive and mobile-optimized?"
              description="Ensures the final product works seamlessly across all screen sizes and devices."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default questions;
