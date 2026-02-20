'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export function Roadmap() {
  const t = useTranslations('Roadmap');
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      number: 1,
      title: t('phases.phase_1.title'),
      timeline: t('phases.phase_1.period'),
      icon: Target,
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
      highlights: t.raw('phases.phase_1.highlights'),
      metrics: Object.values(t.raw('phases.phase_1.metrics')),
    },
    {
      number: 2,
      title: t('phases.phase_2.title'),
      timeline: t('phases.phase_2.period'),
      icon: CheckCircle,
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
      highlights: t.raw('phases.phase_2.highlights'),
      metrics: Object.values(t.raw('phases.phase_2.metrics')),
    },
    {
      number: 3,
      title: t('phases.phase_3.title'),
      timeline: t('phases.phase_3.period'),
      icon: Zap,
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
      highlights: t.raw('phases.phase_3.highlights'),
      metrics: Object.values(t.raw('phases.phase_3.metrics')),
    },
  ];

  return (
    <section id="approach" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('header.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('header.subtitle')}
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
                              {phase.title}
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
                          {(phase.highlights as string[]).slice(0, 2).map((highlight, i) => (
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
                              {t('labels.highlights')}
                            </h4>
                            <ul className="space-y-2">
                              {(phase.highlights as string[]).map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              {t('labels.metrics')}
                            </h4>
                            <div className="space-y-2">
                              {(phase.metrics as string[]).map((metric, i) => (
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

        {/* Success Factors - This section could also be translated if needed, 
            but for now focus on the main content */}
      </div>
    </section>
  );
}
