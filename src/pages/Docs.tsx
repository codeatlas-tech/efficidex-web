import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Key, Server, Webhook, Book } from "lucide-react";
import { ApiConsole } from "@/components/docs/ApiConsole";



const sections = [
    { id: "authentication", label: "Authentication" },
    { id: "workflow-trigger", label: "Trigger a Workflow" },
    { id: "webhooks", label: "Webhooks" },
    { id: "api-structure", label: "API Structure" },
];

export default function Docs() {
    const [active, setActive] = useState("authentication");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
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

            <section className="pt-32 pb-10 border-b border-border">
                <div className="section-container max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold"
                    >
                        Efficidex API Documentation
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mt-4"
                    >
                        Build custom workflows, integrate internal systems, trigger autonomous agents,
                        and extend the full power of Efficidex through our REST APIs.
                    </motion.p>
                </div>
            </section>

            {/* Main Docs Layout */}
            <div className="section-container max-w-6xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">

                {/* Sidebar */}
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

                {/* Content */}
                <div className="space-y-20">

                    {/* Authentication */}
                    <div id="authentication" ref={registerRef("authentication")}>
                        <SectionHeader icon={Key} title="Authentication" />
                        <p className="text-muted-foreground mb-4">
                            Authenticate requests using your API Key:
                        </p>

                        <CodeBlock>{`Authorization: Bearer YOUR_API_KEY`}</CodeBlock>
                    </div>

                    {/* Workflow Trigger */}
                    <div id="workflow-trigger" ref={registerRef("workflow-trigger")}>
                        <SectionHeader icon={Server} title="Trigger a Workflow" />
                        <p className="text-muted-foreground mb-4">
                            Trigger any workflow by sending a POST request:
                        </p>

                        <CodeBlock>{`POST https://api.efficidex.com/v1/workflows/{workflow_id}/run
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "input": {
    "customer_id": "12345",
    "priority": "high"
  }
}`}</CodeBlock>

                        <h3 className="font-semibold mt-6 mb-2">JavaScript Example</h3>
                        <CodeBlock>{`await fetch("https://api.efficidex.com/v1/workflows/xyz/run", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_API_KEY",
  },
  body: JSON.stringify({
    input: { customer_id: "12345", priority: "high" },
  }),
});`}</CodeBlock>

                        <h3 className="font-semibold mt-6 mb-2">Python Example</h3>
                        <CodeBlock>{`import requests

requests.post(
    "https://api.efficidex.com/v1/workflows/xyz/run",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={"input": {"customer_id": "12345", "priority": "high"}}
)`}</CodeBlock>
                    </div>

                    {/* Webhooks */}
                    <div id="webhooks" ref={registerRef("webhooks")}>
                        <SectionHeader icon={Webhook} title="Webhooks" />
                        <p className="text-muted-foreground mb-4">
                            Receive real-time events for workflow start, completion, or human approvals:
                        </p>

                        <CodeBlock>{`{
  "event": "workflow.completed",
  "workflow_id": "xyz",
  "timestamp": 1714525100000,
  "output": {
    "status": "approved",
    "result": {...}
  }
}`}</CodeBlock>
                    </div>

                    {/* API Structure */}
                    <div id="api-structure" ref={registerRef("api-structure")}>
                        <SectionHeader icon={Book} title="API Structure" />
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><code>/v1/workflows</code> — Run workflows & fetch results</li>
                            <li><code>/v1/agents</code> — Trigger AI agents (coming soon)</li>
                            <li><code>/v1/integrations</code> — Sync external systems</li>
                            <li><code>/v1/webhooks</code> — Configure webhook endpoints</li>
                        </ul>
                    </div>

                    {/* Interactive API Console */}
                    <div id="api-console" ref={registerRef("api-console")}>
                        <h2 className="text-2xl font-semibold mb-4">Try the API Live</h2>
                        <ApiConsole />
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
}

/* Components Used In The Page */

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
