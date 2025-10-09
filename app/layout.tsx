import './globals.css'; // Import global styles
import type { Metadata } from 'next';
import { Inter, Inter_Tight, Work_Sans, Source_Serif_4 } from 'next/font/google';

// 1. Define Font Variables using next/font/google
// These will automatically optimize fonts and apply CSS variables for Tailwind.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font load
  variable: '--font-inter', // CSS variable name
  weight: ['400', '500'], // Body text weights as per your design system
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['600', '700'], // Heading weights
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['600', '700'], // Heading weights
});

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-pro',
  weight: ['400'], // Editorial italic (use only 400 for italic)
  style: ['normal', 'italic'],
});

// 2. Define SEO Metadata
// This will generate <title>, <meta description>, Open Graph tags, etc.
export const metadata: Metadata = {
  title: 'Digital Palika',
  description: 'Digital Palika',
  keywords: ['consulting', 'global', 'strategy', 'technology', 'digital transformation', 'Ninja Infosys'],
  metadataBase: new URL('https://your-domain.com'), // <<< IMPORTANT: CHANGE THIS TO YOUR ACTUAL DOMAIN
  openGraph: {
    title: 'Digital Palika',
    description: 'Digital Palika',
    url: 'https://your-domain.com', // <<< IMPORTANT: CHANGE THIS
    siteName: 'Digital Palika',
    images: [
      {
        url: '/next.svg', // You'll create this image in `public/` later
        width: 1200,
        height: 630,
        alt: 'Digital Palika',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninja Infosys — Global Consulting',
    description: 'Ninja Infosys is a global consulting company specializing in digital transformation, strategy, and technology solutions.',
    creator: '@yourtwitterhandle', // <<< IMPORTANT: CHANGE THIS TO YOUR COMPANY'S TWITTER HANDLE
    images: ['/file.svg'], // You'll create this image in `public/` later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // For bilingual support, we'll need dynamic alternates in a later step
  // For now, a single canonical URL is sufficient.
  alternates: {
    canonical: 'https://your-domain.com', // <<< IMPORTANT: CHANGE THIS
  },
};

// 3. Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply font CSS variables to the HTML element
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${workSans.variable} ${sourceSerifPro.variable}`}>
      {/* Apply default body styles from Tailwind via globals.css body rule */}
      <body className="antialiased">
        {/* Skip-to-content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 p-2 bg-accent text-paper rounded-md shadow-lg transition-colors duration-200"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}