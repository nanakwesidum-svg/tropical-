'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';
        // pathname looks like "/en/some-path" or "/es/some-path"
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.push(segments.join('/'));
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
            {locale === 'en' ? 'ES' : 'EN'}
        </Button>
    );
}
