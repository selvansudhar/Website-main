import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    { path: '../assets/fonts/inter-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/inter-500.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/inter-600.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/inter-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/inter-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'optional',
});

export const outfit = localFont({
  src: [
    { path: '../assets/fonts/outfit-600.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/outfit-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/outfit-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-outfit',
  display: 'optional',
});

export const bricolage = localFont({
  src: [
    { path: '../assets/fonts/bricolage-grotesque-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/bricolage-grotesque-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-bricolage',
  display: 'optional',
});

export const instrumentSerif = localFont({
  src: [
    { path: '../assets/fonts/instrument-serif-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/instrument-serif-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument',
  display: 'optional',
});

export const plusJakarta = localFont({
  src: [
    { path: '../assets/fonts/plus-jakarta-sans-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/plus-jakarta-sans-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-jakarta',
  display: 'optional',
});
