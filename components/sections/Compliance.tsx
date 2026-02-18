'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle, MapPin, Eye, Lock, Zap, Award } from 'lucide-react';

export function Compliance() {
  const steps = [
    {
      icon: MapPin,
      title: 'Polygon Geodata',
      description: 'GPS-verified farmland location and boundaries',
      details: ['Satellite verification', 'Climate zone mapping', 'Soil quality data'],
    },
    {
      icon: Eye,
      title: 'Digital Twin',
      description: 'Real-time farm and harvest monitoring',
      details: ['IoT sensor network', 'Growth stage tracking', 'Yield prediction'],
    },
    {
      icon: CheckCircle,
      title: 'Clean Label',
      description: 'EUDR compliance and deforestation-free cert',
      details: ['No deforestation audit', 'Organic certification', 'Fair trade verified'],
    },
    {
      icon: Lock,
      title: 'Blockchain Record',
      description: 'Immutable supply chain ledger',
      details: ['Harvest timestamp', 'Processing history', 'Transport tracking'],
    },
    {
      icon: Zap,
      title: 'EU Entry Ready',
      description: 'Full compliance at port of destination',
      details: ['Quality certificates', 'Phytosanitary approved', 'Traceability verified'],
    },
    {
      icon: Award,
      title: 'Impact Certification',
      description: 'ESG and impact metrics validated',
      details: ['Farmer income verified', 'Jobs created', 'Carbon footprint'],
    },
  ];

  const technologies = [
    {
      category: 'Traceability',
      tech: ['Blockchain (Polygon)', 'QR Codes', 'RFID Tags'],
      benefit: 'Ground-to-gate transparency for buyers',
    },
    {
      category: 'Monitoring',
      tech: ['IoT Sensors', 'Satellite Imagery', 'Drone Surveys'],
      benefit: 'Real-time farm health and growth tracking',
    },
    {
      category: 'Analytics',
      tech: ['AI/ML Forecasting', 'Demand Sensing', 'Waste Prediction'],
      benefit: 'Optimization at every supply chain node',
    },
    {
      category: 'Compliance',
      tech: ['EUDR Audit', 'Deforestation Detection', 'Certification APIs'],
      benefit: 'Automated regulatory compliance verification',
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Compliance & Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six-step flow from African farmland to EU market: geodata, digital twins, clean labels, blockchain, and impact verification.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  {/* Step Card */}
                  <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50 p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-accent" />
                          <h3 className="font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {step.description}
                        </p>
                        <ul className="space-y-1">
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5">→</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>

                  {/* Arrow connector */}
                  {idx < steps.length - 1 && idx % 3 !== 2 && (
                    <div className="hidden lg:block absolute -right-2 top-12 w-4 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Technology Partnerships
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border-border/50 p-6"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {tech.category}
                </h4>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tech.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Benefit:</strong> {tech.benefit}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Guarantees */}
        <Card className="bg-gradient-to-r from-success/10 to-secondary/10 border-success/20 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Our Compliance Guarantees
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> EUDR Compliant
              </h4>
              <p className="text-muted-foreground text-sm">
                Every shipment is deforestation-free certified with blockchain proof of origin.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> Traceability 100%
              </h4>
              <p className="text-muted-foreground text-sm">
                Farm-to-table transparency verified through digital twins and blockchain ledger.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> Impact Measured
              </h4>
              <p className="text-muted-foreground text-sm">
                ESG outcomes audited and verified: farmer income, jobs, carbon footprint.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
