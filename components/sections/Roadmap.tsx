'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      number: 1,
      title: 'Virtual Trader',
      timeline: '2024-2025',
      icon: Target,
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
      highlights: [
        'Fresh fruit export operations launch',
        'Brand establishment in EU markets',
        'Digital traceability via Polygon geodata',
        'Initial partner network (Ghana & Kenya)',
        'EPA duty-free compliance framework',
      ],
      metrics: ['50+ farming partners', '500 tonnes monthly volume', '€2-5M first-year revenue'],
    },
    {
      number: 2,
      title: 'Backward Integration',
      timeline: '2025-2026',
      icon: CheckCircle,
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
      highlights: [
        'Outgrower contract systems',
        'Solar-drying facilities established',
        'Supply chain security & consistency',
        'Local partnership ecosystem deepened',
        'Processing capability launch',
      ],
      metrics: ['1,000+ outgrowers', '2,000 tonnes monthly', '€10-15M revenue'],
    },
    {
      number: 3,
      title: 'Smart Industrialization',
      timeline: '2026-2027',
      icon: Zap,
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
      highlights: [
        'Superfood powder processing plant',
        'AI/ML supply chain optimization',
        'Tech partnerships (blockchain, IoT)',
        'Farmland sovereignty expansion',
        'Impact measurement & certification',
      ],
      metrics: ['€30-50M revenue potential', 'High-margin processed goods', '5,000+ jobs created'],
    },
  ];

  return (
    <section id="approach" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Three-Phase Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From virtual trading to smart industrialization: a clear path to scaling African agricultural exports.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isExpanded = expandedPhase === idx;

            return (
              <div key={idx}>
                <Card
                  className={`bg-gradient-to-br ${phase.color} border-border/50 cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg overflow-hidden`}
                  onClick={() => setExpandedPhase(isExpanded ? -1 : idx)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Phase number */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-lg ${phase.color.split(' ')[0]} flex items-center justify-center`}>
                          <Icon className={`${phase.iconColor} w-6 h-6`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              Phase {phase.number}: {phase.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {phase.timeline}
                            </p>
                          </div>
                          <div className={`text-2xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                          </div>
                        </div>

                        {/* Always visible highlights */}
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.highlights.slice(0, 2).map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">✓</span>
                              <span className="text-sm text-muted-foreground">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-border/30">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Key Initiatives
                            </h4>
                            <ul className="space-y-2">
                              {phase.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Target Metrics
                            </h4>
                            <div className="space-y-2">
                              {phase.metrics.map((metric, i) => (
                                <div
                                  key={i}
                                  className="p-3 bg-background/50 rounded-lg border border-border/30"
                                >
                                  <p className="text-sm font-medium text-foreground">
                                    {metric}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>

                {/* Connection line */}
                {idx < phases.length - 1 && (
                  <div className="h-8 flex justify-center py-2">
                    <div className="w-1 bg-gradient-to-b from-primary/50 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Success Factors */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Roadmap Success Factors
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent">●</span> Operational Excellence
              </h4>
              <p className="text-muted-foreground text-sm">
                Precision farming, digital twins, and IoT monitoring at every stage from farm to port.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success">●</span> Local Partnerships
              </h4>
              <p className="text-muted-foreground text-sm">
                Fair contracts with farmer cooperatives, transparent pricing, and long-term commitments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-secondary">●</span> Technology Integration
              </h4>
              <p className="text-muted-foreground text-sm">
                Blockchain traceability, AI optimization, and predictive analytics for supply chain agility.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent">●</span> Market Responsiveness
              </h4>
              <p className="text-muted-foreground text-sm">
                Real-time demand sensing, seasonal optimization, and product diversification.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
