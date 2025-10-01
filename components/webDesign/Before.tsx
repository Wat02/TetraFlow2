import React from "react";
import Image from "next/image";
import Homedecor from "@/public/homeDecor.png";

function Projects() {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <div className="box box1">
            <section id="box1">
              {" "}
              <section className="bg-black pt-[15%] pb-[15%]">
                <div className="bg-black text-center">
                  <h2 className="text-[2.5rem] md:text-[6.5rem] leading-[1.1em] font-semibold text-[#EBE9E3]">
                    Before and after
                  </h2>
                  <p className="text-[1rem] leading-[1.6em] tracking-[.03em] pt-[1rem] text-[#EBE9E3]">
                    These B2B brands embraced TetraFlow design philosophy
                    <span className="hidden md:flex">
                      <br />
                    </span>
                    o elevate their online presence and boost website growth.
                  </p>
                </div>
              </section>
            </section>
          </div>
          <div className="box ">
            <section id="box1">
              <section className="bg-[#F0F4F8] rounded-tl-[50px] rounded-tr-[50px] pt-[10%] pb-[10%] ">
                <h2 className="text-[2rem] md:text-[3.5rem] leading-[1.1em] font-semibold ml-[7.5%]">
                  Real-world{" "}
                  <span className="text-[#B6274B] font-bold">results</span>
                </h2>
                <div className="flex items-center justify-center pt-[3%]">
                  <div className="w-[90%] border-t-2 border-[#C2C6D1]" />
                </div>
                <h3 className="ml-[7%] text-[1.8rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[4%] font-semibold">
                  AluDoors - Premium
                </h3>
                <div className=" container mx-auto">
                  <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg  ">
                          <Image
                            src={Homedecor} 
                            alt="Decorative"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">
                              Connect with customers
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className=" text-end justify-end pt-[10px] mr-[1rem] ">
                        {" "}
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6  w-full">
                      <div className="rounded-[10px] ">
                        <div className="col-span-12 md:col-span-8">
                          <div className="flex">
                            <div className="relative group overflow-hidden rounded-lg">
                              <Image
                                src={Homedecor}
                                alt="Decorative"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">
                                  Connect with customers
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" text-end justify-end pt-[10px] mr-[1rem] pb-[1rem]">
                            {" "}
                            <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-[3%] ">
                  <div className="w-[90%] border-t-2 border-[#C2C6D1]" />
                </div>
                <h3 className="ml-[7%] text-[1.8rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[3.5%] font-semibold">
                  DeCoreDesign – Interior Design
                </h3>
                <div className=" container mx-auto">
                  <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg ">
                          <Image
                            src={Homedecor}
                            alt="Decorative"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">
                              Connect with customers
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className=" text-end justify-end pt-[10px] mr-[1rem] pb-[1rem]">
                        {" "}
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6  w-full">
                      <div className="rounded-[10px] ">
                        <div className="col-span-12 md:col-span-8">
                          <div className="flex">
                            <div className="relative group overflow-hidden rounded-lg">
                              <Image
                                src={Homedecor} 
                                alt="Decorative"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">
                                  Connect with customers
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" text-end justify-end pt-[10px] mr-[1rem] pb-[1rem]">
                            {" "}
                            <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-[3%]">
                  <div className="w-[90%] border-t-2 border-[#C2C6D1]" />
                </div>
                <h3 className="ml-[7%] text-[1.8rem] md:text-[2.5rem] mb-[1.5rem] leading-[1.2em] pt-[3.5%] font-semibold">
                  Nudge–Premium Digital Solutions
                </h3>
                <div className=" container mx-auto">
                  <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex">
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={Homedecor} 
                            alt="Decorative"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">
                              Connect with customers
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className=" text-end justify-end pt-[10px] mr-[1rem] pb-[1rem]">
                        {" "}
                        <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6  w-full">
                      <div className="rounded-[10px] ">
                        <div className="col-span-12 md:col-span-8">
                          <div className="flex">
                            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                              <Image
                                src={Homedecor} 
                                alt="Decorative"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">
                                  Connect with customers
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" text-end justify-end pt-[10px] mr-[1rem]">
                            {" "}
                            <p>Next.js / Tailwind / TypeScript/ Shad.cn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
