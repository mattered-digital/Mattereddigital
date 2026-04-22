import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northforge | Signal-First Growth Agency",
  description:
    "Northforge is a marketing agency for ambitious brands, blending strategy, creative systems, performance media, and growth operations into one motion-driven digital presence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
