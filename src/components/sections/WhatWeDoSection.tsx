import { motion } from "framer-motion";
import { Bot, GitBranch, ShieldCheck } from "lucide-react";

type FeatureItem = {
    icon: React.ElementType;
    title: string;
    description: string;
};

const features: FeatureItem[] = [
    {
        icon: Bot,
        title: "Autonomous Agents",
        description: "AI that thinks, reasons, and executes real operational work.",
    },
    {
        icon: GitBranch,
        title: "Cross-Department Workflows",
        description:
            "Agents coordinate like real teams — instantly, accurately, endlessly.",
    },
    {
        icon: ShieldCheck,
        title: "Your Rules, Your Approvals",
        description:
            "You decide what AI can execute and what needs human review.",
    },
];

export function WhatWeDoSection() {
    return (
        <section className="py-20 lg:py-32 bg-card border-y border-border">
            <div className="section-container">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-semibold text-foreground mb-4"
                    >
                        Stop automating tiny tasks.{" "}
                        <span className="text-muted-foreground">
                            Start automating entire operations.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Most AI tools assist humans. Efficidex removes the manual work itself.
                        Your company gets an autonomous workforce that executes, coordinates,
                        and completes workflows end-to-end.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Icon className="w-6 h-6 text-foreground" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
