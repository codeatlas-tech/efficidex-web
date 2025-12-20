import { motion } from "framer-motion";
import {
    Brain,
    TrendingDown,
    AlertCircle,
    BarChart2,
    Lightbulb,
} from "lucide-react";

type OutputItem = {
    icon: React.ElementType;
    label: string;
    description: string;
};

const outputs: OutputItem[] = [
    {
        icon: AlertCircle,
        label: "Operational bottlenecks",
        description: "Detect cross-workflow slowdowns in real time",
    },
    {
        icon: TrendingDown,
        label: "Cost reduction levers",
        description: "Identify waste across tools, labor, and execution",
    },
    {
        icon: BarChart2,
        label: "SLA & risk forecasting",
        description: "Predict deadline failures before they happen",
    },
    {
        icon: Brain,
        label: "Capacity & workload planning",
        description: "Forecast demand and allocate agents proactively",
    },
    {
        icon: Lightbulb,
        label: "Execution improvements",
        description: "Recommend concrete workflow and policy changes",
    },
];

export function BenthamAISection() {
    return (
        <section className="py-20">
            <div className="section-container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                        <Brain size={18} />
                        <span className="text-sm font-medium">
                            Bentham AI — Strategic Orchestrator
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        The CEO and COO of your AI workforce.
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bentham AI continuously analyzes your entire business, coordinates
                        department agents, anticipates risks, and drives execution-level
                        improvements — with human oversight where it matters.
                    </p>
                </motion.div>

                {/* Output Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outputs.map((output, index) => {
                        const Icon = output.icon;

                        return (
                            <motion.div
                                key={output.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-secondary mb-4">
                                    <Icon size={24} className="text-primary" />
                                </div>

                                <h3 className="font-semibold text-foreground mb-2">
                                    {output.label}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {output.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
