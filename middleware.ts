import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'kp'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(ko|kp)/:path*']
};