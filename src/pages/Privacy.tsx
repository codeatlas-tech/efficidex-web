import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20">
                <div className="section-container max-w-3xl mx-auto space-y-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                        <p className="text-muted-foreground">
                            Last updated: December 13, 2025
                        </p>
                    </div>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">

                        <p>
                            This Privacy Policy describes how Efficidex (“Efficidex”, “we”, “our”,
                            or “us”) collects, uses, stores, and protects information when you
                            access our website, request a demo, or interact with our platform
                            (collectively, the “Services”).
                        </p>

                        <p>
                            We design Efficidex as an enterprise system. We collect the minimum
                            data necessary to operate, secure, and improve the Services.
                        </p>

                        {/* 1 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                1. Information We Collect
                            </h2>

                            <p>
                                We collect information that you knowingly and voluntarily
                                provide, including:
                            </p>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Name, email address, phone number, and company information</li>
                                <li>Details submitted through contact, demo, or inquiry forms</li>
                                <li>Business-related messages or requests you send to us</li>
                            </ul>

                            <p>
                                We may also collect limited technical metadata such as browser
                                type, device type, and IP address for security, performance,
                                and abuse prevention purposes.
                            </p>

                            <p>
                                We do not knowingly collect sensitive personal data, financial
                                credentials, health records, or information from children.
                            </p>
                        </section>

                        {/* 2 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                2. How We Use Information
                            </h2>

                            <p>
                                We use collected information strictly for legitimate business
                                purposes, including:
                            </p>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Responding to inquiries, demos, and support requests</li>
                                <li>Communicating about the Services or requested follow-ups</li>
                                <li>Operating, securing, and improving the platform</li>
                                <li>Preventing fraud, abuse, or unauthorized access</li>
                            </ul>

                            <p>
                                We do not sell personal information. We do not use your data
                                for third-party advertising, profiling, or data brokerage.
                            </p>
                        </section>

                        {/* 3 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                3. Email & Communications
                            </h2>

                            <p>
                                If you provide your contact details, we may contact you
                                regarding your inquiry, demo request, or relevant product
                                updates. Emails are sent using trusted infrastructure providers.
                            </p>

                            <p>
                                You may request to stop receiving communications at any time
                                by replying to the email or contacting us directly.
                            </p>
                        </section>

                        {/* 4 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                4. Cookies & Analytics
                            </h2>

                            <p>
                                We use minimal cookies or similar technologies required for
                                basic functionality, performance monitoring, and security.
                            </p>

                            <p>
                                You can control cookies through your browser settings.
                                Disabling cookies may limit certain features of the Services.
                            </p>
                        </section>

                        {/* 5 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                5. Data Security
                            </h2>

                            <p>
                                We implement appropriate technical and organizational safeguards
                                to protect information against unauthorized access, loss,
                                misuse, or disclosure.
                            </p>

                            <p>
                                No system is perfectly secure. While we take security seriously,
                                we cannot guarantee absolute protection.
                            </p>
                        </section>

                        {/* 6 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                6. Data Retention
                            </h2>

                            <p>
                                We retain personal information only as long as necessary to
                                fulfill the purposes outlined in this Policy, unless a longer
                                retention period is required by law or contractual obligation.
                            </p>
                        </section>

                        {/* 7 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                7. Your Rights
                            </h2>

                            <p>
                                Depending on your jurisdiction, you may have rights to request
                                access, correction, or deletion of your personal information.
                            </p>

                            <p>
                                To exercise these rights, contact us using the details below.
                            </p>
                        </section>

                        {/* 8 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                8. Changes to This Policy
                            </h2>

                            <p>
                                We may update this Privacy Policy periodically. Updates will be
                                posted on this page with a revised date. Continued use of the
                                Services constitutes acceptance of the updated Policy.
                            </p>
                        </section>

                        {/* 9 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold text-foreground">
                                9. Contact
                            </h2>

                            <p>
                                If you have questions about this Privacy Policy or our data
                                practices, contact us at{" "}
                                <a
                                    href="mailto:support@efficidex.com"
                                    className="text-foreground underline"
                                >
                                    support@efficidex.com
                                </a>.
                            </p>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
