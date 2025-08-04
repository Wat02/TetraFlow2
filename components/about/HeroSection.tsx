import React from "react";
import { DraggableCardDemo } from "./Draggable";

function HeroSection() {
  return (
    <section className="pt-[2rem] md:pt-[7rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-8 order-2 md:order-1">
            <DraggableCardDemo />
          </div>
          <div className="col-span-12 md:col-span-4 order-1 md:order-2">
            <h2 className="text-white text-[2rem] md:text-[3rem] leading-[1.1em] font-semibold ml-[1rem] md:ml-[0rem]">
              A full-service Next.js team recognized for excellence.
            </h2>
            <p className="text-[0.9rem] md:text-[1.25rem] leading-[1.6em] text-white pt-[1.5rem] ml-[1rem] md:ml-[0rem] pb-[5rem] md:pb-[0rem]">
              Recognized as a leading Next.js partner, TetraFlows expert team
              has been crafting and scaling Next.js projects with precision and
              innovation since day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
