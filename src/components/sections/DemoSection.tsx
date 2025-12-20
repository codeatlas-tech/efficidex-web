import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function DemoSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="section-container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center rounded-3xl border border-border bg-card p-8 lg:p-16 relative overflow-hidden"
                >
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05)_0%,transparent_70%)]" />

                    <div className="relative">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                            <Sparkles className="w-8 h-8 text-accent" />
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                            See an autonomous business run itself.
                        </h2>

                        {/* Subtext */}
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Choose your industry, company size, and operational scope.
                            Efficidex provisions Bentham orchestration, department agents,
                            workflows, approvals, and real-time insights automatically —
                            no setup required.
                        </p>

                        {/* CTA Button */}
                        <Button variant="accent" size="xl" className="group">
                            Launch Interactive Demo
                            <ArrowRight
                                size={18}
                                className="ml-2 transition-transform group-hover:translate-x-1"
                            />
                        </Button>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
