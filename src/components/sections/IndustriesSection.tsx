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
    slug: string; // ★ NEW
};

const industries: IndustryItem[] = [
    { icon: Heart, name: "Healthcare", description: "Patient flow, billing, insurance, labs, pharmacy", slug: "healthcare" },
    { icon: Landmark, name: "Finance / FinTech", description: "KYC, underwriting, fraud, payments, compliance", slug: "finance" },
    { icon: Code2, name: "SaaS", description: "Sales, CSM, support, renewals, revops", slug: "saas" },
    { icon: Truck, name: "Logistics", description: "Orders, dispatch, routing, warehouse ops", slug: "logistics" },
    { icon: ShoppingBag, name: "Retail & E-Commerce", description: "Inventory, pricing, returns, fulfillment", slug: "retail" },
    { icon: Factory, name: "Manufacturing", description: "Production, QC, maintenance, planning", slug: "manufacturing" },
    { icon: Hotel, name: "Hospitality", description: "Reservations, housekeeping, guest ops", slug: "hospitality" },
    { icon: GraduationCap, name: "Education", description: "Admissions, records, fees, courses", slug: "education" },
    { icon: Building2, name: "Real Estate", description: "Leads, visits, tenants, rent collection", slug: "real-estate" },
    { icon: Briefcase, name: "Professional Services", description: "Projects, timesheets, billing", slug: "professional-services" },
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
                        Purpose-built for your industry.
                    </motion.h2>
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
                            View Industry Details
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
