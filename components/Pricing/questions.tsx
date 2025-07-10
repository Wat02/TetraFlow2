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
              title="Not sure which plan fits you best? Were here to help you choose."
              description="If youre unsure which plan suits you, contact us. Well assess your project and recommend the best plan to maximize your sites value."
            />
            <Acor
              title="Our SEO team does both — we provide expert consultations and create optimized content tailored to your needs."
              description="The TetaFlow team specializes in technical and on-page SEO, covering keyword research, content strategy, and beyond."
            />
            <Acor
              title="Heres a polished, concise version matching your length and tone:"
              description="Our plans are designed for flexibility. For migrations or SaaS projects, we recommend choosing the dedicated plan. Feel free to consult our sales team to find the best fit for your project."
            />
            <Acor
              title="Do unused hours carry over to the next period?"
              description="If you dont use all your hours in a month on a 6- or 12-month contract, well roll them over indefinitely. For no yearly commitment, our $500/month hourly insurance lets you roll over hours for up to 6 months."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default questions;
