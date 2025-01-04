/* eslint-disable import/no-anonymous-default-export */
import createMiddleware from 'next-intl/middleware';
import { locales } from '@/config/i18n.config';

export default createMiddleware({
    locales: locales,
    defaultLocale: 'de',
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};