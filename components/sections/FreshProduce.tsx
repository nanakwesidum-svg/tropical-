'use client';

import { Image as ImageIcon, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const products = [
  {
    id: 'mango',
    name: 'Mangoes',
    origin: 'Ghana',
    image: '/products/mango.jpg',
    varieties: 'Tommy Atkins, Kent',
    season: 'Dec - May',
    specs: 'Premium size, Golden color, Brix 14-16',
    capacity: '20-40 tonnes/month',
  },
  {
    id: 'papaya',
    name: 'Papayas',
    origin: 'Kenya & Ghana',
    image: '/products/papaya.jpg',
    varieties: 'Green & Yellow',
    season: 'Year-round',
    specs: 'Medium size, Sweet flesh, Optimum ripeness',
    capacity: '15-30 tonnes/month',
  },
  {
    id: 'passion-fruit',
    name: 'Passion Fruit',
    origin: 'Kenya',
    image: '/products/passion-fruit.jpg',
    varieties: 'Purple Passion',
    season: 'Feb - Oct',
    specs: 'Premium grade, High acidity, Fresh pulp',
    capacity: '5-15 tonnes/month',
  },
  {
    id: 'avocado',
    name: 'Avocados',
    origin: 'Kenya',
    image: '/products/avocado.jpg',
    varieties: 'Hass',
    season: 'June - Oct',
    specs: 'Perfect ripeness, Creamy flesh, High yield',
    capacity: '10-25 tonnes/month',
  },
  {
    id: 'pineapple',
    name: 'Pineapples',
    origin: 'Ghana',
    image: '/products/pineapple.jpg',
    varieties: 'Smooth Cayenne',
    season: 'Year-round',
    specs: 'Golden exterior, Sweet taste, 1.5-2kg',
    capacity: '25-50 tonnes/month',
  },
  {
    id: 'cocoa',
    name: 'Cocoa Beans',
    origin: 'Ghana',
    image: '/products/cocoa.jpg',
    varieties: 'Premium Grade',
    season: 'Year-round',
    specs: 'Fermented, High cocoa butter, Fine flavor',
    capacity: '5-15 tonnes/month',
  },
  {
    id: 'cashew',
    name: 'Cashews',
    origin: 'Ghana',
    image: '/products/cashew.jpg',
    varieties: 'Raw & Processed',
    season: 'Dec - May',
    specs: 'Premium kernels, Uniform size, Fresh',
    capacity: '5-10 tonnes/month',
  },
];

export function FreshProduce() {
  return (
    <section id="fresh-produce" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Fresh Produce
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Premium tropical fruits and specialty crops sourced directly from our partner farms in Ghana and Kenya. Exceptional quality, consistent supply, transparent sourcing.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {product.name}
                </h3>

                <div className="space-y-3 mb-6">
                  {/* Origin */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Origin</p>
                      <p className="text-sm font-medium text-foreground">{product.origin}</p>
                    </div>
                  </div>

                  {/* Season */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Season</p>
                      <p className="text-sm font-medium text-foreground">{product.season}</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Specs</p>
                      <p className="text-sm font-medium text-foreground">{product.specs}</p>
                    </div>
                  </div>
                </div>

                {/* Capacity Badge */}
                <div className="mb-6 bg-primary/10 border border-primary/20 rounded-md p-3">
                  <p className="text-xs text-primary/70 uppercase font-semibold mb-1">Capacity</p>
                  <p className="font-semibold text-primary">{product.capacity}</p>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
