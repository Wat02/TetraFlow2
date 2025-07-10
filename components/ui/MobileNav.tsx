import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/public/hamburgerBetter.svg";
import Image from "next/image";

import Link from "next/link";

function MobileNavLan({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="mx-auto container">
        <div className="">
          <div className="col-span-12">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={Hamburger}
                  width={30}
                  height={30}
                  alt="hamburger menu"
                />
              </SheetTrigger>
              <SheetContent className="bg-[#FFFFFF]">
                <SheetHeader>
                  <h1>TetaFlow</h1>
                  <SheetTitle className="text-left pt-[10px]">
                    Horizon
                  </SheetTitle>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Features
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Pricing
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Help
                  </p>
                  <div className="flex flex-row gap-40 pt-[20px]">
                    {" "}
                    <p>🇨🇿</p>
                    <p>EN</p>
                  </div>
                  <Link href="/sign-up">
                    <button
                      title="Register"
                      className="pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[20px]  leading-[24px] font-semibold text-[#163300] w-full"
                    ></button>
                  </Link>
                  <Link href="/sign-in">
                    <button
                      title="Login"
                      className="pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[20px]  leading-[24px] font-semibold text-[#163300] w-full"
                    ></button>
                  </Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileNavLan;
