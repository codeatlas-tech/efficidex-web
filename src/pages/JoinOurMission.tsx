import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinOurMission() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
                <div className="section-container text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Join Our Mission
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-lg text-muted-foreground"
                    >
                        Efficidex is building the autonomous operating layer for modern
                        enterprises. We believe most operational work should not require
                        humans at all — and we’re building the system that makes that real.
                    </motion.p>
                </div>
            </section>

            {/* WHY */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-16">

                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-bold">Why We Exist</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Enterprises today run on fragile workflows, manual approvals,
                            disconnected tools, and constant human intervention.
                            We’re here to replace that entire operational layer with
                            autonomous AI systems that execute work reliably, continuously,
                            and at scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Target className="w-6 h-6 text-accent" />,
                                title: "A Focused Mission",
                                desc: "Remove operational bottlenecks from businesses using autonomous AI agents.",
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                                title: "A Real Problem",
                                desc: "Most enterprise time is lost to coordination, not thinking. That’s broken.",
                            },
                            {
                                icon: <Rocket className="w-6 h-6 text-accent" />,
                                title: "A Long-Term Bet",
                                desc: "Autonomous systems will run future companies. We’re building that core now.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="card-elevated p-6 text-center space-y-4"
                            >
                                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* STATUS */}
            <section className="py-20 bg-card border-t border-border">
                <div className="section-container max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Where We Are Right Now</h2>
                    <p className="text-muted-foreground text-lg">
                        We’re early, product-driven, and building fast. We’re not hiring
                        aggressively yet — but we actively talk to engineers, operators,
                        researchers, and builders who resonate with what we’re creating.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Button asChild variant="hero" size="lg">
                            <Link to="/contact">Start a Conversation</Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link to="/demo">See the Product</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl font-bold">How We Think</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Users className="w-6 h-6 text-accent" />,
                                title: "People > Process",
                                desc: "We optimize for clear thinkers, not rigid hierarchies.",
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                                title: "Clarity Over Noise",
                                desc: "Simple systems beat complex explanations every time.",
                            },
                            {
                                icon: <Rocket className="w-6 h-6 text-accent" />,
                                title: "Speed With Intent",
                                desc: "Move fast — but only in the direction that actually matters.",
                            },
                        ].map((value) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="card-elevated p-6 text-center space-y-4"
                            >
                                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                                    {value.icon}
                                </div>
                                <h3 className="font-semibold">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="section-container max-w-2xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold">Build the Future With Us</h2>
                    <p className="text-muted-foreground">
                        If autonomous systems, enterprise infrastructure, and real-world AI
                        excite you — we should talk.
                    </p>

                    <Button asChild size="lg" variant="hero">
                        <Link to="/contact">Reach Out</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
