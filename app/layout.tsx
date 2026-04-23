import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
  variable: "--font-serif"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Evolve Clone",
  description:
    "A motion-first agency landing page scaffold built with Next.js 14, Tailwind CSS, GSAP, and Lenis."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black font-sans text-white antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Nav />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
