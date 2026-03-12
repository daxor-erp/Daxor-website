import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import createGlobe from "cobe";

const scalabilityCards = [
  { title: "SECOND",  description: "Real-time payment processing at any scale"        },
  { title: "MINUTE",  description: "Invoices generated and dispatched automatically"  },
  { title: "WEEKLY",  description: "Payroll runs without manual intervention"         },
  { title: "MONTHLY", description: "Financial planning, forecasting & reconciliation" },
  { title: "YEARLY",  description: "Books closed with full audit trail & compliance"  },
];

const RotatingGlobe = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 1.8;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 900 * 2,
      height: 900 * 2,
      phi: 1.8,
      theta: 0.15,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.6 : 1.2,
      mapSamples: 24000,
      mapBrightness: isDark ? 7 : 4,
      baseColor: isDark ? [0.1, 0.18, 0.42] : [0.6, 0.7, 0.9],
      markerColor: isDark ? [0.25, 0.65, 1] : [0.1, 0.3, 0.8],
      glowColor: isDark ? [0.1, 0.3, 0.9] : [0.5, 0.6, 0.9],
      markers: [
        { location: [12.9716, 77.5946],  size: 0.1  },
        { location: [28.6139, 77.209],   size: 0.06 },
        { location: [19.076,  72.8777],  size: 0.06 },
        { location: [51.5074, -0.1278],  size: 0.06 },
        { location: [40.7128, -74.006],  size: 0.07 },
        { location: [1.3521,  103.8198], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, [isDark]); // re-init when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 900, height: 900, maxWidth: "none", aspectRatio: "1" }}
      aria-hidden="true"
    />
  );
};

const GlobeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Theme-aware color tokens
  const bg       = isDark ? "#0d0d0d"              : "#f8f8f8";
  const fadeEdge = isDark ? "#0d0d0d"              : "#f8f8f8";
  const textMain = isDark ? "#f0f0f0"              : "#111111";
  const textSub  = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
  const textLabel= isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const cardBg   = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)";
  const cardBorder= isDark ? "rgba(255,255,255,0.11)" : "rgba(0,0,0,0.09)";
  const cardTitle= isDark ? "rgba(255,255,255,0.9)"  : "rgba(0,0,0,0.85)";
  const cardDesc = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden min-h-[680px] transition-colors duration-300"
      style={{ backgroundColor: bg, color: textMain }}
    >
      {/* Globe */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "-180px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        <RotatingGlobe isDark={isDark} />
      </div>

      {/* Edge fades */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(to right, ${fadeEdge} 30%, transparent 65%, ${fadeEdge} 100%)`,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(to bottom, ${fadeEdge} 0%, transparent 12%, transparent 88%, ${fadeEdge} 100%)`,
      }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mb-16"
        >
          <p className="text-xs font-mono font-bold uppercase tracking-widest mb-4" style={{ color: textLabel }}>
            World Class Scalability
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            A scalable infrastructure built for moments that count
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textSub }}>
            Whether you are striving to serve more customers, deliver more products, or expand into new markets — Daxor ERP handles increasing data volume, transaction throughput, and user load without compromise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
          {scalabilityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="p-5 rounded-xl"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <p className="text-sm font-bold tracking-[0.18em] font-mono mb-2" style={{ color: cardTitle }}>
                {card.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: cardDesc }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
