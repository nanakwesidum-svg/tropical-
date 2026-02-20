'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ContactInfo() {
    const t = useTranslations('Contact.info');

    return (
        <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">{t('title')}</h3>

            <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">{t('phone.label')}</h4>
                        <p className="text-muted-foreground">{t('phone.value')}</p>
                        <p className="text-sm text-muted-foreground">{t('phone.hours')}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">{t('email.label')}</h4>
                        <p className="text-muted-foreground">{t('email.value')}</p>
                        <p className="text-sm text-muted-foreground">{t('email.response_time')}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">{t('address.label')}</h4>
                        <p className="text-muted-foreground">{t('address.value')}</p>
                        <p className="text-sm text-muted-foreground">{t('address.tagline')}</p>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-4">{t('why_us.title')}</h4>
                <ul className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <span className="text-accent font-bold">✓</span>
                            {t(`why_us.point_${i}`)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
