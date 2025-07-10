"use client";

import React, { useState, useRef, useEffect, useId } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement | null>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    xRef.current = e.clientX - (rect.left + rect.width / 2);
    yRef.current = e.clientY - (rect.top + rect.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, button, title } = slide;

  const isActive = current === index;
  const scale = isActive ? 1 : 0.9;
  const rotateY = isActive
    ? `rotateY(calc(var(--x) / 50deg))`
    : index < current
    ? "rotateY(20deg)"
    : "rotateY(-20deg)";
  const rotateX = isActive
    ? `rotateX(calc(var(--y) / 50deg))`
    : "rotateX(0deg)";
  const boxShadow = isActive
    ? "0 20px 40px rgba(0,0,0,0.5)"
    : "0 10px 20px rgba(0,0,0,0.25)";
  const brightness = isActive ? 1 : 0.7;
  const zIndex = isActive ? 20 : 10;

  return (
    <li
      ref={slideRef}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-current={isActive}
      className={`relative flex flex-col items-center justify-center text-center text-white cursor-pointer select-none rounded-xl transition-transform duration-700 ease-out transform-gpu`}
      style={{
        width: "70vmin",
        height: "70vmin",
        margin: "0 4vmin",
        perspective: 1000,
        zIndex,
        boxShadow,
        filter: `brightness(${brightness})`,
        transformOrigin: "center bottom",
        transform: `
          scale(${scale})
          ${rotateY}
          ${rotateX}
        `,
        willChange: "transform, filter",
      }}
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden bg-[#1D1F2F] shadow-lg transition-all duration-500"
        style={{
          transform: isActive
            ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
            : "none",
        }}
      >
        <img
          alt={title}
          src={src}
          loading="eager"
          decoding="sync"
          className={`absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-700 ease-in-out`}
          style={{ opacity: isActive ? 1 : 0.4 }}
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
        {isActive && (
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000" />
        )}
      </div>

      <article
        className={`relative p-[4vmin] transition-opacity duration-700 ease-in-out ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <button
          className="mt-6 px-6 py-3 bg-white text-black rounded-3xl font-semibold shadow-md hover:shadow-xl transition-shadow duration-300"
          type="button"
        >
          {button}
        </button>
      </article>
    </li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      aria-label={title}
      onClick={handleClick}
      className={`w-12 h-12 flex items-center justify-center mx-3 rounded-full bg-white text-black shadow-md hover:shadow-lg transition-transform duration-200 active:scale-95 focus:outline-none ${
        type === "previous" ? "rotate-180" : ""
      }`}
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
      else if (e.key === "ArrowRight")
        setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (!touchStartX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    } else if (diff < -50) {
      setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
    }
  };

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto select-none"
      aria-labelledby={`carousel-heading-${id}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={setCurrent}
          />
        ))}
      </ul>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] z-20">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={() =>
            setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
          }
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={() =>
            setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
          }
        />
      </div>
    </div>
  );
}
