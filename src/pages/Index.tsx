import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Index() {
    return (
        <>

            <div className="min-h-screen bg-background">
                <Header />

                <main>
                    <HeroSection />
                    <WhatWeDoSection />
                    <DemoSection />
                    <IndustriesSection />
                    <BenefitsSection />
                    <IntegrationsSection />
                    <FAQSection />
                    <CTASection />
                </main>

                <Footer />
            </div>
        </>
    );
}
