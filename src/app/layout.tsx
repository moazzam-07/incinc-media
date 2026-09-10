import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavPill } from "@/components/shared/nav-pill";
import { InvertedFooter } from "@/components/shared/inverted-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://incincmedia.com"),
  title: "Incinc Media — Digital Solutions & Creative Powerhouse",
  description:
    "Incinc Media is a premier digital solutions and creative services powerhouse based in Mumbai, India. Delivering custom mobile & web applications, branding, digital marketing, and software architectures for 300+ global brands.",
  keywords: [
    "Incinc Media",
    "Digital Agency Mumbai",
    "Web Development",
    "Mobile App Development",
    "Custom Software Solutions",
    "Branding",
    "SEO",
    "Digital Marketing",
    "Febble Spot",
  ],
  authors: [{ name: "Incinc Media" }],
  icons: {
    icon: "/assets/images/favicon-32x32.png",
    apple: "/assets/images/apple-icon-180x180.png",
  },
  openGraph: {
    title: "Incinc Media — Digital Solutions & Creative Powerhouse",
    description: "Your dream. Our expertise. A future built together. Partnered with 300+ clients nationally and internationally.",
    url: "https://incincmedia.com",
    siteName: "Incinc Media",
    images: [
      {
        url: "/assets/images/our-office.jpg",
        width: 1200,
        height: 630,
        alt: "Incinc Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-[#000000] text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
        <NavPill />
        <main className="flex-1 w-full">{children}</main>
        <InvertedFooter />
      </body>
    </html>
  );
}
