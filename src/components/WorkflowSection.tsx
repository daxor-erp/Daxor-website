import { useRef, useLayoutEffect, useState, useCallback, useEffect } from "react";
import { Database, Cog, BarChart3, FileText, Zap, ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { WorkflowConnector } from "@/components/WorkflowConnector";
import { getConnectorLayout, type ConnectorPosition } from "@/lib/connector-utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkflowStep {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  color: string;
  bgColor: string;
  borderColor: string;
  step: number;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "data-input",
    icon: Database,
    title: "Data Input",
    description: "Centralise data from ERP, CRM, spreadsheets & APIs",
    detail: "All sources unified in one intelligent lakehouse",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    step: 1,
  },
  {
    id: "processing",
    icon: Cog,
    title: "AI Processing",
    description: "Automate workflows and transform raw data intelligently",
    detail: "Rule engines, validations & smart data pipelines",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    step: 2,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time insights with predictive AI dashboards",
    detail: "Custom KPIs, trend detection & anomaly alerts",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    step: 3,
  },
  {
    id: "reporting",
    icon: FileText,
    title: "Reporting",
    description: "Auto-generate compliance docs and audit trails",
    detail: "Scheduled exports, GST filings & board reports",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    step: 4,
  },
  {
    id: "action",
    icon: Zap,
    title: "Action",
    description: "Execute strategies and drive measurable outcomes",
    detail: "Alerts, approvals & automated decision workflows",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    step: 5,
  },
];

const STAGGER_DELAY = 0.2;
const RESIZE_DEBOUNCE_MS = 300;

interface WorkflowSectionProps {
  className?: string;
}

export function WorkflowSection({ className }: WorkflowSectionProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    WORKFLOW_STEPS.map(() => ({ current: null }))
  );
  const [connectors, setConnectors] = useState<ConnectorPosition[]>([]);

  const recalcConnectors = useCallback(() => {
    if (!containerRef.current) return;
    const positions = getConnectorLayout(isMobile, cardRefs.current, containerRef);
    setConnectors(positions);
  }, [isMobile]);

  useLayoutEffect(() => { recalcConnectors(); }, [recalcConnectors]);

  useEffect(() => {
    if (!containerRef.current) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new ResizeObserver(() => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => recalcConnectors(), RESIZE_DEBOUNCE_MS);
    });
    observer.observe(containerRef.current);
    return () => { observer.disconnect(); if (timeoutId) clearTimeout(timeoutId); };
  }, [recalcConnectors]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(recalcConnectors, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, recalcConnectors]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: (i: number) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { delay: i * STAGGER_DELAY, duration: 0.5, type: "spring" as const, stiffness: 100, damping: 15 },
    }),
  };

  return (
    <section ref={sectionRef} className={className}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-4">
            How Daxor ERP works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From data to decisions
            <br />
            <span className="text-muted-foreground">in five intelligent steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A streamlined AI-powered workflow that transforms your business operations from raw data input to actionable outcomes — automatically.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className={`relative ${
            isMobile
              ? "flex flex-col items-center gap-6"
              : "flex flex-row justify-center items-stretch gap-4 lg:gap-6"
          }`}
        >
          {connectors.map((pos, i) => (
            <WorkflowConnector
              key={`connector-${i}`}
              startX={pos.startX}
              startY={pos.startY}
              endX={pos.endX}
              endY={pos.endY}
              animated={isInView}
              delay={STAGGER_DELAY * (i + 1) + 0.3}
            />
          ))}

          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                custom={index}
                variants={prefersReducedMotion ? undefined : cardVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                animate={isInView && !prefersReducedMotion ? "visible" : prefersReducedMotion ? undefined : "hidden"}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="w-full max-w-[220px] flex-shrink-0"
              >
                <div
                  ref={(el) => { cardRefs.current[index] = { current: el }; }}
                  className={`relative flex flex-col items-center text-center p-5 rounded-2xl border ${step.borderColor} bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 h-full`}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-background border border-border text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <div className={`mt-2 mb-3 rounded-xl p-3 ${step.bgColor}`}>
                    <Icon className={`h-7 w-7 ${step.color}`} />
                  </div>
                  <h3 className="font-bold text-base mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.description}</p>
                  <p className="text-[11px] text-muted-foreground/60 leading-snug mt-auto pt-2 border-t border-border/50 w-full">
                    {step.detail}
                  </p>
                  {index < WORKFLOW_STEPS.length - 1 && !isMobile && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                      <ArrowRight className={`h-4 w-4 ${step.color} opacity-40`} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
