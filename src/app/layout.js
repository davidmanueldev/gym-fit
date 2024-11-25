import localFont from "next/font/local";
import "./globals.css";
//Fuentes
import { Oswald, Roboto, Playfair } from "next/font/google";
// Componentes
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/app/Providers";
import Hero from "@/components/Hero";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Gym Fit",
  description: "Alguna webada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-gray-200">
      <body className={`${oswald.variable} ${roboto.variable} ${playfair.variable} max-w-[1920px] mx-auto bg-white`}>
        {/* <Header />
        <Hero /> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
