import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
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
    Zap
} from "lucide-react";

const useCases = [
    {
        icon: Wallet,
        name: "Automate Payroll",
        description: "End-to-end payroll processing from calculation to disbursement with compliance checks.",
        workflow: ["Calculate salaries", "Apply deductions", "Get approvals", "Disburse payments", "Generate payslips"],
        kpiImpact: "95% faster processing",
        timeSaved: "40 hours/month",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        icon: UserCheck,
        name: "Automate KYC",
        description: "Complete customer verification with document checks, risk scoring, and compliance validation.",
        workflow: ["Collect documents", "Verify identity", "Risk assessment", "Compliance check", "Approve/Reject"],
        kpiImpact: "99% accuracy",
        timeSaved: "15 min per case",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: TrendingUp,
        name: "Automate Lead-to-Deal",
        description: "Convert leads to deals with automated qualification, nurturing, and contract generation.",
        workflow: ["Capture lead", "Qualify", "Nurture", "Proposal", "Contract"],
        kpiImpact: "3x conversion rate",
        timeSaved: "60% faster close",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        icon: HeadphonesIcon,
        name: "Automate Customer Support",
        description: "Resolve tickets with AI triage, auto-responses, escalation, and satisfaction tracking.",
        workflow: ["Receive ticket", "Categorize", "Auto-resolve or route", "Follow up", "Close & survey"],
        kpiImpact: "80% auto-resolved",
        timeSaved: "5 min per ticket",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        icon: ShoppingCart,
        name: "Automate Procurement",
        description: "Streamline purchasing from requisition to payment with vendor management and approvals.",
        workflow: ["Requisition", "Vendor selection", "PO creation", "Goods receipt", "Invoice matching"],
        kpiImpact: "30% cost savings",
        timeSaved: "2 days per cycle",
        color: "text-teal-500",
        bgColor: "bg-teal-500/10"
    },
    {
        icon: RotateCcw,
        name: "Automate Returns",
        description: "Handle product returns with automated eligibility checks, refunds, and inventory updates.",
        workflow: ["Return request", "Eligibility check", "Pickup/Drop", "Quality check", "Refund/Replace"],
        kpiImpact: "90% customer satisfaction",
        timeSaved: "24 hours faster",
        color: "text-rose-500",
        bgColor: "bg-rose-500/10"
    },
    {
        icon: ClipboardCheck,
        name: "Automate QC",
        description: "Quality control automation with inspection scheduling, defect tracking, and reporting.",
        workflow: ["Schedule inspection", "Run checks", "Log defects", "Generate report", "Trigger actions"],
        kpiImpact: "50% fewer defects",
        timeSaved: "4 hours per batch",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10"
    },
    {
        icon: Warehouse,
        name: "Automate Warehouse Ops",
        description: "Optimize warehouse operations with automated picking, packing, and inventory management.",
        workflow: ["Receive order", "Pick items", "Pack", "Label", "Dispatch"],
        kpiImpact: "2x throughput",
        timeSaved: "10 min per order",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10"
    },
    {
        icon: Building,
        name: "Automate Facility Management",
        description: "Manage facilities with automated maintenance scheduling, vendor coordination, and compliance.",
        workflow: ["Log request", "Assign vendor", "Schedule work", "Complete & verify", "Invoice"],
        kpiImpact: "40% cost reduction",
        timeSaved: "8 hours/week",
        color: "text-slate-500",
        bgColor: "bg-slate-500/10"
    },
    {
        icon: GraduationCap,
        name: "Automate Admissions",
        description: "Streamline student admissions from application to enrollment with document verification.",
        workflow: ["Application", "Document check", "Eligibility", "Interview", "Enrollment"],
        kpiImpact: "70% faster processing",
        timeSaved: "3 days per application",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10"
    },
    {
        icon: Clock,
        name: "Automate Timesheets & Billing",
        description: "Track time, generate invoices, and manage billing cycles automatically.",
        workflow: ["Log time", "Approve hours", "Generate invoice", "Send to client", "Track payment"],
        kpiImpact: "100% billing accuracy",
        timeSaved: "20 hours/month",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10"
    },
];

export default function UseCases() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            Automation that solves real operational problems.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore how Efficidex automates complex workflows across your business with measurable impact.
                        </p>
                    </div>
                </section>

                {/* Use Cases Grid */}
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
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${useCase.bgColor} ${useCase.color}`}>
                                            <useCase.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {useCase.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {useCase.description}
                                    </p>

                                    {/* Workflow */}
                                    <div className="mb-4">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Workflow</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {useCase.workflow.map((step, stepIndex) => (
                                                <div key={step} className="flex items-center gap-1">
                                                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground">
                                                        {step}
                                                    </span>
                                                    {stepIndex < useCase.workflow.length - 1 && (
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
                                            <span className="text-xs font-medium text-foreground">{useCase.kpiImpact}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Zap size={14} className="text-accent" />
                                            <span className="text-xs font-medium text-foreground">{useCase.timeSaved}</span>
                                        </div>
                                    </div>

                                    {/* Demo Button */}
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
                            Ready to automate your operations?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            See how Efficidex can transform your specific workflows with a personalized demo.
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
