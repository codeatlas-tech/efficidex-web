import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
    Users,
    Lightbulb,
    Target,
    PhoneCall,
    Workflow,
    Cpu,
} from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
                <div className="section-container text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        We’re Building the Future of Work
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        The world doesn’t need more software tools. It needs software
                        that does the work.
                        <br />
                        <br />
                        Efficidex AI is the autonomous business operating system — AI
                        agents that don’t just assist your team, they replace repetitive
                        operational work entirely. We’re not building another SaaS tool
                        for humans to use. We’re building an AI workforce that runs your
                        business 24/7.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center"
                    >
                        Our Mission
                    </motion.h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Make world-class business operations accessible to every company,
                        regardless of size.
                        <br />
                        <br />
                        Today, only large enterprises can afford operations teams,
                        expensive consultants, and enterprise software. Small and
                        mid-sized businesses struggle with a Frankenstein stack of 15+
                        tools, burning cash while competitors move faster.
                        <br />
                        <br />
                        We’re changing that. With Efficidex, a 10-person startup gets the
                        same operational excellence as a 1,000-person company — at
                        one-tenth the cost.
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container max-w-5xl mx-auto space-y-10">
                    <h2 className="text-3xl font-bold text-center">
                        The Problem We’re Solving
                    </h2>

                    <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                        <p>
                            Businesses are bleeding money.
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                $50K–200K per year on disconnected SaaS tools
                            </li>
                            <li>
                                $500K–2M per year on operational roles doing repetitive
                                work
                            </li>
                            <li>
                                200+ hours per month manually integrating systems and
                                fixing errors
                            </li>
                        </ul>

                        <p className="font-medium text-foreground">
                            Total waste: $750K–$2.2M per company, every year.
                        </p>

                        <p>
                            AI is already good enough to do most of this work — better,
                            faster, and cheaper. But current AI solutions miss the mark.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-20">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Solution: The Autonomous Business OS
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="card-elevated p-6 space-y-4">
                            <h4 className="font-semibold">
                                Bentham AI — Strategic Orchestrator
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                Analyzes your business in real time, creates strategy,
                                coordinates all AI agents, and makes autonomous decisions
                                with human oversight. Continuously learns and optimizes.
                            </p>
                        </div>

                        <div className="card-elevated p-6 space-y-4">
                            <h4 className="font-semibold">
                                Universal Agents — AI Workforce
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                Specialized agents for Sales, Marketing, Finance, HR,
                                Operations, Customer Success, and Legal — executing real
                                business work end to end.
                            </p>
                        </div>

                        <div className="card-elevated p-6 space-y-4">
                            <h4 className="font-semibold">
                                Industry Agents — Built-In Expertise
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                Vertical-specific intelligence for healthcare, retail,
                                manufacturing, real estate, construction, professional
                                services, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container max-w-5xl mx-auto space-y-10">
                    <h2 className="text-3xl font-bold text-center">
                        What Makes Us Different
                    </h2>

                    <ul className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <li>
                            <strong className="text-foreground">
                                We don’t assist. We replace.
                            </strong>{" "}
                            Efficidex agents execute work autonomously so you wake up to
                            work already done.
                        </li>
                        <li>
                            <strong className="text-foreground">
                                One platform. Everything.
                            </strong>{" "}
                            Replace 15+ tools with a single system and source of truth.
                        </li>
                        <li>
                            <strong className="text-foreground">
                                True intelligence, not rules.
                            </strong>{" "}
                            Agents reason, learn, and adapt to your business over time.
                        </li>
                        <li>
                            <strong className="text-foreground">
                                Built for SMBs first.
                            </strong>{" "}
                            Deploy in days. Starting at $499/month.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl font-bold text-center">Our Values</h2>

                    <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <li><strong className="text-foreground">Action over credentials.</strong></li>
                        <li><strong className="text-foreground">Autonomy is the goal.</strong></li>
                        <li><strong className="text-foreground">SMBs deserve enterprise tools.</strong></li>
                        <li><strong className="text-foreground">Transparency & safety.</strong></li>
                        <li><strong className="text-foreground">Customer obsession.</strong></li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}
