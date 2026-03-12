# NexusAI ERP — System Architecture (Nodes & Edges)

```mermaid
flowchart TD

  %% ── INPUT LAYER ──────────────────────────────────────────
  subgraph INPUTS["📥 Input Layer"]
    I1[User / Browser]
    I2[Mobile App]
    I3[Third-party APIs]
    I4[IoT / Sensors]
    I5[Legacy Systems\nSAP · Oracle · SSIS]
    I6[Informatica / DataStage]
  end

  %% ── INGESTION & MIGRATION ────────────────────────────────
  subgraph INGEST["🔄 Ingestion & Migration"]
    M1[Migration Engine\nInformatica → Fabric]
    M2[API Gateway]
    M3[Event Bus\nKafka / Azure Event Hub]
  end

  %% ── DATA PLATFORM ────────────────────────────────────────
  subgraph DATA["🗄️ Data Platform"]
    D1[Microsoft Fabric\nOneLake]
    D2[Snowflake\nData Warehouse]
    D3[Databricks\nSpark Processing]
    D4[Azure Data Lake\nRaw Storage]
  end

  %% ── AI / ML LAYER ────────────────────────────────────────
  subgraph AI["🤖 AI / ML Layer"]
    A1[AI Assistant\nCFO · COO · Analyst]
    A2[Demand Forecasting\nModel]
    A3[Anomaly Detection\nEngine]
    A4[NLP Report\nGenerator]
    A5[Recommendation\nEngine]
    A6[Data Assistant\nNatural Language Query]
  end

  %% ── ERP CORE MODULES ─────────────────────────────────────
  subgraph ERP["🏢 NexusAI ERP Core"]
    E1[Finance &\nAccounting]
    E2[Supply Chain &\nInventory]
    E3[HR & Payroll]
    E4[Manufacturing &\nProduction]
    E5[Sales · CRM &\nBilling]
    E6[Spend &\nProcurement]
    E7[Built-in Chatbot]
  end

  %% ── COMPLIANCE ENGINE ────────────────────────────────────
  subgraph COMPLY["📋 Compliance Engine"]
    C1[GST · TDS · e-Invoice\nIndia Compliance]
    C2[Ind AS · IFRS\nAccounting Standards]
    C3[Audit Trail &\nAccess Control]
  end

  %% ── INTEGRATION LAYER ────────────────────────────────────
  subgraph INTEG["🔗 Integration Layer"]
    N1[REST / GraphQL APIs]
    N2[Webhooks]
    N3[WhatsApp · Slack\nTeams Connector]
    N4[Power BI\nConnector]
    N5[ERP Workflow\nAutomation Engine]
  end

  %% ── OUTPUT / DELIVERY ────────────────────────────────────
  subgraph OUTPUT["📤 Output Layer"]
    O1[Dashboards &\nReports]
    O2[Alerts &\nNotifications]
    O3[Scheduled Exports\nPDF · Excel · CSV]
    O4[Board Reports\nNLP Generated]
    O5[Approval Workflows\nChat-based]
  end

  %% ── INFRASTRUCTURE ───────────────────────────────────────
  subgraph INFRA["☁️ Cloud Infrastructure"]
    X1[AWS]
    X2[Microsoft Azure]
    X3[Google Cloud]
    X4[Private Cloud\nOwned Infrastructure]
  end

  %% ══════════════════════════════════════════════════════════
  %% EDGES — Input → Ingestion
  %% ══════════════════════════════════════════════════════════
  I1 -->|HTTP / WebSocket| M2
  I2 -->|Mobile SDK| M2
  I3 -->|REST / Webhooks| M2
  I4 -->|MQTT / Stream| M3
  I5 -->|ETL / Batch| M1
  I6 -->|Pipeline Migration| M1

  %% Ingestion → Data Platform
  M1 -->|Migrated Pipelines| D1
  M2 -->|Validated Events| M3
  M3 -->|Stream| D1
  M3 -->|Stream| D3
  D1 <-->|Sync| D2
  D1 <-->|Sync| D4
  D3 -->|Processed Data| D1

  %% Data Platform → AI Layer
  D1 -->|Feature Store| A2
  D1 -->|Time-series Data| A3
  D2 -->|Aggregated Data| A1
  D2 -->|Query Results| A6
  D3 -->|ML Training Data| A2
  D3 -->|ML Training Data| A5

  %% AI Layer internal
  A1 -->|Insights| A4
  A2 -->|Forecast Signals| A1
  A3 -->|Anomaly Alerts| A1
  A5 -->|Recommendations| A1
  A6 -->|NL Query Results| A1

  %% Data Platform → ERP Core
  D1 -->|Real-time Data| E1
  D1 -->|Real-time Data| E2
  D1 -->|Real-time Data| E3
  D1 -->|Real-time Data| E4
  D1 -->|Real-time Data| E5
  D1 -->|Real-time Data| E6

  %% AI → ERP Core
  A1 -->|AI Insights| E1
  A1 -->|AI Insights| E5
  A2 -->|Demand Forecast| E2
  A2 -->|Demand Forecast| E4
  A3 -->|Spend Anomalies| E6
  A5 -->|Upsell Signals| E5
  A6 -->|Query Interface| E7

  %% ERP Core → Compliance
  E1 -->|Transactions| C1
  E1 -->|Financials| C2
  E3 -->|Payroll Data| C1
  E5 -->|Invoices| C1
  E6 -->|Procurement| C3
  C1 -->|Audit Log| C3
  C2 -->|Audit Log| C3

  %% ERP Core → Integration Layer
  E1 -->|Events| N5
  E2 -->|Events| N5
  E3 -->|Events| N5
  E4 -->|Events| N5
  E5 -->|Events| N5
  E6 -->|Events| N5
  E7 -->|Chat Events| N3
  N5 -->|Triggers| N1
  N5 -->|Triggers| N2

  %% Integration → Output
  N1 -->|API Response| O1
  N4 -->|BI Data| O1
  A4 -->|Generated Reports| O4
  A3 -->|Alert Payload| O2
  N3 -->|Chat Message| O5
  N5 -->|Scheduled Job| O3
  O5 -->|Approval Result| N5

  %% Infrastructure underpins everything
  X1 -.->|Hosts| DATA
  X2 -.->|Hosts| DATA
  X2 -.->|Hosts| ERP
  X3 -.->|Hosts| AI
  X4 -.->|Hosts| ERP
  X4 -.->|Hosts| INFRA
```

---

## Node Legend

| Layer | Nodes | Role |
|---|---|---|
| Input | I1–I6 | All data sources entering the system |
| Ingestion | M1–M3 | Migration engine, API gateway, event streaming |
| Data Platform | D1–D4 | OneLake, Snowflake, Databricks, ADLS |
| AI / ML | A1–A6 | AI Assistant, forecasting, anomaly, NLP, recommendations |
| ERP Core | E1–E7 | All 7 functional ERP modules |
| Compliance | C1–C3 | India GST/TDS, accounting standards, audit trail |
| Integration | N1–N5 | APIs, webhooks, chat connectors, Power BI, workflow engine |
| Output | O1–O5 | Dashboards, alerts, exports, board reports, approvals |
| Infrastructure | X1–X4 | AWS, Azure, GCP, private cloud |

## Key Edge Types

| Edge Style | Meaning |
|---|---|
| `-->` solid arrow | Active data flow |
| `<-->` bidirectional | Sync / two-way replication |
| `-.->` dashed | Infrastructure hosting relationship |
| Label on edge | Protocol or data type |
