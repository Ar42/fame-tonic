import type { Metadata } from "next";
import { Urbanist, Figtree } from "next/font/google";

import Header from "@/features/Layout/Header";
import Navbar from "@/features/Layout/Navbar";

import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Turn Social Media Into a Profitable Career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <html lang="en">
        <body
          className={`${urbanist.variable} ${figtree.variable} font-urbanist bg-black min-h-screen mb-10 lg:mb-0`}
        >
          <main className="max-w-260 px-5 lg:px-0 mx-auto">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
