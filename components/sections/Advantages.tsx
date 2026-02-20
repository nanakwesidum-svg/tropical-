'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Advantages');

  const advantages = [
    {
      icon: Shield,
      title: t('pillars.ground_to_gate.title'),
      description: t('pillars.ground_to_gate.description'),
      benefits: t.raw('pillars.ground_to_gate.benefits'),
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Award,
      title: t('pillars.operational.title'),
      description: t('pillars.operational.description'),
      benefits: t.raw('pillars.operational.benefits'),
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Network,
      title: t('pillars.ecosystem.title'),
      description: t('pillars.ecosystem.description'),
      benefits: t.raw('pillars.ecosystem.benefits'),
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
    {
      icon: MapPin,
      title: t('pillars.sovereignty.title'),
      description: t('pillars.sovereignty.description'),
      benefits: t.raw('pillars.sovereignty.benefits'),
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Zap,
      title: t('pillars.tech_chain.title'),
      description: t('pillars.tech_chain.description'),
      benefits: t.raw('pillars.tech_chain.benefits'),
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: TrendingUp,
      title: t('pillars.impact.title'),
      description: t('pillars.impact.description'),
      benefits: t.raw('pillars.impact.benefits'),
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
            {t('header.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('header.description')}
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
                    {t('labels.benefits')}
                  </p>
                  <ul className="space-y-1">
                    {(adv.benefits as string[]).map((benefit, i) => (
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
            {t('story.title')}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold mb-3">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('story.step_1.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('story.step_1.desc')}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full font-bold mb-3">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('story.step_2.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('story.step_2.desc')}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full font-bold mb-3">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('story.step_3.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('story.step_3.desc')}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 bg-success text-white rounded-full font-bold mb-3">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t('story.step_4.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('story.step_4.desc')}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
