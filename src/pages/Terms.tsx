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
                            platform, products, and services (collectively, the “Platform”).
                            By accessing or using the Platform, you agree to be bound by these
                            Terms. If you do not agree, you may not use the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            1. Platform Status & Availability
                        </h2>
                        <p>
                            Efficidex is an evolving product. Certain features may be in beta,
                            experimental, or under active development. We do not guarantee
                            uninterrupted availability, specific functionality, or long-term
                            support for any feature.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            2. Acceptable Use
                        </h2>
                        <p>
                            You agree to use the Platform only for lawful purposes and in
                            compliance with applicable laws and regulations. You must not:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Attempt to gain unauthorized access to systems or data</li>
                            <li>Interfere with or disrupt the Platform or its infrastructure</li>
                            <li>Reverse engineer, copy, or resell the Platform</li>
                            <li>Use the Platform to violate third-party rights</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-foreground">
                            3. Accounts & Submissions
                        </h2>
                        <p>
                            If you submit information through forms (such as demo requests or
                            contact inquiries), you represent that the information is accurate
                            and that you are authorized to provide it. You are responsible for
                            maintaining the confidentiality of any credentials provided to you.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            4. Intellectual Property
                        </h2>
                        <p>
                            All software, designs, content, trademarks, and intellectual
                            property associated with the Platform are owned by or licensed to
                            Efficidex. Nothing in these Terms grants you any ownership rights
                            in the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            5. Feedback
                        </h2>
                        <p>
                            If you provide feedback, suggestions, or ideas, you grant us a
                            non-exclusive, royalty-free, worldwide right to use them without
                            restriction or compensation.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            6. Disclaimer of Warranties
                        </h2>
                        <p>
                            The Platform is provided on an “as is” and “as available” basis.
                            We make no warranties, express or implied, including warranties
                            of merchantability, fitness for a particular purpose, or
                            non-infringement.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            7. Limitation of Liability
                        </h2>
                        <p>
                            To the maximum extent permitted by law, Efficidex shall not be
                            liable for any indirect, incidental, consequential, or special
                            damages arising out of or related to your use of the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            8. Termination
                        </h2>
                        <p>
                            We may suspend or terminate access to the Platform at any time,
                            with or without notice, if we reasonably believe these Terms have
                            been violated.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            9. Changes to These Terms
                        </h2>
                        <p>
                            We may update these Terms from time to time. Continued use of the
                            Platform after changes become effective constitutes acceptance
                            of the revised Terms.
                        </p>

                        <h2 className="text-xl font-semibold text-foreground">
                            10. Contact
                        </h2>
                        <p>
                            If you have questions about these Terms, you may contact us at{" "}
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
