import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import {
    Wallet,
    UserCheck,
    TrendingUp,
    HeadphonesIcon,
    ShoppingCart,
    RotateCcw,
    ClipboardCheck,
    Warehouse,
    Building,
    GraduationCap,
    Clock,
    ArrowRight,
    Play,
    Percent,
    Zap,
} from "lucide-react";

const useCases = [
    {
        icon: Wallet,
        name: "Payroll Execution",
        description:
            "Autonomous agents calculate payroll, enforce policies, route approvals, disburse payments, and generate payslips without human coordination.",
        workflow: [
            "Calculate salaries",
            "Apply deductions",
            "Approval gate",
            "Disburse payments",
            "Generate payslips",
        ],
        kpiImpact: "95% faster payroll cycles",
        timeSaved: "40+ hours / month",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        icon: UserCheck,
        name: "KYC & Verification",
        description:
            "Agents handle document collection, identity verification, risk scoring, and compliance checks end to end.",
        workflow: [
            "Collect documents",
            "Verify identity",
            "Risk assessment",
            "Compliance validation",
            "Approve / Reject",
        ],
        kpiImpact: "99% verification accuracy",
        timeSaved: "Minutes instead of days",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: TrendingUp,
        name: "Lead-to-Revenue Execution",
        description:
            "Agents qualify leads, nurture prospects, generate proposals, and coordinate contract execution autonomously.",
        workflow: [
            "Capture lead",
            "Qualification",
            "Nurture",
            "Proposal",
            "Contract execution",
        ],
        kpiImpact: "3× conversion rate",
        timeSaved: "60% faster close",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: HeadphonesIcon,
        name: "Customer Support Resolution",
        description:
            "Tickets are triaged, resolved, escalated, and closed by agents with full audit trails and SLA tracking.",
        workflow: [
            "Receive request",
            "Categorize",
            "Auto-resolve / escalate",
            "Follow-up",
            "Close & survey",
        ],
        kpiImpact: "80% tickets resolved autonomously",
        timeSaved: "5–10 min per ticket",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: ShoppingCart,
        name: "Procurement Operations",
        description:
            "Agents manage requisitions, vendor selection, purchase orders, goods receipt, and invoice matching.",
        workflow: [
            "Requisition",
            "Vendor selection",
            "PO creation",
            "Goods receipt",
            "Invoice reconciliation",
        ],
        kpiImpact: "30% procurement savings",
        timeSaved: "Days per cycle",
        color: "text-teal-500",
        bgColor: "bg-teal-500/10",
    },
    {
        icon: RotateCcw,
        name: "Returns & Refunds",
        description:
            "Return eligibility, logistics, inspection, and refunds executed without manual intervention.",
        workflow: [
            "Return request",
            "Eligibility check",
            "Pickup / drop",
            "Quality inspection",
            "Refund / replace",
        ],
        kpiImpact: "90% CSAT on returns",
        timeSaved: "24 hours faster resolution",
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
    },
    {
        icon: ClipboardCheck,
        name: "Quality Control Execution",
        description:
            "Agents schedule inspections, log defects, generate reports, and trigger corrective actions.",
        workflow: [
            "Schedule inspection",
            "Run checks",
            "Log defects",
            "Generate report",
            "Trigger actions",
        ],
        kpiImpact: "50% fewer defects",
        timeSaved: "Hours per batch",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        icon: Warehouse,
        name: "Warehouse Operations",
        description:
            "Picking, packing, labeling, and dispatch coordinated by agents with real-time inventory updates.",
        workflow: [
            "Receive order",
            "Pick items",
            "Pack",
            "Label",
            "Dispatch",
        ],
        kpiImpact: "2× warehouse throughput",
        timeSaved: "10 min per order",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
    {
        icon: Building,
        name: "Facilities & Maintenance",
        description:
            "Maintenance requests, vendor coordination, compliance checks, and invoicing executed autonomously.",
        workflow: [
            "Log request",
            "Assign vendor",
            "Schedule work",
            "Verify completion",
            "Process invoice",
        ],
        kpiImpact: "40% ops cost reduction",
        timeSaved: "8+ hours / week",
        color: "text-slate-500",
        bgColor: "bg-slate-500/10",
    },
    {
        icon: GraduationCap,
        name: "Admissions Processing",
        description:
            "Applications, document verification, interviews, and enrollment handled by agents end to end.",
        workflow: [
            "Application intake",
            "Document verification",
            "Eligibility check",
            "Interview",
            "Enrollment",
        ],
        kpiImpact: "70% faster admissions",
        timeSaved: "Days per application",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Clock,
        name: "Timesheets & Billing",
        description:
            "Time tracking, approvals, invoicing, and collections executed without manual reconciliation.",
        workflow: [
            "Log time",
            "Approve hours",
            "Generate invoice",
            "Send to client",
            "Track payment",
        ],
        kpiImpact: "100% billing accuracy",
        timeSaved: "20+ hours / month",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
];

export default function UseCases() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* HERO */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            Real business work, executed autonomously.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Efficidex replaces manual operational workflows with autonomous
                            agents that execute, coordinate, and deliver outcomes across
                            your entire business.
                        </p>
                    </div>
                </section>

                {/* USE CASE GRID */}
                <section className="pb-24">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((useCase, index) => (
                                <motion.div
                                    key={useCase.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    {/* HEADER */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-xl ${useCase.bgColor} ${useCase.color}`}
                                        >
                                            <useCase.icon size={24} />
                                        </div>

                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {useCase.name}
                                        </h3>
                                    </div>

                                    {/* DESCRIPTION */}
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {useCase.description}
                                    </p>

                                    {/* WORKFLOW */}
                                    <div className="mb-4">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                                            Execution Flow
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {useCase.workflow.map((step, stepIndex) => (
                                                <div key={step} className="flex items-center gap-1">
                                                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground">
                                                        {step}
                                                    </span>
                                                    {stepIndex <
                                                        useCase.workflow.length - 1 && (
                                                            <ArrowRight
                                                                size={10}
                                                                className="text-muted-foreground"
                                                            />
                                                        )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* METRICS */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                                        <div className="flex items-center gap-1.5">
                                            <Percent size={14} className="text-primary" />
                                            <span className="text-xs font-medium text-foreground">
                                                {useCase.kpiImpact}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Zap size={14} className="text-accent" />
                                            <span className="text-xs font-medium text-foreground">
                                                {useCase.timeSaved}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary"
                                    >
                                        <Play size={14} />
                                        View Demo
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-secondary/30">
                    <div className="section-container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Let Efficidex run your operations.
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            See how autonomous agents replace manual workflows in your
                            organization — with control, visibility, and auditability.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="hero" size="lg">
                                Try Interactive Demo
                            </Button>

                            <Button variant="hero-secondary" size="lg">
                                Book a Strategy Call
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
