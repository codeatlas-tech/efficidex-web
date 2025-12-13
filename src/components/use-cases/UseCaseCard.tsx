import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Percent, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { UseCase } from "@/data/use-cases";

export function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
    const Icon = useCase.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${useCase.bgColor} ${useCase.color}`}>
                    <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {useCase.name}
                </h3>
            </div>

            <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>

            {/* Workflow */}
            <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    Workflow
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {useCase.workflow.map((step, i) => (
                        <div key={step} className="flex items-center gap-1">
                            <span className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground">
                                {step}
                            </span>
                            {i < useCase.workflow.length - 1 && (
                                <ArrowRight size={10} className="text-muted-foreground" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* KPIs */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                    <Percent size={14} className="text-primary" />
                    <span className="text-xs font-medium">{useCase.kpiImpact}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Zap size={14} className="text-accent" />
                    <span className="text-xs font-medium">{useCase.timeSaved}</span>
                </div>
            </div>

            <Button
                variant="ghost"
                size="sm"
                className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary"
            >
                <Play size={14} />
                View Demo
            </Button>
        </motion.div>
    );
}
