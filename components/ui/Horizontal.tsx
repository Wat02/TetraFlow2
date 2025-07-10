"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  { artist: "Uros", art: "/OurTeam.jpg" },
  { artist: "Dusan", art: "/ui.jpg" },
  { artist: "Dejan", art: "/marketing.jpg" },
  { artist: "Nikola", art: "/webdesign.jpg" },
  { artist: "Nemanja", art: "/desktop.jpg" },
  { artist: "Jovan", art: "/OurTeam.jpg" },
  { artist: "Ilija", art: "/ui.jpg" },
];

const popUpVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md touch-pan-x overflow-x-auto">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <motion.figure
            key={artwork.artist}
            className="shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={popUpVariant}
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] object-cover"
                width={300}
                height={400}
                sizes="(max-width: 640px) 150px, 300px"
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              TetaFlow Agency{" "}
              <span className=" text-white text-[1rem] font-bold ml-[0.2rem]">
                {artwork.artist}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
