import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/public/hamburger.svg";
import Image from "next/image";
import Link from "next/link";

function MobileNav({ className }: { className: string }) {
  return (
    <section className={className}>
      <Sheet>
        <SheetTrigger className="text-white">
          <Image src={Hamburger} width={50} height={59} alt="hamburger" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-[2.1rem] font-bold tracking-wide text-black ml-[10px] pt-[1.3rem]">
              TetraFlow
            </SheetTitle>
            <SheetDescription className="w-[95%]  ml-[10px]">
              TetraFlow is a full-service Next.js agency helping brands scale
              with high-performance design, development, and digital strategy.
            </SheetDescription>

            <Link href="about">
              <p className="text-[1rem] font-semibold pt-[2.3rem] ml-[10px] pb-[2rem]">
                About Us
              </p>
            </Link>
            <Link href="pricing">
              <p className="text-[1rem] font-semibold pt-[2.3rem ml-[10px]">
                Pricing
              </p>
            </Link>
            <Link href="webdesign">
              <p className="text-[1rem] font-semibold pt-[2.3rem] ml-[10px]">
                Web Design
              </p>
            </Link>
            <Link href="WebDevelopment">
              <p className="text-[1rem] font-semibold pt-[2.3rem] ml-[10px]">
                Web Development
              </p>
            </Link>
            <Link href="strategy">
              <p className="text-[1rem] font-semibold pt-[2.3rem] ml-[10px]">
                {" "}
                Social Media
              </p>
            </Link>
            <Link href="busniessAutomation">
              <p className="text-[1rem] font-semibold pt-[2.3rem] ml-[10px]">
                Automatisation
              </p>
            </Link>
            <div className="pt-[1.8rem] ml-[10px]">
              <button className="text-black bg-[#FED71A] leading-[1em] text-center relative overflow-hidden text-[1.2rem] pt-[0.9rem] pb-[0.9rem] pr-[2rem] pl-[2rem] font-medium rounded-[.25rem]">
                Contact us
              </button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
