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
                        We’re Building the Autonomous Layer of Business
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-lg text-muted-foreground"
                    >
                        Efficidex is building systems that execute real business operations
                        without human coordination. Not copilots. Not dashboards.
                        Autonomous execution at enterprise scale.
                    </motion.p>
                </div>
            </section>

            {/* WHY */}
            <section className="py-20">
                <div className="section-container max-w-4xl mx-auto space-y-16">

                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-bold">Why This Exists</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Modern companies waste massive effort on coordination:
                            approvals, handoffs, reporting, follow-ups, and tool glue.
                            We’re replacing that entire layer with autonomous systems
                            that plan, execute, and self-correct.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Target className="w-6 h-6 text-accent" />,
                                title: "Clear Mission",
                                desc: "Replace fragile operational workflows with autonomous execution.",
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                                title: "Real Problem",
                                desc: "Most enterprise work exists because systems can’t act on their own.",
                            },
                            {
                                icon: <Rocket className="w-6 h-6 text-accent" />,
                                title: "Long-Term Bet",
                                desc: "Future companies will be run by software. We’re building that core.",
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
                    <h2 className="text-3xl font-bold">Where We Are</h2>
                    <p className="text-muted-foreground text-lg">
                        We’re early, focused, and execution-driven.
                        We’re not mass-hiring or running open funnels.
                        We talk to people who build infrastructure,
                        ship systems, and think in first principles.
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
                    <h2 className="text-3xl font-bold">How We Work</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Users className="w-6 h-6 text-accent" />,
                                title: "Small, Sharp Teams",
                                desc: "We optimize for leverage, not headcount.",
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                                title: "Clarity First",
                                desc: "If it can’t be explained simply, it’s not ready.",
                            },
                            {
                                icon: <Rocket className="w-6 h-6 text-accent" />,
                                title: "Speed With Direction",
                                desc: "Fast execution matters only when direction is right.",
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
                    <h2 className="text-3xl font-bold">Build What Comes Next</h2>
                    <p className="text-muted-foreground">
                        If you want to work on autonomous systems that actually run
                        real companies — not demos or assistants — we should talk.
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
