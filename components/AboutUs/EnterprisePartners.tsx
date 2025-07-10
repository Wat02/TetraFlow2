import Image from "next/image";
import React from "react";
import Ui from "@/public/ui.jpg";

function EnterprisePartners() {
  return (
    <section className="pt-[2rem] md:pt-[7rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[1.4em] text-white w-full ml-[1rem] md:ml-[0rem] md:w-[60%] font-semibold">
              One of the few Next.js Enterprise Partners around
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[5rem]">
            <Image
              src={Ui}
              alt="ui"
              width={500}
              height={500}
              className="rounded-[8px]"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[2rem] ml-[1rem] md:ml-[0] md:pt-[6.5rem]">
            <p className="text-white pb-[1.5rem]">Next.js agency</p>
            <p className="text-[1rem] md:text-[1.5rem] leading-[1.6em] text-white w-[90%]">
              Were proud that we are certified by Next.js and are closely
              working with top tier Enterprise clients around the world, helping
              them integrate Next.js into their organization.
            </p>
          </div>
          {/* <div className="col-span-12 md:col-span-3 bg-[#080F2B] border border-white pt-[5rem] mt-[5rem]"></div>
          <div className="col-span-12 md:col-span-3 bg-[#080F2B] border border-white pt-[5rem] mt-[5rem]"></div>
          <div className="col-span-12 md:col-span-3 bg-[#080F2B] border border-white pt-[5rem] mt-[5rem]"></div>
          <div className="col-span-12 md:col-span-3 bg-[#080F2B] border border-white pt-[5rem] mt-[5rem]"></div> */}
          <div className="col-span-12 md:col-span-5  pt-[7rem]">
            <h2 className="text-white text-[2.3rem] md:text-[4.5rem] ml-[1rem] md:ml-[0rem] leading-[1.1em] ">
              Our numbers keep growing...
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 pt-[2rem] md:pt-[13.5rem] ml-[1rem] md:ml-[2rem] w-[80%] md:w-[50%]">
            <p className="text-white text-[1.1rem] leading-[1.6em]">
              ...and each number has a story to tell. Lets make another story
              together.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-[10%]">
          <div className="w-full border-t-2 border-[#FED61B]" />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-3 pt-[5rem]">
              <p className="text-white text-[3.5rem] font-semibold leading-[1.1em] ml-[1rem] md:ml-[0rem]">
                50+
              </p>
              <p className="text-white mt-[1.1rem] text-[1.2rem] leading-[1.1em] font-medium ml-[1rem] md:ml-[0rem]">
                Creative talents
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 pt-[5rem]">
              {" "}
              <p className="text-white text-[3.5rem] font-semibold leading-[1.1em] ml-[1rem] md:ml-[0rem]">
                50+
              </p>
              <p className="text-white mt-[1.1rem] text-[1.2rem] leading-[1.1em] font-medium ml-[1rem] md:ml-[0rem]">
                Creative talents
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 pt-[5rem]">
              {" "}
              <p className="text-white text-[3.5rem] font-semibold leading-[1.1em] ml-[1rem] md:ml-[0rem]">
                50+
              </p>
              <p className="text-white mt-[1.1rem] text-[1.2rem] leading-[1.1em] font-medium ml-[1rem] md:ml-[0rem]">
                Creative talents
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 pt-[5rem]">
              {" "}
              <p className="text-white text-[3.5rem] font-semibold leading-[1.1em] ml-[1rem] md:ml-[0rem]">
                50+
              </p>
              <p className="text-white mt-[1.1rem] text-[1.2rem] leading-[1.1em] font-medium ml-[1rem] md:ml-[0rem] pb-[5rem] mb:pb-[0rem]">
                Creative talents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterprisePartners;
