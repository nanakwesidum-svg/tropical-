'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const partnerTypes = [
  {
    id: 'distributor',
    title: 'Bulk Fresh Produce',
    subtitle: 'For Distributors & Wholesalers',
    description: 'Volume pricing, consistent seasonal supply, logistics coordination, and dedicated account management.',
    icon: '📦',
  },
  {
    id: 'retailer',
    title: 'Fresh & Snack Products',
    subtitle: 'For Retailers & Supermarkets',
    description: 'Direct supply of fresh produce and branded snacks with co-branding and shelf-space opportunities.',
    icon: '🛒',
  },
  {
    id: 'foodservice',
    title: 'Custom & White Label',
    subtitle: 'For Food Service & Brands',
    description: 'Custom snack products, branded packaging, bulk production, ingredient customization, and co-development.',
    icon: '🍽️',
  },
];

export function ContactPartnership() {
  const [selectedType, setSelectedType] = useState('distributor');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, partnerType: selectedType });
  };

  return (
    <section id="contact" className="w-full py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Let's Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Select your partnership type to get started. We work with distributors, retailers, food service, and brand partners across Europe.
          </p>
        </div>

        {/* Partner Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {partnerTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`text-left p-6 rounded-lg border-2 transition-all ${
                selectedType === type.id
                  ? 'bg-primary/10 border-primary'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              <div className="text-3xl mb-3">{type.icon}</div>
              <h3 className="font-bold text-lg text-foreground mb-1">{type.title}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{type.subtitle}</p>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </button>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Company"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Inquiry
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+34 XXX XXX XXX</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm CET</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">partnerships@tropicaltrader.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">Madrid, Spain</p>
                  <p className="text-sm text-muted-foreground">Europe's Gateway to African Produce</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-4">Why Partner With Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">✓</span>
                  Direct African sourcing, fair prices
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">✓</span>
                  Consistent year-round supply
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">✓</span>
                  Full traceability & compliance
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">✓</span>
                  White label & custom solutions
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">✓</span>
                  Dedicated account support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
