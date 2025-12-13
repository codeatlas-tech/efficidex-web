import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, TrendingUp, Clock, Users, Target, CheckCircle } from "lucide-react";

const industriesData: Record<string, {
    name: string;
    description: string;
    heroImage: string;
    departments: { name: string; description: string }[];
    workflows: { name: string; steps: string[]; impact: string }[];
    kpis: { metric: string; improvement: string; icon: React.ReactNode }[];
}> = {
    healthcare: {
        name: "Healthcare",
        description: "Transform patient care with AI-powered automation that reduces administrative burden and improves outcomes.",
        heroImage: "🏥",
        departments: [
            { name: "Patient Administration", description: "Streamline admissions, scheduling, and discharge processes" },
            { name: "Revenue Cycle Management", description: "Automate billing, coding, and claims processing" },
            { name: "Clinical Operations", description: "Optimize lab workflows, pharmacy, and care coordination" },
            { name: "Compliance & Quality", description: "Ensure HIPAA compliance and quality reporting" },
        ],
        workflows: [
            { name: "Patient Intake", steps: ["Registration", "Insurance Verification", "Consent Forms", "Room Assignment"], impact: "70% faster check-in" },
            { name: "Claims Processing", steps: ["Charge Capture", "Coding Review", "Submission", "Follow-up"], impact: "45% fewer denials" },
            { name: "Prior Authorization", steps: ["Request", "Clinical Review", "Payer Submission", "Approval"], impact: "3x faster approvals" },
        ],
        kpis: [
            { metric: "Patient Wait Time", improvement: "-65%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Claims First-Pass Rate", improvement: "+40%", icon: <Target className="w-6 h-6" /> },
            { metric: "Staff Productivity", improvement: "+55%", icon: <Users className="w-6 h-6" /> },
            { metric: "Revenue Cycle Days", improvement: "-30%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
    finance: {
        name: "Finance & Banking",
        description: "Accelerate financial operations with intelligent automation that ensures compliance and reduces risk.",
        heroImage: "🏦",
        departments: [
            { name: "Loan Processing", description: "Automate origination, underwriting, and servicing" },
            { name: "Compliance & Risk", description: "Streamline KYC, AML, and regulatory reporting" },
            { name: "Treasury Operations", description: "Optimize cash management and reconciliation" },
            { name: "Customer Service", description: "Enhance account servicing and dispute resolution" },
        ],
        workflows: [
            { name: "KYC Verification", steps: ["Document Collection", "Identity Verification", "Risk Assessment", "Approval"], impact: "80% faster onboarding" },
            { name: "Loan Origination", steps: ["Application", "Credit Check", "Underwriting", "Disbursement"], impact: "60% faster processing" },
            { name: "Fraud Detection", steps: ["Transaction Monitor", "Pattern Analysis", "Alert Generation", "Investigation"], impact: "95% detection rate" },
        ],
        kpis: [
            { metric: "KYC Processing Time", improvement: "-75%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Fraud Detection Rate", improvement: "+95%", icon: <Target className="w-6 h-6" /> },
            { metric: "Compliance Accuracy", improvement: "+99%", icon: <CheckCircle className="w-6 h-6" /> },
            { metric: "Operational Costs", improvement: "-40%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
    manufacturing: {
        name: "Manufacturing",
        description: "Optimize production workflows and supply chain operations with end-to-end automation.",
        heroImage: "🏭",
        departments: [
            { name: "Production Planning", description: "Automate scheduling, resource allocation, and capacity planning" },
            { name: "Quality Control", description: "Streamline inspections, testing, and compliance documentation" },
            { name: "Supply Chain", description: "Optimize procurement, inventory, and logistics" },
            { name: "Maintenance", description: "Predictive maintenance and asset management" },
        ],
        workflows: [
            { name: "Order Fulfillment", steps: ["Order Entry", "Production Schedule", "Manufacturing", "Shipping"], impact: "50% faster delivery" },
            { name: "Quality Inspection", steps: ["Sample Selection", "Testing", "Documentation", "Release"], impact: "99.5% accuracy" },
            { name: "Procurement", steps: ["Requisition", "Vendor Selection", "PO Generation", "Receipt"], impact: "35% cost savings" },
        ],
        kpis: [
            { metric: "Production Cycle Time", improvement: "-45%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Defect Rate", improvement: "-80%", icon: <Target className="w-6 h-6" /> },
            { metric: "Inventory Turnover", improvement: "+60%", icon: <TrendingUp className="w-6 h-6" /> },
            { metric: "On-Time Delivery", improvement: "+35%", icon: <CheckCircle className="w-6 h-6" /> },
        ],
    },
    retail: {
        name: "Retail & E-commerce",
        description: "Deliver exceptional customer experiences with automated fulfillment and personalized service.",
        heroImage: "🛒",
        departments: [
            { name: "Order Management", description: "Automate order processing, fulfillment, and returns" },
            { name: "Inventory Management", description: "Optimize stock levels, replenishment, and allocation" },
            { name: "Customer Service", description: "Streamline inquiries, complaints, and loyalty programs" },
            { name: "Marketing Operations", description: "Automate campaigns, promotions, and personalization" },
        ],
        workflows: [
            { name: "Order Processing", steps: ["Order Capture", "Payment", "Fulfillment", "Delivery"], impact: "Same-day shipping" },
            { name: "Returns Management", steps: ["Return Request", "Authorization", "Inspection", "Refund"], impact: "70% faster refunds" },
            { name: "Inventory Replenishment", steps: ["Demand Forecast", "PO Generation", "Receipt", "Allocation"], impact: "25% less stockouts" },
        ],
        kpis: [
            { metric: "Order Fulfillment Time", improvement: "-60%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Customer Satisfaction", improvement: "+45%", icon: <Target className="w-6 h-6" /> },
            { metric: "Return Processing", improvement: "-70%", icon: <TrendingUp className="w-6 h-6" /> },
            { metric: "Inventory Accuracy", improvement: "+99%", icon: <CheckCircle className="w-6 h-6" /> },
        ],
    },
    logistics: {
        name: "Logistics & Supply Chain",
        description: "Streamline global operations with intelligent routing, tracking, and delivery optimization.",
        heroImage: "🚚",
        departments: [
            { name: "Fleet Management", description: "Optimize routes, schedules, and driver assignments" },
            { name: "Warehouse Operations", description: "Automate receiving, picking, packing, and shipping" },
            { name: "Customs & Compliance", description: "Streamline documentation and regulatory compliance" },
            { name: "Customer Logistics", description: "Track shipments and manage delivery exceptions" },
        ],
        workflows: [
            { name: "Shipment Processing", steps: ["Booking", "Documentation", "Pickup", "Delivery"], impact: "40% faster transit" },
            { name: "Warehouse Fulfillment", steps: ["Receive", "Put-away", "Pick", "Ship"], impact: "3x throughput" },
            { name: "Customs Clearance", steps: ["Document Prep", "Filing", "Inspection", "Release"], impact: "Same-day clearance" },
        ],
        kpis: [
            { metric: "Delivery Time", improvement: "-40%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Fleet Utilization", improvement: "+55%", icon: <Target className="w-6 h-6" /> },
            { metric: "Shipping Accuracy", improvement: "+99.8%", icon: <CheckCircle className="w-6 h-6" /> },
            { metric: "Fuel Costs", improvement: "-25%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
    insurance: {
        name: "Insurance",
        description: "Accelerate claims processing and policy management with AI-driven automation.",
        heroImage: "🛡️",
        departments: [
            { name: "Underwriting", description: "Automate risk assessment and policy pricing" },
            { name: "Claims Processing", description: "Streamline FNOL, investigation, and settlement" },
            { name: "Policy Administration", description: "Manage issuance, endorsements, and renewals" },
            { name: "Agent Operations", description: "Support agent productivity and commissions" },
        ],
        workflows: [
            { name: "Claims FNOL", steps: ["Report", "Triage", "Assignment", "Investigation"], impact: "24hr resolution" },
            { name: "Policy Issuance", steps: ["Application", "Underwriting", "Pricing", "Binding"], impact: "Same-day quotes" },
            { name: "Renewal Processing", steps: ["Review", "Re-rate", "Offer", "Confirmation"], impact: "90% retention" },
        ],
        kpis: [
            { metric: "Claims Cycle Time", improvement: "-70%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Straight-Through Processing", improvement: "+85%", icon: <Target className="w-6 h-6" /> },
            { metric: "Customer Retention", improvement: "+25%", icon: <Users className="w-6 h-6" /> },
            { metric: "Loss Ratio", improvement: "-15%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
    saas: {
        name: "SaaS",
        description: "Scale your software business with automated sales, support, and customer success operations.",
        heroImage: "☁️",
        departments: [
            { name: "Sales Operations", description: "Automate lead routing, pipeline management, and forecasting" },
            { name: "Customer Success", description: "Streamline onboarding, health scoring, and renewals" },
            { name: "Support Operations", description: "Automate ticket routing, escalation, and resolution" },
            { name: "Revenue Operations", description: "Optimize billing, subscriptions, and revenue recognition" },
        ],
        workflows: [
            { name: "Lead-to-Deal", steps: ["Lead Capture", "Qualification", "Demo", "Close"], impact: "40% faster sales cycle" },
            { name: "Customer Onboarding", steps: ["Welcome", "Setup", "Training", "Go-Live"], impact: "2x faster activation" },
            { name: "Renewal Management", steps: ["Health Check", "Outreach", "Negotiation", "Renewal"], impact: "95% retention" },
        ],
        kpis: [
            { metric: "Sales Cycle Length", improvement: "-40%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Customer Churn", improvement: "-50%", icon: <Target className="w-6 h-6" /> },
            { metric: "NRR (Net Revenue Retention)", improvement: "+120%", icon: <TrendingUp className="w-6 h-6" /> },
            { metric: "Support Resolution Time", improvement: "-65%", icon: <CheckCircle className="w-6 h-6" /> },
        ],
    },
    hospitality: {
        name: "Hospitality",
        description: "Elevate guest experiences with seamless automation across reservations, operations, and service.",
        heroImage: "🏨",
        departments: [
            { name: "Front Office", description: "Automate reservations, check-in/out, and guest services" },
            { name: "Housekeeping", description: "Optimize room assignments, scheduling, and inspections" },
            { name: "Food & Beverage", description: "Streamline orders, inventory, and kitchen operations" },
            { name: "Revenue Management", description: "Dynamic pricing, channel management, and forecasting" },
        ],
        workflows: [
            { name: "Guest Check-in", steps: ["Reservation", "Pre-arrival", "Check-in", "Room Ready"], impact: "5-min check-in" },
            { name: "Housekeeping", steps: ["Room Status", "Assignment", "Cleaning", "Inspection"], impact: "30% faster turnover" },
            { name: "Event Management", steps: ["Inquiry", "Proposal", "Booking", "Execution"], impact: "2x event bookings" },
        ],
        kpis: [
            { metric: "Guest Wait Time", improvement: "-80%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Guest Satisfaction", improvement: "+35%", icon: <Target className="w-6 h-6" /> },
            { metric: "RevPAR", improvement: "+25%", icon: <TrendingUp className="w-6 h-6" /> },
            { metric: "Operational Efficiency", improvement: "+45%", icon: <CheckCircle className="w-6 h-6" /> },
        ],
    },
    education: {
        name: "Education",
        description: "Transform educational institutions with automated admissions, records, and student services.",
        heroImage: "🎓",
        departments: [
            { name: "Admissions", description: "Automate applications, evaluations, and enrollment" },
            { name: "Student Records", description: "Streamline transcripts, certifications, and compliance" },
            { name: "Financial Aid", description: "Automate aid processing, disbursement, and reporting" },
            { name: "Academic Operations", description: "Optimize scheduling, grading, and course management" },
        ],
        workflows: [
            { name: "Admissions", steps: ["Application", "Review", "Decision", "Enrollment"], impact: "60% faster decisions" },
            { name: "Financial Aid", steps: ["Application", "Verification", "Award", "Disbursement"], impact: "3x faster processing" },
            { name: "Course Registration", steps: ["Advising", "Selection", "Enrollment", "Confirmation"], impact: "Zero wait times" },
        ],
        kpis: [
            { metric: "Application Processing", improvement: "-70%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Student Satisfaction", improvement: "+40%", icon: <Target className="w-6 h-6" /> },
            { metric: "Enrollment Yield", improvement: "+25%", icon: <Users className="w-6 h-6" /> },
            { metric: "Administrative Costs", improvement: "-35%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
    "real-estate": {
        name: "Real Estate",
        description: "Accelerate property transactions and management with intelligent automation.",
        heroImage: "🏢",
        departments: [
            { name: "Sales & Leasing", description: "Automate leads, showings, and contract management" },
            { name: "Property Management", description: "Streamline tenant relations, maintenance, and collections" },
            { name: "Transaction Management", description: "Automate closings, documentation, and compliance" },
            { name: "Portfolio Operations", description: "Optimize reporting, budgeting, and asset management" },
        ],
        workflows: [
            { name: "Lead-to-Lease", steps: ["Inquiry", "Showing", "Application", "Move-in"], impact: "50% faster leasing" },
            { name: "Rent Collection", steps: ["Invoice", "Reminder", "Payment", "Reconciliation"], impact: "98% on-time payment" },
            { name: "Maintenance Request", steps: ["Request", "Triage", "Dispatch", "Resolution"], impact: "24hr resolution" },
        ],
        kpis: [
            { metric: "Vacancy Rate", improvement: "-40%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Tenant Satisfaction", improvement: "+50%", icon: <Target className="w-6 h-6" /> },
            { metric: "Collection Rate", improvement: "+15%", icon: <TrendingUp className="w-6 h-6" /> },
            { metric: "Maintenance Response", improvement: "-60%", icon: <CheckCircle className="w-6 h-6" /> },
        ],
    },
    "professional-services": {
        name: "Professional Services",
        description: "Optimize consulting, legal, and accounting operations with end-to-end automation.",
        heroImage: "💼",
        departments: [
            { name: "Client Management", description: "Automate intake, onboarding, and relationship management" },
            { name: "Project Delivery", description: "Streamline planning, execution, and resource allocation" },
            { name: "Time & Billing", description: "Automate timesheets, invoicing, and collections" },
            { name: "Knowledge Management", description: "Optimize document management and expertise sharing" },
        ],
        workflows: [
            { name: "Client Onboarding", steps: ["Engagement", "Conflicts Check", "Setup", "Kickoff"], impact: "70% faster onboarding" },
            { name: "Project Delivery", steps: ["Planning", "Execution", "Review", "Delivery"], impact: "On-time delivery" },
            { name: "Billing Cycle", steps: ["Time Entry", "Review", "Invoice", "Collection"], impact: "15-day DSO" },
        ],
        kpis: [
            { metric: "Utilization Rate", improvement: "+20%", icon: <Clock className="w-6 h-6" /> },
            { metric: "Realization Rate", improvement: "+95%", icon: <Target className="w-6 h-6" /> },
            { metric: "Client Satisfaction", improvement: "+45%", icon: <Users className="w-6 h-6" /> },
            { metric: "Revenue per Employee", improvement: "+30%", icon: <TrendingUp className="w-6 h-6" /> },
        ],
    },
};

export default function IndustryDetail() {
    const { industry } = useParams<{ industry: string }>();
    const data = industry ? industriesData[industry] : null;


    if (!data) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-32 pb-20 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">Industry not found</h1>
                    <Link to="/industries">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Industries
                        </Button>
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="section-container">
                    <Link to="/industries" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Industries
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-start gap-8"
                    >
                        <div className="text-7xl">{data.heroImage}</div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{data.name}</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">{data.description}</p>
                            <div className="mt-6 flex gap-4">
                                <Button asChild size="lg">
                                    <Link to="/demo">
                                        See Demo <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button asChild variant="outline" size="lg">
                                    <Link to="/contact">
                                        Contact Sales
                                    </Link>
                                </Button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="py-16">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground mb-8"
                    >
                        Departments We Transform
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {data.departments.map((dept, index) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-foreground mb-2">{dept.name}</h3>
                                <p className="text-muted-foreground">{dept.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Workflows Section */}
            <section className="py-16 bg-secondary/30">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground mb-8"
                    >
                        Core Workflows
                    </motion.h2>
                    <div className="space-y-6">
                        {data.workflows.map((workflow, index) => (
                            <motion.div
                                key={workflow.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-border bg-card"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">{workflow.name}</h3>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        {workflow.impact}
                                    </span>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    {workflow.steps.map((step, stepIndex) => (
                                        <div key={step} className="flex items-center gap-2">
                                            <span className="px-4 py-2 text-sm rounded-full bg-secondary text-foreground">
                                                {step}
                                            </span>
                                            {stepIndex < workflow.steps.length - 1 && (
                                                <ArrowRight size={16} className="text-muted-foreground" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KPIs Section */}
            <section className="py-16">
                <div className="section-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground mb-8"
                    >
                        Industry-Specific KPIs
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.kpis.map((kpi, index) => (
                            <motion.div
                                key={kpi.metric}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-border bg-card text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                    {kpi.icon}
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">{kpi.improvement}</div>
                                <div className="text-muted-foreground">{kpi.metric}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary/5">
                <div className="section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Ready to transform your {data.name.toLowerCase()} operations?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            See how Efficidex can automate your workflows and deliver measurable results.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild size="lg">
                                <Link to="/demo">
                                    Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}