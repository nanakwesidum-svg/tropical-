'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import {
  DollarSign,
  TrendingUp,
  Globe,
  Zap,
  Award,
  Package
} from 'lucide-react';

export function MarketOpportunity() {
  const t = useTranslations('Market');

  const kpis = [
    {
      icon: DollarSign,
      value: '$12B',
      label: t('kpis.size.label'),
      subtext: t('kpis.size.sub'),
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: TrendingUp,
      value: '+9%',
      label: t('kpis.growth.label'),
      subtext: t('kpis.growth.sub'),
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
    {
      icon: Globe,
      value: '$1.5B',
      label: t('kpis.africa_value.label'),
      subtext: t('kpis.africa_value.sub'),
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Award,
      value: '+36%',
      label: t('kpis.africa_growth.label'),
      subtext: t('kpis.africa_growth.sub'),
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Zap,
      value: '0%',
      label: t('kpis.duty.label'),
      subtext: t('kpis.duty.sub'),
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Package,
      value: '+50-100%',
      label: t('kpis.margin.label'),
      subtext: t('kpis.margin.sub'),
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
  ];

  return (
    <section id="market" className="py-20 bg-background">
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

        {/* KPI Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${kpi.color} border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${kpi.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {kpi.value}
                </div>
                <div className="font-semibold text-foreground mb-2 text-sm">
                  {kpi.label}
                </div>
                <p className="text-xs text-muted-foreground">
                  {kpi.subtext}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Competitive Advantage Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t('why_africa.title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> {t('why_africa.regions.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('why_africa.regions.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> {t('why_africa.tariffs.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('why_africa.tariffs.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> {t('why_africa.processing.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('why_africa.processing.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> {t('why_africa.scarcity.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('why_africa.scarcity.desc')}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
