import { useRef } from "react";
import { motion, useInView, type Easing } from "framer-motion";
import {
  ANIMATION_VARIANTS,
  DEFAULT_ANIMATION_CONFIG,
  type AnimatedSectionProps,
} from "@/lib/animation-config";

function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = DEFAULT_ANIMATION_CONFIG.delay,
  threshold = 0.2,
  once = DEFAULT_ANIMATION_CONFIG.once,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const prefersReducedMotion = usePrefersReducedMotion();

  const { initial, animate } = ANIMATION_VARIANTS[variant];

  // When reduced motion is preferred, render content immediately without animation
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration: DEFAULT_ANIMATION_CONFIG.duration,
        delay,
        ease: DEFAULT_ANIMATION_CONFIG.ease as Easing,
      }}
    >
      {children}
    </motion.div>
  );
}
