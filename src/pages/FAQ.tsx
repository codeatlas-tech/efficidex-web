import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
    {
        title: "Platform & Capabilities",
        questions: [
            {
                q: "What does Efficidex actually do?",
                a: "Efficidex runs real business operations using autonomous AI agents. Instead of assisting humans, agents execute end-to-end workflows across finance, HR, sales, operations, support, healthcare ops, logistics, and more — with approvals and audit trails built in."
            },
            {
                q: "How is this different from automation tools like Zapier or RPA?",
                a: "Automation tools execute predefined steps. Efficidex executes outcomes. Agents reason, adapt, coordinate across departments, pause for approvals when needed, and recover from failures. You're delegating responsibility, not stitching workflows."
            },
            {
                q: "What is Bentham AI?",
                a: "Bentham AI is the strategic orchestration layer of Efficidex. It analyzes operations across departments, coordinates agents, detects bottlenecks, predicts risks, and continuously optimizes execution — similar to a CEO + COO for your workflows."
            },
            {
                q: "What is the Command Centre?",
                a: "The Command Centre is your real-time operational cockpit. You see everything agents are doing: live executions, SLAs, risks, approvals, failures, audit trails, and system health — across the entire business."
            },
        ],
    },
    {
        title: "Control, Safety & Governance",
        questions: [
            {
                q: "Do humans stay in control?",
                a: "Yes. Any action that crosses risk, financial, or compliance thresholds is automatically routed for human approval. You define what agents can execute autonomously and where human sign-off is mandatory."
            },
            {
                q: "How do approvals work?",
                a: "When approval is required, the workflow pauses and appears in the Human Approval Dashboard. Approvers see full context, agent reasoning, and impact before approving or rejecting. All decisions are logged."
            },
            {
                q: "Are actions reversible?",
                a: "Where possible, Efficidex supports rollback, compensation workflows, and corrective execution. Every action is traceable so issues can be diagnosed and corrected quickly."
            },
            {
                q: "How are audit trails handled?",
                a: "Every agent action is logged with timestamps, inputs, outputs, decision rationale, approvals, and system events. Audit logs are immutable, searchable, and exportable for compliance and investigations."
            },
        ],
    },
    {
        title: "Security & Compliance",
        questions: [
            {
                q: "Is our data secure?",
                a: "Yes. Efficidex uses enterprise-grade security: AES-256 encryption at rest, TLS 1.3 in transit, strict access controls, and isolated tenant environments."
            },
            {
                q: "What compliance standards are supported?",
                a: "Efficidex is SOC 2 Type II compliant, GDPR compliant, and HIPAA-ready. We also support PCI-DSS workflows, financial audit requirements, and industry-specific regulatory controls."
            },
            {
                q: "Does Efficidex train models on our data?",
                a: "No. Your data is never used to train shared models without explicit opt-in. Agent behavior is scoped strictly to your environment."
            },
            {
                q: "Can we control access and permissions?",
                a: "Yes. Role-based access control (RBAC) allows you to define who can view, execute, approve, or modify workflows. Enterprise plans support SSO and identity provider integration."
            },
        ],
    },
    {
        title: "Integrations & Customization",
        questions: [
            {
                q: "Can Efficidex integrate with our existing systems?",
                a: "Yes. Efficidex integrates with CRMs, ERPs, accounting systems, ticketing tools, databases, and internal services. Agents execute work directly inside your existing tools — no forced migrations."
            },
            {
                q: "Do we need engineers to use Efficidex?",
                a: "No. Most workflows are deployed using pre-built templates and configuration. Non-technical teams manage approvals, monitoring, and policies through the UI. APIs are available for advanced use cases."
            },
            {
                q: "Can workflows be customized?",
                a: "Yes. You can customize execution logic, approval thresholds, escalation rules, SLAs, and failure handling. For complex needs, custom agents and workflows can be built."
            },
            {
                q: "Are industry-specific workflows available?",
                a: "Yes. Efficidex includes pre-built agents and workflows for healthcare, finance, manufacturing, retail, logistics, SaaS, hospitality, education, real estate, and professional services."
            },
        ],
    },
    {
        title: "Pricing & Deployment",
        questions: [
            {
                q: "How long does deployment take?",
                a: "Most teams are live within days. Larger, multi-system deployments typically take 2–4 weeks depending on complexity."
            },
            {
                q: "How is Efficidex priced?",
                a: "Pricing starts at $499/month and scales based on departments, workflows, execution volume, and governance features. Enterprise plans support unlimited agents and custom SLAs."
            },
            {
                q: "Is there a trial or demo?",
                a: "Yes. You can try an interactive demo or request a guided walkthrough tailored to your industry."
            },
            {
                q: "What support is included?",
                a: "All plans include onboarding support and documentation. Growth and Enterprise plans include priority support and a dedicated success manager."
            },
        ],
    },
];

export default function FAQ() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* HERO */}
                <section className="pt-32 pb-16">
                    <div className="section-container text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Frequently Asked Questions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Clear answers about how Efficidex runs real business operations.
                        </motion.p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="pb-24">
                    <div className="section-container max-w-4xl">
                        {faqCategories.map((category, i) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold mb-6">
                                    {category.title}
                                </h2>

                                <Accordion type="single" collapsible className="space-y-3">
                                    {category.questions.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category.title}-${index}`}
                                            className="border border-border rounded-xl px-6 bg-card"
                                        >
                                            <AccordionTrigger className="text-left py-5">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-5">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-primary/5">
                    <div className="section-container text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Still have questions?
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            Talk to our team or see the platform in action.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Link to="/contact">
                                <Button size="lg">
                                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link to="/demo">
                                <Button variant="outline" size="lg">
                                    View Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
