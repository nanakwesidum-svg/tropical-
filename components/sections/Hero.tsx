'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80 opacity-90"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-white/80 text-sm font-medium">🌳 Impact-Driven Agriculture</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          The Afro-Iberian <br />
          <span className="bg-gradient-to-r from-accent via-success to-accent bg-clip-text text-transparent">
            Trade Bridge
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
          Connecting Africa's agricultural excellence with Europe's premium markets through operational mastery, local partnerships, and technology-enabled transparency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('market')}
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 rounded-lg"
          >
            Explore Opportunities
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-lg"
          >
            Schedule Meeting
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-accent">$1.5B</div>
            <div className="text-xs text-white/70">African Export Market</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-success">+36%</div>
            <div className="text-xs text-white/70">Decade Growth Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
            <div className="text-2xl font-bold text-secondary">0%</div>
            <div className="text-xs text-white/70">EU Duty Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('bridge')}
          className="flex flex-col items-center gap-2 text-white hover:text-accent transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
