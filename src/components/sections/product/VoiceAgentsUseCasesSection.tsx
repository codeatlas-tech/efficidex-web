import { motion } from "framer-motion";
import {
    PhoneIncoming,
    PhoneOutgoing,
    CalendarCheck,
    Headphones,
    FileText,
    Building2,
} from "lucide-react";

const useCases = [
    {
        icon: PhoneIncoming,
        title: "Inbound Issue Resolution",
        description:
            "Answer calls instantly, understand intent, resolve issues end-to-end, update systems, and escalate only when policy requires.",
        examples: "Customer support, IT helpdesk, internal service desks",
    },
    {
        icon: PhoneOutgoing,
        title: "Proactive Outreach & Follow-ups",
        description:
            "Autonomously call leads, customers, or vendors to collect updates, confirmations, or missing information.",
        examples: "Sales follow-ups, collections, vendor coordination",
    },
    {
        icon: CalendarCheck,
        title: "Scheduling Without Staff",
        description:
            "Book, reschedule, confirm, and remind appointments without human involvement.",
        examples: "Healthcare, logistics, professional services",
    },
    {
        icon: Headphones,
        title: "Internal Operations Calls",
        description:
            "Call teams, staff, or partners to verify task completion, delays, or operational blockers in real time.",
        examples: "Field ops, warehouses, manufacturing floors",
    },
    {
        icon: FileText,
        title: "Structured Data Collection",
        description:
            "Collect verified information over voice and write it directly into CRMs, ERPs, or internal systems.",
        examples: "KYC, onboarding, surveys, audits",
    },
    {
        icon: Building2,
        title: "Call-Heavy Operations Replacement",
        description:
            "Replace entire call-handling functions with autonomous voice agents that scale infinitely and operate 24/7.",
        examples: "Shared services, BPO replacement",
    },
];

export function VoiceAgentsUseCasesSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="section-container max-w-6xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-semibold text-foreground mb-4"
                    >
                        What voice agents replace in your business
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        These aren’t IVRs or chatbots. Efficidex voice agents execute
                        real operational work — handling calls, making decisions, and
                        updating systems without human involvement.
                    </motion.p>
                </div>

                {/* Use Case Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;

                        return (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="card-elevated p-6 space-y-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="font-semibold text-foreground">
                                    {useCase.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {useCase.description}
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Replaces:
                                    </span>{" "}
                                    {useCase.examples}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
