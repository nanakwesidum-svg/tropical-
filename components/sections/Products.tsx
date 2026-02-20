import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';

export function Products() {
  const t = useTranslations('Portfolio');

  const productLines = [
    {
      name: t('tropical.title'),
      products: [
        {
          icon: '🧡',
          name: t('tropical.papayas.name'),
          growth: t('tropical.papayas.growth'),
          value: t('tropical.papayas.value'),
          description: t('tropical.papayas.description'),
        },
        {
          icon: '🥭',
          name: t('tropical.mangoes.name'),
          growth: t('tropical.mangoes.growth'),
          value: t('tropical.mangoes.value'),
          description: t('tropical.mangoes.description'),
        },
        {
          icon: '❤️',
          name: t('tropical.passion.name'),
          growth: t('tropical.passion.growth'),
          value: t('tropical.passion.value'),
          description: t('tropical.passion.description'),
        },
      ],
    },
    {
      name: t('specialty.title'),
      products: [
        {
          icon: '🍫',
          name: t('specialty.cocoa.name'),
          growth: t('specialty.cocoa.growth'),
          value: t('specialty.cocoa.value'),
          description: t('specialty.cocoa.description'),
        },
        {
          icon: '💛',
          name: t('specialty.cashews.name'),
          growth: t('specialty.cashews.growth'),
          value: t('specialty.cashews.value'),
          description: t('specialty.cashews.description'),
        },
        {
          icon: '✨',
          name: t('specialty.shea.name'),
          growth: t('specialty.shea.growth'),
          value: t('specialty.shea.value'),
          description: t('specialty.shea.description'),
        },
      ],
    },
    {
      name: t('value_added.title'),
      products: [
        {
          icon: '🌾',
          name: t('value_added.superfood.name'),
          growth: t('value_added.superfood.growth'),
          value: t('value_added.superfood.value'),
          description: t('value_added.superfood.description'),
        },
        {
          icon: '🧂',
          name: t('value_added.dried.name'),
          growth: t('value_added.dried.growth'),
          value: t('value_added.dried.value'),
          description: t('value_added.dried.description'),
        },
        {
          icon: '⚡',
          name: t('value_added.precision.name'),
          growth: t('value_added.precision.growth'),
          value: t('value_added.precision.value'),
          description: t('value_added.precision.description'),
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
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

        {/* Product Categories */}
        {productLines.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded"></span>
              {category.name}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {category.products.map((product, prodIdx) => (
                <Card
                  key={prodIdx}
                  className="bg-gradient-to-br from-card to-muted/30 border-border/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg transform hover:-translate-y-1 overflow-hidden relative group"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-3">{product.icon}</div>

                    {/* Name */}
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {product.name}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 pt-4 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{t('labels.growth')}</span>
                        <span className="text-sm font-semibold text-accent">
                          {product.growth}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{t('labels.unit_value')}</span>
                        <span className="text-sm font-semibold text-success">
                          {product.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {t('cta.title')}
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t('cta.button')}
          </a>
        </Card>
      </div>
    </section>
  );
}
