import OurSolution from "@/components/LandingPage/OurSolution";
import EndToEnd from "@/components/Strategy/EndToEnd";
import GrowYour from "@/components/Strategy/GrowYour";
import Hero from "@/components/Strategy/Hero";
import OneStep from "@/components/Strategy/OneStep";
import React from "react";

function strategy() {
  return (
    <section>
      <div>
        <Hero />
        <OneStep />
        <EndToEnd />
        <OurSolution />
        <GrowYour />
      </div>
    </section>
  );
}

export default strategy;
