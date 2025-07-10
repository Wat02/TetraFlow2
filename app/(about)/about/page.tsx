import HeroSection from "@/components/about/HeroSection";
import EnterprisePartners from "@/components/AboutUs/EnterprisePartners";
import Finding from "@/components/AboutUs/Finding";
import Timeline from "@/components/AboutUs/timeline";

function about() {
  return (
    <section>
      <div>
        <HeroSection />
        <Timeline />
        {/* drag and scroll like from website */}

        <Finding />
        <EnterprisePartners />
      </div>
    </section>
  );
}

export default about;
