import Hero2 from "@/components/LandingPage/Hero2";
import OurSolution from "@/components/LandingPage/OurSolution";
import OurTeam from "@/components/LandingPage/OurTeam";
import Projects from "@/components/LandingPage/Projects";
import Service from "@/components/LandingPage/Service";
import Trafic from "@/components/LandingPage/Trafic";
import Testamonial from "@/components/ui/Testamonial";

export default function Home() {
  return (
    <section>
      <div>
        {/* <TetraflowIntro /> */}
        <Hero2 />
        <OurTeam />
        <OurSolution />
        <Projects />
        <Service />
        <Testamonial />
        <Trafic />
      </div>
    </section>
  );
}
