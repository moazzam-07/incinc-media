import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "Incinc Media — Premier Digital Solutions & Creative Services",
  description:
    "Founded in 2020 in Mumbai, Incinc Media delivers exceptional digital solutions from powerful applications and compelling branding to results-driven marketing.",
  keywords: ["digital agency", "web development", "branding", "Mumbai", "creative services"],
  openGraph: {
    title: "Incinc Media",
    description: "Your dream. Our expertise. A future built together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-canvas text-ink">{children}</body>
    </html>
  );
}
