import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motionValue,
  type MotionValue,
} from "framer-motion";

interface UseScrollAnimationOptions {
  offset?: Parameters<typeof useScroll>[0] extends { offset?: infer O } ? O : never;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
}

function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Static motion values for reduced-motion users
const staticScrollYProgress = motionValue(0);
const staticOpacity = motionValue(1);
const staticY = motionValue(0);
const staticScale = motionValue(1);

export function useScrollAnimation(
  options?: UseScrollAnimationOptions
): UseScrollAnimationReturn {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options?.offset ?? ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [60, 0, 0, -60]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.95]
  );

  if (prefersReducedMotion) {
    return {
      ref,
      scrollYProgress: staticScrollYProgress,
      opacity: staticOpacity,
      y: staticY,
      scale: staticScale,
    };
  }

  return { ref, scrollYProgress, opacity, y, scale };
}
