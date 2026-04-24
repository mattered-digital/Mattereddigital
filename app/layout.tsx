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
  title: "Matter | Marketing Agency for Brands That Want Momentum",
  description:
    "Matter is a marketing agency blending strategy, creative, content, and performance to help ambitious brands turn attention into growth."
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
