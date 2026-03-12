import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
}: FlippingCardProps) {
  return (
    <div
      className="group/flipping-card [perspective:1000px] w-full"
      style={{ "--height": `${height}px`, "--width": `${width}px` } as React.CSSProperties}
    >
      <div
        className={cn(
          "relative rounded-xl border border-surface-dark-foreground/10 bg-transparent shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]",
          "h-[var(--height)] w-full",
          className
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {frontContent}
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
