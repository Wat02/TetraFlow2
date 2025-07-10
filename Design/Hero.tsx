"use client";

import { useEffect, useState } from "react";
import PlusSvg from "@/public/assets/svg/PlusSvg";

const AnimatedCircle = ({
  size,
  offset,
  rotation,
  fromColor,
  className,
  showOnXLOnly = false,
}: {
  size: string;
  offset: string;
  rotation: string;
  fromColor: string;
  className?: string;
  showOnXLOnly?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[${rotation}] ${
        showOnXLOnly ? "hidden xl:block" : ""
      }`}
    >
      <div
        className={`bg-gradient-to-b from-[${fromColor}] to-[#1A1A32] rounded-full ${size} ${offset} transition-transform duration-500 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export const BackgroundCircles = () => {
  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-[#e1e1e1] rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem] pointer-events-none z-0">
      {/* Rings */}
      {[65.875, 51.375, 36.125, 23.125].map((diameter, i) => (
        <div
          key={i}
          className={`absolute top-1/2 left-1/2 w-[${diameter}rem] aspect-square border border-[#e1e1e1]/10 rounded-full -translate-x-1/2 -translate-y-1/2`}
        />
      ))}

      {/* Animated gradient dots */}
      <AnimatedCircle
        size="w-2 h-2"
        offset="-ml-1 -mt-36"
        rotation="46deg"
        fromColor="#DD734F"
      />
      <AnimatedCircle
        size="w-4 h-4"
        offset="-ml-1 -mt-32"
        rotation="-56deg"
        fromColor="#DD734F"
      />
      <AnimatedCircle
        size="w-4 h-4"
        offset="mt-[12.9rem] -ml-1"
        rotation="54deg"
        fromColor="#B9AEDF"
        showOnXLOnly
      />
      <AnimatedCircle
        size="w-3 h-3"
        offset="-ml-1.5 mt-52"
        rotation="-65deg"
        fromColor="#B9AEDF"
      />
      <AnimatedCircle
        size="w-6 h-6"
        offset="-ml-3 -mt-3"
        rotation="-85deg"
        fromColor="#88E5BE"
      />
      <AnimatedCircle
        size="w-6 h-6"
        offset="-ml-3 -mt-3"
        rotation="70deg"
        fromColor="#88E5BE"
      />
    </div>
  );
};

export const Gradient = () => {
  return (
    <>
      <div className="relative z-10 h-6 mx-2.5 bg-[#1a1a32] shadow-xl rounded-b-[1.25rem] lg:mx-8" />
      <div className="relative z-10 h-6 mx-6 bg-[#1a1a32]/70 shadow-xl rounded-b-[1.25rem] lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-[#999999] pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-20 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-20 pointer-events-none xl:block" />
    </>
  );
};
