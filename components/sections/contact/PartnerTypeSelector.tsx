'use client';

import { useTranslations } from 'next-intl';

const partnerTypes = [
    { id: 'distributor', icon: '📦' },
    { id: 'retailer', icon: '🛒' },
    { id: 'foodservice', icon: '🍽️' },
];

interface PartnerTypeSelectorProps {
    selectedType: string;
    onSelect: (type: string) => void;
}

export function PartnerTypeSelector({ selectedType, onSelect }: PartnerTypeSelectorProps) {
    const t = useTranslations('Contact.partner_types');

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {partnerTypes.map((type) => (
                <button
                    key={type.id}
                    onClick={() => onSelect(type.id)}
                    className={`text-left p-6 rounded-lg border-2 transition-all ${selectedType === type.id
                            ? 'bg-primary/10 border-primary'
                            : 'bg-card border-border hover:border-primary/50'
                        }`}
                >
                    <div className="text-3xl mb-3">{type.icon}</div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{t(`${type.id}.title`)}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{t(`${type.id}.subtitle`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`${type.id}.description`)}</p>
                </button>
            ))}
        </div>
    );
}
