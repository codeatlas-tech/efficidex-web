import { motion } from "framer-motion";
import {
  Stethoscope,
  CreditCard,
  CalendarCheck,
  FileCheck,
  ShieldAlert,
  PhoneOutgoing,
  Wallet,
  ClipboardList,
} from "lucide-react";

const healthcareUseCases = [
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling & Load Reduction",
    description:
      "Voice agents autonomously book, reschedule, and confirm appointments, reducing no-shows and eliminating front-desk bottlenecks.",
  },
  {
    icon: PhoneOutgoing,
    title: "Post-Visit & Care Follow-ups",
    description:
      "Automatically conduct post-visit check-ins, medication reminders, and lab-result follow-ups at scale.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Visit Intake & Verification",
    description:
      "Collect symptoms, insurance details, and patient consent before visits and sync directly into clinical systems.",
  },
  {
    icon: FileCheck,
    title: "Billing & Insurance Operations",
    description:
      "Handle routine billing questions, claim-status checks, and payment reminders without human staff.",
  },
];

const financeUseCases = [
  {
    icon: CreditCard,
    title: "Collections & Payment Resolution",
    description:
      "Autonomously contact customers for overdue payments, negotiate timelines, and log outcomes with full auditability.",
  },
  {
    icon: ShieldAlert,
    title: "KYC & Compliance Verification",
    description:
      "Verify customer identity, confirm submitted documents, and flag inconsistencies in real time for compliance teams.",
  },
  {
    icon: Wallet,
    title: "Account & Transaction Support",
    description:
      "Resolve balance checks, transaction explanations, and routine account inquiries instantly — without agents.",
  },
  {
    icon: PhoneOutgoing,
    title: "Loan & Application Progression",
    description:
      "Proactively follow up with applicants to collect missing information and accelerate approval workflows.",
  },
];

export function IndustryVoiceUseCasesSection() {
  return (
    <section className="py-20 lg:py-32 bg-card border-y border-border">
      <div className="section-container max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-semibold text-foreground mb-4"
          >
            Voice agents built for regulated, real-world operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            These are not generic bots or IVRs. Efficidex voice agents are trained
            to operate inside high-volume, regulated environments where accuracy,
            compliance, and outcomes matter.
          </motion.p>
        </div>

        {/* Healthcare */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Healthcare</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthcareUseCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="card-elevated p-6 space-y-3"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Finance */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Finance & FinTech</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financeUseCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="card-elevated p-6 space-y-3"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
