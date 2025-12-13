import { motion } from "framer-motion";
import { PhoneCall, Headphones, Clock, CheckCircle } from "lucide-react";

const voiceCapabilities = [
    {
        icon: PhoneCall,
        title: "AI Voice Agents",
        description:
            "Autonomous voice agents that handle inbound and outbound calls with natural, human-like conversations.",
    },
    {
        icon: Headphones,
        title: "Customer & Ops Calls",
        description:
            "Answer support calls, follow-ups, appointment confirmations, and internal ops calls automatically.",
    },
    {
        icon: Clock,
        title: "24/7 Call Handling",
        description:
            "Never miss a call. Voice agents operate continuously without queues, fatigue, or downtime.",
    },
    {
        icon: CheckCircle,
        title: "Logged & Auditable",
        description:
            "Every call is transcribed, logged, and auditable inside the Efficidex command centre.",
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
                        Voice Agents That Actually Do the Work
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Efficidex voice agents answer calls, make calls, collect information,
                        trigger workflows, and update systems — without human intervention.
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
