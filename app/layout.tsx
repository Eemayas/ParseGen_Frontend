/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLR Parser Tool",
  description:
    "A tool for parsing context-free grammars using CLR parsing techniques.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroHighlight>
          <main className={`mx-auto max-w-[100rem]`}> {children}</main>
        </HeroHighlight>
      </body>
    </html>
  );
}
