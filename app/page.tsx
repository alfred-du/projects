"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <main>
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6"
        >
          <div className="-mt-24 sm:-mt-32">
          <p className="fade-in-2 font-mono text-sm uppercase tracking-widest text-white/60 sm:text-base">
            Hello, I&apos;m
          </p>
          <h1 className="fade-in-3 font-display mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Alfred Du
          </h1>
          <p className="fade-in-4 mt-4 max-w-xl text-lg text-white/80 sm:text-xl font-sans">
            Electrical Engineering at University of California, San Diego
          </p>
          <div className="fade-in-5 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all"
            >
              View work
            </a>
            <a
              href="#contact"
              className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all"
            >
              Get in touch
            </a>
          </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="fade-in-6 scroll-mt-navbar px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80 font-sans">
                Hey, I'm Alfred. I'm a student at UCSD studying Electrical Engineering with a focus in Machine Learning. I&apos;m interested in embedded systems, AI, and robotics. I'm always looking for new opportunities to learn and grow. I also enjoy cooking and reading in my free time.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/80 font-sans">
                Here's some of my technical skills.
            </p>
            {/* Edit skills: add/remove strings in each array, or add a new category with label + items */}
            {(
              [
                { label: "Software", items: ["C/C++", "Python/PyTorch", "MATLAB", "System/Verilog", "OpenCV", "Linux"] },
                { label: "Hardware", items: ["Microcontrollers", "FPGA", "PCB Design", "Communication Protocols", "Oscilloscopes", "Multimeters"] },
                { label: "Tools", items: ["PSpice", "Fusion 360", "EasyEDA", "Vivado", "Git", "PlatformIO", "Soldering", "3D printing"] },
              ] as const
            ).map(({ label, items }) => (
              <div key={label} className="mt-8">
                <p className="font-mono text-sm font-medium text-white/70 mb-3">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="glass glass-hover rounded-lg px-4 py-2 font-mono text-sm text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="fade-in-6 scroll-mt-navbar px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience
            </h2>
            <p className="mt-4 text-lg text-white/70 font-sans">
              Here&apos;s what I've been up to recently.
            </p>

            <div className="mt-12 grid gap-8">
              {[
                {
                  role: "Math Tutor",
                  company: "Private Tutoring",
                  dates: "May 2024 — Present",
                  start: "2023-06-01",
                  end: "2026-01-01",
                },
                {
                  role: "Social Media Intern",
                  company: "Global Life Enrichment Center",
                  dates: "Jul 2023 – Aug 2023 ",
                  start: "2023-07-01",
                  end: "2026-08-01",
                },
                {
                  role: "FPGA Intern",
                  company: "ATRXIC Consulting",
                  dates: "Jun 2024 — Jul 2024",
                  start: "2024-06-01",
                  end: "2024-07-31",
                },
                {
                  role: "Electrical Team Member",
                  company: "Triton Robotics",
                  dates: "Jan 2026 — Present",
                  start: "2026-01-01",
                  end: null as string | null,
                },
              ]
                .slice()
                .sort((a, b) => {
                  // Newer entries first; "Present" (null end) always on top if start is newer.
                  const aStart = new Date(a.start).getTime();
                  const bStart = new Date(b.start).getTime();
                  return bStart - aStart;
                })
                .map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="glass glass-hover glass-spot-sm rounded-2xl p-6 transition-all"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <span className="font-mono text-sm text-white/60">
                      {item.dates}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-white/70">{item.company}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="fade-in-6 scroll-mt-navbar px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-lg text-white/70 font-sans">
              A selection of recent projects I've worked on for fun.
            </p>

            {/* Edit projects: add/remove items; thumbnail: path under public/ (e.g. /project-1.jpg) or external URL */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "NLP Calendar Gadget",
                  description: "An ESP32-based gadget that uses a T5-Small model to summarize calendar events and display it on a screen.",
                  thumbnail: "/calendar.png",
                  href: "https://github.com/alfred-du/ML-Calendar",
                },
                {
                  title: "Smart Planter",
                  description: "An IoT automatic planter monitoring system using ESP32 and Telegram Bot.",
                  thumbnail: "/planter_cover.jpg",
                  href: "https://github.com/alfred-du/Smart-Planter",
                  thumbnailFit: "contain" as const, // zoom out to show full image
                },
                {
                  title: "24V-5V Standalone Buck Converter",
                  description: "A custom buck converter PCB for Triton Robotics.",
                  thumbnail: "/buck.png",
                  href: "https://github.com/alfred-du/TR-Buck",
                },
              ].map((project) => (
                <article
                  key={project.title}
                  className="glass glass-hover glass-spot-sm overflow-hidden rounded-2xl transition-all"
                >
                  <div className="aspect-[4/3] relative w-full bg-white/5">
                    <Image
                      src={project.thumbnail}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-white/70">
                      {project.description}
                    </p>
                    {project.href && (
                      <a
                        href={project.href}
                        className="mt-3 inline-block font-mono text-sm text-white/80 underline-offset-2 hover:underline"
                      >
                        View project →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="fade-in-6 scroll-mt-navbar px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-white/70 font-sans">
              Want to chat or to just say hi? I&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:alfreddu2007@gmail.com"
                className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2"
                aria-label="Email"
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email
              </a>

              <a
                href="https://linkedin.com/in/alfreddu2007"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/alfred-du"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://instagram.com/a.lfreddu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-xl px-6 py-3 font-mono font-medium text-white transition-all flex items-center gap-2"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
