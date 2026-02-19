import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Image from "next/image";
import GlassPointer from "./components/GlassPointer";
import Link from "next/link";

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

        <GlassPointer />
        <PageTransition>
          <>
            <nav className="flex flex-wrap items-center justify-center gap-2 px-4 py-5 sm:gap-3 sm:px-6 lg:px-8" aria-label="Main">
              <Link href="/" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all">
                Home
              </Link>
              <a href="/#about" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all">
                About
              </a>
              <a href="/#experience" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all">
                Experience
              </a>
              <a href="/#projects" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all">
                Projects
              </a>
              <a href="/#contact" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all">
                Contact
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Resume
              </a>
            </nav>
            {children}
          </>
        </PageTransition>
      </body>
    </html>
  );
}
