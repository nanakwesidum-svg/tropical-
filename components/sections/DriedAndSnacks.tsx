'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { driedProducts, snackProducts } from '@/lib/data/products';

export function DriedAndSnacks() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<'dried' | 'snacks'>('dried');

  return (
    <section id="snacks" className="w-full py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('Products.headers.value_added_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('Products.headers.value_added_desc')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('dried')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${selectedCategory === 'dried'
              ? 'bg-primary text-white'
              : 'bg-card text-foreground border border-border hover:bg-muted'
              }`}
          >
            {t('Products.categories.dried')}
          </button>
          <button
            onClick={() => setSelectedCategory('snacks')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${selectedCategory === 'snacks'
              ? 'bg-primary text-white'
              : 'bg-card text-foreground border border-border hover:bg-muted'
              }`}
          >
            {t('Products.categories.snacks')}
          </button>
        </div>

        {/* Dried & Processed */}
        {selectedCategory === 'dried' && (
          <div className="grid gap-6 md:grid-cols-2">
            {driedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden border border-border flex flex-col md:flex-row group hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto md:w-80 bg-muted flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={t(product.nameKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2 uppercase">{t(product.categoryKey)}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{t(product.nameKey)}</h3>
                    <p className="text-muted-foreground mb-4">{t(product.descriptionKey!)}</p>

                    <div className="space-y-2 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">{t('Products.labels.sizes')}</p>
                        <p className="text-sm font-medium text-foreground">{t(product.sizesKey!)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">{t('Products.labels.certifications')}</p>
                        <p className="text-sm font-medium text-foreground">{t(product.certificationsKey!)}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t('Products.labels.quote')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Snacks & White Label */}
        {selectedCategory === 'snacks' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {snackProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg overflow-hidden border border-border group hover:shadow-lg transition-shadow flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    {product.whiteLabel && (
                      <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {t('Products.labels.white_label')}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2 uppercase">{t(product.categoryKey)}</p>
                      <h3 className="text-xl font-bold text-foreground mb-2">{t(product.nameKey)}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{t(product.descriptionKey!)}</p>

                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">{t('Products.labels.sizes')}</p>
                          <p className="text-sm font-medium text-foreground">{t(product.sizesKey!)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">{t('Products.labels.variants')}</p>
                          <p className="text-sm font-medium text-foreground">{t(product.variantsKey!)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-2">
                        {t('Products.labels.quote')}
                      </Button>
                      {product.whiteLabel && (
                        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                          {t('Products.labels.white_label_inquiry')}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* White Label CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-3">White Label Solutions</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Develop your own branded snack line with our full support. Custom packaging design, ingredient customization, and bulk production available. Minimum order quantities apply.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start White Label Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
