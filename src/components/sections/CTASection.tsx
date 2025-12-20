import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
    return (
        <section className="py-20 lg:py-32 bg-primary">
            <div className="section-container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
                        Ready to run your business with autonomous AI?
                    </h2>

                    <p className="text-lg text-primary-foreground/80 mb-8">
                        Replace fragmented tools and operational headcount with a single
                        system that plans, executes, and optimizes work for you — 24/7.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* DEMO BUTTON → /demo */}
                        <Button
                            asChild
                            size="lg"
                            className="bg-card text-foreground hover:bg-card/90 rounded-full group"
                        >
                            <Link to="/demo">
                                Try Interactive Demo
                                <ArrowRight
                                    size={18}
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </Button>

                        {/* STRATEGY CALL BUTTON → /contact */}
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        >
                            <Link to="/contact">
                                Book a Strategy Call
                            </Link>
                        </Button>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
