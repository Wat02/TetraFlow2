import React from "react";
import Heading from "./Heading";
import PricingList from "@/components/busniessAutomation/PricingList";
import Image from "next/image";
import { lines, smallSphere, stars } from "@/public/assets";

function Price() {
  return (
    <section className="overflow-hidden pt-[100px] text-[#EBE9E3]" id="pricing">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
          className={""}
          text={""}
        />

        <div className="relative">
          <PricingList />
          <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
            <Image
              className="w-full"
              src={lines}
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
          <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
            <Image
              className="w-full"
              src={lines}
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border border-[#343436]  "
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </section>
  );
}

export default Price;
