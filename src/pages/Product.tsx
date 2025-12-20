import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { CommandCentreSection } from "@/components/sections/product/CommandCentreSection";
import { AutonomousAgentsSection } from "@/components/sections/product/AutonomousAgentsSection";
import { WorkflowsEngineSection } from "@/components/sections/product/WorkflowsEngineSection";
import { HumanApprovalSection } from "@/components/sections/product/HumanApprovalSection";
import { AuditTrailsSection } from "@/components/sections/product/AuditTrailsSection";
import { BenthamAISection } from "@/components/sections/product/BenthamAISection";
import { CTASection } from "@/components/sections/CTASection";
import { VoiceAgentsSection } from "@/components/sections/product/VoiceAgentsSection";
import { VoiceAgentsUseCasesSection } from "@/components/sections/product/VoiceAgentsUseCasesSection";
import { IndustryVoiceUseCasesSection } from "@/components/sections/product/IndustryVoiceUseCasesSection";

export default function Product() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* HERO */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            Autonomous systems that run your business.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Efficidex replaces operational teams with coordinated AI agents that
                            execute work across departments — continuously, auditable, and under
                            human control.
                        </p>
                    </div>
                </section>

                {/* REAL-TIME CONTROL */}
                <CommandCentreSection />

                {/* AI WORKFORCE */}
                <AutonomousAgentsSection />

                {/* VOICE: WHAT IT REPLACES */}
                <VoiceAgentsUseCasesSection />

                {/* VOICE: HOW IT WORKS */}
                <VoiceAgentsSection />

                {/* INDUSTRY-SPECIFIC VOICE */}
                <IndustryVoiceUseCasesSection />

                {/* EXECUTION ENGINE */}
                <WorkflowsEngineSection />

                {/* HUMAN GOVERNANCE */}
                <HumanApprovalSection />

                {/* AUDITABILITY */}
                <AuditTrailsSection />

                {/* STRATEGIC ORCHESTRATION */}
                <BenthamAISection />

                {/* CTA */}
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
