"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in";

const rootMargin = "0px 0px -80px 0px";
const threshold = 0.08;

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

const variantClasses: Record<Variant, { base: string; visible: string }> = {
  "fade-up": {
    base: "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    base: "opacity-0 transition-all duration-700 ease-out",
    visible: "opacity-100",
  },
};

type AnimateInProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  delay?: number;
};

export function AnimateIn({
  children,
  variant = "fade-up",
  className,
  delay = 0,
}: AnimateInProps) {
  const { ref, isInView } = useInView();
  const { base, visible } = variantClasses[variant];
  const [delayedVisible, setDelayedVisible] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setDelayedVisible(true), delay);
    return () => clearTimeout(t);
  }, [isInView, delay]);

  const show = delayedVisible;

  return (
    <div ref={ref} className={cn(base, show && visible, className)}>
      {children}
    </div>
  );
}
