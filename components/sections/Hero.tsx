'use client';

import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-screen">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 w-fit">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t('badge')}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground text-balance">
          {t.rich('title', {
            accent: (chunks) => <span className="text-accent">{t('accent')}</span>
          })}
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl text-balance">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => scrollToSection('fresh-produce')}
          >
            {t('cta_products')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/5"
            onClick={() => scrollToSection('contact')}
          >
            {t('cta_partnership')}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{t('stat_products')}</div>
            <p className="text-sm text-muted-foreground">{t('stat_products_label')}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{t('stat_lines')}</div>
            <p className="text-sm text-muted-foreground">{t('stat_lines_label')}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{t('stat_supply')}</div>
            <p className="text-sm text-muted-foreground">{t('stat_supply_label')}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{t('stat_white_label')}</div>
            <p className="text-sm text-muted-foreground">{t('stat_white_label_label')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
