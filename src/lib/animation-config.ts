export type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Animation variant */
  variant?: AnimationVariant;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Viewport threshold (0-1) to trigger animation */
  threshold?: number;
  /** Whether to animate only once or every time element enters viewport */
  once?: boolean;
}

export interface AnimationConfig {
  /** Duration in seconds */
  duration: number;
  /** Delay in seconds */
  delay: number;
  /** Easing function name */
  ease: string;
  /** Whether animation triggers once or repeats */
  once: boolean;
}

export const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
  duration: 0.6,
  delay: 0,
  ease: "easeOut",
  once: true,
};

interface VariantValues {
  initial: Record<string, number>;
  animate: Record<string, number>;
}

export const ANIMATION_VARIANTS: Record<AnimationVariant, VariantValues> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};
