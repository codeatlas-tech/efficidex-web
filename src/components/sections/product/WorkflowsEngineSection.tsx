import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Workflow = {
    name: string;
    steps: string[];
};

const workflows: Workflow[] = [
    { name: "Payroll", steps: ["Calculate", "Approve", "Process", "Disburse"] },
    { name: "Lead-to-Deal", steps: ["Lead", "Qualify", "Proposal", "Contract"] },
    { name: "Order Fulfillment", steps: ["Order", "Pick", "Pack", "Dispatch"] },
    { name: "Claims Processing", steps: ["Claim", "Verify", "Approve", "Settle"] },
    { name: "Production", steps: ["Plan", "Produce", "QC", "Ship"] },
    { name: "Compliance", steps: ["Collect", "Validate", "Report", "Archive"] },
];

export function WorkflowsEngineSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="section-container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        End-to-end automation. No patches, no hacks.
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Efficidex handles workflows the way humans do — logically, sequentially,
                        and contextually.
                    </p>
                </motion.div>

                {/* Workflow Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workflows.map((workflow, index) => (
                        <motion.div
                            key={workflow.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="font-semibold text-foreground mb-4">{workflow.name}</h3>

                            <div className="flex items-center flex-wrap gap-2">
                                {workflow.steps.map((step, stepIndex) => (
                                    <div key={step} className="flex items-center gap-2">
                                        <span className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground">
                                            {step}
                                        </span>

                                        {/* Connector Arrow */}
                                        {stepIndex < workflow.steps.length - 1 && (
                                            <ArrowRight size={14} className="text-muted-foreground" />
                                        )}
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
