import { motion, useReducedMotion } from "framer-motion";

export interface WorkflowConnectorProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  animated?: boolean;
  delay?: number;
}

function buildCubicBezierPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
): string {
  const midX = (startX + endX) / 2;
  return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
}

export function WorkflowConnector({
  startX,
  startY,
  endX,
  endY,
  animated = true,
  delay = 0,
}: WorkflowConnectorProps) {
  const prefersReducedMotion = useReducedMotion();
  const d = buildCubicBezierPath(startX, startY, endX, endY);

  const shouldAnimate = animated && !prefersReducedMotion;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Background track */}
      <path
        d={d}
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="6 4"
      />

      {/* Animated foreground path — draws in on scroll */}
      {shouldAnimate ? (
        <motion.path
          d={d}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.8, delay, ease: "easeInOut" },
            opacity: { duration: 0.3, delay },
          }}
        />
      ) : (
        <path
          d={d}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}

      {/* Animated dot at the end */}
      {shouldAnimate ? (
        <motion.circle
          cx={endX}
          cy={endY}
          r={4}
          fill="hsl(var(--muted-foreground))"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: delay + 0.8,
            ease: "easeOut",
          }}
        />
      ) : (
        <circle
          cx={endX}
          cy={endY}
          r={4}
          fill="hsl(var(--muted-foreground))"
        />
      )}
    </svg>
  );
}
