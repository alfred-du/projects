"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", isHash: false },
  { href: "/#about", label: "About", isHash: true },
  { href: "/#experience", label: "Experience", isHash: true },
  { href: "/projects", label: "Projects", isHash: false },
  { href: "/#contact", label: "Contact", isHash: true },
];

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <nav className="pointer-events-auto mx-auto mt-5 flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-2 sm:gap-3">
          {navLinks.map(({ href, label, isHash }) => {
            const linkClassName =
              "glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all";
            
            // Use regular anchor for hash links (same-page navigation)
            if (isHash) {
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={linkClassName}
                  >
                    {label}
                  </a>
                </li>
              );
            }
            
            // Use Next.js Link for internal routes
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={linkClassName}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
