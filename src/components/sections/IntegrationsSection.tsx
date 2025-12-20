import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const integrations = [
    "HubSpot",
    "Zoho",
    "Slack",
    "WhatsApp",
    "Google Drive",
    "Tally",
    "QuickBooks",
    "Shopify",
    "Razorpay",
    "Freshdesk",
    "Zendesk",
    "API Hooks",
];

export function IntegrationsSection() {
    return (
        <section
            id="integrations"
            className="py-20 lg:py-32 bg-card border-y border-border"
        >
            <div className="section-container">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-semibold text-foreground mb-4"
                    >
                        Keep your stack. Remove the humans from the loop.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="text-sm text-muted-foreground text-center mb-6"
                    >
                        Efficidex operates directly inside the systems you already use.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        No migrations. No brittle automations. No retraining teams.
                        Your tools stay in place — Efficidex executes the work
                        across them autonomously.
                    </motion.p>
                </div>

                {/* Integrations Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={integration}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            className="px-5 py-3 rounded-full border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer"
                        >
                            <span className="text-sm font-medium text-foreground">
                                {integration}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <Button asChild variant="pill-outline" size="lg" className="group">
                        <Link to="/integrations">
                            See how Efficidex operates inside your tools
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
