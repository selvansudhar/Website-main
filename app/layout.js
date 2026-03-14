import { inter, outfit, bricolage, instrumentSerif, plusJakarta } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://zynex.ai'),
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
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#056CB8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${bricolage.variable} ${instrumentSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-body text-dark antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zynex",
              "url": "https://zynex.ai",
              "logo": "https://zynex.ai/images/zynex-logo.png",
              "description": "AI-powered enterprise platform combining ERP, CRM, HR, Finance, and intelligent assistants for growing businesses.",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "url": "https://zynex.ai/contact"
              },
              "foundingDate": "2024",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "10-50"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zynex",
              "url": "https://zynex.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://zynex.ai/resources/help-center?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
