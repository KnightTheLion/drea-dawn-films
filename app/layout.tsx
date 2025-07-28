import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({ subsets: ["latin"] });

const url = "https://dreadawn.com";

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
  metadataBase: new URL("https://dreadawn.com"),
  openGraph: {
    title: "Drea Dawn Photo + Films",
    description:
      "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
    url,
    siteName: "Drea Dawn Photo + Films",
    images: [
      {
        url: `${url}/opengraph-image.jpg`,
        alt: "Drea Dawn Photo + Films — Authentic moments. Cinematic memories.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Drea Dawn Photo + Films",
    description:
      "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
    card: "summary_large_image",
    site: "@dreadawn",
    creator: "@dreadawn",
    images: [
      {
        url: `${url}/twitter-image.jpg`,
        alt: "Drea Dawn Photo + Films — Authentic moments. Cinematic memories.",
      },
    ],
  },
  robots: { index: true, follow: true, nocache: true },
  viewport: "width=device-width, initial-scale=1",
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
