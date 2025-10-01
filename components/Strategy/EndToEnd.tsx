"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

type SectionType = {
  id: string;
  title: string;
  description: string;
  columns?: string[];
};

const sections: SectionType[] = [
  {
    id: "Web Design",
    title: "Web Design",
    description:
      "More than just visuals—our performance-driven designs connect deeply with your audience, align perfectly with your brand, and boost conversions.",
    columns: [
      "UX/UI Design",
      "Conversion-Focused Strategy",
      "Custom Asset Creation",
      "Engaging Framer-Motion Animations",
    ],
  },
  {
    id: "Next.js Development",
    title: "Next.js Development",
    description:
      "Fast, highly optimized, and scalable Next.js websites designed to eliminate bottlenecks and speed up your time-to-market.",
    columns: [
      "Performance Optimization",
      "Scalability & Maintainability",
      "Fast Development & Deployment",
      "Excellent Developer Experience",
    ],
  },
  {
    id: "Boost your digital reach",
    title: "Boost your digital reach",
    description:
      "Expand your digital footprint with tailored strategies that boost visibility, engage your audience, and drive real business growth. We create custom websites and run targeted Instagram, TikTok, and Facebook campaigns and ads to help you stand out and scale faster.",
    columns: [
      "Content Creation",
      "Performance Tracking",
      "Targeted Social Media Ads",
      "SEO Optimization",
    ],
  },
  {
    id: "Business Automation",
    title: "Business Automation",
    description:
      "Automate repetitive tasks and streamline your workflows to save time and boost efficiency. Our business automation solutions integrate your marketing, sales, and customer management tools for seamless growth and better ROI.",
    columns: [
      "CRM Integration",
      "Email Automation",
      "Lead Management",
      "Workflow Automation",
    ],
  },
];

export default function EndToGrowSection() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className=" text-[#EBE9E3] pt-[5rem] md:pt-[10rem] pb-[5rem] md:pb-[10rem] md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Sticky Left */}
        <div className="md:w-1/3 md:sticky top-24 self-start z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight ml-[1rem] md:ml-[0]">
            Growth-driven solutions
          </h2>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={clsx(
                    "block transition-colors text-base font-medium ml-[1rem] md;ml-full",
                    activeId === section.id
                      ? "text-[#FED51C]"
                      : "text-[#EBE9E3] hover:text-white"
                  )}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/3 space-y-32">
          {sections.map((section, index) => (
            <SectionBlock
              key={section.id}
              section={section}
              index={index}
              innerRef={(el) => (sectionRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SectionBlock = ({
  section,
  index,
  innerRef,
}: {
  section: SectionType;
  index: number;
  innerRef: (el: HTMLElement | null) => void;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id={section.id}
      ref={(el) => {
        ref.current = el;
        innerRef(el);
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="scroll-mt-28"
    >
      <h3 className="text-[3rem] leading-[1.6em] font-semibold mb-4 ml-[1rem] md:ml-[0]">
        {section.title}
      </h3>
      <p className="text-gray-400 text-base text-[1rem] leading-[1.6em] tracking-[.03em] w-[80%] mb-6  ml-[1rem] md:ml-[0]">
        {section.description}
      </p>

      {section.columns && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-[1rem] md:ml-[0]">
          {section.columns.map((item, i) => (
            <p key={i} className="text-[#EBE9E3] text-sm leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      )}
    </motion.section>
  );
};
