import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const integrationCategories = {
    CRM: ["HubSpot", "Zoho", "Salesforce (Coming Soon)"],
    Support: ["Freshdesk", "Zendesk", "Intercom (Coming Soon)"],
    Messaging: ["Slack", "WhatsApp", "Teams (Coming Soon)"],
    Finance: ["Razorpay", "QuickBooks", "Tally"],
    Ecommerce: ["Shopify", "WooCommerce (Coming Soon)"],
    Storage: ["Google Drive", "Dropbox (Coming Soon)"],
    VoiceAI: ["Telephony API", "Call Handling Agents", "IVR Automation"],
    Developer: ["API Hooks", "Webhooks", "Custom Integrations"],
};

export default function Integrations() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 border-b border-border">
                <div className="section-container max-w-4xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6"
                    >
                        All Your Systems. Fully Connected.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Efficidex integrates deeply across CRM, finance, messaging,
                        ecommerce, customer support, storage platforms, and internal systems.
                        Build workflows that run across every tool you rely on.
                    </motion.p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20">
                <div className="section-container max-w-5xl mx-auto space-y-16">

                    {Object.entries(integrationCategories).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h2 className="text-2xl font-semibold mb-6">{category}</h2>

                            <div className="flex flex-wrap gap-3">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="px-5 py-3 rounded-full border border-border bg-card text-sm font-medium 
                                        text-foreground hover:border-primary/40 hover:shadow-md transition-all duration-200"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* API Docs Section */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container max-w-4xl mx-auto text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-semibold mb-4"
                    >
                        Build Custom Integrations with Our APIs
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
                    >
                        Whether you're integrating internal systems, legacy software,
                        or advanced workflow automation, our APIs and webhook framework
                        give you full flexibility to extend Efficidex.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block"
                    >
                        <Link
                            to="/docs"
                            className="px-6 py-3 rounded-full border border-primary text-primary font-medium cursor-pointer hover:bg-primary/10 transition-all inline-block"
                        >
                            View API Documentation →
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
