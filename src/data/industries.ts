import {
    DollarSign,
    Heart,
    Cloud,
    Factory,
    ShoppingCart,
    Truck,
    Hotel,
    GraduationCap,
    Building2,
    Briefcase,
    TrendingUp,
    ShieldCheck,
    Users,
    CheckCircle,
} from "lucide-react";

// -----------------------------
// FULL INDUSTRY DATASET
// -----------------------------

export const INDUSTRIES = {
    healthcare: {
        slug: "healthcare",
        name: "Healthcare",
        heroImage: "🩺",
        description:
            "Automate patient flow, billing, insurance, labs, pharmacy, and hospital operations with AI-driven workflows.",
        departments: [
            { name: "Billing", description: "Automate coding, claims, payments, and reimbursements." },
            { name: "Labs", description: "Handle routing, testing, reporting, and patient notifications." },
            { name: "Pharmacy", description: "Automate dispensing, stock control, and prescription reviews." },
            { name: "Patient Services", description: "Manage appointments, queues, concierge, and escalations." },
            { name: "Insurance", description: "Automate verification, approvals, adjudication, and settlements." },
        ],
        workflows: [
            { name: "Patient Intake", steps: ["Register", "Verify", "Queue", "Assign"], impact: "40% faster throughput" },
            { name: "Claims Processing", steps: ["Collect", "Check", "Approve", "Settle"], impact: "95% accuracy" },
            { name: "Lab Processing", steps: ["Receive", "Process", "Validate", "Publish"], impact: "2x faster TAT" },
        ],
        kpis: [
            { metric: "Claim Error Reduction", improvement: "60%", icon: ShieldCheck },
            { metric: "Lab TAT Improvement", improvement: "2x", icon: TrendingUp },
            { metric: "Patient Queue Reduction", improvement: "35%", icon: Users },
            { metric: "Satisfaction Score", improvement: "4.8★", icon: CheckCircle },
        ],
    },

    finance: {
        slug: "finance",
        name: "Finance / FinTech",
        heroImage: "💰",
        description:
            "Automate KYC, underwriting, risk checks, fraud detection, loan processing, and regulatory workflows.",
        departments: [
            { name: "KYC", description: "OCR, verification, fraud scoring, and compliance checks." },
            { name: "Lending", description: "Automate underwriting, approvals, agreements, and disbursement." },
            { name: "Risk", description: "Automate AML scans, rule checks, and monitoring." },
            { name: "Payments", description: "Automate payouts, settlements, and reconciliation." },
        ],
        workflows: [
            { name: "KYC Process", steps: ["Collect", "Verify", "Score", "Approve"], impact: "99% accuracy" },
            { name: "Loan Underwriting", steps: ["Fetch Data", "Analyze", "Decision", "Sign"], impact: "5x faster" },
            { name: "Fraud Monitoring", steps: ["Scan", "Flag", "Investigate", "Escalate"], impact: "70% reduction" },
        ],
        kpis: [
            { metric: "KYC Accuracy", improvement: "99%", icon: ShieldCheck },
            { metric: "Underwriting Time", improvement: "5x faster", icon: TrendingUp },
            { metric: "Fraud Loss Reduction", improvement: "70%", icon: CheckCircle },
            { metric: "Ops Cost Reduction", improvement: "40%", icon: DollarSign },
        ],
    },

    saas: {
        slug: "saas",
        name: "SaaS",
        heroImage: "☁️",
        description:
            "Automate sales, onboarding, support, renewals, CSM workflows, and revenue operations.",
        departments: [
            { name: "Sales", description: "Automate lead scoring, outreach, qualification, and proposals." },
            { name: "Support", description: "AI triage, auto-resolutions, routing, and SLAs." },
            { name: "CSM", description: "Renewals, health checks, QBR prep, and churn prediction." },
            { name: "RevOps", description: "Forecasting, pipeline cleaning, and CRM hygiene." },
        ],
        workflows: [
            { name: "Lead-to-Deal", steps: ["Lead", "Qualify", "Proposal", "Close"], impact: "3x conversions" },
            { name: "Ticket Routing", steps: ["Capture", "Classify", "Resolve", "Close"], impact: "80% auto-resolution" },
            { name: "Renewal Workflow", steps: ["Reminder", "Review", "Proposal", "Sign"], impact: "50% reduction in churn" },
        ],
        kpis: [
            { metric: "Auto-Resolution Rate", improvement: "80%", icon: TrendingUp },
            { metric: "Sales Conversion", improvement: "3x", icon: TrendingUp },
            { metric: "Churn Reduction", improvement: "50%", icon: ShieldCheck },
            { metric: "Pipeline Hygiene", improvement: "90%", icon: CheckCircle },
        ],
    },

    logistics: {
        slug: "logistics",
        name: "Logistics",
        heroImage: "🚚",
        description:
            "Automate orders, dispatch, routing, warehouse ops, and delivery coordination.",
        departments: [
            { name: "Dispatch", description: "Automated assignment, routing, and tracking." },
            { name: "Warehouse Ops", description: "Picking, packing, returns, and inventory updates." },
            { name: "Fleet", description: "Driver management, schedules, and compliance." },
            { name: "Customer Ops", description: "Notifications, escalations, and delivery support." },
        ],
        workflows: [
            { name: "Order Fulfillment", steps: ["Order", "Pick", "Pack", "Dispatch"], impact: "2x throughput" },
            { name: "Return Automation", steps: ["Request", "Check", "Refund", "Restock"], impact: "60% faster" },
            { name: "Route Optimization", steps: ["Cluster", "Map", "Assign", "Track"], impact: "20% fuel savings" },
        ],
        kpis: [
            { metric: "Throughput Increase", improvement: "2x", icon: TrendingUp },
            { metric: "Faster Returns", improvement: "60%", icon: CheckCircle },
            { metric: "Fuel Savings", improvement: "20%", icon: ShieldCheck },
            { metric: "Delivery SLA Accuracy", improvement: "95%", icon: TrendingUp },
        ],
    },

    retail: {
        slug: "retail",
        name: "Retail & E-Commerce",
        heroImage: "🛒",
        description:
            "Automate catalog, pricing, inventory, order processing, returns, and customer experience.",
        departments: [
            { name: "Pricing", description: "Dynamic pricing, competitor scan, and margin optimization." },
            { name: "Inventory", description: "Stock prediction, auto-replenishment, and audits." },
            { name: "Fulfillment", description: "Order routing, QC, packing, and dispatch." },
            { name: "CX", description: "AI chat, escalations, and satisfaction loops." },
        ],
        workflows: [
            { name: "Catalog Automation", steps: ["Import", "Clean", "Tag", "Publish"], impact: "90% faster onboarding" },
            { name: "Dynamic Pricing", steps: ["Fetch", "Compare", "Calculate", "Apply"], impact: "20% margin gain" },
            { name: "Returns Automation", steps: ["Request", "Check", "Refund", "Restock"], impact: "50% faster" },
        ],
        kpis: [
            { metric: "Faster Catalog Onboarding", improvement: "90%", icon: TrendingUp },
            { metric: "Margin Increase", improvement: "20%", icon: DollarSign },
            { metric: "Return Efficiency", improvement: "50%", icon: CheckCircle },
            { metric: "CX Satisfaction", improvement: "4.7★", icon: Users },
        ],
    },

    manufacturing: {
        slug: "manufacturing",
        name: "Manufacturing",
        heroImage: "🏭",
        description:
            "Automate production planning, maintenance, QC, and supply chain operations.",
        departments: [
            { name: "Production", description: "Scheduling, planning, work orders." },
            { name: "Quality", description: "Inspection, defect logging, reporting." },
            { name: "Maintenance", description: "Preventive tasks, repairs, and logs." },
            { name: "Supply Chain", description: "Vendor ops, procurement, inbound logistics." },
        ],
        workflows: [
            { name: "Production Cycle", steps: ["Plan", "Produce", "QC", "Ship"], impact: "30% less downtime" },
            { name: "QC Workflow", steps: ["Sample", "Inspect", "Log", "Approve"], impact: "50% fewer defects" },
            { name: "Maintenance Automation", steps: ["Detect", "Assign", "Fix", "Verify"], impact: "40% cost reduction" },
        ],
        kpis: [
            { metric: "Downtime Reduction", improvement: "30%", icon: ShieldCheck },
            { metric: "Defect Reduction", improvement: "50%", icon: CheckCircle },
            { metric: "Maintenance Cost Savings", improvement: "40%", icon: TrendingUp },
            { metric: "Production Speed", improvement: "25%", icon: TrendingUp },
        ],
    },

    hospitality: {
        slug: "hospitality",
        name: "Hospitality",
        heroImage: "🏨",
        description:
            "Automate reservations, housekeeping, guest touchpoints, and service workflows.",
        departments: [
            { name: "Reservations", description: "Pre-stay automation, booking flows, and confirmation." },
            { name: "Housekeeping", description: "Task assignments, routing, QC, and audits." },
            { name: "Guest Ops", description: "Requests, escalations, service workflows." },
            { name: "F&B", description: "Orders, billing, and kitchen workflows." },
        ],
        workflows: [
            { name: "Reservation Workflow", steps: ["Enquire", "Offer", "Confirm", "Check-in"], impact: "35% reduced load" },
            { name: "Room Turnover", steps: ["Assign", "Clean", "QC", "Ready"], impact: "2x faster turnover" },
            { name: "Guest Request", steps: ["Capture", "Route", "Serve", "Close"], impact: "4.9★ experience" },
        ],
        kpis: [
            { metric: "Turnover Speed", improvement: "2x", icon: TrendingUp },
            { metric: "Guest Satisfaction", improvement: "4.9★", icon: Users },
            { metric: "Ops Load Reduction", improvement: "35%", icon: ShieldCheck },
            { metric: "Service Efficiency", improvement: "50%", icon: CheckCircle },
        ],
    },

    education: {
        slug: "education",
        name: "Education",
        heroImage: "🎓",
        description:
            "Automate admissions, grading, attendance, fee processing, and academic workflows.",
        departments: [
            { name: "Admissions", description: "Document checks, eligibility, interviews." },
            { name: "Academics", description: "Scheduling, grading, evaluations." },
            { name: "Finance", description: "Fee collection, reminders, audits." },
            { name: "Student Services", description: "Requests, certificates, hostels." },
        ],
        workflows: [
            { name: "Admissions", steps: ["Apply", "Verify", "Evaluate", "Enroll"], impact: "70% faster" },
            { name: "Exam Processing", steps: ["Set", "Conduct", "Evaluate", "Release"], impact: "2x faster cycle" },
            { name: "Fee Workflow", steps: ["Reminder", "Collect", "Reconcile", "Archive"], impact: "40% fewer delays" },
        ],
        kpis: [
            { metric: "Admission Time Savings", improvement: "70%", icon: TrendingUp },
            { metric: "Exam Turnaround", improvement: "2x", icon: ShieldCheck },
            { metric: "Fee Delay Reduction", improvement: "40%", icon: CheckCircle },
            { metric: "Student Satisfaction", improvement: "4.8★", icon: Users },
        ],
    },

    "real-estate": {
        slug: "real-estate",
        name: "Real Estate",
        heroImage: "🏢",
        description:
            "Automate leads, visits, tenant queries, maintenance, and rent collection.",
        departments: [
            { name: "Leasing", description: "Lead nurturing, visits, agreements." },
            { name: "Tenant Ops", description: "Requests, complaints, escalations." },
            { name: "Maintenance", description: "Scheduling, vendor management." },
            { name: "Billing", description: "Invoices, rent, statements." },
        ],
        workflows: [
            { name: "Lead-to-Lease", steps: ["Lead", "Visit", "Offer", "Sign"], impact: "30% faster conversion" },
            { name: "Tenant Requests", steps: ["Log", "Assign", "Resolve", "Close"], impact: "50% faster resolution" },
            { name: "Rent Collection", steps: ["Invoice", "Remind", "Collect", "Reconcile"], impact: "90% on-time" },
        ],
        kpis: [
            { metric: "Conversion Rate", improvement: "30%", icon: TrendingUp },
            { metric: "Resolution Time", improvement: "50%", icon: CheckCircle },
            { metric: "On-Time Payments", improvement: "90%", icon: ShieldCheck },
            { metric: "Tenant Satisfaction", improvement: "4.7★", icon: Users },
        ],
    },

    "professional-services": {
        slug: "professional-services",
        name: "Professional Services",
        heroImage: "💼",
        description:
            "Automate project management, billing, client communications, and delivery workflows.",
        departments: [
            { name: "Project Management", description: "Planning, allocation, tracking." },
            { name: "Client Ops", description: "Updates, escalations, delivery workflows." },
            { name: "Billing", description: "Timesheets, invoicing, reconciliation." },
            { name: "Delivery", description: "QA, approvals, documentation." },
        ],
        workflows: [
            { name: "Timesheet-to-Invoice", steps: ["Log", "Approve", "Bill", "Reconcile"], impact: "100% accuracy" },
            { name: "Project Intake", steps: ["Define", "Scope", "Assign", "Execute"], impact: "30% faster kickoff" },
            { name: "Deliverable Workflow", steps: ["Draft", "Review", "Revise", "Ship"], impact: "50% fewer errors" },
        ],
        kpis: [
            { metric: "Billing Accuracy", improvement: "100%", icon: CheckCircle },
            { metric: "Kickoff Speed", improvement: "30%", icon: TrendingUp },
            { metric: "Delivery Quality", improvement: "50%", icon: ShieldCheck },
            { metric: "Client Satisfaction", improvement: "4.9★", icon: Users },
        ],
    },
};

export type IndustryKey = keyof typeof INDUSTRIES;
export type Industry = (typeof INDUSTRIES)[IndustryKey];
