import { getRequestConfig } from 'next-intl/server';
import { locales } from './config/i18n.config';

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) {
        throw new Error('Invalid locale');
    }

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
}); 