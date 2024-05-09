import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jean BORT | Portfolio",
  description: "Bienvenue sur le portfolio de BORT Jean",
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <main className="w-full 2xl:max-w-[1440px] mx-auto pt-28 md:pt-36 xl:pt-[200px] px-2 sm:px-5 md:px-10 lg:px-28 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
