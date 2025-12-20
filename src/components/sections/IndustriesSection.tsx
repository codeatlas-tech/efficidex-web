import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
    Heart,
    Landmark,
    Code2,
    Truck,
    ShoppingBag,
    Factory,
    Hotel,
    GraduationCap,
    Building2,
    Briefcase,
    ArrowRight,
} from "lucide-react";

type IndustryItem = {
    icon: React.ElementType;
    name: string;
    description: string;
    slug: string;
};

const industries: IndustryItem[] = [
    {
        icon: Heart,
        name: "Healthcare",
        description: "Patient operations, billing, insurance, compliance, labs, pharmacy",
        slug: "healthcare",
    },
    {
        icon: Landmark,
        name: "Finance & FinTech",
        description: "KYC, underwriting, fraud detection, payments, regulatory ops",
        slug: "finance",
    },
    {
        icon: Code2,
        name: "SaaS",
        description: "Sales ops, renewals, support, revenue operations, churn control",
        slug: "saas",
    },
    {
        icon: Truck,
        name: "Logistics",
        description: "Order flow, dispatch, routing, warehouse and fleet operations",
        slug: "logistics",
    },
    {
        icon: ShoppingBag,
        name: "Retail & E-Commerce",
        description: "Inventory, pricing, fulfillment, returns, customer operations",
        slug: "retail",
    },
    {
        icon: Factory,
        name: "Manufacturing",
        description: "Production planning, quality control, maintenance, supply chain",
        slug: "manufacturing",
    },
    {
        icon: Hotel,
        name: "Hospitality",
        description: "Reservations, guest services, housekeeping, front-desk operations",
        slug: "hospitality",
    },
    {
        icon: GraduationCap,
        name: "Education",
        description: "Admissions, records, fee management, course operations",
        slug: "education",
    },
    {
        icon: Building2,
        name: "Real Estate",
        description: "Lead handling, property ops, tenants, rent and maintenance",
        slug: "real-estate",
    },
    {
        icon: Briefcase,
        name: "Professional Services",
        description: "Project execution, utilization, billing, delivery operations",
        slug: "professional-services",
    },
];

export function IndustriesSection() {
    return (
        <section id="industries" className="py-20 lg:py-32">
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
                        Autonomous operations, tuned to your industry.
                    </motion.h2>

                    <p className="text-lg text-muted-foreground">
                        Efficidex deploys industry-specific agents that understand real
                        workflows, regulations, and edge cases — not generic automation.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to={`/industries/${industry.slug}`}
                                    className="block p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground mb-3 transition-colors" />

                                    <h3 className="font-semibold text-foreground mb-1">
                                        {industry.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        {industry.description}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Button asChild variant="pill-outline" size="lg" className="group">
                        <Link to="/industries">
                            Explore industry-specific agents
                            <ArrowRight
                                size={16}
                                className="ml-2 transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
