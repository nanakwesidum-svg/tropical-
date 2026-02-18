'use client';

import { Card } from '@/components/ui/card';

export function Products() {
  const productLines = [
    {
      name: 'Tropical Fruits',
      products: [
        {
          icon: '🧡',
          name: 'Papayas',
          growth: '+14% CAGR',
          value: '$805/tonne avg',
          description: 'Fresh & processed; Green papaya segment rising in EU',
        },
        {
          icon: '🥭',
          name: 'Mangoes',
          growth: '+7% CAGR',
          value: '$1,200-$1,300/tonne',
          description: 'Premium varieties; High demand in Germany & UK',
        },
        {
          icon: '❤️',
          name: 'Passion Fruit',
          growth: '+38% (5yr)',
          value: '$3,200/tonne',
          description: 'Exclusive exotic; €88M EU imports, Netherlands hub',
        },
      ],
    },
    {
      name: 'Specialty Crops',
      products: [
        {
          icon: '🍫',
          name: 'Cocoa',
          growth: 'Stable, premium',
          value: '+50-100% processing margin',
          description: '70% of African world supply; Value-added processing focus',
        },
        {
          icon: '💛',
          name: 'Cashews',
          growth: 'Growing supply',
          value: 'Value multiplier',
          description: 'Growing African production; Processing premiums',
        },
        {
          icon: '✨',
          name: 'Shea Butter',
          growth: 'Rising demand',
          value: 'Premium organic segment',
          description: 'EU organic market growing; Cosmetics & food grade',
        },
      ],
    },
    {
      name: 'Value-Added Products',
      products: [
        {
          icon: '🌾',
          name: 'Superfood Powders',
          growth: '+38% premium',
          value: '+65-100% margin',
          description: 'Cocoa, mango, banana powders; Health-conscious EU buyers',
        },
        {
          icon: '🧂',
          name: 'Dried & Concentrated',
          growth: 'Expanding category',
          value: '+55% margin',
          description: 'Dried mango, pineapple concentrate, papaya chips',
        },
        {
          icon: '⚡',
          name: 'Precision-Processed',
          growth: 'Tech-enabled',
          value: 'Premium pricing',
          description: 'Solar-dried, digitally tracked, EUDR compliant',
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
            Our Export Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three product categories spanning fresh exports to high-margin value-added goods, all backed by operational mastery and market data.
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
                        <span className="text-xs text-muted-foreground">Growth</span>
                        <span className="text-sm font-semibold text-accent">
                          {product.growth}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Unit Value</span>
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
            Ready to Source Premium African Exports?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're a distributor seeking reliable supply, an investor exploring growth opportunities, or a tech partner enabling transparency - we have a portfolio for you.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Explore Partnerships
          </a>
        </Card>
      </div>
    </section>
  );
}
