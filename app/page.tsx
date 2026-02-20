import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { FreshProduce } from '@/components/sections/FreshProduce';
import { DriedAndSnacks } from '@/components/sections/DriedAndSnacks';
import { SourcingStory } from '@/components/sections/SourcingStory';
import { ContactPartnership } from '@/components/sections/ContactPartnership';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Navigation />
      <Hero />
      <section id="snacks">
        <FreshProduce />
      </section>
      <DriedAndSnacks />
      <section id="sourcing">
        <SourcingStory />
      </section>
      <ContactPartnership />
      <Footer />
    </main>
  );
}
