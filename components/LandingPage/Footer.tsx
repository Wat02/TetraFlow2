import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white relative overflow-hidden pb-[10rem] md:pb-[2rem]">
      {/* Massive Agency Name Text */}
      <h1 className="text-[18vw] md:text-[20vw] font-extrabold tracking-tight text-white text-center leading-none whitespace-nowrap opacity-10 pointer-events-none">
        TETRAFLOW
      </h1>

      {/* Main Footer Content */}
      <div className="absolute inset-0 px-6 md:px-16 py-10 flex md:hidden flex-row md:flex-col justify-between h-full ">
        {/* Bottom Bar */}
        <div className="mt-10 text-xs flex flex-wrap justify-between items-center pt-[2rem] ">
          <p>© TetraFlow. All rights reserved.</p>

          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="#" className="hover:text-lime-400">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-lime-400">
                Instagram
              </Link>
            </li>
          </ul>
          <p className="text-gray-500 text-center justify-center m-auto pt-[1rem]">
            Design by TetraFlow Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
