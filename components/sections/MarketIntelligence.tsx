'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function MarketIntelligence() {
  // Product Growth Data
  const productGrowth = [
    { name: 'Papayas', growth: 14, unitValue: 805 },
    { name: 'Avocados', growth: 13, unitValue: 2666 },
    { name: 'Passion Fruit', growth: 38, unitValue: 3200 },
    { name: 'Mangoes', growth: 7, unitValue: 1250 },
    { name: 'Coconuts', growth: 5, unitValue: 600 },
  ];

  // European Market by Country
  const europeanMarkets = [
    { name: 'Netherlands', value: 235, color: '#FF8C00' },
    { name: 'Germany', value: 138, color: '#3282B8' },
    { name: 'France', value: 104, color: '#0F4C75' },
    { name: 'UK', value: 70, color: '#00C853' },
    { name: 'Belgium', value: 32.6, color: '#FFB347' },
  ];

  // Seasonal Demand
  const seasonalDemand = [
    { month: 'Jan', demand: 130 },
    { month: 'Feb', demand: 135 },
    { month: 'Mar', demand: 120 },
    { month: 'Apr', demand: 140 },
    { month: 'May', demand: 110 },
    { month: 'Jun', demand: 95 },
    { month: 'Jul', demand: 90 },
    { month: 'Aug', demand: 100 },
    { month: 'Sep', demand: 105 },
    { month: 'Oct', demand: 125 },
    { month: 'Nov', demand: 160 },
    { month: 'Dec', demand: 165 },
  ];

  // Product Portfolio
  const products = [
    {
      category: 'High-Growth Tropicals',
      items: [
        { name: 'Papayas', growth: '+14% CAGR', value: '$805/tonne' },
        { name: 'Passion Fruit', growth: '+38% (5yr)', value: '$3,200/tonne' },
        { name: 'Avocados', growth: '+13% CAGR', value: '$2,666/tonne' },
      ],
    },
    {
      category: 'Specialty & Stable',
      items: [
        { name: 'Cocoa', growth: 'Stable', value: 'High-margin processing' },
        { name: 'Cashews', growth: 'Growing', value: 'Value multiplier' },
        { name: 'Shea Butter', growth: 'Rising demand', value: 'Premium organic' },
      ],
    },
    {
      category: 'Value-Added',
      items: [
        { name: 'Cocoa Powders', growth: '+38% premium', value: '+50-100% margin' },
        { name: 'Dried Mango', growth: 'Premium', value: '+65% margin' },
        { name: 'Pineapple Concentrate', growth: 'Rising', value: '+55% margin' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Market Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven insights into tropical fruit exports: products, markets, and seasonal trends.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="growth">Product Growth</TabsTrigger>
            <TabsTrigger value="markets">EU Markets</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal Demand</TabsTrigger>
          </TabsList>

          {/* Product Growth Chart */}
          <TabsContent value="growth">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                High-Growth Product Segments (% CAGR)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={productGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7f1" />
                  <XAxis dataKey="name" stroke="#656b7a" />
                  <YAxis stroke="#656b7a" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#f0f4f8',
                      border: '1px solid #e0e7f1',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="growth" fill="#FF8C00" name="Growth Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Star Product: Passion Fruit
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +38% growth over 5 years; EU imports €88M annually (Netherlands hub dominates)
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Emerging Opportunity: Avocados
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +13% CAGR; Red Sea logistics driving premium pricing; alternative routing via Spain
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* EU Markets */}
          <TabsContent value="markets">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                European Market by Country (€ Millions)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={europeanMarkets}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: €${value}M`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {europeanMarkets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `€${value}M`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6">
                <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Markets</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>🇳🇱 <strong>Netherlands:</strong> €235M - 80% distribution hub (pomegranates, passion fruit)</li>
                    <li>🇩🇪 <strong>Germany:</strong> €138M - Health-conscious consumers (€45.9M passion fruit alone)</li>
                    <li>🇫🇷 <strong>France:</strong> €104M - Strong lychee preference; Rungis wholesale opportunity</li>
                    <li>🇬🇧 <strong>UK:</strong> €70M - Innovation receptive; Brexit opportunities for direct African suppliers</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Seasonal Demand */}
          <TabsContent value="seasonal">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Seasonal Demand Patterns (Index)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={seasonalDemand}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7f1" />
                  <XAxis dataKey="month" stroke="#656b7a" />
                  <YAxis stroke="#656b7a" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#f0f4f8',
                      border: '1px solid #e0e7f1',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="demand"
                    stroke="#FF8C00"
                    strokeWidth={2}
                    dot={{ fill: '#FF8C00', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Peak Season: Dec
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +30% demand above baseline (Christmas & holiday gifting)
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Secondary Peak: Apr
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +25% demand (Easter & Ramadan celebration season)
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Off-Season: Jul
                  </p>
                  <p className="text-xs text-muted-foreground">
                    -30% demand (summer break); premium pricing for available fruit
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Product Portfolio Matrix */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Our Export Portfolio
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((category, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-6"
              >
                <h4 className="font-bold text-foreground mb-4">{category.category}</h4>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <p className="font-semibold text-foreground text-sm">
                        {item.name}
                      </p>
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>{item.growth}</span>
                        <span className="text-accent font-medium">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
