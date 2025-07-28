import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drea Dawn Photo + Films",
  description:
    "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
  keywords: [
    "Photography",
    "Videography",
    "Weddings",
    "Engagements",
    "Family Pictures",
    "Portraits",
    "Senior Photos",
    "Greensboro",
    "Asheboro",
    "Triad",
    "North Carolina",
    "NC",
  ],
  openGraph: {
    title: "Drea Dawn Photo + Films",
    description:
      "Weddings, engagements, family photography and films in the Triad, NC. Capturing unforgettable memories.",
    url: "https://www.dreadawn.com",
    siteName: "Drea Dawn Photo + Films",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dreadawn.com/og-image.jpg",
        secureUrl: "https://dreadawn.com/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Image of Drea Dawn Photo + Films",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drea Dawn Photo + Films",
    description:
      "Wedding and family photography and films in Greensboro and the Triad, North Carolina.",
    images: [
      {
        url: "https://dreadawn.com/og-image.jpg",
        secureUrl: "https://dreadawn.com/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Image of Drea Dawn Photo + Films",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="min-h-screen bg-white flex flex-col">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
