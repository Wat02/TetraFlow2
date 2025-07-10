"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);
  const controls = useAnimationControls();

  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const springConfig = {
    stiffness: 100,
    damping: 15,
    mass: 0.6,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-15, 15]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  const glareX = useTransform(mouseX, [-200, 200], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-200, 200], ["0%", "100%"]);
  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({ rotateX: 0, rotateY: 0 });

        const currentVX = velocityX.get();
        const currentVY = velocityY.get();
        const velocity = Math.hypot(currentVX, currentVY);
        const bounce = Math.min(1, velocity / 1200);

        animate(info.point.x, info.point.x + currentVX * 0.25, {
          type: "spring",
          bounce,
          stiffness: 60,
          damping: 18,
        });

        animate(info.point.y, info.point.y + currentVY * 0.25, {
          type: "spring",
          bounce,
          stiffness: 60,
          damping: 18,
        });
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-xl bg-neutral-100 p-6 shadow-2xl transition-shadow duration-300 dark:bg-neutral-900",
        className
      )}
    >
      {children}

      {/* Dynamic glare */}
      <motion.div
        style={{
          opacity: glareOpacity,
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3), transparent 60%)`,
        }}
        className="pointer-events-none absolute inset-0 select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className={cn("relative [perspective:1200px]", className)}>
    {children}
  </div>
);
