'use client';

import { Image as ImageIcon, Package, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

const driedProducts = [
  {
    id: 'fusion-fruit',
    name: 'Mango-Pineapple-Coconut Fusion',
    category: 'Dried & Processed',
    image: '/products/dried-fusion.jpg',
    description: 'Premium blend of dried mango strips, pineapple chunks, and coconut pieces. No added sugars, organic certified.',
    sizes: '200g, 500g, 5kg bulk',
    certifications: 'Organic, EU compliant',
  },
];

const snackProducts = [
  {
    id: 'fruit-bars',
    name: 'Fruit Bars',
    category: 'Snacks',
    image: '/products/fruit-bars.jpg',
    description: 'Portable energy bars in Mango, Passion Fruit, Papaya, and Coconut varieties. Perfect for on-the-go nutrition.',
    sizes: '30g bars, 12/24/48 count boxes',
    whiteLabel: true,
    variants: 'Plain or chocolate-coated',
  },
  {
    id: 'fruit-balls',
    name: 'Fruit Balls',
    category: 'Snacks',
    image: '/products/fruit-balls.jpg',
    description: 'Energy-dense, naturally sweet fruit balls. Perfect blend of tropical flavors in convenient bite-sized portions.',
    sizes: '250g, 500g, bulk options',
    whiteLabel: true,
    variants: 'Plain, dark chocolate, milk chocolate, white chocolate',
  },
  {
    id: 'fruit-rolls',
    name: 'Fruit Rolls/Leather',
    category: 'Snacks',
    image: '/products/fruit-rolls.jpg',
    description: 'Chewy fruit leather with natural flavors. Mango, Pineapple, and mixed varieties available.',
    sizes: 'Individual wraps, bulk rolls',
    whiteLabel: true,
    variants: 'Plain or chocolate-coated',
  },
  {
    id: 'fruit-cubes',
    name: 'Fruit Cubes',
    category: 'Snacks',
    image: '/products/fruit-cubes.jpg',
    description: 'Bite-sized naturally sweet fruit cubes. Perfect for snacking or mixing. Mango, Papaya, and blends.',
    sizes: 'Bulk and individual packaging',
    whiteLabel: true,
    variants: 'Plain, dark chocolate, milk chocolate',
  },
];

export function DriedAndSnacks() {
  const [selectedCategory, setSelectedCategory] = useState<'dried' | 'snacks'>('dried');

  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Value-Added & Snacks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Premium processed fruits and snack products. Available for direct purchase or as white label options for retail and food service partners.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('dried')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'dried'
                ? 'bg-primary text-white'
                : 'bg-card text-foreground border border-border hover:bg-muted'
            }`}
          >
            Dried & Processed
          </button>
          <button
            onClick={() => setSelectedCategory('snacks')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'snacks'
                ? 'bg-primary text-white'
                : 'bg-card text-foreground border border-border hover:bg-muted'
            }`}
          >
            Snacks & B2B
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
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2 uppercase">{product.category}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Available Sizes</p>
                        <p className="text-sm font-medium text-foreground">{product.sizes}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Certifications</p>
                        <p className="text-sm font-medium text-foreground">{product.certifications}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Request Quote
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
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    {product.whiteLabel && (
                      <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        White Label
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2 uppercase">{product.category}</p>
                      <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Sizes</p>
                          <p className="text-sm font-medium text-foreground">{product.sizes}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Variants</p>
                          <p className="text-sm font-medium text-foreground">{product.variants}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-2">
                        Request Quote
                      </Button>
                      {product.whiteLabel && (
                        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                          White Label Inquiry
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
