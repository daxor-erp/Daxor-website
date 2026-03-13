import { useState } from "react";
import { Palette } from "lucide-react";
import { PRESETS, useColorPreset } from "./ThemeContext";
import { cn } from "@/lib/utils";

export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const { preset, setPreset } = useColorPreset();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="rounded-2xl border shadow-2xl p-4 w-56 bg-popover text-popover-foreground border-border">
          <p className="text-xs font-mono font-bold uppercase tracking-widest mb-3 text-muted-foreground">
            Color Preset
          </p>
          <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1">
            {PRESETS.map(p => (
              <button
                key={p.id}
                title={p.name}
                onClick={() => setPreset(p.id)}
                className="flex flex-col items-center gap-1 group"
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-transform group-hover:scale-110",
                    preset === p.id ? "border-foreground scale-110 ring-2 ring-offset-1 ring-foreground/30" : "border-transparent"
                  )}
                  style={{ background: p.swatch }}
                />
                <span className="text-[9px] font-mono text-muted-foreground leading-none">{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all"
        aria-label="Open theme picker"
      >
        <Palette className="w-4 h-4" />
      </button>
    </div>
  );
}
