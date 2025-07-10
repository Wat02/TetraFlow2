"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = "TETRAFLOW".split("");

export default function TetraflowIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      const timeout = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1400);
      return () => clearTimeout(timeout);
    }
  }, [showIntro]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#EBE9E3] via-[#EBE9E3] to-black"
            style={{ backgroundSize: "300% 300%" }}
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />

          {/* Text container with perspective for 3D */}
          <motion.div className="relative flex gap-[0.2em] text-[4rem] md:text-[6rem] font-extrabold tracking-widest overflow-hidden select-none perspective-500">
            {letters.map((letter, i) => {
              const isLast = i === letters.length - 1;
              return (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0, rotateX: 45, scale: 0.8 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: [1.2, 0.95, 1],
                    rotateX: 0,
                  }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                  className="inline-block text-gradient drop-shadow-glow relative"
                >
                  {letter}
                  {isLast && (
                    <motion.span
                      aria-hidden="true"
                      style={{ position: "absolute", inset: 0 }}
                      variants={{
                        flicker: {
                          opacity: [1, 0.6, 1, 0.8, 1],
                          transition: {
                            repeat: Infinity,
                            repeatDelay: 1,
                            duration: 0.3,
                          },
                        },
                      }}
                      initial="flicker"
                      animate="flicker"
                    />
                  )}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Agency name below */}
          <div className="absolute bottom-10 text-white text-xl md:text-2xl font-semibold tracking-wide select-none">
            TETRAFLOW Agency
          </div>

          {/* Masked reveal layer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black"
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
