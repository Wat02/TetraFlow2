import React from "react";
import { CarouselDemo } from "../ui/Carousel";

function LatestDev() {
  return (
    <section className="pt-[0] md:pt-[5rem] text-[#EBE9E3]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-end-6 pt-[5rem] md:pt-[10rem]">
            <h2 className="mb-[1.5rem] text-[2.5rem] md:text-[4.3rem] leading-[1.1em] ml-[1rem] font-semibold">
              Newest Tech Innovations
            </h2>
            <p className="tracking-[.03em] text-[0.9rem] md:text-[1rem] ml-[1rem] leading-[1.6em] w-[80%] md:w-[90%]">
              Discover our newest projects—cutting-edge, expertly crafted, and
              built to push the boundaries of whats possible with Next.js and
              modern web tech.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <CarouselDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestDev;
