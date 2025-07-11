import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Hero1 from "@/components/LandingPage/Hero1";
import Footer from "@/components/LandingPage/Footer";

const Space = Space_Grotesk({
  variable: "--Grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--Manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

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
  openGraph: {
    title: "TetraFlow – Next.js Design & Development Experts",
    description:
      "Full-service Next.js agency delivering conversion-focused design, scalable development, and results-driven marketing automation.",
    url: "https://tetra-flow2.vercel.app/",
    siteName: "TetraFlow",
    images: [
      {
        url: "https://tetra-flow2.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TetraFlow – Next.js Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetraFlow – Next.js Design & Development Experts",
    description:
      "Next.js websites built for speed, growth, and scale. From design to launch, we help your business thrive online.",
    images: ["https://tetra-flow2.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Space.variable} ${manrope.variable} antialiased`}>
        <Hero1 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
