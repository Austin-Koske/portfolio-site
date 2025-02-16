import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Austin Koske",
  description: "Welcome to my portfolio!",
  metadataBase: new URL('https://austinkoske.com'),
  openGraph: {
    title: 'Austin Koske',
    description: 'Welcome to my portfolio!',
    url: 'https://austinkoske.com',
    siteName: 'Austin Koske',
    images: [
      {
        url: '/avatar.jpg',  // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Austin Koske - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Koske',
    description: 'Welcome to my portfolio!',
    images: ['/avatar.jpg'], // Replace with your actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
