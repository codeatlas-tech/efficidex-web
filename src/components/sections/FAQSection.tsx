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
        question: "What does Efficidex automate?",
        answer:
            "Efficidex automates entire operational workflows across HR, finance, sales, support, healthcare ops, logistics, manufacturing, and more. Our autonomous agents handle end-to-end processes, not just individual tasks.",
    },
    {
        question: "Is it safe for sensitive operations?",
        answer:
            "Absolutely. Every high-impact action requires human approval and is logged with a complete audit trail. You control what the AI can execute autonomously and what needs your sign-off.",
    },
    {
        question: "How do approvals work?",
        answer:
            "Sensitive actions are routed to your Human Approval Dashboard. You can review context, approve, reject, or add notes. Everything is timestamped and logged for compliance.",
    },
    {
        question: "Can I customize workflows?",
        answer:
            "Yes. Policies, thresholds, escalation rules, and approval chains are fully configurable. You can adapt Efficidex to match your existing SOPs or design new optimized processes.",
    },
    {
        question: "Do I need engineers to use it?",
        answer:
            "No. Workflows auto-generate based on your industry and company profile. Non-technical teams can configure rules, monitor agents, and manage approvals through our intuitive interface.",
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
                        Still curious?
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
