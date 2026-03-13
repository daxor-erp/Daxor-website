import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";

const scalabilityCards = [
  { title: "SECOND",  description: "Real-time payment processing at any scale"        },
  { title: "MINUTE",  description: "Invoices generated and dispatched automatically"  },
  { title: "WEEKLY",  description: "Payroll runs without manual intervention"         },
  { title: "MONTHLY", description: "Financial planning, forecasting & reconciliation" },
  { title: "YEARLY",  description: "Books closed with full audit trail & compliance"  },
];

const RotatingGlobe = () => {
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
      dark: 1,
      diffuse: 1.4,
      mapSamples: 24000,
      mapBrightness: 8,
      baseColor: [0.15, 0.25, 0.6],
      markerColor: [0.4, 0.8, 1],
      glowColor: [0.2, 0.4, 1],
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
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textSub   = "rgba(255,255,255,0.55)";
  const textLabel = "rgba(255,255,255,0.4)";
  const cardBg    = "rgba(255,255,255,0.08)";
  const cardBorder= "rgba(255,255,255,0.14)";
  const cardTitle = "rgba(255,255,255,0.92)";
  const cardDesc  = "rgba(255,255,255,0.5)";
  // Read --surface-dark CSS var so it always matches the active preset
  const fadeEdge  = "hsl(var(--surface-dark))";

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden min-h-[680px] transition-colors duration-300 bg-surface-dark text-surface-dark-foreground"
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
        <RotatingGlobe />
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
