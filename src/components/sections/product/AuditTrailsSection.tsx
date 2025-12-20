import { motion } from "framer-motion";
import { FileText, User, Bot, Clock, CheckCircle } from "lucide-react";

type AuditEntry = {
    icon: React.ElementType;
    action: string;
    actor: string;
    time: string;
    type: "agent" | "human" | "system";
};

const auditEntries: AuditEntry[] = [
    { icon: Bot, action: "Invoice #4521 processed", actor: "Finance Agent", time: "10:42 AM", type: "agent" },
    { icon: User, action: "Approved vendor payment", actor: "John Smith", time: "10:45 AM", type: "human" },
    { icon: Bot, action: "Payment initiated — $12,500", actor: "Finance Agent", time: "10:46 AM", type: "agent" },
    { icon: CheckCircle, action: "Transaction completed", actor: "System", time: "10:47 AM", type: "system" },
];

export function AuditTrailsSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Audit trail */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">

                            <div className="flex items-center gap-2 mb-6">
                                <FileText size={20} className="text-primary" />
                                <h3 className="font-semibold text-foreground">
                                    System Audit Trail
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {auditEntries.map((entry, index) => {
                                    const Icon = entry.icon;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div
                                                className={`p-2 rounded-lg ${entry.type === "agent"
                                                        ? "bg-primary/10 text-primary"
                                                        : entry.type === "human"
                                                            ? "bg-blue-500/10 text-blue-500"
                                                            : "bg-green-500/10 text-green-500"
                                                    }`}
                                            >
                                                <Icon size={16} />
                                            </div>

                                            <div className="flex-1">
                                                <p className="font-medium text-foreground text-sm">
                                                    {entry.action}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                                    <span>{entry.actor}</span>
                                                    <span>•</span>
                                                    <Clock size={12} />
                                                    <span>{entry.time}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT: Explanation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Every action. Every decision. Fully accountable.
                        </h2>

                        <p className="text-lg text-muted-foreground">
                            Efficidex automatically records every agent action, human approval,
                            system event, and outcome in a complete, immutable audit trail.
                            Built for compliance, traceability, and operational trust.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
