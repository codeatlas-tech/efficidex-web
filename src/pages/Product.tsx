import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { CommandCentreSection } from "@/components/sections/product/CommandCentreSection";
import { AutonomousAgentsSection } from "@/components/sections/product/AutonomousAgentsSection";
import { WorkflowsEngineSection } from "@/components/sections/product/WorkflowsEngineSection";
import { HumanApprovalSection } from "@/components/sections/product/HumanApprovalSection";
import { AuditTrailsSection } from "@/components/sections/product/AuditTrailsSection";
import { SynapticSection } from "@/components/sections/product/SynapticSection";
import { CTASection } from "@/components/sections/CTASection";
import { VoiceAgentsSection } from "@/components/sections/product/VoiceAgentsSection";
import { VoiceAgentsUseCasesSection } from "@/components/sections/product/VoiceAgentsUseCasesSection";
import { IndustryVoiceUseCasesSection } from "@/components/sections/product/IndustryVoiceUseCasesSection";

export default function Product() {
    return (
        <div className="min-h-screen bg-background">

            <Header />

            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="section-container text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                            The AI Operating System for Your Entire Business.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            One platform. Dozens of autonomous agents. Hundreds of workflows. Zero operational drag.
                        </p>
                    </div>
                </section>

                <CommandCentreSection />
                <AutonomousAgentsSection />
                <VoiceAgentsUseCasesSection />
                <VoiceAgentsSection />
                <IndustryVoiceUseCasesSection />
                <WorkflowsEngineSection />
                <HumanApprovalSection />
                <AuditTrailsSection />
                <SynapticSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
