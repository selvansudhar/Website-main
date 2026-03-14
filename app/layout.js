import { inter, outfit, bricolage, instrumentSerif, plusJakarta } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import './globals.css';

export const metadata = {
  title: {
    default: 'Zynex — AI-Powered Enterprise Platform',
    template: '%s | Zynex',
  },
  description: 'Zynex is an AI-powered enterprise platform that helps businesses automate workflows, deploy intelligent AI solutions, and scale operations with cutting-edge AI technology.',
  keywords: 'Zynex, AI, enterprise, intelligence, ERP, CRM, automation, machine learning',
  openGraph: {
    title: 'Zynex — AI-Powered Enterprise Platform',
    description: 'AI-powered enterprise platform for modern businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zynex — AI-Powered Enterprise Platform',
    description: 'AI-powered enterprise platform for modern businesses.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${bricolage.variable} ${instrumentSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-body text-dark antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
