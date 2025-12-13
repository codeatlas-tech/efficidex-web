import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Minus, Zap, Building2, Rocket } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        icon: Zap,
        description: "For small teams testing autonomous ops.",
        price: "$499",
        period: "/month",
        cta: "Start Free Trial",
        ctaVariant: "hero-secondary" as const,
        popular: false,
        features: [
            { name: "Autonomous agents", value: "Up to 10" },
            { name: "Cross-department workflows", value: true },
            { name: "Human approvals", value: true },
            { name: "Audit trails", value: true },
            { name: "Integrations", value: "5 integrations" },
            { name: "Role-based access", value: "Basic" },
            { name: "Support", value: "Email" },
            { name: "Synaptic Intelligence", value: false },
            { name: "Custom workflows", value: false },
            { name: "Dedicated success manager", value: false },
            { name: "SLA guarantee", value: false },
            { name: "On-premise deployment", value: false },
        ],
    },
    {
        name: "Growth",
        icon: Rocket,
        description: "For companies scaling departments.",
        price: "$1,499",
        period: "/month",
        cta: "Start Free Trial",
        ctaVariant: "hero" as const,
        popular: true,
        features: [
            { name: "Autonomous agents", value: "Up to 50" },
            { name: "Cross-department workflows", value: true },
            { name: "Human approvals", value: true },
            { name: "Audit trails", value: true },
            { name: "Integrations", value: "20 integrations" },
            { name: "Role-based access", value: "Advanced" },
            { name: "Support", value: "Priority" },
            { name: "Synaptic Intelligence", value: true },
            { name: "Custom workflows", value: true },
            { name: "Dedicated success manager", value: false },
            { name: "SLA guarantee", value: false },
            { name: "On-premise deployment", value: false },
        ],
    },
    {
        name: "Enterprise",
        icon: Building2,
        description: "For full end-to-end autonomous operations.",
        price: "Custom",
        period: "",
        cta: "Contact Sales",
        ctaVariant: "hero-secondary" as const,
        popular: false,
        features: [
            { name: "Autonomous agents", value: "Unlimited" },
            { name: "Cross-department workflows", value: true },
            { name: "Human approvals", value: true },
            { name: "Audit trails", value: true },
            { name: "Integrations", value: "Unlimited" },
            { name: "Role-based access", value: "Enterprise" },
            { name: "Support", value: "24/7 Dedicated" },
            { name: "Synaptic Intelligence", value: true },
            { name: "Custom workflows", value: true },
            { name: "Dedicated success manager", value: true },
            { name: "SLA guarantee", value: true },
            { name: "On-premise deployment", value: true },
        ],
    },
];

const allFeatures = [
    "Autonomous agents",
    "Cross-department workflows",
    "Human approvals",
    "Audit trails",
    "Integrations",
    "Role-based access",
    "Support",
    "Synaptic Intelligence",
    "Custom workflows",
    "Dedicated success manager",
    "SLA guarantee",
    "On-premise deployment",
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background">

            <Header />

            <main>
                {/* HERO */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            Pricing that scales with your operation — not your headcount.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Start small, scale infinitely. Pay for the automation capacity you need.
                        </p>
                    </div>
                </section>

                {/* PRICING CARDS */}
                <section className="pb-16">
                    <div className="section-container">
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {tiers.map((tier, index) => (
                                <motion.div
                                    key={tier.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`relative p-6 rounded-2xl border ${tier.popular
                                        ? "border-primary bg-card shadow-lg scale-105"
                                        : "border-border bg-card"
                                        }`}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    {/* HEADER */}
                                    <div className="text-center mb-6">
                                        <div
                                            className={`inline-flex p-3 rounded-xl mb-4 ${tier.popular ? "bg-primary/10" : "bg-secondary"
                                                }`}
                                        >
                                            <tier.icon
                                                size={24}
                                                className={tier.popular ? "text-primary" : "text-foreground"}
                                            />
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                            <span className="text-muted-foreground">{tier.period}</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button variant={tier.ctaVariant} size="lg" className="w-full mb-6">
                                        {tier.cta}
                                    </Button>

                                    {/* FEATURES */}
                                    <div className="space-y-3">
                                        {tier.features.slice(0, 7).map((feature) => (
                                            <div key={feature.name} className="flex items-center gap-3">
                                                {feature.value === true ? (
                                                    <Check size={16} className="text-primary flex-shrink-0" />
                                                ) : feature.value === false ? (
                                                    <Minus size={16} className="text-muted-foreground/50 flex-shrink-0" />
                                                ) : (
                                                    <Check size={16} className="text-primary flex-shrink-0" />
                                                )}

                                                <span
                                                    className={`text-sm ${feature.value === false
                                                        ? "text-muted-foreground/50"
                                                        : "text-foreground"
                                                        }`}
                                                >
                                                    {typeof feature.value === "string"
                                                        ? feature.value
                                                        : feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMPARISON TABLE */}
                <section className="py-16 bg-secondary/30">
                    <div className="section-container">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                            Compare all features
                        </h2>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                                            Feature
                                        </th>
                                        {tiers.map((tier) => (
                                            <th
                                                key={tier.name}
                                                className="text-center py-4 px-4 font-semibold text-foreground"
                                            >
                                                {tier.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {allFeatures.map((featureName, index) => (
                                        <motion.tr
                                            key={featureName}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.03 }}
                                            className="border-b border-border/50"
                                        >
                                            <td className="py-4 px-4 text-sm text-foreground">{featureName}</td>

                                            {tiers.map((tier) => {
                                                const feature = tier.features.find((f) => f.name === featureName);

                                                return (
                                                    <td key={tier.name} className="text-center py-4 px-4">
                                                        {feature?.value === true ? (
                                                            <Check size={18} className="inline-block text-primary" />
                                                        ) : feature?.value === false ? (
                                                            <Minus size={18} className="inline-block text-muted-foreground/40" />
                                                        ) : (
                                                            <span className="text-sm text-foreground">{feature?.value}</span>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="section-container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Need a custom solution?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            Our team will design a pricing plan tailored to your operational needs and scale.
                        </p>

                        <Button asChild variant="hero" size="xl">
                            <Link to="/contact">
                                Get Custom Quote
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
