import LatesrDev from "@/components/WebDevelopment/LatestDev";
import BentoWebDev from "@/components/WebDevelopment/BentoWebDev";
import Hero from "@/components/WebDevelopment/Hero";
import React from "react";
import Projects from "@/components/LandingPage/Projects";
import TrackAgency from "@/components/WebDevelopment/TrackAgency";
import Qa from "@/components/WebDevelopment/Qa";

function WebDevelopment() {
  return (
    <section>
      <div>
        <Hero />
        <BentoWebDev />
        <LatesrDev />
        {/* <FullStackService /> */}
        <Projects />
        <TrackAgency />
        <Qa />
      </div>
    </section>
  );
}

export default WebDevelopment;
