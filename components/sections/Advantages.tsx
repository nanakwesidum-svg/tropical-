'use client';

import { Card } from '@/components/ui/card';
import {
  MapPin,
  Shield,
  Network,
  Zap,
  TrendingUp,
  Award,
} from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: 'Ground-to-Gate Precision',
      description:
        'Full traceability from farmland through processing to EU port. Digital twins, polygon geodata, and IoT sensors ensure transparency and compliance.',
      benefits: ['EUDR deforestation-free certification', 'Blockchain records', 'Real-time quality monitoring'],
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Award,
      title: 'Operational Mastery',
      description:
        'Industrial engineering expertise combined with agricultural heritage. Precision timing, logistics optimization, and waste minimization.',
      benefits: ['Minimal post-harvest losses', 'Optimal ripeness protocols', 'Predictive capacity planning'],
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Network,
      title: 'Local Partnership Ecosystem',
      description:
        'Deep roots in Ghana and Kenya with cooperative farming networks, local processors, and community relationships built on trust.',
      benefits: ['500+ active farmer partners', 'Fair pricing contracts', 'Community development programs'],
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
    {
      icon: MapPin,
      title: 'Farmland Sovereignty',
      description:
        'Proprietary farmland in both markets plus outgrower partnerships. Control over supply sources ensures consistency and quality.',
      benefits: ['Expandable landbase', 'Seasonal flexibility', 'Backward integration ready'],
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Zap,
      title: 'Technology-Enabled Supply Chain',
      description:
        'AI/ML optimization, IoT monitoring, blockchain ledgers, and predictive analytics. Speed and agility in a dynamic market.',
      benefits: ['48-hour turnaround to market', 'Demand forecasting', 'Waste prediction & prevention'],
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: TrendingUp,
      title: 'Impact Investing Framework',
      description:
        'Every shipment creates measurable impact: fair wages, community investment, environmental stewardship, and technology transfer.',
      benefits: ['Certified impact metrics', 'ESG reporting', 'Stakeholder alignment'],
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Competitive Advantages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six pillars setting us apart: precision, partnership, technology, and impact.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${adv.color} border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className={`${adv.iconColor} mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {adv.description}
                </p>
                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-1">
                    {adv.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Integration Story */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            How It Comes Together
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold mb-3">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Farm Source</h4>
              <p className="text-sm text-muted-foreground">
                Precision farming with IoT; fair farmer contracts; quality protocols
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full font-bold mb-3">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">Digital Record</h4>
              <p className="text-sm text-muted-foreground">
                Blockchain traceability; EUDR compliance; Quality/ripeness data
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full font-bold mb-3">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Processing</h4>
              <p className="text-sm text-muted-foreground">
                Solar-drying or value-add; Margin multiplier; Waste reduction
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-success text-white rounded-full font-bold mb-3">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">EU Market</h4>
              <p className="text-sm text-muted-foreground">
                Premium pricing; Distributor partnerships; Impact reporting
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
