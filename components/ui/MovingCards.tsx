"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We saved over $500k in development and marketing costs by partnering with TetraFlow. Their all-in-one service model gave us enterprise results at a fraction of the cost.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Since launching our new site with TetraFlow, weve seen a 20% increase in organic traffic within the first two months. Their SEO and performance-first approach truly works.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "Working with TetraFlow felt like having an extension of our internal team. Their responsiveness, technical expertise, and commitment to quality gave us full confidence from day one.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "TetraFlow didnt just deliver a website—they helped us refine our digital strategy. The site is fast, flexible, and already showing strong results in both traffic and lead quality.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "They took our outdated platform and turned it into a sleek, scalable site in record time. The difference in performance and usability is night and day. Absolute professionals.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
