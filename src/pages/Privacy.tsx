import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background">

            <Header />

            <section className="pt-32 pb-16">
                <div className="section-container max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-muted-foreground">
                        Last updated: December 13, 2025
                    </p>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            This Privacy Policy explains how Efficidex (“Efficidex”, “we”, “our”,
                            or “us”) collects, uses, and protects personal information when you
                            visit our website or interact with our platform (the “Platform”).
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect information that you voluntarily provide to us, including
                            but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Name, email address, phone number, and company details</li>
                            <li>Information submitted via contact or demo request forms</li>
                            <li>Basic technical data such as browser type or device information</li>
                        </ul>
                        <p>
                            We do not knowingly collect sensitive personal data or information
                            from children.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            2. How We Use Your Information
                        </h2>
                        <p>
                            We use the information we collect solely to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Respond to inquiries and demo requests</li>
                            <li>Communicate product updates or follow-ups</li>
                            <li>Improve the Platform and user experience</li>
                            <li>Maintain security and prevent misuse</li>
                        </ul>
                        <p>
                            We do not sell your personal data or use it for third-party
                            advertising.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            3. Email Communications
                        </h2>
                        <p>
                            If you submit your email address, we may contact you regarding your
                            inquiry or relevant product updates. Emails are delivered using
                            trusted third-party infrastructure providers. You may request that
                            we stop contacting you at any time.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            4. Cookies & Tracking
                        </h2>
                        <p>
                            We may use minimal cookies or similar technologies necessary for
                            basic site functionality and performance. You can control cookies
                            through your browser settings. Disabling cookies may affect certain
                            features of the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            5. Data Security
                        </h2>
                        <p>
                            We implement reasonable technical and organizational measures to
                            protect your information. However, no system is completely secure,
                            and we cannot guarantee absolute security.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            6. Data Retention
                        </h2>
                        <p>
                            We retain personal information only for as long as necessary to
                            fulfill the purposes described in this Policy, unless a longer
                            retention period is required or permitted by law.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            7. Your Rights
                        </h2>
                        <p>
                            Depending on your jurisdiction, you may have the right to request
                            access, correction, or deletion of your personal information. To
                            make such a request, please contact us.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            8. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes
                            will be reflected on this page with an updated revision date.
                            Continued use of the Platform constitutes acceptance of the updated
                            Policy.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            9. Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle
                            your data, you may contact us at{" "}
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
