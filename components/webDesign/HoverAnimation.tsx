"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type HoverImageButtonProps = {
  label: string;
  image: string;
};

export default function HoverImageButton({
  label,
  image,
}: HoverImageButtonProps) {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Detect if the device supports touch
  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    mouseX.set(touch.clientX + 20);
    mouseY.set(touch.clientY + 20);
    setHovered(true);
  };

  const handleTouchEnd = () => {
    // Optionally hide image on touch end or keep it until tap toggled again
    // setHovered(false);
  };

  const toggleHovered = () => {
    setHovered((prev) => !prev);
  };

  return (
    <>
      <button
        className="rounded-[1.875rem] px-[2.25rem] py-[0.80rem] border border-white mt-[3rem] mb-[3rem] text-white"
        onMouseEnter={() => !isTouchDevice && setHovered(true)}
        onMouseLeave={() => !isTouchDevice && setHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => isTouchDevice && toggleHovered()}
        type="button"
      >
        {label}
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.img
            src={image}
            alt="Preview"
            style={{
              position: "fixed",
              top: springY,
              left: springX,
              width: "220px",
              height: "auto",
              pointerEvents: "none",
              zIndex: 50,
              borderRadius: "0.5rem",
              boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              userSelect: "none",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
