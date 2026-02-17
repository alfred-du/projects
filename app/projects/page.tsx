"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fade-only-1">
        <Navbar />
      </div>

      <main>
        {/* Projects */}
        <section
          className="fade-in-2 scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl pt-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-lg text-white/70 font-sans">
              A selection of recent work and side projects.
            </p>
            <div className="mt-10 space-y-10">
              {[1, 2].map((i) => {
                const fadeClass = i === 1 ? "fade-in-3" : "fade-in-4";
                return (
                  <article
                    key={i}
                    className={`${fadeClass} glass glass-hover group rounded-2xl p-6 transition-all`}
                  >
                    <span className="font-mono text-xs text-white/50">
                      Project {i}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold text-white">
                      Project title
                    </h3>
                    <p className="mt-2 text-white/70 font-sans">
                      Short description of the project and your role.
                    </p>
                    <a
                      href="#"
                      className="glass glass-hover mt-4 inline-block rounded-xl px-6 py-3 font-mono font-medium text-white transition-all"
                    >
                      View project
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
