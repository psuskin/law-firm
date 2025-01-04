export const defaultLocale = 'de';
export const locales = ['de', 'en', 'tr'] as const;
export type Locale = typeof locales[number];

export const pathnames = {
    '/': '/',
    '/about': '/about',
    '/terms': '/terms',
    '/imprint': '/imprint',
    '/data-protection': '/data-protection'
} as const; 