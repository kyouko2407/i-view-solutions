import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'V-Solutions',
  description: 'Find and compare English learning centers with AI-powered recommendations',
  icons: {
    icon: [
      { url: '/images/icon.ico', type: 'image/x-icon' },
      { url: '/images/icon.ico', type: 'image/ico' },
    ],
    shortcut: '/images/icon.ico',
    apple: '/images/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/icon.ico" />
        <link rel="apple-touch-icon" href="/images/icon.ico" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
