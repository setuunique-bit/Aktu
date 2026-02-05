import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"; // Use Next.js Link for faster navigation
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

// 1. SETUP BASE URL (Important for SEO images to work)
// Replace 'https://your-domain.com' with your actual Vercel domain later
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aktu-erp.in";

// 2. SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | AKTU Student Overview",
    default: "AKTU Student Overview - OneView, ERP, Results & Syllabus",
  },
  description:
    "Your #1 unofficial guide for Dr. A.P.J. Abdul Kalam Technical University. Fast access to AKTU OneView Results, ERP Login, Circulars, and B.Tech Syllabus 2026.",
  keywords: [
    "AKTU OneView",
    "AKTU Result 2026",
    "UPTU ERP",
    "AKTU Syllabus",
    "Dr APJ Abdul Kalam Technical University",
    "AKTU Admit Card",
  ],
  authors: [{ name: "AKTU Student Hub" }],
  creator: "AKTU Student Hub",
  publisher: "AKTU Student Hub",
  // Robots control: Tell Google explicitly to index this
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Social Media Sharing (Open Graph)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "AKTU Student Overview",
    title: "AKTU Student Overview - Results & ERP Portal",
    description:
      "Direct links to AKTU OneView, ERP Dashboard, and 2026 Syllabus. Mobile-optimized for fast access.",
    images: [
      {
        url: "/og-image.jpg", // You can add an image named 'og-image.jpg' in public folder later
        width: 1200,
        height: 630,
        alt: "AKTU Student Overview Portal",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "AKTU Student Overview - Results & ERP",
    description: "Fastest access to AKTU OneView and ERP login.",
    images: ["/og-image.jpg"],
  },
  // Verification for Google Search Console (Add your code later)
  verification: {
    google: "EHtY1IUc0c4kgLm7u1kFJKYlktbgxCCKshxnEWun9UY",
  }
};

// 3. SEPARATE VIEWPORT EXPORT (Required for Next.js 15)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
 



      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Navigation */}
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-3 flex justify-around md:top-0 md:bottom-auto md:border-b z-50 safe-area-pb">
          {/* Using Next.js <Link> instead of <a> makes navigation instant (SEO Boost) */}
          <Link
            href="/"
            className="flex flex-col items-center text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl mb-1">🏠</span>
            <span>Home</span>
          </Link>
          <Link
            href="/university-info"
            className="flex flex-col items-center text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl mb-1">ℹ️</span>
            <span>Info</span>
          </Link>
          <Link
            href="/admissions"
            className="flex flex-col items-center text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl mb-1">🎓</span>
            <span>Admissions</span>
          </Link>
        </nav>

        {/* Main Content */}
        <main className="pb-24 md:pt-24 md:pb-0 min-h-screen px-4 py-6">
          {children}
        </main>
        <GoogleAnalytics gaId="G-S1Y2RJHJNF" />
 <Script
    async
    id="adsense-init"
    strategy="afterInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8193901665933827"
    crossOrigin="anonymous"
  />
      </body>
    </html>
  );
}