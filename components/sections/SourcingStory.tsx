'use client';

import { CheckCircle, MapPin, Zap, Shield, Leaf } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: 'Farm Partnerships',
    description: 'We work with carefully selected family farms and agricultural cooperatives in Ghana and Kenya. Direct relationships ensure quality, fair pricing, and sustainable practices.',
    details: ['Multi-year partnerships', 'Fair trade pricing', 'Sustainable farming support'],
  },
  {
    icon: CheckCircle,
    title: 'Quality Selection',
    description: 'Rigorous selection at source. Every product is inspected for optimal ripeness, color, flavor, and food safety standards. We maintain meticulous documentation.',
    details: ['Harvest-to-export monitoring', 'EUDR compliance', 'Food safety certifications'],
  },
  {
    icon: Zap,
    title: 'Cold Chain Management',
    description: 'From farm to European port, our cold chain infrastructure ensures peak freshness. Temperature-controlled storage and rapid transport maintain product integrity.',
    details: ['24-48h air bridge available', 'Refrigerated sea freight', 'Real-time tracking'],
  },
  {
    icon: Shield,
    title: 'Traceability & Compliance',
    description: 'Full digital traceability from farm to delivery. EUDR compliance, phytosanitary certifications, and organic verification where applicable.',
    details: ['Digital twin technology', 'EU regulatory compliance', 'Independent audits'],
  },
];

const locations = [
  {
    country: 'Ghana',
    products: ['Mangoes', 'Pineapples', 'Cocoa', 'Cashews'],
    regions: 'Ashanti, Brong Ahafo, Eastern',
    partnerships: '12+ farm partners',
  },
  {
    country: 'Kenya',
    products: ['Papayas', 'Passion Fruit', 'Avocados'],
    regions: 'Central & Western highlands',
    partnerships: '8+ farm partners',
  },
  {
    country: 'Spain',
    products: 'Distribution & Processing Hub',
    regions: 'Madrid, Barcelona, Valencia',
    partnerships: 'Strategic logistics partners',
  },
];

export function SourcingStory() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            From Farm to Table
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our commitment to quality begins at source. We partner directly with African farmers, employ rigorous quality controls, and leverage technology to ensure transparency and freshness.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Geographic Coverage */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Global Footprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="text-2xl font-bold text-foreground">{location.country}</h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                      {location.country === 'Spain' ? 'Role' : 'Products'}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {Array.isArray(location.products) 
                        ? location.products.join(', ')
                        : location.products}
                    </p>
                  </div>

                  {location.country !== 'Spain' && (
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Growing Regions</p>
                      <p className="text-sm font-medium text-foreground">{location.regions}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                      {location.country === 'Spain' ? 'Partnerships' : 'Farm Partnerships'}
                    </p>
                    <p className="text-sm font-medium text-foreground">{location.partnerships}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Commitment */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Transparency Commitment</h3>
          <p className="text-muted-foreground mb-6">
            Every product comes with verifiable sourcing data. Know the farm, the farmers, and the journey of every fruit. Our digital traceability system provides complete visibility from harvest to delivery—because quality matters, and so does knowing where your food comes from.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">100%</p>
              <p className="text-sm text-foreground font-medium">Traceable Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">Fair</p>
              <p className="text-sm text-foreground font-medium">Farmer Pricing</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">Zero</p>
              <p className="text-sm text-foreground font-medium">Compromise on Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
