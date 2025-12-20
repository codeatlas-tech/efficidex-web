import { motion } from "framer-motion";
import { PhoneCall, Headphones, Clock, CheckCircle } from "lucide-react";

const voiceCapabilities = [
    {
        icon: PhoneCall,
        title: "Autonomous Voice Execution",
        description:
            "Voice agents that don’t just talk — they reason, decide, and execute actions during live calls.",
    },
    {
        icon: Headphones,
        title: "Customer & Operations Coverage",
        description:
            "Handle support calls, follow-ups, scheduling, collections, and internal ops calls without human agents.",
    },
    {
        icon: Clock,
        title: "Always-On Availability",
        description:
            "Operate 24/7 with no queues, no missed calls, and consistent performance at any volume.",
    },
    {
        icon: CheckCircle,
        title: "Fully Logged & Governed",
        description:
            "Every call is transcribed, actioned, and recorded with full auditability inside the command centre.",
    },
];

export function VoiceAgentsSection() {
    return (
        <section className="py-20 lg:py-32 bg-card border-y border-border">
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
                        Voice agents that replace human call work.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Efficidex voice agents answer and place calls, gather information,
                        make decisions, trigger workflows, and update systems —
                        all without human intervention.
                    </motion.p>
                </div>

                {/* Capabilities */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {voiceCapabilities.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
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
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
