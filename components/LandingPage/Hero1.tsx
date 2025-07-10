import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Hero1() {
  return (
    <section className="pt-[20px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">
            <Link href="/">
              <p className="text-[2.1rem] font-bold tracking-wide text-white ml-[10px] pt-[1.3rem] hidden md:flex">
                Tetraflow
              </p>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-8 justify-end text-end hidden md:flex">
            <Navbar />
          </div>
        </div>
      </div>
      <MobileNav className="block md:hidden justify-end text-right pt-[1rem] mr-[1rem]" />
    </section>
  );
}

export default Hero1;
