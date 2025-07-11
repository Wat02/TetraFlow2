import React from "react";
import Pricing from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TetraFlow – Full-Service Next.js Agency for Scalable Design, Development & Growth",
  description:
    "TetraFlow is a premium Next.js agency delivering future-ready websites, conversion-focused design, smart social media marketing, and business automation. Trusted by ambitious brands to move fast, scale smarter, and grow stronger.",
  keywords: [
    "Next.js Agency",
    "Web Design",
    "Next.js Development",
    "Business Automation",
    "SMMA Services",
    "Scalable Web Solutions",
    "Conversion-Focused Design",
  ],
};
function layout() {
  return (
    <section>
      <div>
        <Pricing />
      </div>
    </section>
  );
}

export default layout;
