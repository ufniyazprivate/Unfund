import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dynamic Domain Anchor Specification
// Target Canonical Production Domain: https://unfund.in
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://unfund.in";

export const viewport: Viewport = {
  themeColor: "#0A1128",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UNFUND | Automated Startup Deal Readiness & VC Infrastructure",
    template: "%s | UNFUND Technologies",
  },
  description:
    "Automated deal-readiness platform for Indian startups. Reconcile bank telemetry and GST filings into an audited VC Investment Package & 0–100 Fundability Scorecard.",
  keywords: [
    "Startup Funding India",
    "Fundability Scorecard",
    "Cap-Table Audit",
    "iSAFE CCPS Engine",
    "Account Aggregator Telemetry",
    "Government Grant Matcher",
    "SISFS BIRAC Grants",
    "VC Deal Flow Pipeline",
    "Early Stage VC Readiness",
    "DPIIT Startup Verification",
  ],
  authors: [{ name: "UNFUND Engineering & Compliance Team", url: SITE_URL }],
  creator: "UNFUND Technologies",
  publisher: "UNFUND Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "UNFUND",
    title: "UNFUND | Get Your Startup VC-Ready in 3 Minutes",
    description:
      "Stop ruining your cap-table. Convert raw bank receipts and GST filings into an audited VC Investment Package with our algorithmic Fundability Scorecard.",
    images: [
      {
        url: `${SITE_URL}/logo-unfund.png`,
        width: 1200,
        height: 630,
        alt: "UNFUND Automated Deal Readiness Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNFUND | Automated Deal Readiness Platform",
    description:
      "Reconcile financial telemetry, clean your cap-table, and access non-dilutive government capital.",
    images: [`${SITE_URL}/logo-unfund.png`],
    creator: "@unfund_in",
  },
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
  icons: {
    icon: "/icon-unfund.png",
    shortcut: "/icon-unfund.png",
    apple: "/icon-unfund.png",
  },
  manifest: `${SITE_URL}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Institutional JSON-LD Structured Data Schema for Search Engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "UNFUND",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-unfund.png`,
    description:
      "Automated deal-readiness SaaS platform and financial telemetry pipeline for early-stage startups and VC investors.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/unfund_in",
      "https://linkedin.com/company/unfund",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free 3-Minute Cap-Table & VC Fundability Audit",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UNFUND",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/verify?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Injecting Structured Data (SEO Schemas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className="bg-unfund-cream text-unfund-navy antialiased selection:bg-unfund-gold selection:text-unfund-dark flex flex-col min-h-screen">
        
        {/* =================================================================== */}
        {/* NAVBAR COMPONENT PLACEHOLDER                                        */}
        {/* Component File Path: @/components/Navbar.tsx                      */}
        {/* Serves global routes: /platform, /fundability-scorecard, /grants,  */}
        {/* /for-investors, /pricing, and CTAs (/verify, /audit)               */}
        {/* =================================================================== */}
        <Navbar/>

        {/* Core Main Viewport */}
        <main className="flex-grow">{children}</main>

        {/* =================================================================== */}
        {/* FOOTER COMPONENT PLACEHOLDER                                        */}
        {/* Component File Path: @/components/Footer.tsx                      */}
        {/* Contains non-NBFC legal disclaimers, DPDP Act 2023 compliance,     */}
        {/* telemetry consent policies, and structural link hierarchy           */}
        {/* =================================================================== */}
        <Footer/>

      </body>
    </html>
  );
}