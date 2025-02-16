import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./utils/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Austin Koske - Portfolio",
  description: "Austin Koske's Portfolio - Software Engineer and Computer Science Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen transition-colors`}>
        <DarkModeProvider>
          <DarkModeToggle />
          <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
            {children}
          </main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
