import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Background is always present (not transitioned) */}
        <div className="fixed inset-0 -z-10 bg-[#0B0F14]" aria-hidden>
          <Image
            src="/background.svg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
