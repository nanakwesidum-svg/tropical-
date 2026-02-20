'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle, MapPin, Zap, Shield, Leaf } from 'lucide-react';

export function SourcingStory() {
  const t = useTranslations('Sourcing');
  const tHero = useTranslations('Hero');

  const steps = [
    {
      icon: Leaf,
      title: t('process.partnerships.title'),
      description: t('process.partnerships.description'),
      details: t.raw('process.partnerships.details'),
    },
    {
      icon: CheckCircle,
      title: t('process.quality.title'),
      description: t('process.quality.description'),
      details: t.raw('process.quality.details'),
    },
    {
      icon: Zap,
      title: t('process.cold_chain.title'),
      description: t('process.cold_chain.description'),
      details: t.raw('process.cold_chain.details'),
    },
    {
      icon: Shield,
      title: t('process.traceability.title'),
      description: t('process.traceability.description'),
      details: t.raw('process.traceability.details'),
    },
  ];

  const locations = [
    {
      country: 'Ghana',
      products: t.raw('footprint.ghana.products'),
      regions: t('footprint.ghana.regions'),
      partnerships: t('footprint.ghana.partnerships'),
    },
    {
      country: 'Kenya',
      products: t.raw('footprint.kenya.products'),
      regions: t('footprint.kenya.regions'),
      partnerships: t('footprint.kenya.partnerships'),
    },
    {
      country: 'Spain',
      products: t('footprint.spain.products'),
      regions: t('footprint.spain.regions'),
      partnerships: t('footprint.spain.partnerships'),
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('header.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('header.description')}
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
                    {(step.details as string[]).map((detail, i) => (
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
          <h3 className="text-3xl font-bold text-foreground mb-8">{t('footprint.title')}</h3>
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
                      {location.country === 'Spain' ? t('footprint.labels.role') : t('footprint.labels.products')}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {Array.isArray(location.products)
                        ? (location.products as string[]).join(', ')
                        : location.products}
                    </p>
                  </div>

                  {location.country !== 'Spain' && (
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">{t('footprint.labels.regions')}</p>
                      <p className="text-sm font-medium text-foreground">{location.regions}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                      {location.country === 'Spain' ? t('footprint.labels.partnerships_spain') : t('footprint.labels.partnerships')}
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
          <h3 className="text-2xl font-bold text-foreground mb-4">{t('commitment.title')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('commitment.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">100%</p>
              <p className="text-sm text-foreground font-medium">{t('commitment.stats.traceable')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">{tHero('stat_white_label').split(' ')[0]}</p>
              <p className="text-sm text-foreground font-medium">{t('commitment.stats.pricing')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">Zero</p>
              <p className="text-sm text-foreground font-medium">{t('commitment.stats.quality')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
