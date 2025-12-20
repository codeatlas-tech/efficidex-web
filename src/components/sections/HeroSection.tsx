import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardPreview from "@/assets/dashboard-preview.png";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--secondary))_0%,transparent_50%)]" />

            <div className="section-container relative">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm text-muted-foreground">
                            Replacing 15+ business tools with autonomous agents
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
                    >
                        Your Business.{" "}
                        <span className="text-muted-foreground">
                            Fully Operated by Autonomous AI.
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Efficidex replaces 15+ business tools and up to 70% of operational workforce
                        with autonomous agents that run your entire business — from strategy to
                        execution — 24/7.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                    >
                        <Button asChild variant="hero" size="xl" className="group">
                            <Link to="/demo">
                                <Play size={18} className="mr-1" />
                                Try Interactive Demo
                                <ArrowRight
                                    size={18}
                                    className="ml-1 transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </Button>

                        <Button asChild variant="hero-secondary" size="xl">
                            <Link to="/contact">
                                Book a Strategy Call
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Trust Line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-sm text-muted-foreground"
                    >
                        No dashboards. No tool sprawl. No manual work. Just businesses run by AI.
                    </motion.p>

                </div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 lg:mt-24 max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl border border-border bg-card p-2 shadow-xl overflow-hidden">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none z-10" />
                        <img
                            src={dashboardPreview}
                            alt="Efficidex Command Centre Dashboard"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
