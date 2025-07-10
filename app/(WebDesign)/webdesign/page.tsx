import Questions from "@/components/webDesign/Questions";
import B2B from "@/components/webDesign/B2B";
import Before from "@/components/webDesign/Before";
import Design from "@/components/webDesign/Design";
import Enterprise from "@/components/webDesign/Enterprise";
import Fullstack from "@/components/webDesign/Fullstack";
import Hero from "@/components/webDesign/Hero";
import React from "react";

function WebDesgin() {
  return (
    <section>
      <div>
        <Hero />
        <B2B />
        <Fullstack />
        <Before />
        <Enterprise />
        <Design />
        <Questions />
      </div>
    </section>
  );
}

export default WebDesgin;
