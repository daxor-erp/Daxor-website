import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const warnedRef = useRef(false);
  const { theme, setTheme, themes } = useTheme();

  // Detect if we're outside a ThemeProvider: next-themes returns empty themes array
  const hasProvider = themes.length > 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !hasProvider && !warnedRef.current) {
      warnedRef.current = true;
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "ThemeToggle: Rendered outside of ThemeProvider. Toggle functionality is disabled."
        );
      }
    }
  }, [mounted, hasProvider]);

  const handleToggle = () => {
    if (!hasProvider) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${className ?? ""}`}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300" />
      )}
    </button>
  );
}
