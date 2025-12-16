import { Link } from "react-router-dom";
import logo from "@/assets/efficidex-logo.png";

type FooterLink = {
    label: string;
    href: string;
};

type FooterSections = {
    company: FooterLink[];
    product: FooterLink[];
    resources: FooterLink[];
};

const footerLinks: FooterSections = {
    company: [
        { label: "About", href: "/about" },
        { label: "Join Our Mission", href: "/mission" },
        { label: "Contact", href: "/contact" },
    ],
    product: [
        { label: "Product", href: "/product" },
        { label: "Docs", href: "/docs" },
    ],
    resources: [
        { label: "Use Cases", href: "/use-cases" },
        { label: "Industries", href: "/industries" },
        { label: "FAQ", href: "/faq" },
    ],
};

function FooterNavItem({ link }: { link: FooterLink }) {
    return (
        <Link
            to={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
            {link.label}
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="section-container py-16">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

                    {/* Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="Efficidex" className="h-8 w-8 rounded-full" />
                            <span className="text-lg font-semibold">Efficidex</span>
                        </Link>

                        <p className="text-sm text-muted-foreground max-w-xs">
                            Autonomous AI operations for the modern enterprise.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map(link => (
                                <li key={link.label}>
                                    <FooterNavItem link={link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map(link => (
                                <li key={link.label}>
                                    <FooterNavItem link={link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map(link => (
                                <li key={link.label}>
                                    <FooterNavItem link={link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Efficidex. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy"
                            className="text-sm text-muted-foreground hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms"
                            className="text-sm text-muted-foreground hover:text-foreground"
                        >
                            Terms of Service
                        </Link>

                    </div>
                </div>

            </div>
        </footer>
    );
}
