import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
    question: string;
    answer: string;
};

const faqs: FAQ[] = [
    {
        question: "What does Efficidex actually run?",
        answer:
            "Efficidex runs end-to-end operational execution across departments — including sales operations, finance, HR, customer support, operations, and industry-specific workflows. It doesn’t automate isolated tasks; it owns complete workflows from input to outcome.",
    },
    {
        question: "How is this different from automation tools or AI assistants?",
        answer:
            "Automation tools follow static rules and still require humans to operate them. AI assistants help humans work faster. Efficidex is an autonomous execution system — agents plan, coordinate, and execute work on their own, with humans supervising outcomes instead of performing tasks.",
    },
    {
        question: "Is it safe to let AI make business decisions?",
        answer:
            "Yes — autonomy is bounded. Low-risk actions execute automatically. High-impact decisions require explicit human approval. Every action is logged, explainable, reversible, and auditable. You control the decision boundaries at all times.",
    },
    {
        question: "How do approvals and oversight work?",
        answer:
            "Efficidex routes sensitive actions to a centralized approval dashboard with full context, impact analysis, and recommendations. You can approve, reject, or modify actions. All decisions are timestamped and stored for compliance and review.",
    },
    {
        question: "Can Efficidex adapt to our existing processes?",
        answer:
            "Yes. Efficidex learns from your SOPs, documents, historical data, and operating patterns. Policies, thresholds, escalation rules, and approval chains are configurable so the system aligns with how your business actually runs.",
    },
    {
        question: "Do we need engineers or AI experts to use it?",
        answer:
            "No. Agents, workflows, and dashboards are generated automatically based on your industry and company profile. Non-technical teams manage operations, approvals, and performance through a simple interface.",
    },
    {
        question: "What happens if the AI makes a mistake?",
        answer:
            "All actions are reversible, monitored, and continuously evaluated. Confidence thresholds, validation layers, and human-in-the-loop controls prevent costly errors. The system learns from outcomes and improves over time.",
    },
];

export function FAQSection() {
    return (
        <section id="faq" className="py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-semibold text-foreground text-center mb-12"
                    >
                        Frequently asked questions
                    </motion.h2>

                    {/* Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border rounded-xl px-6 data-[state=open]:bg-card"
                                >
                                    <AccordionTrigger className="text-left hover:no-underline py-5">
                                        <span className="font-medium text-foreground">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>

                                    <AccordionContent className="text-muted-foreground pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
