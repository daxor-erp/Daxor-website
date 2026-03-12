import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative py-3 -my-3">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-3">
              {/* invisible bridge to prevent gap-triggered close */}
              <div className="absolute -top-3 left-0 right-0 h-3" />
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-background border border-border rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-border bg-background/90 backdrop-blur-md shadow-sm flex items-center justify-center space-x-6 px-8 py-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link to={href} className="flex space-x-3 group">
      <img
        src={src}
        width={120}
        height={60}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-md w-[120px] h-[60px] object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold mb-1 text-foreground group-hover:text-foreground/80 transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground text-xs max-w-[10rem] leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}) => {
  return (
    <Link
      to={href}
      {...rest}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
};
