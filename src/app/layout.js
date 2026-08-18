import { Outfit, Inter } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/typography.css";
import "@/styles/layout.css";
import "@/styles/components.css";
import "@/styles/styles.css";
import "@/styles/hero-stat-cards.css";
import "@/styles/mobile.css";
import LenisProvider from "@/components/LenisProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-primary", weight: ["400", "600", "700", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-secondary", weight: ["200", "300", "400", "500", "700"] });

export const metadata = {
  metadataBase: new URL("https://praiz-portfolio.com"),
  title: "Praiz | Multidisciplinary Designer",
  description: "Ghana-based multidisciplinary designer specializing in graphic design, motion design, cinematography, and video editing.",
  openGraph: {
    title: "Praiz | Multidisciplinary Designer",
    description: "Graphic design, motion design, cinematography, and video editing crafted to help brands tell meaningful stories.",
    url: "https://praiz-portfolio.com",
    siteName: "Praiz Portfolio",
    images: [
      {
        url: "/OG-Image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
