# 🏆 AICOO Hackathon — Winning Submission Plan (v2)

## Project Name
**AgentMesh** — *The Agent Network OS for Business Operations*

---

## One-Sentence Summary
AgentMesh is an operating system for AI-powered companies, where every business function runs as an autonomous agent and those agents coordinate, negotiate, and execute work together through Aicoo's coordination layer — no human forwarding tickets, no lost context, no broken handoffs.

---

## The Reframe: Why "Support Platform" Loses

| Old Framing (v1) | New Framing (v2) |
|---|---|
| AI customer support tool | Agent Network OS for business operations |
| Customer → AI → Human | Agent ↔ Agent ↔ Agent (humans are nodes, not the backbone) |
| Aicoo helps route tickets | Aicoo IS the communication protocol between agents |
| "Zendesk with AI" | "What if every department was an AI agent?" |
| Judges have seen this | Judges have never seen this |

The key shift: **Aicoo becomes the operating system.** Remove Aicoo and the product doesn't work differently — it stops existing.

---

## The "Why Aicoo?" Moment (Answer This in Your Demo)

> "Why can't this be built with OpenAI alone?"

Because OpenAI gives you one agent. AgentMesh needs:

- ✅ **Persistent identity per agent** → Aicoo workspaces (`/api/v1/init`)
- ✅ **Context that accumulates across time and team members** → `/api/v1/accumulate`
- ✅ **Permissioned cross-agent context sharing** → `/api/v1/share/create` with scope + access
- ✅ **Cross-company agent communication** → `send_message_to_human` + `search_pulse_contact` tools
- ✅ **Proactive background coordination** → `/api/v1/heartbeat/run`
- ✅ **Executive briefings before a human touches anything** → `/api/v1/briefing`

You can't buy this stack anywhere else. That's the demo.

---

## Product Vision: AgentMesh

### What It Is

A platform where any company can deploy a network of AI agents — one per business function — that autonomously coordinate work using Aicoo as the shared nervous system.

```
Every company gets:

  CEO Agent ─────────────────────────────────┐
     │                                       │
  Support Agent  ←── Billing Agent           │
       │                   │           Operations Agent
  DevOps Agent      Legal Agent              │
       │                   │           Marketing Agent
  Partner Agent ←──────────┘
  (Another Company's Aicoo)
```

When a customer issue arrives:
- No human touches it until agents have already diagnosed it, checked compliance, checked billing, and routed to exactly the right person.
- Every decision is written to persistent context.
- Cross-company handoffs happen agent-to-agent with scoped permissions.

### The Wow-Factor Demo Flow (3 Minutes)

**Scene 1 — The Network (30 sec)**
Open AgentMesh. A live graph visualization shows your company's agent network. Nodes glow with activity. Edges animate when messages flow. This is something judges have *never seen*.

**Scene 2 — Issue Arrives (45 sec)**
A customer's agent submits a refund request. Watch it propagate: Support Agent receives it → routes to Billing Agent → Billing checks compliance → Legal Agent approves → resolution flows back. Zero human involvement. Context accumulated at every step.

**Scene 3 — Cross-Company (45 sec)**
The issue involves a partner company. Billing Agent creates a folder-scoped share link (only billing context, expires 7d). Partner's Aicoo agent receives a message. They resolve it. Link is auto-revoked. Partner never had access to anything else.

**Scene 4 — Human Briefing (30 sec)**
For the escalation that *does* need a human: they open a link. Before the first keystroke, they see an Aicoo-generated briefing: full context, top 3 priorities, Eisenhower matrix of open issues. They're productive in 10 seconds.

**Scene 5 — Heartbeat Dashboard (30 sec)**
Heartbeat runs in the background every 4 hours. It surfaces 2 customers at risk. It's already drafted outreach messages. One click sends them.

---

## Multi-Agent Visualization (The "Wow" Feature)

The live network graph is your most important UI component. Build it with D3.js or a canvas-based renderer:

```
VISUAL SPEC:
- Each agent = a circular node with role icon
- Node size = activity level (more messages = larger)
- Edge opacity = message frequency (brighter = more active)
- Active message = animated particle traveling along edge
- Node glow = currently processing
- Context writes = a small "💾" pulse on the node
- Cross-company edge = dashed, different color
```

When a scenario runs:
1. Source node glows
2. Packet animates along edge to destination
3. Destination node glows and shows API call label
4. Log panel shows the Aicoo endpoint used
5. Stats update in real time

This visualization IS the "why Aicoo" proof. Every glow, every packet, every edge is an Aicoo API call made visible.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     AgentMesh Platform                  │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Customer │  │ Support  │  │ Billing  │  ...more      │
│  │  Agent   │  │  Agent   │  │  Agent   │  agents       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │              │              │                    │
│  ─────┴──────────────┴──────────────┴──── ────────────  │
│                  AICOO LAYER                            │
│   /init  /accumulate  /share  /chat  /briefing          │
│   /heartbeat  tools: send_message, search_contact       │
│  ─────────────────────────────────────────────────────  │
│       │              │              │                    │
│  ┌────┴─────┐  ┌─────┴────┐  ┌─────┴────┐              │
│  │  DevOps  │  │  Legal   │  │  Partner │              │
│  │  Agent   │  │  Agent   │  │  Agent   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

---

## Aicoo API Usage Map (Complete)

| Feature | Aicoo Endpoint | What It Does in AgentMesh |
|---|---|---|
| Company setup | `POST /api/v1/init` | Bootstrap workspace for each company when they onboard |
| Every agent action | `POST /api/v1/accumulate` | Write every decision, message, and resolution to persistent context |
| Context health | `GET /api/v1/context/status` | Show network-wide context stats in the dashboard |
| Folder organization | `POST /api/v1/context/folders` | One folder per agent type: /Billing, /Legal, /DevOps |
| Agent chat | `POST /api/v1/chat` | Each agent uses chat to reason about incoming requests |
| Human briefing | `POST /api/v1/briefing` | Auto-brief humans before they touch any escalation |
| Priority strategies | `POST /api/v1/briefing/strategies` | Surface top 3 cross-agent priorities each morning |
| Issue triage | `POST /api/v1/briefing/matrix` | Eisenhower Q1-Q4 classification of open agent tasks |
| Cross-agent share | `POST /api/v1/share/create` | Share context between agents with scope + expiry |
| Partner handoff | `POST /api/v1/share/create (folders scope)` | Give partner agent read-only access to one folder |
| Access control | `DELETE /api/v1/share/{id}` | Revoke partner access the moment handoff is done |
| Proactive monitoring | `POST /api/v1/heartbeat/run` | Every 4h: find at-risk customers, draft outreach |
| Heartbeat dashboard | `GET /api/v1/heartbeat/runs` | Show heartbeat history + actions taken |
| Cross-company messaging | Tool: `send_message_to_human` | Agent sends message to partner company's agent |
| Agent discovery | Tool: `search_pulse_contact` | Find the right agent in the Aicoo network |
| Notes summary | `GET /api/v1/notes/summary` | Show recent agent decisions in the network dashboard |

That's **every layer of the Aicoo API** in active use. Judges cannot miss it.

---

## Implementation Plan

### Phase 0 — Foundation (Day 1, 9–11 AM)
**Goal:** Running locally with confirmed Aicoo connection.

- [ ] Create Aicoo accounts; use AI COO to form team, assign roles, capture decisions
- [ ] Get API key: `https://www.aicoo.io/settings/api-keys`
- [ ] Scaffold: `Next.js 14` (App Router) + TypeScript
- [ ] Write typed Aicoo client (`src/lib/aicoo.ts`) — one function per endpoint
- [ ] Test: `POST /api/v1/init` → confirm workspace creation
- [ ] Set up GitHub repo; share link in team's Aicoo notes

**Deliverable:** Local dev server running, Aicoo API confirmed working end-to-end.

---

### Phase 1 — Agent Network Data Layer (Day 1, 11 AM–2 PM)
**Goal:** Agents exist, have identities, and can store context.

#### 1A. Company Onboarding
```typescript
// When a company signs up → initialize their agent network
await aicoo.init()  // → POST /api/v1/init

// Create folder structure for each agent type
await aicoo.createFolder('Support')
await aicoo.createFolder('Billing')
await aicoo.createFolder('Legal')
await aicoo.createFolder('DevOps')
await aicoo.createFolder('Operations')
```

#### 1B. Agent Memory — Context Accumulation
```typescript
// Every agent action writes to Aicoo context
await aicoo.accumulate({
  files: [{
    path: `${agentType}/event-${Date.now()}.md`,
    content: `# ${eventTitle}\n\n${eventBody}`,
    message: `${agentType} agent: ${summary}`
  }]
})
// → POST /api/v1/accumulate
```

#### 1C. Context Dashboard
```typescript
// Network health view
const status = await aicoo.contextStatus()
// → GET /api/v1/context/status
// Display: total context items, last sync, folder breakdown
```

**Deliverable:** Company can onboard, agents write context, dashboard shows context health.

---

### Phase 2 — Agent Chat & Reasoning (Day 1, 2–5 PM)
**Goal:** Each agent can receive a request, reason about it, and decide what to do.

#### 2A. Agent Inbox
Each agent type has an inbox. Incoming requests are forwarded to the Aicoo chat endpoint:
```typescript
// Each agent reasons using Aicoo's chat with its full context
const stream = await aicoo.chat({
  message: `${systemPrompt}\n\nIncoming request: ${request}`,
  stream: true
})
// → POST /api/v1/chat (streaming)
// Parse SSE: text-delta events → render in real time
```

#### 2B. Agent Decision Engine
After reasoning, each agent decides:
- ✅ Can resolve → resolve + accumulate resolution
- 🔀 Needs routing → identify correct agent + forward
- 🧑 Needs human → create share link + generate briefing

#### 2C. Live Network Visualization
Build the D3/canvas graph as a standalone React component:
```typescript
// AgentNetwork.tsx
// - Nodes: each agent type with icon + activity level
// - Edges: message paths between agents
// - Particles: animated packets for active messages
// - Pulse: node glow on activity
// - Panel: real-time log of Aicoo API calls made
```

**Deliverable:** Agents can reason. The live network graph shows activity in real time.

---

### Phase 3 — Agent-to-Agent Routing (Day 2, 9 AM–12 PM)
**Goal:** Agents automatically route work to the right agent using Aicoo tools.

#### 3A. Agent Discovery
```typescript
// Find the right agent using Aicoo's tool bridge
const result = await aicoo.executeTool('search_pulse_contact', {
  query: `${targetAgentType} agent ${companyName}`
})
// → POST /api/v1/tools
```

#### 3B. Cross-Agent Messaging
```typescript
// Send context-rich message to another agent
await aicoo.executeTool('send_message_to_human', {
  message: `[AGENT-ROUTING] ${sourceAgent} → ${targetAgent}\n${contextSummary}\nShare link: ${shareUrl}`
})
// → POST /api/v1/tools
```

#### 3C. Scoped Context Sharing
```typescript
// Create scoped share for receiving agent
const share = await aicoo.createShareLink({
  scope: 'folders',
  folderIds: [relevantFolderId],  // Only what they need
  access: 'read',
  expiresIn: '24h',
  label: `${sourceAgent}→${targetAgent}: ${requestId}`
})
// → POST /api/v1/share/create

// After resolution: revoke access
await aicoo.revokeShareLink(share.id)
// → DELETE /api/v1/share/{id}
```

**Deliverable:** Full agent-to-agent routing with scoped context sharing. The demo showstopper.

---

### Phase 4 — Cross-Company Agent Network (Day 2, 12–2 PM)
**Goal:** AgentMesh networks connect across companies.

#### 4A. Partner Company Integration
When an issue routes outside your company:
1. Your billing agent creates a **folder-scoped** share link (billing folder only)
2. Sends it to the partner company's agent via `send_message_to_human`
3. Partner agent accesses ONLY that folder — nothing else
4. On resolution: share link auto-revoked

```typescript
// Folder-scoped cross-company share
const crossCompanyShare = await aicoo.createShareLink({
  scope: 'folders',
  folderIds: [billingFolderId],  // Only billing context
  access: 'read',
  expiresIn: '7d',
  notesAccess: 'read',
  identity: { loadCoo: false, loadUser: false, loadPolicy: true }
})
```

**The visual:** In the network graph, cross-company edges are **dashed** and a different color. When a cross-company packet animates, a badge shows "🔐 Scoped: /Billing only". This makes permissions *visible*.

**Deliverable:** Demonstrable cross-company handoff with visible permission scoping.

---

### Phase 5 — Human Layer (Day 2, 2–4 PM)
**Goal:** When agents escalate to a human, that human is instantly effective.

#### 5A. Smart Escalation
When an agent decides a human is needed:
```typescript
// 1. Create write-access share link for human
const humanShare = await aicoo.createShareLink({
  scope: 'all',
  access: 'read_calendar_write',
  notesAccess: 'write',
  expiresIn: '24h',
  label: `Escalation: ${ticketId}`
})

// 2. Generate briefing BEFORE notifying human
const briefing = await aicoo.generateBriefing({
  timeDuration: 'last 7 days'
})

// 3. Send human a link + briefing
// Human opens it already knowing exactly what happened
```

#### 5B. Priority Dashboard for Humans
```typescript
// Morning priority view
const strategies = await aicoo.getStrategies({ statusQuoSummary, todoSummary })
// → POST /api/v1/briefing/strategies → top 3 priorities

const matrix = await aicoo.getMatrix({ statusQuoSummary, todoSummary })
// → POST /api/v1/briefing/matrix → Q1-Q4 grid

// Display: Eisenhower matrix of agent-flagged issues
// Q1 (red): 2 critical escalations
// Q2 (yellow): 5 important but not urgent
// Q3/Q4 (gray): delegate or drop
```

**Deliverable:** Human experts arrive briefed. Eisenhower matrix shows Q1-Q4 agent issues.

---

### Phase 6 — Proactive Heartbeat (Day 2, 4–5 PM)
**Goal:** AgentMesh doesn't wait — it monitors proactively.

```typescript
// Cron every 4 hours
await aicoo.setHeartbeatPolicy({ tier: 'ACTIONS' })
const run = await aicoo.runHeartbeat()
// → POST /api/v1/heartbeat/run

// Results: actionsCreated = N proactive drafts
// Show in "Network Health" dashboard:
const runs = await aicoo.getHeartbeatRuns()
// → GET /api/v1/heartbeat/runs
```

**Visual:** A timeline showing heartbeat runs. Each run shows:
- Customers monitored: N
- At-risk flagged: N
- Outreach drafted: N
- Time saved: N hours

**Deliverable:** Automated proactive monitoring visible in the network dashboard.

---

### Phase 7 — Polish & Demo Prep (Day 2, 5–8 PM)

- [ ] Smoke test all 5 demo scenarios end-to-end
- [ ] Ensure network graph looks impressive with live data
- [ ] Record 3-minute Loom: open cold → onboard company → run scenario → show cross-company → show heartbeat
- [ ] Write Devpost copy (use template below)
- [ ] Push to GitHub with clean README + setup instructions

---

## Repository Structure

```
agentmesh/
├── README.md
├── .env.example              # AICOO_API_KEY=...
├── package.json
└── src/
    ├── lib/
    │   ├── aicoo.ts          # Typed Aicoo API client (all endpoints)
    │   ├── agents.ts         # Agent types, routing logic, decision engine
    │   └── scenarios.ts      # Demo scenarios (4 pre-built flows)
    ├── components/
    │   ├── AgentNetwork.tsx  # D3 live network visualization ← THE WOW MOMENT
    │   ├── AgentInbox.tsx    # Each agent's incoming request queue
    │   ├── BriefingPanel.tsx # Human briefing + Eisenhower matrix
    │   ├── HeartbeatDash.tsx # Proactive monitoring timeline
    │   ├── ShareManager.tsx  # Active share links + permissions view
    │   └── NetworkLog.tsx    # Real-time Aicoo API call log
    └── app/
        ├── page.tsx          # Landing: "Deploy your agent network"
        ├── network/page.tsx  # Live agent network graph (main screen)
        ├── agent/[type]/page.tsx  # Individual agent view
        ├── escalation/page.tsx    # Human expert portal (briefing + matrix)
        └── heartbeat/page.tsx     # Proactive monitoring dashboard
```

---

## Typed Aicoo Client

```typescript
// src/lib/aicoo.ts
const BASE = 'https://www.aicoo.io/api/v1';
const H = { 'Authorization': `Bearer ${process.env.AICOO_API_KEY}`, 'Content-Type': 'application/json' };
const post = (path: string, body: object) => fetch(`${BASE}${path}`, { method: 'POST', headers: H, body: JSON.stringify(body) }).then(r => r.json());
const get = (path: string) => fetch(`${BASE}${path}`, { headers: H }).then(r => r.json());
const del = (path: string) => fetch(`${BASE}${path}`, { method: 'DELETE', headers: H }).then(r => r.json());

export const aicoo = {
  // Workspace
  init: () => post('/init', {}),
  contextStatus: () => get('/context/status'),
  createFolder: (name: string, parentId?: number) => post('/context/folders', { name, parentId }),

  // Context
  accumulate: (body: { files?: any[], texts?: any[], folders?: any }) => post('/accumulate', body),

  // Agent reasoning
  chat: (message: string, conversationId?: number) =>
    fetch(`${BASE}/chat`, { method: 'POST', headers: H, body: JSON.stringify({ message, conversationId, stream: true }) }),

  // Briefing
  generateBriefing: (opts?: any) => post('/briefing', opts || {}),
  getStrategies: (summaries: any) => post('/briefing/strategies', summaries),
  getMatrix: (summaries: any) => post('/briefing/matrix', summaries),
  getBriefingHistory: (limit = 10) => get(`/briefings?limit=${limit}`),

  // Sharing
  createShareLink: (opts: { scope?: string, access?: string, expiresIn?: string, folderIds?: number[], notesAccess?: string, label?: string, identity?: any }) =>
    post('/share/create', opts),
  listShareLinks: (status = 'active') => get(`/share/list?status=${status}`),
  revokeShareLink: (id: string) => del(`/share/${id}`),

  // Heartbeat
  setHeartbeatPolicy: (tier: 'ACTIONS' | 'MESSAGES') => post('/heartbeat/policy', { tier }),
  runHeartbeat: (dryRun = false) => post('/heartbeat/run', { dryRun }),
  getHeartbeatRuns: (limit = 20) => get(`/heartbeat/runs?limit=${limit}`),

  // Tools
  discoverTools: () => get('/tools'),
  executeTool: (tool: string, params: object) => post('/tools', { tool, params }),
};
```

---

## Demo Script (3 Minutes)

### Minute 1 — The Network
- Open AgentMesh. Show the live graph: 7 agent nodes, edges connecting them.
- "This is your company. Every department is an AI agent. Aicoo is the operating system connecting them."
- Trigger Scenario 1 (Refund Dispute). Watch the packet animate from Customer → Support → Billing → Legal → resolution. Log panel shows each Aicoo API call in real time.

### Minute 2 — Cross-Company
- Switch to Scenario 4 (Cross-Company Handoff).
- "Watch what happens when the issue crosses company lines."
- Billing Agent creates a folder-scoped share link. Dashed edge to Partner Agent. Badge: "🔐 /Billing only, expires 7d."
- Resolution: link auto-revoked. Badge disappears.
- "Partner never saw customer data. Never saw legal context. Only billing. And the moment it was resolved, access was gone."

### Minute 3 — Human + Heartbeat
- Click escalation: human expert portal opens.
- Before they type anything: briefing is already generated. Eisenhower matrix shows 2 Q1 items.
- Switch to heartbeat dashboard: 3 runs shown. "12 customers flagged. 8 outreach drafts created. 4 resolved without human touch."
- Final line: "Remove Aicoo and none of this exists. Not just worse — it stops working."

---

## Why This Wins

| Criteria | AgentMesh Score |
|---|---|
| **Depth of Aicoo usage** | 12+ endpoints, all 3 API layers, tools bridge |
| **"Wow" factor** | Live animated agent network — judges will remember this |
| **Aicoo is indispensable** | Remove Aicoo = no persistent identity, no context sharing, no cross-company routing |
| **New product category** | Agent Network OS doesn't exist yet |
| **Demo quality** | 3 clear scenes, each proving a distinct Aicoo capability |
| **Cross-agent coordination** | The core hackathon goal, demonstrated at company scale |
| **Team used AI COO** | Formation, tasks, notes, briefings — all on Aicoo |

---

## Devpost Submission Template

**Project name:** AgentMesh

**One-sentence summary:** An agent network operating system where every business function runs as an autonomous AI agent and coordinates through Aicoo's infrastructure.

**Problem:** Business operations break at handoffs — context is lost between teams, cross-company issues have no shared protocol, and humans spend most of their time reconstructing what happened before they can actually help.

**Who it's for:** SMBs and startups that operate across multiple tools, teams, and partners and need coordination that doesn't rely on humans manually forwarding context.

**Aicoo capabilities used:**
- Persistent agent identity: `POST /api/v1/init` per company
- Context accumulation: `POST /api/v1/accumulate` on every agent action
- Agent reasoning: `POST /api/v1/chat` with streaming
- Human briefing: `POST /api/v1/briefing` + `/briefing/strategies` + `/briefing/matrix`
- Cross-agent sharing: `POST /api/v1/share/create` with scope + folder targeting
- Cross-company handoff: folder-scoped share links + auto-revoke
- Proactive monitoring: `POST /api/v1/heartbeat/run`
- Agent discovery: `search_pulse_contact` tool
- Agent messaging: `send_message_to_human` tool

**Key role Aicoo plays:** Aicoo is the entire coordination layer. Without it: no agent identity, no persistent context, no permissioned cross-company sharing, no proactive heartbeat. The product doesn't degrade — it stops being possible.

**Team use of AI COO:** Team formed via AI COO introductions before the hackathon. Project tasks tracked as todos. Architecture decisions captured as notes. Daily briefings generated each morning.

---

## Day-by-Day Timeline

| Time | Goal | Deliverable |
|---|---|---|
| Day 1 · 9–11 AM | Setup + Aicoo client | Typed client, confirmed API connection |
| Day 1 · 11 AM–2 PM | Data layer | Init, accumulate, folders working |
| Day 1 · 2–5 PM | Agent reasoning + live graph | Chat streaming + network visualization |
| Day 2 · 9 AM–12 PM | Agent-to-agent routing | Tools + share links + scoped access |
| Day 2 · 12–2 PM | Cross-company handoff | Partner agent flow with visible permissions |
| Day 2 · 2–4 PM | Human layer | Briefing + Eisenhower matrix |
| Day 2 · 4–5 PM | Heartbeat | Proactive monitoring dashboard |
| Day 2 · 5–8 PM | Polish + demo | Loom video + Devpost submission |

---

*AgentMesh — because the future of work isn't people forwarding emails. It's agents coordinating through Aicoo.*
