"use client";

import { Carousel } from "@/components/WebDevelopment/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "AluDoors",
      button: "Just launched: Our newest project",
      src: "/homedecor.png",
    },
    {
      title: "Nudge",
      button: "Just launched: Our newest project",
      src: "/Agency.png",
    },
    {
      title: "DeCoreDesign",
      button: "Just launched: Our newest project",
      src: "/design.png",
    },
    {
      title: "Horizon",
      button: "Just launched: Our newest project",
      src: "/banking.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
