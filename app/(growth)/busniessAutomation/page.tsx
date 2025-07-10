import Collaboration from "@/components/busniessAutomation/Collaboration";
import Hero from "@/components/busniessAutomation/Hero";
import Price from "@/components/busniessAutomation/Price";
import Roadmap from "@/components/busniessAutomation/Roadmap";
import Services from "@/components/busniessAutomation/Services";
import React from "react";

function busniessAutomation() {
  return (
    <section>
      <div>
        <Hero />

        <Collaboration />
        <Services />
        <Price />
        <Roadmap />
      </div>
    </section>
  );
}

export default busniessAutomation;
