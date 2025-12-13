import { motion } from "framer-motion";
import {
    Check,
    TrendingUp,
    Clock,
    Eye,
    Shield,
    DollarSign,
    Layers,
    PhoneCall, // ★ Added for Voice AI benefit
} from "lucide-react";

type BenefitItem = {
    icon: React.ElementType;
    text: string;
};

const benefits: BenefitItem[] = [
    { icon: TrendingUp, text: "Replaces repetitive operational labor" },
    { icon: Layers, text: "Executes thousands of workflows simultaneously" },
    { icon: Clock, text: "Works 24/7 with perfect consistency" },
    { icon: Eye, text: "Understands files, SOPs, systems, and business logic" },

    // ★ NEW BENEFIT — Voice AI Agents
    {
        icon: PhoneCall,
        text: "Voice AI agents that handle all customer calls, support requests, and routing in real time",
    },

    { icon: Shield, text: "Auditable, controlled, compliant" },
    { icon: DollarSign, text: "Costs 5–10× less than building manual ops teams" },
    { icon: Check, text: "Works across your entire business, not just back-office" },
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
                                Scale operations without scaling headcount.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg text-muted-foreground"
                            >
                                Efficidex is your autonomous operational backbone — handling the
                                work that used to require entire teams.
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
