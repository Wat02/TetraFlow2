"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section className="w-full px-6 md:px-12 py-24 text-[#EBE9E3]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image section */}
        <div className="relative w-full h-[350px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[active].src}
              src={testimonials[active].src}
              alt={testimonials[active].name}
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </AnimatePresence>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {testimonials[active].name}
              </h3>

              <motion.p className="text-lg md:text-xl leading-relaxed mb-6 text-white/90">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.015 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              <p className="text-sm text-white/50 uppercase tracking-wide font-medium">
                {testimonials[active].designation}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-6 mt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
