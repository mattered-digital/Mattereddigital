import type { Metadata } from "next";
import { Inter, Oswald, Space_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import GridOverlay from "@/components/GridOverlay";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mattered.digital/"),
  title: {
    default: "Mattered | Web Agency & Digital Marketing Powerhouse",
    template: "%s | Mattered"
  },
  description:
    "Mattered is a premier web agency and digital marketing powerhouse. We build custom websites, help you get more customers online, and grow your business.",
  keywords: [
    // Plain English & Problem-Solving Queries
    "Hire a web developer",
    "Best digital marketing agency",
    "Make a website for my business",
    "How to get more customers online",
    "Website design company",
    "Help with SEO and marketing",
    
    // Core Services & Niche
    "Custom Web Solutions",
    "Digital Marketing Powerhouse",
    "AI Agents for Business",
    "Web Agency",
    "Growth Marketing"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mattered | Web Agency & Digital Marketing Powerhouse",
    description: "Custom web solutions and digital marketing strategies that drive measurable growth.",
    url: "https://mattered.digital/",
    siteName: "Mattered Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattered | Web Agency & Digital Marketing Powerhouse",
    description: "Custom web solutions and digital marketing strategies that drive measurable growth.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD Schema for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mattered Digital",
    "url": "https://mattered.digital/",
    "logo": "https://mattered.digital/logo.png",
    "description": "Mattered is a premier web agency and digital marketing powerhouse.",
    "telephone": "+919430558276",
    "email": "hi@mattered.digital",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "knowsAbout": [
      "Web Development", "Digital Marketing", "SEO",
      "AI Automation", "UI/UX Design", "React", "Next.js"
    ],
    "sameAs": [
      "https://x.com/mattereddigital",
      "https://www.linkedin.com/company/mattered-digital"
    ]
  };

  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black font-sans text-white antialiased">
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <SmoothScrollProvider>
          <CustomCursor />
          <GridOverlay />
          <Nav />
          {children}
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}