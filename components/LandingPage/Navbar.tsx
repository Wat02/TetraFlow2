import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 ">
          <div className="col-span-12 md:col-span-12">
            <div className="flex flex-row gap-3 ">
              <Link href="about">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">
                  About Us
                </p>
              </Link>
              <Link href="pricing">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">Pricing</p>
              </Link>
              <Link href="webdesign">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">
                  Web Design
                </p>
              </Link>
              <Link href="WebDevelopment">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">
                  Web Development
                </p>
              </Link>
              <Link href="strategy">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">
                  {" "}
                  Social Media
                </p>
              </Link>
              <Link href="busniessAutomation">
                <p className="text-[1rem] font-semibold pt-[2.3rem]">
                  Automatisation
                </p>
              </Link>
              <div className="pt-[1.8rem] ml-[10px]">
                <button className="text-black bg-[#FED71A] leading-[1em] text-center relative overflow-hidden text-[1.2rem] pt-[0.9rem] pb-[0.9rem] pr-[2rem] pl-[2rem] font-medium rounded-[.25rem]">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
