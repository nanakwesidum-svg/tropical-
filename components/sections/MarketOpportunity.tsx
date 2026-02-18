'use client';

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
  const kpis = [
    {
      icon: DollarSign,
      value: '$12B',
      label: 'Global Market Size',
      subtext: 'Tropical fruits 2025 - highest level to date',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: TrendingUp,
      value: '+9%',
      label: 'YoY Growth',
      subtext: 'Global tropical fruit market growth 2024-2025',
      color: 'from-success/20 to-success/10',
      iconColor: 'text-success',
    },
    {
      icon: Globe,
      value: '$1.5B',
      label: "Africa's Export Value",
      subtext: '12.5% of global market - fastest growing region',
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Award,
      value: '+36%',
      label: 'Africa Growth Rate',
      subtext: 'Decade growth (2016-2025) vs. slower competitors',
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Zap,
      value: '0%',
      label: 'EU Duty Rate',
      subtext: 'Economic Partnership Agreement (EPA) access',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Package,
      value: '+50-100%',
      label: 'Processing Margin',
      subtext: 'Value-added products vs. fresh fruit premium',
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
            Export Market Opportunity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real market data from FAO, CBI, and African Development Bank - showing why now is the time to scale African exports.
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
          <h3 className="text-2xl font-bold text-foreground mb-6">Why Africa Now?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> Fastest Growing Export Region
              </h4>
              <p className="text-muted-foreground text-sm">
                African tropical fruit exports growing 36% over decade, significantly outpacing Central America and Caribbean. Demand for African products at all-time high.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> Zero Tariff Advantage
              </h4>
              <p className="text-muted-foreground text-sm">
                EPA duty-free access to EU markets vs. competitors. Direct cost advantage enabling premium pricing or higher volumes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> Processing Premiums
              </h4>
              <p className="text-muted-foreground text-sm">
                Value-added products (flours, powders, concentrates) command 50-100% premiums. Higher margins through backward integration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">✓</span> Supply Chain Scarcity
              </h4>
              <p className="text-muted-foreground text-sm">
                Red Sea routing issues and climate challenges create unit value premiums. Premium positioning for alternative sourcing.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
