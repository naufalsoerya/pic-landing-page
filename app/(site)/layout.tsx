"use client";

import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Header />
        <ToasterContext />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
