'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PartnerTypeSelector } from './contact/PartnerTypeSelector';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export function ContactPartnership() {
  const t = useTranslations('Contact.header');
  const [selectedType, setSelectedType] = useState('distributor');

  return (
    <section id="contact" className="w-full py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Partner Type Selection */}
        <PartnerTypeSelector selectedType={selectedType} onSelect={setSelectedType} />

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm selectedType={selectedType} />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
