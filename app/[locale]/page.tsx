import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { FreshProduce } from '@/components/sections/FreshProduce';
import { DriedAndSnacks } from '@/components/sections/DriedAndSnacks';
import { SourcingStory } from '@/components/sections/SourcingStory';
import { ContactPartnership } from '@/components/sections/ContactPartnership';
import { Footer } from '@/components/Footer';
import { Advantages } from '@/components/sections/Advantages';
import { Compliance } from '@/components/sections/Compliance';
import { MarketOpportunity } from '@/components/sections/MarketOpportunity';
import { BridgeConcept } from '@/components/sections/BridgeConcept';
import { Roadmap } from '@/components/sections/Roadmap';
import { MarketIntelligence } from '@/components/sections/MarketIntelligence';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Navigation />
      <Hero />
      <section id="products">
        <FreshProduce />
        <DriedAndSnacks />
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="market">
        <MarketOpportunity />
        <MarketIntelligence />
      </section>
      <section id="compliance">
        <Compliance />
      </section>
      <section id="story">
        <SourcingStory />
        <BridgeConcept />
      </section>
      <section id="approach">
        <Roadmap />
      </section>
      <ContactPartnership />
      <Footer />
    </main>
  );
}
