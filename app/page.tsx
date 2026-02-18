import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { BridgeConcept } from '@/components/sections/BridgeConcept';
import { MarketOpportunity } from '@/components/sections/MarketOpportunity';
import { MarketIntelligence } from '@/components/sections/MarketIntelligence';
import { Products } from '@/components/sections/Products';
import { Roadmap } from '@/components/sections/Roadmap';
import { Advantages } from '@/components/sections/Advantages';
import { Compliance } from '@/components/sections/Compliance';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <BridgeConcept />
      <MarketOpportunity />
      <MarketIntelligence />
      <Products />
      <Roadmap />
      <Advantages />
      <Compliance />
      <CallToAction />
      <Footer />
    </main>
  );
}
