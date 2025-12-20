import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-16">
                <div className="section-container max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold">Terms of Service</h1>
                    <p className="text-muted-foreground">
                        Last updated: December 13, 2025
                    </p>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            These Terms of Service (“Terms”) govern your access to and use of
                            Efficidex (“Efficidex”, “we”, “our”, or “us”), including our website,
                            software platform, APIs, AI agents, voice systems, and related services
                            (collectively, the “Platform”).
                            By accessing or using the Platform, you agree to be bound by these Terms.
                            If you do not agree, you must not use the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            1. Nature of the Platform
                        </h2>
                        <p>
                            Efficidex provides autonomous and semi-autonomous AI systems designed
                            to execute operational workflows, trigger actions, communicate with
                            third parties, and integrate with external systems.
                            You acknowledge that the Platform may perform actions automatically
                            based on configurations, policies, approvals, and data you provide.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            2. Human Oversight & Responsibility
                        </h2>
                        <p>
                            You are solely responsible for configuring approval thresholds,
                            permissions, escalation rules, and access controls.
                            While Efficidex provides human-in-the-loop mechanisms, you remain
                            fully responsible for reviewing, approving, and monitoring
                            AI-executed actions where required.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            3. Acceptable Use
                        </h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Use the Platform for unlawful, deceptive, or harmful activities</li>
                            <li>Configure agents to impersonate individuals unlawfully</li>
                            <li>Attempt to bypass safeguards, approvals, or audit mechanisms</li>
                            <li>Reverse engineer, resell, sublicense, or exploit the Platform</li>
                            <li>Use the Platform to violate third-party rights or regulations</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-foreground">
                            4. AI & Automation Disclaimer
                        </h2>
                        <p>
                            You acknowledge that AI systems are probabilistic and may produce
                            unexpected outputs. Efficidex does not guarantee that AI-generated
                            actions, recommendations, or communications will be error-free,
                            complete, or suitable for every context.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            5. Integrations & Third-Party Systems
                        </h2>
                        <p>
                            The Platform may connect to third-party tools, APIs, telephony providers,
                            and external systems. Efficidex is not responsible for third-party
                            outages, errors, data loss, pricing changes, or compliance failures.
                            Your use of third-party services is governed by their respective terms.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            6. Data & Inputs
                        </h2>
                        <p>
                            You retain ownership of your data. You grant Efficidex a limited right
                            to process data solely for providing the Platform.
                            You are responsible for ensuring that all data provided is lawful,
                            accurate, and compliant with applicable regulations.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            7. Intellectual Property
                        </h2>
                        <p>
                            All software, models, workflows, designs, trademarks, and platform
                            components are owned by or licensed to Efficidex.
                            These Terms do not grant you ownership rights in the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            8. Platform Availability
                        </h2>
                        <p>
                            The Platform is provided on an “as is” and “as available” basis.
                            Features may change, be deprecated, or be removed without notice.
                            We do not guarantee uninterrupted availability.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            9. Limitation of Liability
                        </h2>
                        <p>
                            To the maximum extent permitted by law, Efficidex shall not be liable
                            for indirect, incidental, consequential, or special damages,
                            including loss of revenue, data, reputation, or business operations,
                            arising from use of the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            10. Termination
                        </h2>
                        <p>
                            We may suspend or terminate access to the Platform at any time if
                            these Terms are violated or if continued use poses operational,
                            legal, or security risks.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            11. Changes to Terms
                        </h2>
                        <p>
                            We may update these Terms at any time. Continued use of the Platform
                            after updates constitutes acceptance of the revised Terms.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            12. Contact
                        </h2>
                        <p>
                            Questions about these Terms may be directed to{" "}
                            <a
                                href="mailto:support@efficidex.com"
                                className="text-foreground underline"
                            >
                                support@efficidex.com
                            </a>.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
