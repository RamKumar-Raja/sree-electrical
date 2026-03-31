import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HT & EHV Substation Services up to 765kV | SRES Electric Chennai",
  description: "ISO 9001:2015 certified electrical engineering company in Chennai. End-to-end ETC services, protection refurbishment, substation automation, and VCB panels up to 765kV. Trusted by ISRO, AAI, and JSW Steel.",
  openGraph: {
    title: "SRES Electric | HT & EHV Electrical Services Chennai",
    description: "ISO 9001:2015 certified. ETC services up to 765kV. Trusted by ISRO, AAI, JSW Steel.",
    url: "https://www.sres-electric.com",
    siteName: "SRES Electric",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Sree Raghavendra Electric Services Pvt. Ltd.",
    "alternateName": "SRES Electric",
    "url": "https://www.sres-electric.com",
    "telephone": "+914442697322",
    "email": "info@sres-electric.com",
    "foundingDate": "1994",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old #37-A, New #32, Kesari Nagar 6th Street Ext, Adambakkam",
      "addressLocality": "Chennai",
      "postalCode": "600088",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-brand-primary selection:text-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
