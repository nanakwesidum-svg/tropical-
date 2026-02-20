'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import {
  Leaf,
  Cpu,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export function BridgeConcept() {
  const t = useTranslations('Bridge');

  const pillars = [
    {
      icon: Leaf,
      title: t('pillars.heritage.title'),
      description: t('pillars.heritage.description'),
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
    {
      icon: Cpu,
      title: t('pillars.tech.title'),
      description: t('pillars.tech.description'),
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: TrendingUp,
      title: t('pillars.impact.title'),
      description: t('pillars.impact.description'),
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
  ];

  return (
    <section id="bridge" className="py-20 bg-card">
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

        {/* Bridge Visualization */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-8">
            {/* Africa */}
            <div className="flex-1 text-center">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-6 text-white mb-3 transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="font-bold text-lg">{t('visualization.africa.label')}</h3>
                <p className="text-sm text-white/80">{t('visualization.africa.sub')}</p>
              </div>
              <p className="text-sm text-muted-foreground">{t('visualization.africa.role')}</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center gap-2 text-accent mb-12">
              <ArrowRight className="w-6 h-6" />
              <span className="font-semibold">{t('visualization.via')}</span>
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Spain */}
            <div className="flex-1 text-center">
              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-lg p-6 text-white mb-3 transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">🇪🇸</div>
                <h3 className="font-bold text-lg">{t('visualization.spain.label')}</h3>
                <p className="text-sm text-white/80">{t('visualization.spain.sub')}</p>
              </div>
              <p className="text-sm text-muted-foreground">{t('visualization.spain.role')}</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center gap-2 text-accent mb-12">
              <ArrowRight className="w-6 h-6" />
              <span className="font-semibold">{t('visualization.to')}</span>
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Europe */}
            <div className="flex-1 text-center">
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-lg p-6 text-white mb-3 transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">🇪🇺</div>
                <h3 className="font-bold text-lg">{t('visualization.europe.label')}</h3>
                <p className="text-sm text-white/80">{t('visualization.europe.sub')}</p>
              </div>
              <p className="text-sm text-muted-foreground">{t('visualization.europe.role')}</p>
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden text-center text-accent mb-6">
            <div className="flex justify-center gap-2 text-sm font-semibold mb-4">
              {t('visualization.africa.label')} → {t('visualization.spain.label')} → {t('visualization.europe.label')}
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${pillar.color} border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className={`${pillar.iconColor} mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Core Value Proposition */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{t('values.operational')}</div>
              <p className="text-muted-foreground">{t('values.mastery')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">{t('values.solidarity_title')}</div>
              <p className="text-muted-foreground">{t('values.solidarity_desc')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">{t('values.tech_title')}</div>
              <p className="text-muted-foreground">{t('values.tech_desc')}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
