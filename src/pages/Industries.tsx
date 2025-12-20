import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { INDUSTRIES } from "@/data/industries";

export default function Industries() {
    const industriesArray = Object.values(INDUSTRIES);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* HERO */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            Autonomous operations, built for your industry.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Every industry runs differently. Efficidex deploys industry-specific
                            agents, workflows, controls, and KPIs so real work gets executed —
                            not just automated.
                        </p>
                    </div>
                </section>

                {/* INDUSTRIES GRID */}
                <section className="pb-24">
                    <div className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industriesArray.map((industry, index) => {
                                return (
                                    <motion.div
                                        key={industry.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={`/industries/${industry.slug}`}
                                            className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Industry Emoji */}
                                                <div className="text-3xl p-3 rounded-xl bg-secondary">
                                                    {industry.heroImage}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                            {industry.name}
                                                        </h3>

                                                        <ArrowRight
                                                            size={18}
                                                            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                                                        />
                                                    </div>

                                                    <p className="text-muted-foreground text-sm">
                                                        {industry.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
