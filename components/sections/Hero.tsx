'use client';

import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-screen">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 w-fit">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Direct from Africa to Europe</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground text-balance">
          Premium <span className="text-accent">Tropical Fruit</span> & Snacks
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl text-balance">
          Exceptional quality mangoes, papayas, passion fruit, specialty crops, and premium snacks—direct from Ghana and Kenya via our Spain hub to European distributors and retailers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => scrollToSection('fresh-produce')}
          >
            Explore Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/5"
            onClick={() => scrollToSection('contact')}
          >
            Request Partnership
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">12+</div>
            <p className="text-sm text-muted-foreground">Premium Products</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <p className="text-sm text-muted-foreground">Business Lines</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">Year-round</div>
            <p className="text-sm text-muted-foreground">Supply Available</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">White Label</div>
            <p className="text-sm text-muted-foreground">B2B Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
