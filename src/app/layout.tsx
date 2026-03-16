import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Rural El Olivo | Alt Empordà, Girona",
  description:
    "Casa Rural El Olivo — Tu refugio en el corazón del Alt Empordà. Masía del siglo XVIII restaurada, piscina, desayuno artesanal y rutas de senderismo.",
  openGraph: {
    title: "Casa Rural El Olivo",
    description: "Tu refugio en el corazón del Alt Empordà",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
