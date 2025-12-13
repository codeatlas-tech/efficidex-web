import { motion } from "framer-motion";
import {
    Activity,
    Bot,
    BarChart3,
    GitBranch,
    AlertTriangle,
} from "lucide-react";

type HighlightItem = {
    icon: React.ElementType;
    label: string;
};

const highlights: HighlightItem[] = [
    { icon: Activity, label: "Live activity feed" },
    { icon: Bot, label: "Active agents" },
    { icon: BarChart3, label: "Task heatmaps" },
    { icon: GitBranch, label: "Workflow dependencies" },
    { icon: AlertTriangle, label: "SLA & risk alerts" },
];

export function CommandCentreSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side text + bullets */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Your real-time operational cockpit.
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8">
                            See everything your AI workforce is doing — across every department,
                            client, and workflow. Live tasks, SLAs, agent health, approvals, alerts,
                            bottlenecks — all in one place.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                                    >
                                        <Icon size={20} className="text-primary" />
                                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right side skeleton mock dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            <div className="space-y-4">
                                <div className="h-8 bg-secondary rounded animate-pulse" />

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-20 bg-secondary rounded-lg" />
                                    <div className="h-20 bg-secondary rounded-lg" />
                                    <div className="h-20 bg-secondary rounded-lg" />
                                </div>

                                <div className="h-32 bg-secondary rounded-lg" />

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-16 bg-secondary rounded-lg" />
                                    <div className="h-16 bg-secondary rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
