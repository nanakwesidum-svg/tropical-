'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function ContactForm({ selectedType }: { selectedType: string }) {
    const t = useTranslations('Contact.form');
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
        console.log('Form submitted:', { ...formData, partnerType: selectedType });
    };

    return (
        <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('labels.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('placeholders.name')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        {t('labels.company')}
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('placeholders.company')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t('labels.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('placeholders.email')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t('labels.phone')}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('placeholders.phone')}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {t('labels.message')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('placeholders.message')}
                    />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    {t('submit')}
                    <Send className="w-4 h-4 ml-2" />
                </Button>
            </form>
        </div>
    );
}
