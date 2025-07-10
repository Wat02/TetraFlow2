import BentoPricing from "@/components/Pricing/BentoPricing";
import Compaire from "@/components/Pricing/Compaire";
import NextExprets from "@/components/Pricing/NextExprets";
import OurServices from "@/components/Pricing/OurServices";
import PricingHero from "@/components/Pricing/PricingHero";
import Questions from "@/components/Pricing/questions";

function Pricing() {
  return (
    <section>
      <div>
        <PricingHero />
        <BentoPricing />
        <NextExprets />
        <OurServices />
        <Compaire />
        <Questions />
      </div>
    </section>
  );
}

export default Pricing;
