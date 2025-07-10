import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Scalable", "Eye-catching ", "Modern", "On-brand"];

  return (
    <section>
      <FlipWords words={words} /> <br />
    </section>
  );
}
