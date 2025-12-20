import { motion } from "framer-motion";
import {
    Bot,
    Users,
    Wallet,
    HeadphonesIcon,
    Truck,
    Stethoscope,
    Factory,
    BarChart,
} from "lucide-react";

type AgentType = {
    icon: React.ElementType;
    label: string;
    count: string;
};

const agentTypes: AgentType[] = [
    { icon: Users, label: "HR Agents", count: "12+" },
    { icon: Wallet, label: "Finance Agents", count: "10+" },
    { icon: BarChart, label: "Sales Agents", count: "8+" },
    { icon: HeadphonesIcon, label: "Customer Support Agents", count: "9+" },
    { icon: Truck, label: "Logistics Agents", count: "11+" },
    { icon: Stethoscope, label: "Healthcare Agents", count: "15+" },
    { icon: Factory, label: "Manufacturing Agents", count: "8+" },
    { icon: Bot, label: "Custom Agents", count: "Unlimited" },
];

export function AutonomousAgentsSection() {
    return (
        <section className="py-20">
            <div className="section-container">

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        A full workforce — without hiring anyone.
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Efficidex deploys a coordinated workforce of specialized AI agents across
                        every department. They execute real operational work, collaborate across
                        functions, and escalate decisions only when human judgment is required.
                    </p>
                </motion.div>

                {/* Agent grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {agentTypes.map((agent, index) => {
                        const Icon = agent.icon;

                        return (
                            <motion.div
                                key={agent.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-secondary mb-4 group-hover:bg-primary/10 transition-colors">
                                    <Icon size={24} className="text-primary" />
                                </div>

                                <h3 className="font-semibold text-foreground mb-1">
                                    {agent.label}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {agent.count} production-ready agents
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
