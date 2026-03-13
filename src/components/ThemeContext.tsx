import { createContext, useContext, useEffect, useState } from "react";

export interface ColorPreset {
  id: string; name: string; swatch: string;
  vars: { light: Record<string, string>; dark: Record<string, string> };
}

export const PRESETS: ColorPreset[] = [
  { id:"indigo",name:"Indigo",swatch:"#4f46e5",vars:{
    light:{"--primary":"235 55% 37%","--primary-foreground":"0 0% 100%","--ring":"235 55% 37%","--surface-dark":"235 45% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"235 55% 45%","--background":"235 40% 96%","--foreground":"235 25% 8%","--card":"235 40% 99%","--card-foreground":"235 25% 8%","--secondary":"235 30% 91%","--secondary-foreground":"235 40% 20%","--muted":"235 25% 92%","--muted-foreground":"235 15% 35%","--border":"235 25% 85%","--input":"235 25% 85%"},
    dark: {"--primary":"235 70% 65%","--primary-foreground":"230 30% 6%","--ring":"235 70% 65%","--surface-dark":"235 40% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"235 70% 70%","--background":"230 30% 6%","--foreground":"0 0% 98%","--card":"230 30% 9%","--card-foreground":"0 0% 98%","--secondary":"230 25% 16%","--secondary-foreground":"0 0% 92%","--muted":"230 25% 14%","--muted-foreground":"220 15% 68%","--border":"230 25% 18%","--input":"230 25% 18%"},
  }},
  { id:"daxor",name:"Daxor",swatch:"#E85002",vars:{
    light:{"--primary":"18 97% 46%","--primary-foreground":"0 0% 100%","--ring":"18 97% 46%","--surface-dark":"18 40% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"18 97% 55%","--background":"30 20% 97%","--foreground":"20 15% 8%","--card":"0 0% 100%","--card-foreground":"20 15% 8%","--secondary":"30 20% 91%","--secondary-foreground":"18 40% 20%","--muted":"30 15% 92%","--muted-foreground":"20 10% 38%","--border":"30 15% 85%","--input":"30 15% 85%"},
    dark: {"--primary":"18 97% 55%","--primary-foreground":"0 0% 100%","--ring":"18 97% 55%","--surface-dark":"18 35% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"18 97% 62%","--background":"20 12% 5%","--foreground":"30 20% 96%","--card":"20 12% 8%","--card-foreground":"30 20% 96%","--secondary":"20 10% 14%","--secondary-foreground":"30 20% 90%","--muted":"20 10% 12%","--muted-foreground":"30 10% 62%","--border":"20 10% 16%","--input":"20 10% 16%"},
  }},
  { id:"crimson",name:"Crimson",swatch:"#ad0013",vars:{
    light:{"--primary":"354 100% 34%","--primary-foreground":"0 0% 100%","--ring":"354 100% 34%","--surface-dark":"354 40% 14%","--surface-dark-foreground":"40 45% 80%","--highlight":"38 42% 45%","--background":"38 25% 96%","--foreground":"20 15% 8%","--card":"38 25% 99%","--card-foreground":"20 15% 8%","--secondary":"38 25% 90%","--secondary-foreground":"38 30% 20%","--muted":"38 20% 92%","--muted-foreground":"20 10% 38%","--border":"38 20% 84%","--input":"38 20% 84%"},
    dark: {"--primary":"354 100% 45%","--primary-foreground":"0 0% 100%","--ring":"38 42% 45%","--surface-dark":"354 35% 10%","--surface-dark-foreground":"38 45% 75%","--highlight":"38 42% 50%","--background":"20 8% 7%","--foreground":"38 30% 90%","--card":"20 8% 10%","--card-foreground":"38 30% 90%","--secondary":"20 8% 15%","--secondary-foreground":"38 25% 80%","--muted":"20 8% 13%","--muted-foreground":"38 15% 58%","--border":"20 8% 18%","--input":"20 8% 18%"},
  }},
  { id:"retro",name:"Retro",swatch:"#f3701e",vars:{
    light:{"--primary":"22 89% 53%","--primary-foreground":"0 0% 100%","--ring":"22 89% 53%","--surface-dark":"214 25% 28%","--surface-dark-foreground":"30 40% 90%","--highlight":"22 89% 62%","--background":"30 35% 95%","--foreground":"214 20% 12%","--card":"30 35% 99%","--card-foreground":"214 20% 12%","--secondary":"30 30% 88%","--secondary-foreground":"214 25% 22%","--muted":"30 25% 90%","--muted-foreground":"214 15% 40%","--border":"30 20% 82%","--input":"30 20% 82%"},
    dark: {"--primary":"22 89% 58%","--primary-foreground":"0 0% 100%","--ring":"22 89% 58%","--surface-dark":"214 25% 18%","--surface-dark-foreground":"30 40% 88%","--highlight":"22 89% 65%","--background":"214 20% 8%","--foreground":"30 35% 92%","--card":"214 20% 11%","--card-foreground":"30 35% 92%","--secondary":"214 18% 16%","--secondary-foreground":"30 30% 85%","--muted":"214 18% 14%","--muted-foreground":"30 20% 60%","--border":"214 18% 20%","--input":"214 18% 20%"},
  }},
  { id:"vintage",name:"Vintage",swatch:"#B83A2D",vars:{
    light:{"--primary":"6 62% 45%","--primary-foreground":"0 0% 100%","--ring":"6 62% 45%","--surface-dark":"125 15% 22%","--surface-dark-foreground":"38 40% 88%","--highlight":"6 62% 54%","--background":"38 30% 95%","--foreground":"20 15% 10%","--card":"38 30% 99%","--card-foreground":"20 15% 10%","--secondary":"38 25% 88%","--secondary-foreground":"125 15% 20%","--muted":"38 20% 90%","--muted-foreground":"20 10% 40%","--border":"38 18% 82%","--input":"38 18% 82%"},
    dark: {"--primary":"6 62% 52%","--primary-foreground":"0 0% 100%","--ring":"6 62% 52%","--surface-dark":"125 15% 14%","--surface-dark-foreground":"38 40% 85%","--highlight":"6 62% 60%","--background":"20 10% 7%","--foreground":"38 28% 90%","--card":"20 10% 10%","--card-foreground":"38 28% 90%","--secondary":"20 8% 15%","--secondary-foreground":"38 25% 82%","--muted":"20 8% 13%","--muted-foreground":"38 15% 58%","--border":"20 8% 18%","--input":"20 8% 18%"},
  }},
  { id:"tealsoul",name:"Teal Soul",swatch:"#3E6868",vars:{
    light:{"--primary":"180 27% 33%","--primary-foreground":"0 0% 100%","--ring":"180 27% 33%","--surface-dark":"180 27% 18%","--surface-dark-foreground":"38 35% 88%","--highlight":"4 52% 52%","--background":"38 25% 95%","--foreground":"180 15% 10%","--card":"38 25% 99%","--card-foreground":"180 15% 10%","--secondary":"38 22% 88%","--secondary-foreground":"180 20% 20%","--muted":"38 18% 90%","--muted-foreground":"180 10% 40%","--border":"38 15% 82%","--input":"38 15% 82%"},
    dark: {"--primary":"180 27% 45%","--primary-foreground":"0 0% 100%","--ring":"180 27% 45%","--surface-dark":"180 27% 12%","--surface-dark-foreground":"38 35% 85%","--highlight":"4 52% 58%","--background":"180 15% 7%","--foreground":"38 25% 90%","--card":"180 15% 10%","--card-foreground":"38 25% 90%","--secondary":"180 12% 15%","--secondary-foreground":"38 22% 82%","--muted":"180 12% 13%","--muted-foreground":"38 12% 58%","--border":"180 12% 18%","--input":"180 12% 18%"},
  }},
  { id:"ocean",name:"Ocean",swatch:"#1d4ed8",vars:{
    light:{"--primary":"221 83% 40%","--primary-foreground":"0 0% 100%","--ring":"221 83% 40%","--surface-dark":"221 55% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"221 83% 48%","--background":"221 50% 96%","--foreground":"221 30% 8%","--card":"221 50% 99%","--card-foreground":"221 30% 8%","--secondary":"221 35% 91%","--secondary-foreground":"221 40% 20%","--muted":"221 30% 92%","--muted-foreground":"221 15% 38%","--border":"221 30% 85%","--input":"221 30% 85%"},
    dark: {"--primary":"213 94% 68%","--primary-foreground":"221 35% 6%","--ring":"213 94% 68%","--surface-dark":"221 50% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"213 94% 72%","--background":"221 35% 6%","--foreground":"0 0% 98%","--card":"221 35% 9%","--card-foreground":"0 0% 98%","--secondary":"221 28% 16%","--secondary-foreground":"0 0% 92%","--muted":"221 28% 14%","--muted-foreground":"220 15% 68%","--border":"221 28% 18%","--input":"221 28% 18%"},
  }},
  { id:"emerald",name:"Emerald",swatch:"#065f46",vars:{
    light:{"--primary":"160 84% 22%","--primary-foreground":"0 0% 100%","--ring":"160 84% 22%","--surface-dark":"160 45% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"160 84% 30%","--background":"160 40% 96%","--foreground":"160 25% 8%","--card":"160 40% 99%","--card-foreground":"160 25% 8%","--secondary":"160 28% 91%","--secondary-foreground":"160 35% 18%","--muted":"160 22% 92%","--muted-foreground":"160 12% 38%","--border":"160 22% 85%","--input":"160 22% 85%"},
    dark: {"--primary":"152 76% 52%","--primary-foreground":"160 28% 6%","--ring":"152 76% 52%","--surface-dark":"160 40% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"152 76% 58%","--background":"160 28% 6%","--foreground":"0 0% 98%","--card":"160 28% 9%","--card-foreground":"0 0% 98%","--secondary":"160 22% 16%","--secondary-foreground":"0 0% 92%","--muted":"160 22% 14%","--muted-foreground":"160 12% 65%","--border":"160 22% 18%","--input":"160 22% 18%"},
  }},
];

const STORAGE_KEY = "daxor-color-preset";

interface ThemeCtx { preset: string; setPreset: (id: string) => void; }
const Ctx = createContext<ThemeCtx>({ preset: "indigo", setPreset: () => {} });

function applyPreset(id: string, isDark: boolean) {
  const p = PRESETS.find(p => p.id === id) ?? PRESETS[0];
  const root = document.documentElement;
  const allKeys = new Set([...Object.keys(p.vars.light), ...Object.keys(p.vars.dark)]);
  allKeys.forEach(k => root.style.removeProperty(k));
  Object.entries(p.vars.light).forEach(([k, v]) => root.style.setProperty(k, v));
  if (isDark) Object.entries(p.vars.dark).forEach(([k, v]) => root.style.setProperty(k, v));
}

export function ColorPresetProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPresetState] = useState<string>(
    () => localStorage.getItem(STORAGE_KEY) ?? "indigo"
  );

  const setPreset = (id: string) => {
    setPresetState(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  useEffect(() => {
    const apply = () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyPreset(preset, isDark);
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [preset]);

  return <Ctx.Provider value={{ preset, setPreset }}>{children}</Ctx.Provider>;
}

export const useColorPreset = () => useContext(Ctx);
