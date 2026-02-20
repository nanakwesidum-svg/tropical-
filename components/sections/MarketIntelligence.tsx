'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('MarketIntelligence');

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

  return (
    <section className="py-20 bg-card">
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

        {/* Tabs */}
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="growth">{t('charts.growth.title')}</TabsTrigger>
            <TabsTrigger value="markets">{t('charts.eu_market.title')}</TabsTrigger>
            <TabsTrigger value="seasonal">{t('charts.seasonal.title')}</TabsTrigger>
          </TabsList>

          {/* Product Growth Chart */}
          <TabsContent value="growth">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('charts.growth.title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('charts.growth.desc')}
              </p>
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
            </Card>
          </TabsContent>

          {/* EU Markets */}
          <TabsContent value="markets">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('charts.eu_market.title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('charts.eu_market.desc')}
              </p>
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
            </Card>
          </TabsContent>

          {/* Seasonal Demand */}
          <TabsContent value="seasonal">
            <Card className="bg-background border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('charts.seasonal.title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('charts.seasonal.desc')}
              </p>
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
            </Card>
          </TabsContent>
        </Tabs>

        {/* Strategic Market Insights */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            {t('insights.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">{t('insights.epa.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('insights.epa.desc')}</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">{t('insights.climate.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('insights.climate.desc')}</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">{t('insights.logistics.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('insights.logistics.desc')}</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">{t('insights.white_label.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('insights.white_label.desc')}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
