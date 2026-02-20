import { useTranslations } from 'next-intl';
import { freshProducts } from '@/lib/data/products';

export function FreshProduce() {
  const t = useTranslations();

  return (
    <section id="fresh-produce" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('Products.headers.fresh_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('Products.headers.fresh_desc')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freshProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={t(product.nameKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {t(product.nameKey)}
                </h3>

                <div className="space-y-3 mb-6">
                  {/* Origin */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">{t('Products.labels.origin')}</p>
                      <p className="text-sm font-medium text-foreground">{t(product.originKey)}</p>
                    </div>
                  </div>

                  {/* Season */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">{t('Products.labels.season')}</p>
                      <p className="text-sm font-medium text-foreground">{t(product.seasonKey)}</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">{t('Products.labels.specs')}</p>
                      <p className="text-sm font-medium text-foreground">{t(product.specsKey)}</p>
                    </div>
                  </div>
                </div>

                {/* Capacity Badge */}
                <div className="mb-6 bg-primary/10 border border-primary/20 rounded-md p-3">
                  <p className="text-xs text-primary/70 uppercase font-semibold mb-1">{t('Products.labels.capacity')}</p>
                  <p className="font-semibold text-primary">{t(product.capacityKey)}</p>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  {t('Products.labels.quote')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
