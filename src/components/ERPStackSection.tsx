import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    label: "Infrastructure",
    img: "/layers-img/erp_intro.svg",
    title: "Full-stack infrastructure. First-of-its-kind.",
    paragraphs: [
      "Daxor ERP is engineered to be frictionless, removing the layers of ambiguity that have defined the legacy ERP experience.",
      "By providing a fully integrated technology stack, we eliminate the persistent friction of disconnected networks, fragmented infrastructure, and siloed applications.",
    ],
    points: [
      "Fully-featured trial, no contract mandates",
      "Platform that scales with you when you do",
      "Transparent training and setup costs",
      "World-class infrastructure for your digital environment",
    ],
    accent: "#3b82f6",
    accentClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
  },
  {
    label: "Integration",
    img: "/layers-img/connect-business.svg",
    title: "Connect business functions across operations.",
    paragraphs: [
      "Whether you are outgrowing your current system, or looking to end your dependency on 10 different apps, Daxor ERP brings all your operations into one platform.",
      "Solve whole-business problems across your entire lifecycle — order to cash, procure to pay, hire to retire, and every scenario end-to-end.",
    ],
    points: [],
    accent: "#f59e0b",
    accentClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
  },
  {
    label: "Extensibility",
    img: "/layers-img/extend-erp.svg",
    title: "Extend Daxor ERP for every kind of business.",
    paragraphs: [
      "Every business takes its own form, and Daxor ERP takes the form of every business.",
      "With no-code/low-code platform, custom modules, workflow automation, widgets, and blueprint journeys — intelligent tools configured to do the routine heavy lifting.",
    ],
    points: [],
    accent: "#10b981",
    accentClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
  },
  {
    label: "AI",
    img: "/layers-img/zia-ai.svg",
    title: "Intelligent Workflows. Adaptive AI.",
    paragraphs: [
      "Daxor ERP is context-aware of your entire business workflow — forecasting demand, alerting on anomalies, and drafting reports in natural language.",
      "Real-time intelligence through advanced analytics accelerates your business with revolutionary insights from the Data Assistant and AI Assistant.",
    ],
    points: [],
    accent: "#a855f7",
    accentClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/30",
  },
  {
    label: "Security",
    img: "/layers-img/erp-security-icon.svg",
    title: "Ironclad Security. Global Agility.",
    paragraphs: [
      "Your business functions connect seamlessly because the underlying infrastructure is owned by the same hands that built the software.",
    ],
    points: [
      "Privately owned cloud infrastructure",
      "Fast performance, predictably resilient",
      "Compliant with global benchmarks",
      "India-specific compliance: GST, TDS, e-Invoicing",
    ],
    accent: "#f43f5e",
    accentClass: "text-rose-500",
    bgClass: "bg-rose-500/10",
    borderClass: "border-rose-500/30",
  },
];

const ERPStackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrolled < 0 || scrollableDistance <= 0) { setActiveIndex(0); return; }
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollableDistance));
      setActiveIndex(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = slides[activeIndex];

  return (
    <div ref={sectionRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex items-center bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

            {/* Left: text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-6">
                The ERP Stack
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                    {active.title}
                  </h2>
                  <div className="space-y-4 mb-6">
                    {active.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                  {active.points.length > 0 && (
                    <ul className="space-y-3">
                      {active.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: active.accent }}
                          />
                          <span className="text-sm text-muted-foreground">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-10">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      height: 8,
                      backgroundColor: i === activeIndex ? active.accent : "hsl(var(--border))",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: isometric layer stack */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              {/* Container: layers are absolutely positioned relative to center */}
              <div className="relative w-full h-[560px]">
                {slides.map((slide, i) => {
                  const offset = i - activeIndex;
                  const isActive = offset === 0;
                  const absOffset = Math.abs(offset);
                  const visible = absOffset <= 2;

                  return (
                    <motion.div
                      key={slide.label}
                      animate={{
                        y: offset * 110,
                        opacity: !visible ? 0 : isActive ? 1 : absOffset === 1 ? 0.55 : 0.25,
                        scale: isActive ? 1 : 1 - absOffset * 0.06,
                        zIndex: isActive ? 20 : offset < 0 ? 20 - absOffset : 10 - absOffset,
                      }}
                      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                      // Anchor to vertical center of container, left-aligned
                      className="absolute left-0 right-0 flex flex-row items-center gap-6"
                      style={{
                        top: "50%",
                        marginTop: -140, // half of active image height (280/2)
                      }}
                    >
                      {/* Layer image */}
                      <img
                        src={slide.img}
                        alt={slide.label}
                        className="object-contain flex-shrink-0"
                        style={{
                          width: isActive ? 280 : 240,
                          height: isActive ? 280 : 240,
                          filter: isActive
                            ? "drop-shadow(0 20px 40px rgba(0,0,0,0.5))"
                            : "drop-shadow(0 6px 12px rgba(0,0,0,0.3))",
                          transition: "width 0.3s, height 0.3s, filter 0.3s",
                        }}
                      />
                      {/* Label inline */}
                      <span
                        className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                        style={{
                          color: isActive ? slide.accent : "hsl(var(--muted-foreground) / 0.35)",
                          transition: "color 0.3s",
                        }}
                      >
                        {slide.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPStackSection;
