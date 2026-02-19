"use client";

import { useEffect } from "react";

export default function GlassPointer() {
  useEffect(() => {
    const finePointer = window.matchMedia?.("(pointer:fine)")?.matches ?? true;
    if (!finePointer) return;

    let lastEl: HTMLElement | null = null;

    const setCenter = (el: HTMLElement) => {
      el.style.setProperty("--gx", "50%");
      el.style.setProperty("--gy", "20%");
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const el = target.closest?.(".glass") as HTMLElement | null;
      if (!el) {
        if (lastEl) {
          setCenter(lastEl);
          lastEl = null;
        }
        return;
      }

      if (lastEl && lastEl !== el) setCenter(lastEl);
      lastEl = el;

      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      el.style.setProperty("--gx", `${x}px`);
      el.style.setProperty("--gy", `${y}px`);
    };

    const onOut = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const el = target.closest?.(".glass") as HTMLElement | null;
      if (!el) return;

      const rel = (e as any).relatedTarget as Node | null;
      if (rel && el.contains(rel)) return;

      setCenter(el);
      if (lastEl === el) lastEl = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return null;
}

