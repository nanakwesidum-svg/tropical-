'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'distributor',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const audiences = [
    {
      icon: Users,
      title: 'For Distributors',
      description: 'Access premium African tropical fruits with guaranteed traceability and seasonal supply planning.',
      cta: 'View Catalog',
      link: '#products',
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Calendar,
      title: 'For Investors',
      description: 'Participate in high-growth export opportunity with measurable impact and transparent operations.',
      cta: 'Schedule Call',
      link: '#contact',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Mail,
      title: 'For Tech Partners',
      description: 'Integrate your traceability, AI, or supply chain solutions into our platform.',
      cta: 'Explore APIs',
      link: '#contact',
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Join the Trade Bridge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you source premium African exports, invest in growth, or enable technology - we have an opportunity for you.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience, idx) => {
            const Icon = audience.icon;
            return (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${audience.color} border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-lg transform hover:-translate-y-1 flex flex-col`}
              >
                <div className={`${audience.iconColor} mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {audience.description}
                </p>
                <a
                  href={audience.link}
                  className="inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  {audience.cta}
                </a>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                I am interested in
              </label>
              <select
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="distributor">Product Distribution</option>
                <option value="investor">Investment Opportunity</option>
                <option value="tech">Tech Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </Button>
              {submitted && (
                <p className="text-success text-sm mt-3 text-center">
                  Thank you! We'll be in touch within 24 hours.
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
