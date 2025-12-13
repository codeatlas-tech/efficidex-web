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
        title: "Inbound Support Calls",
        description:
            "Answer customer calls instantly, understand intent, resolve issues, update tickets, and escalate only when required.",
        examples: "Customer support, IT helpdesk, internal ops",
    },
    {
        icon: PhoneOutgoing,
        title: "Outbound Follow-ups",
        description:
            "Automatically call leads, customers, or vendors to collect updates, confirmations, or missing information.",
        examples: "Sales follow-ups, collections, vendor coordination",
    },
    {
        icon: CalendarCheck,
        title: "Appointments & Scheduling",
        description:
            "Handle appointment booking, rescheduling, confirmations, and reminders without human involvement.",
        examples: "Healthcare, logistics, professional services",
    },
    {
        icon: Headphones,
        title: "Operations & Internal Calls",
        description:
            "Call staff, teams, or partners to verify task completion, delays, or operational blockers.",
        examples: "Field ops, warehouses, manufacturing floors",
    },
    {
        icon: FileText,
        title: "Information Collection",
        description:
            "Collect structured data over calls and automatically update CRMs, ERPs, or internal systems.",
        examples: "KYC, onboarding, surveys, audits",
    },
    {
        icon: Building2,
        title: "Enterprise Call Automation",
        description:
            "Replace entire call-handling teams with AI voice agents that scale infinitely and work 24/7.",
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
                        What Voice Agents Actually Do
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        These aren’t IVRs or chatbots. Efficidex voice agents execute real operational work
                        across customer-facing and internal processes.
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
                                    <span className="font-medium text-foreground">Used for:</span>{" "}
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
