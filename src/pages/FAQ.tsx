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
        title: "Features & Capabilities",
        questions: [
            {
                q: "What types of workflows can Efficidex automate?",
                a: "Efficidex can automate virtually any business workflow including payroll processing, KYC verification, lead-to-deal pipelines, customer support ticketing, procurement, order fulfillment, claims processing, and more. Our AI agents understand context and can handle multi-step, cross-departmental processes end-to-end."
            },
            {
                q: "How does the Command Centre work?",
                a: "The Command Centre provides a real-time dashboard showing all AI agent activity across your organization. You can monitor task progress, view SLA metrics, receive risk alerts, and drill down into any workflow. Think of it as mission control for your AI workforce."
            },
            {
                q: "What is Synaptic Intelligence?",
                a: "Synaptic Intelligence is our proprietary AI layer that learns from your operations over time. It identifies bottlenecks, suggests optimizations, predicts potential issues before they occur, and continuously improves workflow efficiency based on patterns in your data."
            },
            {
                q: "Can I set up human approval steps in workflows?",
                a: "Yes, the Human Approval Dashboard allows you to configure approval gates at any point in a workflow. You can set thresholds (e.g., auto-approve under $10K, require manager approval above), route to specific approvers, and track approval history."
            },
        ]
    },
    {
        title: "Security & Compliance",
        questions: [
            {
                q: "Is my data secure with Efficidex?",
                a: "Absolutely. We use enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), maintain SOC 2 Type II compliance, and offer data residency options. Your data is never used to train our models without explicit consent."
            },
            {
                q: "What compliance certifications does Efficidex have?",
                a: "Efficidex is SOC 2 Type II certified, GDPR compliant, and HIPAA-ready for healthcare customers. We also support industry-specific compliance requirements including PCI-DSS for financial services and FDA 21 CFR Part 11 for life sciences."
            },
            {
                q: "How are audit trails maintained?",
                a: "Every action taken by an AI agent is logged with timestamp, context, inputs, outputs, and decision rationale. Audit trails are immutable, searchable, and exportable for compliance reporting. You can trace any decision back to its source."
            },
            {
                q: "Can we control data access and permissions?",
                a: "Yes, Efficidex provides granular role-based access control (RBAC). You can define who can view, edit, or approve workflows, restrict data access by department or region, and integrate with your existing identity provider (Okta, Azure AD, etc.)."
            },
        ]
    },
    {
        title: "Customization & Integration",
        questions: [
            {
                q: "How long does it take to set up Efficidex?",
                a: "Most customers are live within 2–4 weeks. We provide pre-built templates for common workflows that can be deployed in days. Complex, custom implementations typically take 6–8 weeks including integration, testing, and training."
            },
            {
                q: "Can Efficidex integrate with our existing tools?",
                a: "Yes, we offer 200+ pre-built integrations including Salesforce, SAP, Oracle, Workday, ServiceNow, Slack, Microsoft 365, and more. Our REST API and webhooks enable custom integrations with any system."
            },
            {
                q: "Can we customize workflows and AI behavior?",
                a: "Absolutely. Our no-code workflow builder lets you design custom processes, set business rules, define escalation paths, and configure AI agent behavior. For advanced customization, our professional services team can build bespoke solutions."
            },
            {
                q: "Do you offer industry-specific templates?",
                a: "Yes, we have workflow templates for Healthcare, Finance, Manufacturing, Retail, Logistics, Insurance, SaaS, Hospitality, Education, Real Estate, and Professional Services."
            },
        ]
    },
    {
        title: "Requirements & Pricing",
        questions: [
            {
                q: "What are the technical requirements?",
                a: "Efficidex is a cloud-native SaaS platform accessible via any modern web browser. No on-premise infrastructure is required. For integrations, you'll need API access to your existing systems. We also support hybrid deployment for sensitive workloads."
            },
            {
                q: "How is Efficidex priced?",
                a: "We offer tiered pricing based on workflows, automation volume, and features. Starter plans begin at $499/month. Growth and Enterprise plans include advanced capabilities and dedicated support."
            },
            {
                q: "Is there a free trial available?",
                a: "Yes — a 14-day full-access trial, no credit card required."
            },
            {
                q: "What kind of support do you provide?",
                a: "Starter includes email + knowledge base. Growth adds live chat. Enterprise includes a dedicated success manager, 24/7 phone support, and quarterly business reviews."
            },
        ]
    },
];

export default function FAQ() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-20">
                    <div className="section-container text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            Frequently Asked Questions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Everything you need to know about Efficidex. Still confused? Reach out to our team.
                        </motion.p>
                    </div>
                </section>

                {/* FAQ Categories */}
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
                                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>

                                <Accordion type="single" collapsible className="space-y-3">
                                    {category.questions.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category.title}-${index}`}
                                            className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/30"
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>

                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Our team is here to help. We usually respond within 24 hours.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Link to="/contact">
                                    <Button size="lg">
                                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                                <Link to="/demo">
                                    <Button variant="outline" size="lg">
                                        Schedule a Demo
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
