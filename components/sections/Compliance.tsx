'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { CheckCircle, MapPin, Eye, Lock, Zap, Award } from 'lucide-react';

export function Compliance() {
  const t = useTranslations('Compliance');

  const steps = [
    {
      icon: MapPin,
      title: t('steps.geodata.title'),
      description: t('steps.geodata.description'),
      details: t.raw('steps.geodata.details'),
    },
    {
      icon: Eye,
      title: t('steps.twin.title'),
      description: t('steps.twin.description'),
      details: t.raw('steps.twin.details'),
    },
    {
      icon: CheckCircle,
      title: t('steps.clean.title'),
      description: t('steps.clean.description'),
      details: t.raw('steps.clean.details'),
    },
    {
      icon: Lock,
      title: t('steps.record.title'),
      description: t('steps.record.description'),
      details: t.raw('steps.record.details'),
    },
    {
      icon: Zap,
      title: t('steps.port.title'),
      description: t('steps.port.description'),
      details: t.raw('steps.port.details'),
    },
    {
      icon: Award,
      title: t('steps.impact.title'),
      description: t('steps.impact.description'),
      details: t.raw('steps.impact.details'),
    },
  ];

  const technologies = [
    {
      category: t('tech_partnerships.categories.traceability.label'),
      tech: ['Blockchain (Polygon)', 'QR Codes', 'RFID Tags'],
      benefit: t('tech_partnerships.categories.traceability.benefit'),
    },
    {
      category: t('tech_partnerships.categories.monitoring.label'),
      tech: ['IoT Sensors', 'Satellite Imagery', 'Drone Surveys'],
      benefit: t('tech_partnerships.categories.monitoring.benefit'),
    },
    {
      category: t('tech_partnerships.categories.analytics.label'),
      tech: ['AI/ML Forecasting', 'Demand Sensing', 'Waste Prediction'],
      benefit: t('tech_partnerships.categories.analytics.benefit'),
    },
    {
      category: t('tech_partnerships.categories.compliance.label'),
      tech: ['EUDR Audit', 'Deforestation Detection', 'Certification APIs'],
      benefit: t('tech_partnerships.categories.compliance.benefit'),
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('header.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('header.description')}
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
                          {(step.details as string[]).map((detail, i) => (
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
            {t('tech_partnerships.title')}
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
            {t('guarantees.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> {t('guarantees.eudr.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('guarantees.eudr.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> {t('guarantees.traceability.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('guarantees.traceability.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-success text-lg">✓</span> {t('guarantees.impact.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('guarantees.impact.desc')}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
