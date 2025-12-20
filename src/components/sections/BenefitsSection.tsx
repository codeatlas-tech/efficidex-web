import { motion } from "framer-motion";
import {
    Check,
    TrendingUp,
    Clock,
    Eye,
    Shield,
    DollarSign,
    Layers,
    PhoneCall,
} from "lucide-react";

type BenefitItem = {
    icon: React.ElementType;
    text: string;
};

const benefits: BenefitItem[] = [
    {
        icon: TrendingUp,
        text: "Replaces up to 70% of repetitive operational workforce across departments",
    },
    {
        icon: Layers,
        text: "Executes thousands of cross-functional workflows in parallel, without bottlenecks",
    },
    {
        icon: Clock,
        text: "Operates 24/7 with consistent quality — no delays, no downtime",
    },
    {
        icon: Eye,
        text: "Understands your files, SOPs, systems, and business logic natively",
    },
    {
        icon: PhoneCall,
        text: "Voice agents handle inbound calls, support, scheduling, and routing autonomously",
    },
    {
        icon: Shield,
        text: "Every action is auditable, controlled, and compliant by design",
    },
    {
        icon: DollarSign,
        text: "Delivers 5–10× cost reduction compared to building and managing ops teams",
    },
    {
        icon: Check,
        text: "Runs your entire business — not just back-office or single functions",
    },
];

export function BenefitsSection() {
    return (
        <section className="py-20 lg:py-32 bg-card border-y border-border">
            <div className="section-container">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left: Headline */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl lg:text-4xl font-semibold text-foreground mb-6"
                            >
                                Scale your business without scaling headcount.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg text-muted-foreground"
                            >
                                Efficidex is the autonomous operating layer that replaces tools,
                                workflows, and operational labor — so growth doesn’t require
                                more people.
                            </motion.p>
                        </div>

                        {/* Right: Benefits List */}
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        key={benefit.text}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.08 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>

                                        <span className="text-foreground text-base leading-snug">
                                            {benefit.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
