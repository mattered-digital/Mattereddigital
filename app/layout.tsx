import type { Metadata } from "next";
import { Inter, Oswald, Space_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import GridOverlay from "@/components/GridOverlay";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

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
  metadataBase: new URL("http://mattered.digital/"),
  title: {
    default: "Matter | Web Agency & Digital Marketing Powerhouse",
    template: "%s | Matter"
  },
  description:
    "Matter is a premier web agency and digital marketing powerhouse. We specialize in custom web solutions, AI agents, and high-performance marketing strategies for global brands.",
  keywords: ["Web Agency", "Digital Marketing", "Custom Web Solutions", "AI Agents", "Next.js Development", "Growth Marketing"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matter | Web Agency & Digital Marketing Powerhouse",
    description: "Custom web solutions and digital marketing strategies that drive measurable growth.",
    url: "http://mattered.digital/",
    siteName: "Matter Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matter | Web Agency & Digital Marketing Powerhouse",
    description: "Custom web solutions and digital marketing strategies that drive measurable growth.",
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
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black font-sans text-white antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <GridOverlay />
          <Nav />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
