import { motion } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    MessageSquare,
    Clock,
} from "lucide-react";

type ApprovalItem = {
    id: number;
    task: string;
    department: string;
    time: string;
    status: "pending";
};

const approvalItems: ApprovalItem[] = [
    {
        id: 1,
        task: "Payroll disbursement - $45,230",
        department: "Finance",
        time: "2 min ago",
        status: "pending",
    },
    {
        id: 2,
        task: "New vendor onboarding - Acme Corp",
        department: "Procurement",
        time: "5 min ago",
        status: "pending",
    },
    {
        id: 3,
        task: "Leave approval - 3 requests",
        department: "HR",
        time: "12 min ago",
        status: "pending",
    },
];

export function HumanApprovalSection() {
    return (
        <section className="py-20">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE: TEXT + ACTION TAGS */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            You stay in control. AI handles the rest.
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6">
                            Any sensitive action gets routed to your approval dashboard.
                            Approve, reject, add notes — everything is logged and auditable.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600">
                                <CheckCircle2 size={18} />
                                <span className="text-sm font-medium">Approve</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600">
                                <XCircle size={18} />
                                <span className="text-sm font-medium">Reject</span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600">
                                <MessageSquare size={18} />
                                <span className="text-sm font-medium">Add Notes</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: APPROVAL LIST */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">

                            {/* Header */}
                            <div className="p-4 border-b border-border bg-secondary/50">
                                <h3 className="font-semibold text-foreground">
                                    Pending Approvals
                                </h3>
                            </div>

                            {/* Approval Items */}
                            <div className="divide-y divide-border">
                                {approvalItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-4 hover:bg-secondary/30 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-4">

                                            {/* Left text */}
                                            <div>
                                                <p className="font-medium text-foreground mb-1">
                                                    {item.task}
                                                </p>

                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <span>{item.department}</span>
                                                    <span>•</span>
                                                    <Clock size={14} />
                                                    <span>{item.time}</span>
                                                </div>
                                            </div>

                                            {/* Action buttons */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="p-2 rounded-lg hover:bg-green-500/10 text-green-600 transition-colors"
                                                    aria-label="Approve"
                                                >
                                                    <CheckCircle2 size={20} />
                                                </button>

                                                <button
                                                    className="p-2 rounded-lg hover:bg-red-500/10 text-red-600 transition-colors"
                                                    aria-label="Reject"
                                                >
                                                    <XCircle size={20} />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
