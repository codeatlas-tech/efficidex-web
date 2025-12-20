import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
    Key,
    Server,
    Webhook,
    Book,
    ShieldCheck,
    GitBranch,
} from "lucide-react";
import { ApiConsole } from "@/components/docs/ApiConsole";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "authentication", label: "Authentication" },
    { id: "workflow-trigger", label: "Trigger Workflows" },
    { id: "approvals", label: "Human Approvals" },
    { id: "webhooks", label: "Webhooks & Events" },
    { id: "api-structure", label: "API Structure" },
];

export default function Docs() {
    const [active, setActive] = useState("overview");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const registerRef = (id: string) => (el: HTMLElement | null) => {
        sectionRefs.current[id] = el;
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* HERO */}
            <section className="pt-32 pb-10 border-b border-border">
                <div className="section-container max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold"
                    >
                        Efficidex Execution API
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-3xl mt-4"
                    >
                        Delegate real business work to autonomous agents.
                        Trigger workflows, enforce approvals, receive auditable outcomes —
                        without writing brittle automation logic.
                    </motion.p>
                </div>
            </section>

            {/* MAIN */}
            <div className="section-container max-w-6xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

                {/* SIDEBAR */}
                <aside className="hidden lg:block sticky top-32 h-max">
                    <nav className="space-y-3">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={`block text-sm px-3 py-2 rounded-md transition-colors ${active === s.id
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* CONTENT */}
                <div className="space-y-24">

                    {/* OVERVIEW */}
                    <section id="overview" ref={registerRef("overview")}>
                        <SectionHeader icon={GitBranch} title="How the API Works" />
                        <p className="text-muted-foreground mb-4">
                            The Efficidex API is not a task runner or rules engine.
                            Every API call delegates responsibility to an autonomous workflow
                            managed by agents, approvals, and audit trails.
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>You trigger intent — not steps</li>
                            <li>Agents decide execution paths</li>
                            <li>High-risk actions require human approval</li>
                            <li>Every outcome is logged and reversible</li>
                        </ul>
                    </section>

                    {/* AUTH */}
                    <section id="authentication" ref={registerRef("authentication")}>
                        <SectionHeader icon={Key} title="Authentication" />
                        <p className="text-muted-foreground mb-4">
                            All requests are authenticated using a Bearer API key.
                            Keys are scoped per workspace and environment.
                        </p>

                        <CodeBlock>{`Authorization: Bearer YOUR_API_KEY`}</CodeBlock>
                    </section>

                    {/* WORKFLOWS */}
                    <section id="workflow-trigger" ref={registerRef("workflow-trigger")}>
                        <SectionHeader icon={Server} title="Trigger a Workflow" />
                        <p className="text-muted-foreground mb-4">
                            Trigger a full business workflow. Agents handle validation,
                            execution, approvals, retries, and escalation automatically.
                        </p>

                        <CodeBlock>{`POST https://api.efficidex.com/v1/workflows/{workflow_id}/run
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "input": {
    "entity_id": "12345",
    "priority": "high",
    "context": {
      "source": "crm",
      "requested_by": "system"
    }
  }
}`}</CodeBlock>

                        <h3 className="font-semibold mt-6 mb-2">JavaScript</h3>
                        <CodeBlock>{`await fetch("https://api.efficidex.com/v1/workflows/payroll/run", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    input: { entity_id: "12345", priority: "high" },
  }),
});`}</CodeBlock>

                        <h3 className="font-semibold mt-6 mb-2">Python</h3>
                        <CodeBlock>{`import requests

requests.post(
  "https://api.efficidex.com/v1/workflows/payroll/run",
  headers={"Authorization": "Bearer YOUR_API_KEY"},
  json={"input": {"entity_id": "12345", "priority": "high"}}
)`}</CodeBlock>
                    </section>

                    {/* APPROVALS */}
                    <section id="approvals" ref={registerRef("approvals")}>
                        <SectionHeader icon={ShieldCheck} title="Human Approval Flow" />
                        <p className="text-muted-foreground mb-4">
                            Workflows that exceed risk thresholds pause automatically
                            and route actions to the approval dashboard.
                        </p>

                        <CodeBlock>{`{
  "status": "awaiting_approval",
  "approval_id": "apr_789",
  "action": "pay_vendor",
  "amount": 45230,
  "requested_by": "Finance Agent"
}`}</CodeBlock>
                    </section>

                    {/* WEBHOOKS */}
                    <section id="webhooks" ref={registerRef("webhooks")}>
                        <SectionHeader icon={Webhook} title="Webhooks & Events" />
                        <p className="text-muted-foreground mb-4">
                            Subscribe to execution events for observability and downstream systems.
                        </p>

                        <CodeBlock>{`{
  "event": "workflow.completed",
  "workflow_id": "payroll",
  "execution_id": "exe_123",
  "timestamp": 1714525100000,
  "result": {
    "status": "success",
    "approved": true
  }
}`}</CodeBlock>
                    </section>

                    {/* STRUCTURE */}
                    <section id="api-structure" ref={registerRef("api-structure")}>
                        <SectionHeader icon={Book} title="API Structure" />
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><code>/v1/workflows</code> — Execute autonomous workflows</li>
                            <li><code>/v1/executions</code> — Inspect runs, outcomes, logs</li>
                            <li><code>/v1/approvals</code> — Review & resolve human checkpoints</li>
                            <li><code>/v1/webhooks</code> — Subscribe to system events</li>
                        </ul>
                    </section>

                    {/* CONSOLE */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Try the API Live</h2>
                        <ApiConsole />
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
}

/* COMPONENTS */

function SectionHeader({ icon: Icon, title }: any) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
    );
}

function CodeBlock({ children }: { children: string }) {
    return (
        <pre className="p-4 bg-card border border-border rounded-lg text-sm overflow-auto leading-relaxed">
            {children}
        </pre>
    );
}
