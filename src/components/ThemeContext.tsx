import { createContext, useContext, useEffect, useState } from "react";

export interface ColorPreset {
  id: string;
  name: string;
  swatch: string;
  vars: { light: Record<string, string>; dark: Record<string, string> };
}

export const PRESETS: ColorPreset[] = [
  // ── 1. Indigo (default) ───────────────────────────────────────────────────
  { id:"indigo", name:"Indigo", swatch:"#4f46e5", vars:{
    light:{"--primary":"235 55% 37%","--primary-foreground":"0 0% 100%","--ring":"235 55% 37%","--surface-dark":"235 45% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"235 55% 45%","--background":"235 40% 96%","--foreground":"235 25% 8%","--card":"235 40% 99%","--card-foreground":"235 25% 8%","--secondary":"235 30% 91%","--secondary-foreground":"235 40% 20%","--muted":"235 25% 92%","--muted-foreground":"235 15% 35%","--border":"235 25% 85%","--input":"235 25% 85%"},
    dark: {"--primary":"235 70% 65%","--primary-foreground":"230 30% 6%","--ring":"235 70% 65%","--surface-dark":"235 40% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"235 70% 70%","--background":"230 30% 6%","--foreground":"0 0% 98%","--card":"230 30% 9%","--card-foreground":"0 0% 98%","--secondary":"230 25% 16%","--secondary-foreground":"0 0% 92%","--muted":"230 25% 14%","--muted-foreground":"220 15% 68%","--border":"230 25% 18%","--input":"230 25% 18%"},
  }},
  // ── 2. Daxor Brand ────────────────────────────────────────────────────────
  { id:"daxor", name:"Daxor", swatch:"#E85002", vars:{
    light:{"--primary":"18 97% 46%","--primary-foreground":"0 0% 100%","--ring":"18 97% 46%","--surface-dark":"18 40% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"18 97% 55%","--background":"30 20% 97%","--foreground":"20 15% 8%","--card":"0 0% 100%","--card-foreground":"20 15% 8%","--secondary":"30 20% 91%","--secondary-foreground":"18 40% 20%","--muted":"30 15% 92%","--muted-foreground":"20 10% 38%","--border":"30 15% 85%","--input":"30 15% 85%"},
    dark: {"--primary":"18 97% 55%","--primary-foreground":"0 0% 100%","--ring":"18 97% 55%","--surface-dark":"18 35% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"18 97% 62%","--background":"20 12% 5%","--foreground":"30 20% 96%","--card":"20 12% 8%","--card-foreground":"30 20% 96%","--secondary":"20 10% 14%","--secondary-foreground":"30 20% 90%","--muted":"20 10% 12%","--muted-foreground":"30 10% 62%","--border":"20 10% 16%","--input":"20 10% 16%"},
  }},
  // ── 3. Crimson Gold ───────────────────────────────────────────────────────
  { id:"crimson", name:"Crimson", swatch:"#ad0013", vars:{
    light:{"--primary":"354 100% 34%","--primary-foreground":"0 0% 100%","--ring":"354 100% 34%","--surface-dark":"354 40% 14%","--surface-dark-foreground":"40 45% 80%","--highlight":"38 42% 45%","--background":"38 25% 96%","--foreground":"20 15% 8%","--card":"38 25% 99%","--card-foreground":"20 15% 8%","--secondary":"38 25% 90%","--secondary-foreground":"38 30% 20%","--muted":"38 20% 92%","--muted-foreground":"20 10% 38%","--border":"38 20% 84%","--input":"38 20% 84%"},
    dark: {"--primary":"354 100% 45%","--primary-foreground":"0 0% 100%","--ring":"38 42% 45%","--surface-dark":"354 35% 10%","--surface-dark-foreground":"38 45% 75%","--highlight":"38 42% 50%","--background":"20 8% 7%","--foreground":"38 30% 90%","--card":"20 8% 10%","--card-foreground":"38 30% 90%","--secondary":"20 8% 15%","--secondary-foreground":"38 25% 80%","--muted":"20 8% 13%","--muted-foreground":"38 15% 58%","--border":"20 8% 18%","--input":"20 8% 18%"},
  }},
  // ── 4. Retro American ─────────────────────────────────────────────────────
  { id:"retro", name:"Retro", swatch:"#f3701e", vars:{
    light:{"--primary":"22 89% 53%","--primary-foreground":"0 0% 100%","--ring":"22 89% 53%","--surface-dark":"214 25% 28%","--surface-dark-foreground":"30 40% 90%","--highlight":"22 89% 62%","--background":"30 35% 95%","--foreground":"214 20% 12%","--card":"30 35% 99%","--card-foreground":"214 20% 12%","--secondary":"30 30% 88%","--secondary-foreground":"214 25% 22%","--muted":"30 25% 90%","--muted-foreground":"214 15% 40%","--border":"30 20% 82%","--input":"30 20% 82%"},
    dark: {"--primary":"22 89% 58%","--primary-foreground":"0 0% 100%","--ring":"22 89% 58%","--surface-dark":"214 25% 18%","--surface-dark-foreground":"30 40% 88%","--highlight":"22 89% 65%","--background":"214 20% 8%","--foreground":"30 35% 92%","--card":"214 20% 11%","--card-foreground":"30 35% 92%","--secondary":"214 18% 16%","--secondary-foreground":"30 30% 85%","--muted":"214 18% 14%","--muted-foreground":"30 20% 60%","--border":"214 18% 20%","--input":"214 18% 20%"},
  }},
  // ── 5. Vintage Retro ──────────────────────────────────────────────────────
  { id:"vintage", name:"Vintage", swatch:"#B83A2D", vars:{
    light:{"--primary":"6 62% 45%","--primary-foreground":"0 0% 100%","--ring":"6 62% 45%","--surface-dark":"125 15% 22%","--surface-dark-foreground":"38 40% 88%","--highlight":"6 62% 54%","--background":"38 30% 95%","--foreground":"20 15% 10%","--card":"38 30% 99%","--card-foreground":"20 15% 10%","--secondary":"38 25% 88%","--secondary-foreground":"125 15% 20%","--muted":"38 20% 90%","--muted-foreground":"20 10% 40%","--border":"38 18% 82%","--input":"38 18% 82%"},
    dark: {"--primary":"6 62% 52%","--primary-foreground":"0 0% 100%","--ring":"6 62% 52%","--surface-dark":"125 15% 14%","--surface-dark-foreground":"38 40% 85%","--highlight":"6 62% 60%","--background":"20 10% 7%","--foreground":"38 28% 90%","--card":"20 10% 10%","--card-foreground":"38 28% 90%","--secondary":"20 8% 15%","--secondary-foreground":"38 25% 82%","--muted":"20 8% 13%","--muted-foreground":"38 15% 58%","--border":"20 8% 18%","--input":"20 8% 18%"},
  }},
  // ── 6. Teal Soul ──────────────────────────────────────────────────────────
  { id:"tealsoul", name:"Teal Soul", swatch:"#3E6868", vars:{
    light:{"--primary":"180 27% 33%","--primary-foreground":"0 0% 100%","--ring":"180 27% 33%","--surface-dark":"180 27% 18%","--surface-dark-foreground":"38 35% 88%","--highlight":"4 52% 52%","--background":"38 25% 95%","--foreground":"180 15% 10%","--card":"38 25% 99%","--card-foreground":"180 15% 10%","--secondary":"38 22% 88%","--secondary-foreground":"180 20% 20%","--muted":"38 18% 90%","--muted-foreground":"180 10% 40%","--border":"38 15% 82%","--input":"38 15% 82%"},
    dark: {"--primary":"180 27% 45%","--primary-foreground":"0 0% 100%","--ring":"180 27% 45%","--surface-dark":"180 27% 12%","--surface-dark-foreground":"38 35% 85%","--highlight":"4 52% 58%","--background":"180 15% 7%","--foreground":"38 25% 90%","--card":"180 15% 10%","--card-foreground":"38 25% 90%","--secondary":"180 12% 15%","--secondary-foreground":"38 22% 82%","--muted":"180 12% 13%","--muted-foreground":"38 12% 58%","--border":"180 12% 18%","--input":"180 12% 18%"},
  }},
  // ── 7. Ocean Blue ─────────────────────────────────────────────────────────
  { id:"ocean", name:"Ocean", swatch:"#1d4ed8", vars:{
    light:{"--primary":"221 83% 40%","--primary-foreground":"0 0% 100%","--ring":"221 83% 40%","--surface-dark":"221 55% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"221 83% 48%","--background":"221 50% 96%","--foreground":"221 30% 8%","--card":"221 50% 99%","--card-foreground":"221 30% 8%","--secondary":"221 35% 91%","--secondary-foreground":"221 40% 20%","--muted":"221 30% 92%","--muted-foreground":"221 15% 38%","--border":"221 30% 85%","--input":"221 30% 85%"},
    dark: {"--primary":"213 94% 68%","--primary-foreground":"221 35% 6%","--ring":"213 94% 68%","--surface-dark":"221 50% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"213 94% 72%","--background":"221 35% 6%","--foreground":"0 0% 98%","--card":"221 35% 9%","--card-foreground":"0 0% 98%","--secondary":"221 28% 16%","--secondary-foreground":"0 0% 92%","--muted":"221 28% 14%","--muted-foreground":"220 15% 68%","--border":"221 28% 18%","--input":"221 28% 18%"},
  }},
  // ── 8. Emerald ────────────────────────────────────────────────────────────
  { id:"emerald", name:"Emerald", swatch:"#065f46", vars:{
    light:{"--primary":"160 84% 22%","--primary-foreground":"0 0% 100%","--ring":"160 84% 22%","--surface-dark":"160 45% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"160 84% 30%","--background":"160 40% 96%","--foreground":"160 25% 8%","--card":"160 40% 99%","--card-foreground":"160 25% 8%","--secondary":"160 28% 91%","--secondary-foreground":"160 35% 18%","--muted":"160 22% 92%","--muted-foreground":"160 12% 38%","--border":"160 22% 85%","--input":"160 22% 85%"},
    dark: {"--primary":"152 76% 52%","--primary-foreground":"160 28% 6%","--ring":"152 76% 52%","--surface-dark":"160 40% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"152 76% 58%","--background":"160 28% 6%","--foreground":"0 0% 98%","--card":"160 28% 9%","--card-foreground":"0 0% 98%","--secondary":"160 22% 16%","--secondary-foreground":"0 0% 92%","--muted":"160 22% 14%","--muted-foreground":"160 12% 65%","--border":"160 22% 18%","--input":"160 22% 18%"},
  }},
  // ── 9. TrustBlue + EnergyOrange ──────────────────────────────────────────
  { id:"trustblue", name:"TrustBlue", swatch:"#319DDE", vars:{
    light:{"--primary":"201 68% 53%","--primary-foreground":"0 0% 100%","--ring":"201 68% 53%","--surface-dark":"215 60% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 98% 58%","--background":"210 40% 98%","--foreground":"215 30% 8%","--card":"0 0% 100%","--card-foreground":"215 30% 8%","--secondary":"210 30% 92%","--secondary-foreground":"215 40% 18%","--muted":"210 25% 93%","--muted-foreground":"215 15% 38%","--border":"210 25% 86%","--input":"210 25% 86%"},
    dark: {"--primary":"201 68% 60%","--primary-foreground":"215 40% 8%","--ring":"201 68% 60%","--surface-dark":"215 55% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 98% 62%","--background":"215 40% 6%","--foreground":"0 0% 98%","--card":"215 40% 9%","--card-foreground":"0 0% 98%","--secondary":"215 30% 15%","--secondary-foreground":"0 0% 92%","--muted":"215 30% 13%","--muted-foreground":"210 15% 65%","--border":"215 30% 18%","--input":"215 30% 18%"},
  }},
  // ── 10. DeepIndigo + WarmPeach ────────────────────────────────────────────
  { id:"deepindigo", name:"DeepIndigo", swatch:"#4F46E5", vars:{
    light:{"--primary":"243 75% 59%","--primary-foreground":"0 0% 100%","--ring":"243 75% 59%","--surface-dark":"243 50% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"24 95% 72%","--background":"240 20% 98%","--foreground":"243 30% 8%","--card":"0 0% 100%","--card-foreground":"243 30% 8%","--secondary":"240 20% 92%","--secondary-foreground":"243 40% 18%","--muted":"240 18% 93%","--muted-foreground":"243 12% 38%","--border":"240 18% 86%","--input":"240 18% 86%"},
    dark: {"--primary":"243 75% 65%","--primary-foreground":"243 40% 6%","--ring":"243 75% 65%","--surface-dark":"243 45% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"24 95% 72%","--background":"243 35% 6%","--foreground":"0 0% 98%","--card":"243 35% 9%","--card-foreground":"0 0% 98%","--secondary":"243 28% 15%","--secondary-foreground":"0 0% 92%","--muted":"243 28% 13%","--muted-foreground":"240 15% 65%","--border":"243 28% 18%","--input":"243 28% 18%"},
  }},
  // ── 11. Charcoal + Teal Glow ──────────────────────────────────────────────
  { id:"charcoalteal", name:"Charcoal+Teal", swatch:"#2DD4BF", vars:{
    light:{"--primary":"174 72% 50%","--primary-foreground":"0 0% 100%","--ring":"174 72% 50%","--surface-dark":"215 20% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 58%","--background":"215 15% 97%","--foreground":"215 20% 10%","--card":"0 0% 100%","--card-foreground":"215 20% 10%","--secondary":"215 15% 91%","--secondary-foreground":"215 25% 18%","--muted":"215 12% 92%","--muted-foreground":"215 10% 40%","--border":"215 12% 85%","--input":"215 12% 85%"},
    dark: {"--primary":"174 72% 55%","--primary-foreground":"215 30% 6%","--ring":"174 72% 55%","--surface-dark":"215 20% 13%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 60%","--background":"215 25% 7%","--foreground":"0 0% 98%","--card":"215 25% 10%","--card-foreground":"0 0% 98%","--secondary":"215 20% 16%","--secondary-foreground":"0 0% 92%","--muted":"215 20% 14%","--muted-foreground":"215 12% 65%","--border":"215 20% 19%","--input":"215 20% 19%"},
  }},
  // ── 12. SlateBlue + GoldenOrange ──────────────────────────────────────────
  { id:"slategold", name:"SlateGold", swatch:"#64748B", vars:{
    light:{"--primary":"215 19% 47%","--primary-foreground":"0 0% 100%","--ring":"38 92% 50%","--surface-dark":"215 25% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 92% 50%","--background":"0 0% 100%","--foreground":"215 25% 8%","--card":"0 0% 100%","--card-foreground":"215 25% 8%","--secondary":"215 15% 92%","--secondary-foreground":"215 25% 18%","--muted":"215 12% 93%","--muted-foreground":"215 10% 40%","--border":"215 12% 86%","--input":"215 12% 86%"},
    dark: {"--primary":"215 19% 60%","--primary-foreground":"215 30% 6%","--ring":"38 92% 55%","--surface-dark":"215 25% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 92% 55%","--background":"215 30% 6%","--foreground":"0 0% 98%","--card":"215 30% 9%","--card-foreground":"0 0% 98%","--secondary":"215 22% 15%","--secondary-foreground":"0 0% 92%","--muted":"215 22% 13%","--muted-foreground":"215 12% 65%","--border":"215 22% 18%","--input":"215 22% 18%"},
  }},
  // ── 13. Victorian Peacock ─────────────────────────────────────────────────
  { id:"peacock", name:"Peacock", swatch:"#5C6396", vars:{
    light:{"--primary":"234 24% 47%","--primary-foreground":"0 0% 100%","--ring":"234 24% 47%","--surface-dark":"234 28% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 40%","--background":"234 20% 97%","--foreground":"234 25% 8%","--card":"0 0% 100%","--card-foreground":"234 25% 8%","--secondary":"234 18% 91%","--secondary-foreground":"234 28% 18%","--muted":"234 15% 92%","--muted-foreground":"234 10% 40%","--border":"234 15% 85%","--input":"234 15% 85%"},
    dark: {"--primary":"234 24% 60%","--primary-foreground":"234 30% 6%","--ring":"234 24% 60%","--surface-dark":"234 28% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 48%","--background":"234 30% 6%","--foreground":"0 0% 98%","--card":"234 30% 9%","--card-foreground":"0 0% 98%","--secondary":"234 22% 15%","--secondary-foreground":"0 0% 92%","--muted":"234 22% 13%","--muted-foreground":"234 12% 65%","--border":"234 22% 18%","--input":"234 22% 18%"},
  }},
  // ── 14. Aquaverde + Neutral Grey ──────────────────────────────────────────
  { id:"aquaverde", name:"Aquaverde", swatch:"#2DD4BF", vars:{
    light:{"--primary":"174 72% 50%","--primary-foreground":"0 0% 100%","--ring":"174 72% 50%","--surface-dark":"220 9% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"220 9% 42%","--background":"0 0% 100%","--foreground":"220 9% 10%","--card":"0 0% 100%","--card-foreground":"220 9% 10%","--secondary":"220 9% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 8% 93%","--muted-foreground":"220 6% 42%","--border":"220 8% 86%","--input":"220 8% 86%"},
    dark: {"--primary":"174 72% 55%","--primary-foreground":"220 15% 6%","--ring":"174 72% 55%","--surface-dark":"220 9% 13%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 60%","--background":"220 12% 7%","--foreground":"0 0% 98%","--card":"220 12% 10%","--card-foreground":"0 0% 98%","--secondary":"220 9% 16%","--secondary-foreground":"0 0% 92%","--muted":"220 9% 14%","--muted-foreground":"220 6% 65%","--border":"220 9% 19%","--input":"220 9% 19%"},
  }},
  // ── 15. Orioles Orange Dominant ───────────────────────────────────────────
  { id:"orioles", name:"Orioles", swatch:"#FB923C", vars:{
    light:{"--primary":"27 96% 61%","--primary-foreground":"0 0% 100%","--ring":"27 96% 61%","--surface-dark":"224 71% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 68%","--background":"30 100% 99%","--foreground":"20 10% 8%","--card":"0 0% 100%","--card-foreground":"20 10% 8%","--secondary":"30 30% 92%","--secondary-foreground":"224 40% 18%","--muted":"30 20% 93%","--muted-foreground":"20 8% 40%","--border":"30 20% 86%","--input":"30 20% 86%"},
    dark: {"--primary":"27 96% 65%","--primary-foreground":"20 10% 5%","--ring":"27 96% 65%","--surface-dark":"224 71% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 70%","--background":"20 8% 4%","--foreground":"30 20% 96%","--card":"20 8% 7%","--card-foreground":"30 20% 96%","--secondary":"20 6% 13%","--secondary-foreground":"30 20% 90%","--muted":"20 6% 11%","--muted-foreground":"30 8% 62%","--border":"20 6% 15%","--input":"20 6% 15%"},
  }},
  // ── 16. Neveryding Neutral + Pop ──────────────────────────────────────────
  { id:"neutral", name:"Neutral+Pop", swatch:"#6366F1", vars:{
    light:{"--primary":"239 84% 67%","--primary-foreground":"0 0% 100%","--ring":"239 84% 67%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"239 84% 72%","--background":"240 5% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 8% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 6% 93%","--muted-foreground":"220 5% 42%","--border":"220 6% 86%","--input":"220 6% 86%"},
    dark: {"--primary":"239 84% 70%","--primary-foreground":"239 40% 6%","--ring":"239 84% 70%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"239 84% 74%","--background":"220 10% 6%","--foreground":"0 0% 98%","--card":"220 10% 9%","--card-foreground":"0 0% 98%","--secondary":"220 8% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 13%","--muted-foreground":"220 5% 65%","--border":"220 8% 18%","--input":"220 8% 18%"},
  }},
  // ── 17. Writer's Parchment Warm ───────────────────────────────────────────
  { id:"parchment", name:"Parchment", swatch:"#D4A373", vars:{
    light:{"--primary":"33 47% 64%","--primary-foreground":"0 0% 100%","--ring":"33 47% 64%","--surface-dark":"215 25% 12%","--surface-dark-foreground":"33 40% 88%","--highlight":"33 47% 72%","--background":"40 50% 98%","--foreground":"215 25% 8%","--card":"40 50% 100%","--card-foreground":"215 25% 8%","--secondary":"40 30% 91%","--secondary-foreground":"215 25% 18%","--muted":"40 25% 92%","--muted-foreground":"215 12% 40%","--border":"40 22% 85%","--input":"40 22% 85%"},
    dark: {"--primary":"33 47% 68%","--primary-foreground":"215 30% 6%","--ring":"33 47% 68%","--surface-dark":"215 25% 10%","--surface-dark-foreground":"33 40% 85%","--highlight":"33 47% 72%","--background":"215 28% 6%","--foreground":"40 30% 92%","--card":"215 28% 9%","--card-foreground":"40 30% 92%","--secondary":"215 20% 15%","--secondary-foreground":"40 25% 85%","--muted":"215 20% 13%","--muted-foreground":"40 15% 60%","--border":"215 20% 18%","--input":"215 20% 18%"},
  }},
  // ── 18. Blue + Charcoal Corporate ─────────────────────────────────────────
  { id:"corporate", name:"Corporate", swatch:"#1E40AF", vars:{
    light:{"--primary":"224 71% 40%","--primary-foreground":"0 0% 100%","--ring":"224 71% 40%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"224 71% 50%","--background":"220 20% 98%","--foreground":"220 15% 8%","--card":"0 0% 100%","--card-foreground":"220 15% 8%","--secondary":"220 15% 92%","--secondary-foreground":"224 40% 18%","--muted":"220 12% 93%","--muted-foreground":"220 8% 40%","--border":"220 12% 86%","--input":"220 12% 86%"},
    dark: {"--primary":"224 71% 55%","--primary-foreground":"224 40% 5%","--ring":"224 71% 55%","--surface-dark":"220 9% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"224 71% 60%","--background":"220 12% 4%","--foreground":"0 0% 98%","--card":"220 12% 7%","--card-foreground":"0 0% 98%","--secondary":"220 9% 13%","--secondary-foreground":"0 0% 92%","--muted":"220 9% 11%","--muted-foreground":"220 6% 65%","--border":"220 9% 15%","--input":"220 9% 15%"},
  }},
  // ── 19. Teal + Deep Orange Contrast ──────────────────────────────────────
  { id:"tealfire", name:"TealFire", swatch:"#0D9488", vars:{
    light:{"--primary":"174 87% 32%","--primary-foreground":"0 0% 100%","--ring":"174 87% 32%","--surface-dark":"174 50% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 40%","--background":"174 30% 97%","--foreground":"174 25% 8%","--card":"0 0% 100%","--card-foreground":"174 25% 8%","--secondary":"174 20% 91%","--secondary-foreground":"174 35% 18%","--muted":"174 15% 92%","--muted-foreground":"174 10% 40%","--border":"174 15% 85%","--input":"174 15% 85%"},
    dark: {"--primary":"174 87% 42%","--primary-foreground":"174 40% 5%","--ring":"174 87% 42%","--surface-dark":"174 50% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 48%","--background":"174 35% 5%","--foreground":"0 0% 98%","--card":"174 35% 8%","--card-foreground":"0 0% 98%","--secondary":"174 25% 14%","--secondary-foreground":"0 0% 92%","--muted":"174 25% 12%","--muted-foreground":"174 12% 65%","--border":"174 25% 17%","--input":"174 25% 17%"},
  }},
  // ── 20. Grey + Electric Blue ──────────────────────────────────────────────
  { id:"greyblue", name:"Grey+Blue", swatch:"#3B82F6", vars:{
    light:{"--primary":"217 91% 60%","--primary-foreground":"0 0% 100%","--ring":"217 91% 60%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 68%","--background":"220 14% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 9% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 7% 93%","--muted-foreground":"220 5% 42%","--border":"220 7% 86%","--input":"220 7% 86%"},
    dark: {"--primary":"217 91% 65%","--primary-foreground":"220 15% 5%","--ring":"217 91% 65%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 70%","--background":"220 12% 6%","--foreground":"0 0% 98%","--card":"220 12% 9%","--card-foreground":"0 0% 98%","--secondary":"220 9% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 9% 13%","--muted-foreground":"220 5% 65%","--border":"220 9% 18%","--input":"220 9% 18%"},
  }},
  // ── 17. Writer's Parchment Warm ───────────────────────────────────────────
  { id:"parchment", name:"Parchment", swatch:"#D4A373", vars:{
    light:{"--primary":"36 47% 64%","--primary-foreground":"0 0% 100%","--ring":"36 47% 64%","--surface-dark":"215 25% 14%","--surface-dark-foreground":"36 40% 88%","--highlight":"36 47% 72%","--background":"40 60% 99%","--foreground":"215 25% 8%","--card":"40 60% 100%","--card-foreground":"215 25% 8%","--secondary":"40 30% 92%","--secondary-foreground":"215 25% 18%","--muted":"40 25% 93%","--muted-foreground":"215 10% 42%","--border":"40 22% 86%","--input":"40 22% 86%"},
    dark: {"--primary":"36 47% 68%","--primary-foreground":"215 30% 6%","--ring":"36 47% 68%","--surface-dark":"215 25% 10%","--surface-dark-foreground":"36 40% 85%","--highlight":"36 47% 74%","--background":"215 28% 6%","--foreground":"40 30% 92%","--card":"215 28% 9%","--card-foreground":"40 30% 92%","--secondary":"215 20% 15%","--secondary-foreground":"40 25% 85%","--muted":"215 20% 13%","--muted-foreground":"40 15% 60%","--border":"215 20% 18%","--input":"215 20% 18%"},
  }},
  // ── 18. Blue + Charcoal Corporate ─────────────────────────────────────────
  { id:"corporate", name:"Corporate", swatch:"#1E40AF", vars:{
    light:{"--primary":"224 71% 40%","--primary-foreground":"0 0% 100%","--ring":"224 71% 40%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"25 95% 53%","--background":"220 14% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 12% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 10% 93%","--muted-foreground":"220 6% 42%","--border":"220 10% 86%","--input":"220 10% 86%"},
    dark: {"--primary":"224 71% 55%","--primary-foreground":"224 40% 5%","--ring":"224 71% 55%","--surface-dark":"220 9% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"25 95% 58%","--background":"220 10% 3%","--foreground":"0 0% 98%","--card":"220 10% 6%","--card-foreground":"0 0% 98%","--secondary":"220 8% 13%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 11%","--muted-foreground":"220 5% 65%","--border":"220 8% 15%","--input":"220 8% 15%"},
  }},
  // ── 19. Teal + Deep Orange Contrast ───────────────────────────────────────
  { id:"tealfire", name:"TealFire", swatch:"#0D9488", vars:{
    light:{"--primary":"173 80% 32%","--primary-foreground":"0 0% 100%","--ring":"173 80% 32%","--surface-dark":"173 50% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 90% 42%","--background":"173 30% 97%","--foreground":"173 25% 8%","--card":"0 0% 100%","--card-foreground":"173 25% 8%","--secondary":"173 20% 91%","--secondary-foreground":"173 35% 18%","--muted":"173 15% 92%","--muted-foreground":"173 10% 40%","--border":"173 15% 85%","--input":"173 15% 85%"},
    dark: {"--primary":"173 80% 42%","--primary-foreground":"173 35% 6%","--ring":"173 80% 42%","--surface-dark":"173 50% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 90% 50%","--background":"173 30% 6%","--foreground":"0 0% 98%","--card":"173 30% 9%","--card-foreground":"0 0% 98%","--secondary":"173 22% 15%","--secondary-foreground":"0 0% 92%","--muted":"173 22% 13%","--muted-foreground":"173 12% 65%","--border":"173 22% 18%","--input":"173 22% 18%"},
  }},
  // ── 20. Grey + Electric Blue ──────────────────────────────────────────────
  { id:"electricblue", name:"ElectricBlue", swatch:"#3B82F6", vars:{
    light:{"--primary":"217 91% 60%","--primary-foreground":"0 0% 100%","--ring":"217 91% 60%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 66%","--background":"220 14% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 10% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 8% 93%","--muted-foreground":"220 6% 42%","--border":"220 8% 86%","--input":"220 8% 86%"},
    dark: {"--primary":"217 91% 65%","--primary-foreground":"220 30% 6%","--ring":"217 91% 65%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 70%","--background":"220 12% 6%","--foreground":"0 0% 98%","--card":"220 12% 9%","--card-foreground":"0 0% 98%","--secondary":"220 9% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 9% 13%","--muted-foreground":"220 6% 65%","--border":"220 9% 18%","--input":"220 9% 18%"},
  }},
  // ── 21. Indigo + Soft Peach ───────────────────────────────────────────────
  { id:"indigoperach", name:"IndigoPeach", swatch:"#FDBA74", vars:{
    light:{"--primary":"243 75% 59%","--primary-foreground":"0 0% 100%","--ring":"243 75% 59%","--surface-dark":"243 45% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 72%","--background":"30 60% 99%","--foreground":"243 25% 8%","--card":"0 0% 100%","--card-foreground":"243 25% 8%","--secondary":"30 30% 92%","--secondary-foreground":"243 35% 18%","--muted":"30 20% 93%","--muted-foreground":"243 10% 42%","--border":"30 18% 86%","--input":"30 18% 86%"},
    dark: {"--primary":"243 75% 65%","--primary-foreground":"243 40% 6%","--ring":"243 75% 65%","--surface-dark":"243 45% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 74%","--background":"243 35% 6%","--foreground":"30 30% 96%","--card":"243 35% 9%","--card-foreground":"30 30% 96%","--secondary":"243 28% 15%","--secondary-foreground":"30 25% 88%","--muted":"243 28% 13%","--muted-foreground":"30 15% 62%","--border":"243 28% 18%","--input":"243 28% 18%"},
  }},
  // ── 22. Dark Teal + Gold Accent ───────────────────────────────────────────
  { id:"tealgold", name:"TealGold", swatch:"#115E59", vars:{
    light:{"--primary":"177 70% 22%","--primary-foreground":"0 0% 100%","--ring":"177 70% 22%","--surface-dark":"177 50% 14%","--surface-dark-foreground":"38 80% 80%","--highlight":"38 80% 43%","--background":"177 20% 97%","--foreground":"177 20% 8%","--card":"0 0% 100%","--card-foreground":"177 20% 8%","--secondary":"177 15% 91%","--secondary-foreground":"177 30% 16%","--muted":"177 12% 92%","--muted-foreground":"177 8% 40%","--border":"177 12% 85%","--input":"177 12% 85%"},
    dark: {"--primary":"177 70% 35%","--primary-foreground":"177 35% 5%","--ring":"38 80% 48%","--surface-dark":"177 50% 9%","--surface-dark-foreground":"38 80% 78%","--highlight":"38 80% 48%","--background":"177 25% 4%","--foreground":"38 30% 92%","--card":"177 25% 7%","--card-foreground":"38 30% 92%","--secondary":"177 18% 13%","--secondary-foreground":"38 25% 85%","--muted":"177 18% 11%","--muted-foreground":"38 15% 60%","--border":"177 18% 16%","--input":"177 18% 16%"},
  }},
  // ── 23. Navy + Bright Lime ────────────────────────────────────────────────
  { id:"navylime", name:"NavyLime", swatch:"#1E3A8A", vars:{
    light:{"--primary":"224 71% 33%","--primary-foreground":"0 0% 100%","--ring":"224 71% 33%","--surface-dark":"224 55% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"83 78% 48%","--background":"224 30% 98%","--foreground":"224 25% 8%","--card":"0 0% 100%","--card-foreground":"224 25% 8%","--secondary":"224 20% 92%","--secondary-foreground":"224 35% 18%","--muted":"224 15% 93%","--muted-foreground":"224 10% 40%","--border":"224 15% 86%","--input":"224 15% 86%"},
    dark: {"--primary":"224 71% 50%","--primary-foreground":"224 40% 5%","--ring":"83 78% 52%","--surface-dark":"224 55% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"83 78% 52%","--background":"224 35% 5%","--foreground":"0 0% 98%","--card":"224 35% 8%","--card-foreground":"0 0% 98%","--secondary":"224 28% 14%","--secondary-foreground":"0 0% 92%","--muted":"224 28% 12%","--muted-foreground":"224 12% 65%","--border":"224 28% 17%","--input":"224 28% 17%"},
  }},
  // ── 24. Warm Grey + Coral Pop ─────────────────────────────────────────────
  { id:"coralpop", name:"CoralPop", swatch:"#F472B6", vars:{
    light:{"--primary":"322 87% 70%","--primary-foreground":"0 0% 100%","--ring":"322 87% 70%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"322 87% 76%","--background":"0 0% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 8% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 6% 93%","--muted-foreground":"220 5% 42%","--border":"220 6% 86%","--input":"220 6% 86%"},
    dark: {"--primary":"322 87% 72%","--primary-foreground":"322 40% 6%","--ring":"322 87% 72%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"322 87% 76%","--background":"220 10% 6%","--foreground":"0 0% 98%","--card":"220 10% 9%","--card-foreground":"0 0% 98%","--secondary":"220 8% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 13%","--muted-foreground":"220 5% 65%","--border":"220 8% 18%","--input":"220 8% 18%"},
  }},
  // ── 25. Deep Blue + Burnt Orange ──────────────────────────────────────────
  { id:"deepburnt", name:"DeepBurnt", swatch:"#C2410C", vars:{
    light:{"--primary":"17 90% 42%","--primary-foreground":"0 0% 100%","--ring":"17 90% 42%","--surface-dark":"215 25% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 90% 52%","--background":"215 20% 98%","--foreground":"215 20% 8%","--card":"0 0% 100%","--card-foreground":"215 20% 8%","--secondary":"215 15% 92%","--secondary-foreground":"215 25% 18%","--muted":"215 12% 93%","--muted-foreground":"215 8% 42%","--border":"215 12% 86%","--input":"215 12% 86%"},
    dark: {"--primary":"17 90% 50%","--primary-foreground":"17 40% 5%","--ring":"17 90% 50%","--surface-dark":"215 25% 9%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 90% 56%","--background":"215 25% 4%","--foreground":"0 0% 98%","--card":"215 25% 7%","--card-foreground":"0 0% 98%","--secondary":"215 18% 13%","--secondary-foreground":"0 0% 92%","--muted":"215 18% 11%","--muted-foreground":"215 8% 65%","--border":"215 18% 15%","--input":"215 18% 15%"},
  }},
  // ── 26. Slate + Vibrant Teal ──────────────────────────────────────────────
  { id:"slateteal", name:"SlateTeal", swatch:"#14B8A6", vars:{
    light:{"--primary":"174 72% 40%","--primary-foreground":"0 0% 100%","--ring":"174 72% 40%","--surface-dark":"215 19% 22%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 50%","--background":"215 15% 98%","--foreground":"215 19% 8%","--card":"0 0% 100%","--card-foreground":"215 19% 8%","--secondary":"215 12% 92%","--secondary-foreground":"215 19% 18%","--muted":"215 10% 93%","--muted-foreground":"215 8% 42%","--border":"215 10% 86%","--input":"215 10% 86%"},
    dark: {"--primary":"174 72% 50%","--primary-foreground":"174 35% 6%","--ring":"174 72% 50%","--surface-dark":"215 19% 13%","--surface-dark-foreground":"0 0% 100%","--highlight":"174 72% 56%","--background":"215 20% 6%","--foreground":"0 0% 98%","--card":"215 20% 9%","--card-foreground":"0 0% 98%","--secondary":"215 15% 15%","--secondary-foreground":"0 0% 92%","--muted":"215 15% 13%","--muted-foreground":"215 8% 65%","--border":"215 15% 18%","--input":"215 15% 18%"},
  }},
  // ── 27. Charcoal + Electric Cyan ──────────────────────────────────────────
  { id:"electriccyan", name:"ElectricCyan", swatch:"#06B6D4", vars:{
    light:{"--primary":"189 94% 43%","--primary-foreground":"0 0% 100%","--ring":"189 94% 43%","--surface-dark":"215 20% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"189 94% 52%","--background":"189 20% 98%","--foreground":"215 20% 8%","--card":"0 0% 100%","--card-foreground":"215 20% 8%","--secondary":"189 15% 92%","--secondary-foreground":"215 20% 18%","--muted":"189 12% 93%","--muted-foreground":"215 8% 42%","--border":"189 12% 86%","--input":"189 12% 86%"},
    dark: {"--primary":"189 94% 52%","--primary-foreground":"215 30% 5%","--ring":"189 94% 52%","--surface-dark":"215 20% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"189 94% 58%","--background":"215 22% 5%","--foreground":"0 0% 98%","--card":"215 22% 8%","--card-foreground":"0 0% 98%","--secondary":"215 16% 14%","--secondary-foreground":"0 0% 92%","--muted":"215 16% 12%","--muted-foreground":"215 8% 65%","--border":"215 16% 17%","--input":"215 16% 17%"},
  }},
  // ── 28. Warm Neutral + Indigo Pop ─────────────────────────────────────────
  { id:"warmneutral", name:"WarmNeutral", swatch:"#4F46E5", vars:{
    light:{"--primary":"243 75% 59%","--primary-foreground":"0 0% 100%","--ring":"243 75% 59%","--surface-dark":"220 9% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"25 95% 53%","--background":"0 0% 100%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 8% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 6% 93%","--muted-foreground":"220 5% 42%","--border":"220 6% 86%","--input":"220 6% 86%"},
    dark: {"--primary":"243 75% 65%","--primary-foreground":"243 40% 5%","--ring":"243 75% 65%","--surface-dark":"220 9% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"25 95% 58%","--background":"220 10% 4%","--foreground":"0 0% 98%","--card":"220 10% 7%","--card-foreground":"0 0% 98%","--secondary":"220 8% 13%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 11%","--muted-foreground":"220 5% 65%","--border":"220 8% 15%","--input":"220 8% 15%"},
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
  // ── 17. Writer's Parchment Warm ───────────────────────────────────────────
  { id:"parchment", name:"Parchment", swatch:"#D4A373", vars:{
    light:{"--primary":"36 47% 64%","--primary-foreground":"0 0% 100%","--ring":"36 47% 64%","--surface-dark":"215 25% 14%","--surface-dark-foreground":"36 40% 88%","--highlight":"36 47% 72%","--background":"40 60% 99%","--foreground":"215 25% 8%","--card":"40 60% 100%","--card-foreground":"215 25% 8%","--secondary":"40 30% 92%","--secondary-foreground":"215 25% 18%","--muted":"40 25% 93%","--muted-foreground":"215 12% 42%","--border":"40 22% 86%","--input":"40 22% 86%"},
    dark: {"--primary":"36 47% 68%","--primary-foreground":"215 30% 6%","--ring":"36 47% 68%","--surface-dark":"215 25% 10%","--surface-dark-foreground":"36 40% 85%","--highlight":"36 47% 72%","--background":"215 28% 6%","--foreground":"40 30% 92%","--card":"215 28% 9%","--card-foreground":"40 30% 92%","--secondary":"215 20% 15%","--secondary-foreground":"40 25% 85%","--muted":"215 20% 13%","--muted-foreground":"40 15% 62%","--border":"215 20% 18%","--input":"215 20% 18%"},
  }},
  // ── 18. Blue + Charcoal Corporate ─────────────────────────────────────────
  { id:"corporate", name:"Corporate", swatch:"#1E40AF", vars:{
    light:{"--primary":"224 71% 40%","--primary-foreground":"0 0% 100%","--ring":"224 71% 40%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"224 71% 50%","--background":"220 14% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 9% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 8% 93%","--muted-foreground":"220 6% 42%","--border":"220 8% 86%","--input":"220 8% 86%"},
    dark: {"--primary":"224 71% 55%","--primary-foreground":"224 40% 6%","--ring":"224 71% 55%","--surface-dark":"220 9% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"224 71% 60%","--background":"220 10% 4%","--foreground":"0 0% 98%","--card":"220 10% 7%","--card-foreground":"0 0% 98%","--secondary":"220 8% 13%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 11%","--muted-foreground":"220 5% 65%","--border":"220 8% 15%","--input":"220 8% 15%"},
  }},
  // ── 19. Teal + Deep Orange Contrast ───────────────────────────────────────
  { id:"tealfire", name:"TealFire", swatch:"#0D9488", vars:{
    light:{"--primary":"174 87% 32%","--primary-foreground":"0 0% 100%","--ring":"174 87% 32%","--surface-dark":"174 50% 16%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 42%","--background":"174 30% 97%","--foreground":"174 25% 8%","--card":"0 0% 100%","--card-foreground":"174 25% 8%","--secondary":"174 20% 91%","--secondary-foreground":"174 35% 18%","--muted":"174 15% 92%","--muted-foreground":"174 10% 40%","--border":"174 15% 85%","--input":"174 15% 85%"},
    dark: {"--primary":"174 87% 42%","--primary-foreground":"174 40% 6%","--ring":"174 87% 42%","--surface-dark":"174 50% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 50%","--background":"174 30% 6%","--foreground":"0 0% 98%","--card":"174 30% 9%","--card-foreground":"0 0% 98%","--secondary":"174 22% 15%","--secondary-foreground":"0 0% 92%","--muted":"174 22% 13%","--muted-foreground":"174 12% 65%","--border":"174 22% 18%","--input":"174 22% 18%"},
  }},
  // ── 20. Grey + Electric Blue ──────────────────────────────────────────────
  { id:"greyblue", name:"GreyBlue", swatch:"#3B82F6", vars:{
    light:{"--primary":"217 91% 60%","--primary-foreground":"0 0% 100%","--ring":"217 91% 60%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 68%","--background":"220 14% 98%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 9% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 8% 93%","--muted-foreground":"220 6% 42%","--border":"220 8% 86%","--input":"220 8% 86%"},
    dark: {"--primary":"217 91% 65%","--primary-foreground":"220 30% 6%","--ring":"217 91% 65%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"217 91% 70%","--background":"220 12% 6%","--foreground":"0 0% 98%","--card":"220 12% 9%","--card-foreground":"0 0% 98%","--secondary":"220 9% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 9% 13%","--muted-foreground":"220 6% 65%","--border":"220 9% 18%","--input":"220 9% 18%"},
  }},
  // ── 21. Indigo + Soft Peach ───────────────────────────────────────────────
  { id:"indigoperach", name:"IndigoPeach", swatch:"#FDBA74", vars:{
    light:{"--primary":"243 75% 59%","--primary-foreground":"0 0% 100%","--ring":"243 75% 59%","--surface-dark":"243 45% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 72%","--background":"240 20% 98%","--foreground":"243 30% 8%","--card":"0 0% 100%","--card-foreground":"243 30% 8%","--secondary":"240 20% 92%","--secondary-foreground":"243 35% 18%","--muted":"240 18% 93%","--muted-foreground":"243 12% 40%","--border":"240 18% 86%","--input":"240 18% 86%"},
    dark: {"--primary":"243 75% 65%","--primary-foreground":"243 40% 6%","--ring":"243 75% 65%","--surface-dark":"243 45% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"27 96% 72%","--background":"243 35% 6%","--foreground":"0 0% 98%","--card":"243 35% 9%","--card-foreground":"0 0% 98%","--secondary":"243 28% 15%","--secondary-foreground":"0 0% 92%","--muted":"243 28% 13%","--muted-foreground":"240 15% 65%","--border":"243 28% 18%","--input":"243 28% 18%"},
  }},
  // ── 22. Dark Teal + Gold Accent ───────────────────────────────────────────
  { id:"darkteal", name:"DarkTeal", swatch:"#115E59", vars:{
    light:{"--primary":"177 70% 22%","--primary-foreground":"0 0% 100%","--ring":"177 70% 22%","--surface-dark":"177 50% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 92% 50%","--background":"177 30% 97%","--foreground":"177 25% 8%","--card":"0 0% 100%","--card-foreground":"177 25% 8%","--secondary":"177 20% 91%","--secondary-foreground":"177 35% 16%","--muted":"177 15% 92%","--muted-foreground":"177 10% 40%","--border":"177 15% 85%","--input":"177 15% 85%"},
    dark: {"--primary":"177 70% 35%","--primary-foreground":"177 40% 6%","--ring":"38 92% 50%","--surface-dark":"177 50% 9%","--surface-dark-foreground":"0 0% 100%","--highlight":"38 92% 55%","--background":"177 30% 5%","--foreground":"0 0% 98%","--card":"177 30% 8%","--card-foreground":"0 0% 98%","--secondary":"177 22% 14%","--secondary-foreground":"0 0% 92%","--muted":"177 22% 12%","--muted-foreground":"177 12% 65%","--border":"177 22% 17%","--input":"177 22% 17%"},
  }},
  // ── 23. Navy + Bright Lime ────────────────────────────────────────────────
  { id:"navylime", name:"NavyLime", swatch:"#84CC16", vars:{
    light:{"--primary":"83 81% 44%","--primary-foreground":"0 0% 100%","--ring":"83 81% 44%","--surface-dark":"224 71% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"83 81% 52%","--background":"83 30% 98%","--foreground":"224 30% 8%","--card":"0 0% 100%","--card-foreground":"224 30% 8%","--secondary":"83 20% 92%","--secondary-foreground":"224 40% 18%","--muted":"83 15% 93%","--muted-foreground":"224 12% 40%","--border":"83 15% 86%","--input":"83 15% 86%"},
    dark: {"--primary":"83 81% 50%","--primary-foreground":"224 40% 6%","--ring":"83 81% 50%","--surface-dark":"224 71% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"83 81% 56%","--background":"224 40% 6%","--foreground":"0 0% 98%","--card":"224 40% 9%","--card-foreground":"0 0% 98%","--secondary":"224 30% 15%","--secondary-foreground":"0 0% 92%","--muted":"224 30% 13%","--muted-foreground":"224 15% 65%","--border":"224 30% 18%","--input":"224 30% 18%"},
  }},
  // ── 24. Warm Grey + Coral Pop ─────────────────────────────────────────────
  { id:"coralwarm", name:"CoralWarm", swatch:"#F472B6", vars:{
    light:{"--primary":"322 87% 70%","--primary-foreground":"0 0% 100%","--ring":"322 87% 70%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"322 87% 76%","--background":"0 0% 100%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 8% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 6% 93%","--muted-foreground":"220 5% 42%","--border":"220 6% 86%","--input":"220 6% 86%"},
    dark: {"--primary":"322 87% 72%","--primary-foreground":"322 40% 6%","--ring":"322 87% 72%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"322 87% 76%","--background":"220 10% 6%","--foreground":"0 0% 98%","--card":"220 10% 9%","--card-foreground":"0 0% 98%","--secondary":"220 8% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 13%","--muted-foreground":"220 5% 65%","--border":"220 8% 18%","--input":"220 8% 18%"},
  }},
  // ── 25. Deep Blue + Burnt Orange ──────────────────────────────────────────
  { id:"deepburnt", name:"DeepBurnt", swatch:"#C2410C", vars:{
    light:{"--primary":"17 91% 42%","--primary-foreground":"0 0% 100%","--ring":"17 91% 42%","--surface-dark":"215 25% 14%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 52%","--background":"215 20% 98%","--foreground":"215 25% 8%","--card":"0 0% 100%","--card-foreground":"215 25% 8%","--secondary":"215 15% 92%","--secondary-foreground":"215 25% 18%","--muted":"215 12% 93%","--muted-foreground":"215 10% 42%","--border":"215 12% 86%","--input":"215 12% 86%"},
    dark: {"--primary":"17 91% 52%","--primary-foreground":"215 30% 6%","--ring":"17 91% 52%","--surface-dark":"215 25% 10%","--surface-dark-foreground":"0 0% 100%","--highlight":"17 91% 58%","--background":"215 28% 5%","--foreground":"0 0% 98%","--card":"215 28% 8%","--card-foreground":"0 0% 98%","--secondary":"215 20% 14%","--secondary-foreground":"0 0% 92%","--muted":"215 20% 12%","--muted-foreground":"215 12% 65%","--border":"215 20% 17%","--input":"215 20% 17%"},
  }},
  // ── 26. Slate + Vibrant Teal ──────────────────────────────────────────────
  { id:"slateteal", name:"SlateTeal", swatch:"#14B8A6", vars:{
    light:{"--primary":"173 80% 40%","--primary-foreground":"0 0% 100%","--ring":"173 80% 40%","--surface-dark":"215 19% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"173 80% 48%","--background":"215 15% 98%","--foreground":"215 19% 8%","--card":"0 0% 100%","--card-foreground":"215 19% 8%","--secondary":"215 12% 92%","--secondary-foreground":"215 19% 18%","--muted":"215 10% 93%","--muted-foreground":"215 8% 42%","--border":"215 10% 86%","--input":"215 10% 86%"},
    dark: {"--primary":"173 80% 48%","--primary-foreground":"215 30% 6%","--ring":"173 80% 48%","--surface-dark":"215 19% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"173 80% 54%","--background":"215 22% 6%","--foreground":"0 0% 98%","--card":"215 22% 9%","--card-foreground":"0 0% 98%","--secondary":"215 16% 15%","--secondary-foreground":"0 0% 92%","--muted":"215 16% 13%","--muted-foreground":"215 10% 65%","--border":"215 16% 18%","--input":"215 16% 18%"},
  }},
  // ── 27. Charcoal + Electric Cyan ──────────────────────────────────────────
  { id:"electriccyan", name:"ElecCyan", swatch:"#06B6D4", vars:{
    light:{"--primary":"189 94% 43%","--primary-foreground":"0 0% 100%","--ring":"189 94% 43%","--surface-dark":"220 13% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"189 94% 52%","--background":"189 30% 98%","--foreground":"220 13% 8%","--card":"0 0% 100%","--card-foreground":"220 13% 8%","--secondary":"189 20% 92%","--secondary-foreground":"220 13% 18%","--muted":"189 15% 93%","--muted-foreground":"220 8% 42%","--border":"189 15% 86%","--input":"189 15% 86%"},
    dark: {"--primary":"189 94% 52%","--primary-foreground":"220 20% 6%","--ring":"189 94% 52%","--surface-dark":"220 13% 11%","--surface-dark-foreground":"0 0% 100%","--highlight":"189 94% 58%","--background":"220 15% 6%","--foreground":"0 0% 98%","--card":"220 15% 9%","--card-foreground":"0 0% 98%","--secondary":"220 12% 15%","--secondary-foreground":"0 0% 92%","--muted":"220 12% 13%","--muted-foreground":"220 8% 65%","--border":"220 12% 18%","--input":"220 12% 18%"},
  }},
  // ── 28. Warm Neutral + Indigo Pop ─────────────────────────────────────────
  { id:"warmneutral", name:"WarmNeutral", swatch:"#4F46E5", vars:{
    light:{"--primary":"243 75% 59%","--primary-foreground":"0 0% 100%","--ring":"243 75% 59%","--surface-dark":"220 9% 18%","--surface-dark-foreground":"0 0% 100%","--highlight":"243 75% 67%","--background":"0 0% 100%","--foreground":"220 9% 8%","--card":"0 0% 100%","--card-foreground":"220 9% 8%","--secondary":"220 8% 92%","--secondary-foreground":"220 9% 18%","--muted":"220 6% 93%","--muted-foreground":"220 5% 42%","--border":"220 6% 86%","--input":"220 6% 86%"},
    dark: {"--primary":"243 75% 65%","--primary-foreground":"243 40% 6%","--ring":"243 75% 65%","--surface-dark":"220 9% 12%","--surface-dark-foreground":"0 0% 100%","--highlight":"243 75% 70%","--background":"220 10% 5%","--foreground":"0 0% 98%","--card":"220 10% 8%","--card-foreground":"0 0% 98%","--secondary":"220 8% 14%","--secondary-foreground":"0 0% 92%","--muted":"220 8% 12%","--muted-foreground":"220 5% 65%","--border":"220 8% 17%","--input":"220 8% 17%"},
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
