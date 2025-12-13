import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Lightbulb, Target, PhoneCall, Workflow, Cpu } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
                <div className="section-container text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        We build AI that actually runs your business.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-lg text-muted-foreground"
                    >
                        Efficidex is an autonomous operations platform that replaces manual work,
                        repetitive decisions, and inbound calls with reliable AI agents — including
                        voice AI that can handle conversations end-to-end.
                    </motion.p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-8"
                    >
                        Why Efficidex Exists
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Most companies don’t fail because of bad ideas — they fail because operations
                        don’t scale. Calls go unanswered. Requests pile up. Teams burn time on work that
                        should never require a human in the first place.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        We started Efficidex to eliminate that friction. Instead of adding more people,
                        more tools, or more dashboards, we build autonomous AI agents that *do the work* —
                        across voice, chat, internal systems, and workflows.
                    </motion.p>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Makes Efficidex Different
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <PhoneCall className="w-6 h-6 text-accent" />,
                                title: "Voice AI Agents",
                                desc: "AI agents that answer calls, understand intent, resolve requests, and escalate only when needed — 24/7.",
                            },
                            {
                                icon: <Workflow className="w-6 h-6 text-accent" />,
                                title: "Autonomous Workflows",
                                desc: "From CRM updates to support resolution to operations tasks — agents execute real workflows, not scripts.",
                            },
                            {
                                icon: <Cpu className="w-6 h-6 text-accent" />,
                                title: "Built for Control",
                                desc: "Human approval gates, audit trails, and predictable behavior — no hallucinations, no black boxes.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="card-elevated p-6 text-center space-y-4"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 mx-auto">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="section-container grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-semibold">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To replace manual operational work with dependable AI agents — starting
                            with voice, support, and back-office workflows.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-semibold">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            A world where businesses scale without hiring bottlenecks — where AI
                            handles execution and humans focus on judgment and strategy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Build</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                                title: "Practical AI",
                                desc: "If it doesn’t reliably work in production, we don’t ship it.",
                            },
                            {
                                icon: <Users className="w-6 h-6 text-accent" />,
                                title: "Human-in-the-Loop",
                                desc: "AI executes. Humans stay in control where it matters.",
                            },
                            {
                                icon: <Target className="w-6 h-6 text-accent" />,
                                title: "Outcome First",
                                desc: "We care about tickets closed, calls handled, and hours saved — not demos.",
                            },
                        ].map((value) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="card-elevated p-6 text-center space-y-4"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 mx-auto">
                                    {value.icon}
                                </div>
                                <h4 className="font-semibold">{value.title}</h4>
                                <p className="text-muted-foreground text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/5 border-t border-primary/10">
                <div className="section-container text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        See autonomous operations in action
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Experience how Efficidex voice and workflow agents handle real business work.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <LinkButton href="/demo" label="Try the Demo" />
                        <LinkButton href="/contact" label="Talk to Us" variant="secondary" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function LinkButton({ href, label, variant = "primary" }) {
    const base = "px-6 py-3 rounded-full font-medium transition-all";
    const styles =
        variant === "primary"
            ? `${base} bg-primary text-primary-foreground hover:bg-primary/90`
            : `${base} bg-background border border-border hover:bg-secondary`;

    return (
        <a href={href} className={styles}>
            {label}
        </a>
    );
}
