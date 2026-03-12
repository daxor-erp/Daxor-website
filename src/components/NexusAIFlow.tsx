import { useState, useRef, useMemo } from "react";
import { useTheme } from "next-themes";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NodeData {
  id: string;
  label: string;
  sublabel?: string;
  layer: string;
  x: number;
  y: number;
  color: string;
}

interface EdgeData {
  id: string;
  from: string;
  to: string;
  label?: string;
  bidirectional?: boolean;
  dashed?: boolean;
}

// ─── Node definitions ─────────────────────────────────────────────────────────
const NODES: NodeData[] = [
  // Input Layer
  { id: "I1", label: "User / Browser",       layer: "Input",       x: 60,  y: 80,  color: "#6366f1" },
  { id: "I2", label: "Mobile App",           layer: "Input",       x: 60,  y: 160, color: "#6366f1" },
  { id: "I3", label: "Third-party APIs",     layer: "Input",       x: 60,  y: 240, color: "#6366f1" },
  { id: "I4", label: "IoT / Sensors",        layer: "Input",       x: 60,  y: 320, color: "#6366f1" },
  { id: "I5", label: "Legacy Systems",       sublabel: "SAP · Oracle · SSIS", layer: "Input", x: 60, y: 400, color: "#6366f1" },
  { id: "I6", label: "Informatica",          sublabel: "DataStage", layer: "Input", x: 60, y: 480, color: "#6366f1" },

  // Ingestion
  { id: "M1", label: "Migration Engine",     sublabel: "Informatica → Fabric", layer: "Ingestion", x: 260, y: 440, color: "#f59e0b" },
  { id: "M2", label: "API Gateway",          layer: "Ingestion",   x: 260, y: 160, color: "#f59e0b" },
  { id: "M3", label: "Event Bus",            sublabel: "Kafka / Azure Event Hub", layer: "Ingestion", x: 260, y: 300, color: "#f59e0b" },

  // Data Platform
  { id: "D1", label: "Microsoft Fabric",     sublabel: "OneLake",  layer: "Data",  x: 460, y: 200, color: "#10b981" },
  { id: "D2", label: "Snowflake",            sublabel: "Data Warehouse", layer: "Data", x: 460, y: 320, color: "#10b981" },
  { id: "D3", label: "Databricks",           sublabel: "Spark",    layer: "Data",  x: 460, y: 440, color: "#10b981" },
  { id: "D4", label: "Azure Data Lake",      sublabel: "Raw Storage", layer: "Data", x: 460, y: 80, color: "#10b981" },

  // AI / ML
  { id: "A1", label: "AI Assistant",         sublabel: "CFO · COO · Analyst", layer: "AI", x: 660, y: 160, color: "#8b5cf6" },
  { id: "A2", label: "Demand Forecasting",   layer: "AI",          x: 660, y: 280, color: "#8b5cf6" },
  { id: "A3", label: "Anomaly Detection",    layer: "AI",          x: 660, y: 360, color: "#8b5cf6" },
  { id: "A4", label: "NLP Report Gen",       layer: "AI",          x: 660, y: 440, color: "#8b5cf6" },
  { id: "A5", label: "Recommendation",       layer: "AI",          x: 660, y: 520, color: "#8b5cf6" },
  { id: "A6", label: "Data Assistant",       sublabel: "NL Query", layer: "AI",   x: 660, y: 80,  color: "#8b5cf6" },

  // ERP Core
  { id: "E1", label: "Finance & Accounting", layer: "ERP",         x: 880, y: 80,  color: "#0ea5e9" },
  { id: "E2", label: "Supply Chain",         sublabel: "Inventory", layer: "ERP", x: 880, y: 180, color: "#0ea5e9" },
  { id: "E3", label: "HR & Payroll",         layer: "ERP",         x: 880, y: 280, color: "#0ea5e9" },
  { id: "E4", label: "Manufacturing",        sublabel: "Production", layer: "ERP", x: 880, y: 360, color: "#0ea5e9" },
  { id: "E5", label: "Sales · CRM",          sublabel: "Billing",  layer: "ERP",  x: 880, y: 440, color: "#0ea5e9" },
  { id: "E6", label: "Procurement",          sublabel: "Spend",    layer: "ERP",  x: 880, y: 520, color: "#0ea5e9" },
  { id: "E7", label: "Built-in Chatbot",     layer: "ERP",         x: 880, y: 600, color: "#0ea5e9" },

  // Compliance
  { id: "C1", label: "GST · TDS · e-Invoice", sublabel: "India Compliance", layer: "Compliance", x: 1080, y: 160, color: "#ef4444" },
  { id: "C2", label: "Ind AS · IFRS",        sublabel: "Accounting Standards", layer: "Compliance", x: 1080, y: 280, color: "#ef4444" },
  { id: "C3", label: "Audit Trail",          sublabel: "Access Control", layer: "Compliance", x: 1080, y: 400, color: "#ef4444" },

  // Integration
  { id: "N1", label: "REST / GraphQL",       layer: "Integration", x: 1080, y: 520, color: "#f97316" },
  { id: "N2", label: "Webhooks",             layer: "Integration", x: 1080, y: 600, color: "#f97316" },
  { id: "N3", label: "WhatsApp · Slack",     sublabel: "Teams", layer: "Integration", x: 1080, y: 680, color: "#f97316" },
  { id: "N4", label: "Power BI",             sublabel: "Connector", layer: "Integration", x: 1080, y: 760, color: "#f97316" },
  { id: "N5", label: "Workflow Engine",      sublabel: "Automation", layer: "Integration", x: 880, y: 700, color: "#f97316" },

  // Output
  { id: "O1", label: "Dashboards",           sublabel: "Reports",  layer: "Output", x: 1280, y: 160, color: "#14b8a6" },
  { id: "O2", label: "Alerts",               sublabel: "Notifications", layer: "Output", x: 1280, y: 280, color: "#14b8a6" },
  { id: "O3", label: "Scheduled Exports",    sublabel: "PDF · Excel · CSV", layer: "Output", x: 1280, y: 400, color: "#14b8a6" },
  { id: "O4", label: "Board Reports",        sublabel: "NLP Generated", layer: "Output", x: 1280, y: 520, color: "#14b8a6" },
  { id: "O5", label: "Approval Workflows",   sublabel: "Chat-based", layer: "Output", x: 1280, y: 640, color: "#14b8a6" },
];

// ─── Edge definitions ─────────────────────────────────────────────────────────
const EDGES: EdgeData[] = [
  // Input → Ingestion
  { id: "e1",  from: "I1", to: "M2", label: "HTTP" },
  { id: "e2",  from: "I2", to: "M2", label: "SDK" },
  { id: "e3",  from: "I3", to: "M2", label: "REST" },
  { id: "e4",  from: "I4", to: "M3", label: "MQTT" },
  { id: "e5",  from: "I5", to: "M1", label: "ETL" },
  { id: "e6",  from: "I6", to: "M1", label: "Pipeline" },
  // Ingestion → Data
  { id: "e7",  from: "M1", to: "D1" },
  { id: "e8",  from: "M2", to: "M3" },
  { id: "e9",  from: "M3", to: "D1", label: "Stream" },
  { id: "e10", from: "M3", to: "D3", label: "Stream" },
  { id: "e11", from: "D1", to: "D2", bidirectional: true, label: "Sync" },
  { id: "e12", from: "D1", to: "D4", bidirectional: true, label: "Sync" },
  { id: "e13", from: "D3", to: "D1" },
  // Data → AI
  { id: "e14", from: "D1", to: "A2", label: "Features" },
  { id: "e15", from: "D1", to: "A3" },
  { id: "e16", from: "D2", to: "A1" },
  { id: "e17", from: "D2", to: "A6" },
  { id: "e18", from: "D3", to: "A2" },
  { id: "e19", from: "D3", to: "A5" },
  // AI internal
  { id: "e20", from: "A1", to: "A4" },
  { id: "e21", from: "A2", to: "A1" },
  { id: "e22", from: "A3", to: "A1" },
  { id: "e23", from: "A5", to: "A1" },
  { id: "e24", from: "A6", to: "A1" },
  // Data → ERP
  { id: "e25", from: "D1", to: "E1" },
  { id: "e26", from: "D1", to: "E2" },
  { id: "e27", from: "D1", to: "E3" },
  { id: "e28", from: "D1", to: "E4" },
  { id: "e29", from: "D1", to: "E5" },
  { id: "e30", from: "D1", to: "E6" },
  // AI → ERP
  { id: "e31", from: "A1", to: "E1" },
  { id: "e32", from: "A1", to: "E5" },
  { id: "e33", from: "A2", to: "E2" },
  { id: "e34", from: "A2", to: "E4" },
  { id: "e35", from: "A3", to: "E6" },
  { id: "e36", from: "A5", to: "E5" },
  { id: "e37", from: "A6", to: "E7" },
  // ERP → Compliance
  { id: "e38", from: "E1", to: "C1" },
  { id: "e39", from: "E1", to: "C2" },
  { id: "e40", from: "E3", to: "C1" },
  { id: "e41", from: "E5", to: "C1" },
  { id: "e42", from: "E6", to: "C3" },
  { id: "e43", from: "C1", to: "C3" },
  { id: "e44", from: "C2", to: "C3" },
  // ERP → Integration
  { id: "e45", from: "E1", to: "N5" },
  { id: "e46", from: "E2", to: "N5" },
  { id: "e47", from: "E3", to: "N5" },
  { id: "e48", from: "E4", to: "N5" },
  { id: "e49", from: "E5", to: "N5" },
  { id: "e50", from: "E6", to: "N5" },
  { id: "e51", from: "E7", to: "N3" },
  { id: "e52", from: "N5", to: "N1" },
  { id: "e53", from: "N5", to: "N2" },
  // Integration → Output
  { id: "e54", from: "N1", to: "O1" },
  { id: "e55", from: "N4", to: "O1" },
  { id: "e56", from: "A4", to: "O4" },
  { id: "e57", from: "A3", to: "O2" },
  { id: "e58", from: "N3", to: "O5" },
  { id: "e59", from: "N5", to: "O3" },
  { id: "e60", from: "O5", to: "N5" },
];

const LAYER_ORDER = ["Input", "Ingestion", "Data", "AI", "ERP", "Compliance", "Integration", "Output"];
const LAYER_COLORS: Record<string, string> = {
  Input: "#6366f1", Ingestion: "#f59e0b", Data: "#10b981",
  AI: "#8b5cf6", ERP: "#0ea5e9", Compliance: "#ef4444",
  Integration: "#f97316", Output: "#14b8a6",
};

// ─── Main Component ───────────────────────────────────────────────────────────
const NexusAIFlow = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Canvas dimensions
  const W = 1480;
  const H = 860;

  // Theme tokens
  const bg        = "hsl(var(--background))";
  const nodeBg    = isDark ? "#1a1a2e" : "#ffffff";
  const nodeStroke= isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const textPri   = isDark ? "#f0f0f0" : "#111111";
  const textSec   = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";
  const edgeColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)";
  const edgeLabelColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const panelBg   = isDark ? "rgba(15,15,25,0.95)" : "rgba(255,255,255,0.97)";
  const panelBorder = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";

  // Node lookup map
  const nodeMap = useMemo(() => {
    const m: Record<string, NodeData> = {};
    NODES.forEach(n => { m[n.id] = n; });
    return m;
  }, []);

  // Filtered nodes/edges by active layer
  const visibleNodes = useMemo(() =>
    activeLayer ? NODES.filter(n => n.layer === activeLayer) : NODES,
    [activeLayer]
  );
  const visibleNodeIds = useMemo(() => new Set(visibleNodes.map(n => n.id)), [visibleNodes]);
  const visibleEdges = useMemo(() =>
    activeLayer
      ? EDGES.filter(e => visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to))
      : EDGES,
    [activeLayer, visibleNodeIds]
  );

  // Connected edges for selected node
  const connectedEdges = useMemo(() =>
    selectedNode
      ? EDGES.filter(e => e.from === selectedNode.id || e.to === selectedNode.id)
      : [],
    [selectedNode]
  );
  const connectedIds = useMemo(() =>
    new Set(connectedEdges.flatMap(e => [e.from, e.to])),
    [connectedEdges]
  );

  // Edge path helper
  const edgePath = (from: NodeData, to: NodeData) => {
    const x1 = from.x + 80, y1 = from.y + 28;
    const x2 = to.x,        y2 = to.y + 28;
    const cx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
  };

  const edgeMidpoint = (from: NodeData, to: NodeData) => ({
    x: (from.x + 80 + to.x) / 2,
    y: (from.y + 28 + to.y + 28) / 2,
  });

  return (
    <section id="workflow" className="relative py-12 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="container mx-auto px-4 mb-8">
        <p className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: textSec }}>
          System Architecture
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: textPri }}>
          Daxor — end-to-end data flow
        </h2>
        <p className="text-base max-w-2xl" style={{ color: textSec }}>
          From raw inputs through AI processing to actionable outputs. Click any node to explore connections. Filter by layer below.
        </p>
      </div>

      {/* Layer filter pills */}
      <div className="container mx-auto px-4 mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveLayer(null)}
          className="px-3 py-1 rounded-full text-xs font-mono font-bold border transition-all"
          style={{
            background: !activeLayer ? textPri : "transparent",
            color: !activeLayer ? bg : textSec,
            borderColor: !activeLayer ? textPri : nodeStroke,
          }}
        >
          ALL
        </button>
        {LAYER_ORDER.map(layer => (
          <button
            key={layer}
            onClick={() => setActiveLayer(activeLayer === layer ? null : layer)}
            className="px-3 py-1 rounded-full text-xs font-mono font-bold border transition-all"
            style={{
              background: activeLayer === layer ? LAYER_COLORS[layer] : "transparent",
              color: activeLayer === layer ? "#fff" : textSec,
              borderColor: activeLayer === layer ? LAYER_COLORS[layer] : nodeStroke,
            }}
          >
            {layer.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Canvas + Detail panel side by side */}
      <div className="container mx-auto px-4 flex gap-4 items-start">
        {/* Canvas */}
        <div
          className="relative rounded-2xl overflow-hidden flex-1 min-w-0"
          style={{ height: 660, border: `1px solid ${panelBorder}` }}
        >
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ background: bg }}
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridColor} strokeWidth="1" />
              </pattern>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={edgeColor} />
              </marker>
              <marker id="arrow-active" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" />
              </marker>
            </defs>

            <rect width={W} height={H} fill="url(#grid)" />

            {/* Edges */}
            {visibleEdges.map(edge => {
              const from = nodeMap[edge.from];
              const to   = nodeMap[edge.to];
              if (!from || !to) return null;
              const isHighlighted = selectedNode && connectedEdges.some(e => e.id === edge.id);
              const mid = edgeMidpoint(from, to);
              return (
                <g key={edge.id}>
                  <path
                    d={edgePath(from, to)}
                    fill="none"
                    stroke={isHighlighted ? "#8b5cf6" : edgeColor}
                    strokeWidth={isHighlighted ? 2 : 1}
                    strokeDasharray={edge.dashed ? "6 4" : undefined}
                    markerEnd={`url(#${isHighlighted ? "arrow-active" : "arrow"})`}
                    opacity={selectedNode && !isHighlighted ? 0.2 : 1}
                  />
                  {edge.bidirectional && (
                    <path
                      d={edgePath(to, from)}
                      fill="none"
                      stroke={isHighlighted ? "#8b5cf6" : edgeColor}
                      strokeWidth={isHighlighted ? 2 : 1}
                      markerEnd={`url(#${isHighlighted ? "arrow-active" : "arrow"})`}
                      opacity={selectedNode && !isHighlighted ? 0.2 : 1}
                    />
                  )}
                  {edge.label && (
                    <text x={mid.x} y={mid.y - 4} textAnchor="middle" fontSize="9" fill={edgeLabelColor}>
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {visibleNodes.map(node => {
              const isSelected = selectedNode?.id === node.id;
              const isConnected = connectedIds.has(node.id);
              const dimmed = selectedNode && !isSelected && !isConnected;
              return (
                <g
                  key={node.id}
                  className="node-group"
                  transform={`translate(${node.x},${node.y})`}
                  style={{ cursor: "pointer", opacity: dimmed ? 0.25 : 1 }}
                  onClick={() => setSelectedNode(isSelected ? null : node)}
                >
                  <rect
                    width={160} height={56} rx={10}
                    fill={nodeBg}
                    stroke={isSelected ? node.color : isConnected ? node.color + "88" : nodeStroke}
                    strokeWidth={isSelected ? 2 : 1}
                  />
                  <rect width={4} height={56} rx={2} fill={node.color} />
                  <rect x={140} y={4} width={16} height={14} rx={3} fill={node.color + "33"} />
                  <text x={148} y={14} textAnchor="middle" fontSize="8" fontFamily="monospace" fill={node.color} fontWeight="bold">
                    {node.id}
                  </text>
                  <text x={14} y={22} fontSize="11" fontWeight="600" fill={textPri} fontFamily="sans-serif">
                    {node.label}
                  </text>
                  {node.sublabel && (
                    <text x={14} y={38} fontSize="9" fill={textSec} fontFamily="monospace">
                      {node.sublabel}
                    </text>
                  )}
                  <text x={14} y={50} fontSize="8" fill={node.color} fontFamily="monospace" opacity={0.7}>
                    {node.layer}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hint */}
          <div className="absolute bottom-3 left-4 text-xs font-mono" style={{ color: textSec }}>
            Click a node to inspect
          </div>
        </div>

        {/* Right detail panel — fixed width, same height as canvas */}
        <div
          className="rounded-2xl flex-shrink-0 overflow-y-auto transition-all duration-300"
          style={{
            width: selectedNode ? 280 : 0,
            height: 660,
            border: selectedNode ? `1px solid ${panelBorder}` : "none",
            background: panelBg,
            opacity: selectedNode ? 1 : 0,
            padding: selectedNode ? "20px" : 0,
            overflow: selectedNode ? "auto" : "hidden",
          }}
        >
          {selectedNode && (
            <>
              <div className="flex items-start justify-between mb-4">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold"
                  style={{ background: selectedNode.color + "22", color: selectedNode.color }}
                >
                  {selectedNode.layer} · {selectedNode.id}
                </span>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-lg leading-none ml-2 flex-shrink-0"
                  style={{ color: textSec }}
                >
                  ×
                </button>
              </div>

              <h3 className="text-base font-bold mb-1" style={{ color: textPri }}>
                {selectedNode.label}
              </h3>
              {selectedNode.sublabel && (
                <p className="text-xs font-mono mb-4" style={{ color: textSec }}>
                  {selectedNode.sublabel}
                </p>
              )}

              <div
                className="w-full h-px mb-4"
                style={{ background: panelBorder }}
              />

              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: textSec }}>
                Connections ({connectedEdges.length})
              </p>
              <div className="flex flex-col gap-2">
                {connectedEdges.map(e => {
                  const other = e.from === selectedNode.id ? nodeMap[e.to] : nodeMap[e.from];
                  const dir = e.from === selectedNode.id ? "→" : "←";
                  if (!other) return null;
                  return (
                    <button
                      key={e.id}
                      onClick={() => setSelectedNode(other)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-left transition-colors w-full"
                      style={{ background: other.color + "14", border: `1px solid ${other.color}33`, color: other.color }}
                    >
                      <span className="opacity-60">{dir}</span>
                      <span className="font-bold">{other.id}</span>
                      <span className="opacity-70 truncate">{other.label}</span>
                      {e.label && <span className="ml-auto opacity-50 flex-shrink-0">({e.label})</span>}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NexusAIFlow;
