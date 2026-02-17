"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const nextChildrenRef = useRef(children);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"enter" | "idle" | "exit">("enter");

  useEffect(() => {
    nextChildrenRef.current = children;
  }, [children]);

  useEffect(() => {
    // Initial paint: start in enter state then settle to idle.
    const raf = requestAnimationFrame(() => setPhase("idle"));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Route change: fade out old content, swap, then fade in.
    setPhase("exit");

    const swapTimer = setTimeout(() => {
      setDisplayChildren(nextChildrenRef.current);
      setPhase("enter");
      requestAnimationFrame(() => setPhase("idle"));
    }, 220);

    return () => clearTimeout(swapTimer);
  }, [pathname]);

  return (
    <div className={`page-transition ${phase === "enter" ? "pt-enter" : ""} ${phase === "exit" ? "pt-exit" : ""}`}>
      {displayChildren}
    </div>
  );
}
