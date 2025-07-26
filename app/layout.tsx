import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const raleway = Raleway({ subsets: ["latin"] });

const metadata: Metadata = {
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
};
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
