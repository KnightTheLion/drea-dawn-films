import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dreadawn.com"),
  title: "Drea Dawn Photo + Films",
  description:
    "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
  openGraph: {
    title: "Drea Dawn Photo + Films",
    description:
      "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
    url: "https://dreadawn.com",
    siteName: "Drea Dawn Photo + Films",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drea Dawn Photo + Films — Authentic moments. Cinematic memories.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drea Dawn Photo + Films",
    description:
      "Drea Dawn Photography and Films is here to capture your most important memories and make them last forever. We specialize in weddings, engagements, and family photography and videography. Based in the Triad, North Carolina.",
    images: ["/opengraph-image.jpg"],
  },

  keywords: [
    "North Carolina Wedding Photographer",
    "Greensboro Wedding Photographer",
    "Asheboro Wedding Photographer",
    "Triad Wedding Photographer",
    "North Carolina Wedding Videographer",
    "Greensboro Wedding Videographer",
    "NC Wedding Photography and Videography",
    "North Carolina Family Photographer",
    "Asheboro Family Portraits",
    "North Carolina Portrait Photographer",
    "Triad Senior Photos",
    "NC Senior Photos",
  ],
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
