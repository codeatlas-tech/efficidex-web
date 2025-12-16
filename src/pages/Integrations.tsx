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
                        className="text-4xl font-bold mb-4"
                    >
                        Operate Everything From the Stack You Already Use
                    </motion.h1>

                    {/* Context line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="text-sm text-muted-foreground mb-6"
                    >
                        Tools Efficidex connects to and operates inside.
                    </motion.p>

                    {/* Main explanation */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Efficidex works across your existing CRM, finance, messaging,
                        support, ecommerce, storage, and internal systems to execute
                        operational tasks end-to-end.
                        No migrations. No new tools. Just execution across what you already run.
                    </motion.p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20">
                <div className="section-container max-w-5xl mx-auto space-y-16">
                    {Object.entries(integrationCategories).map(
                        ([category, items], idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">
                                    {category} Systems
                                </h2>

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
                        )
                    )}
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
                        Extend Efficidex With APIs and Webhooks
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
                    >
                        Connect internal tools, legacy systems, or custom workflows
                        using Efficidex APIs. Trigger actions, exchange data, and
                        orchestrate automation beyond off-the-shelf integrations.
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
                            Explore Developer Documentation →
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
