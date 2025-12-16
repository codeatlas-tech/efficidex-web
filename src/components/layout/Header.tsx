import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/efficidex-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Product", href: "/product" },
    { label: "Industries", href: "/industries" },
    { label: "Use Cases", href: "/use-cases" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="section-container">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Efficidex" className="h-8 w-8 rounded-full" />
                        <span className="text-lg font-semibold">Efficidex</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card px-4 py-1">
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                to={href}
                                className="nav-pill nav-pill-inactive"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <Button asChild variant="hero" size="sm">
                            <Link to="/demo">Try Demo</Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border bg-card"
                    >
                        <nav className="section-container py-4 flex flex-col gap-2">
                            {navLinks.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    to={href}
                                    className="px-4 py-3 rounded-lg hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}

                            <div className="mt-4 pt-4 border-t border-border">
                                <Button asChild variant="hero" className="w-full">
                                    <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                                        Try Demo
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
