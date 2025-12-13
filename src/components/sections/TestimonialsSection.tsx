import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
    quote: string;
    author: string;
    company: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Efficidex replaced five manual workflows in under a week. Tasks that took hours now happen instantly — with full audit trails. It feels like hiring an entire operations team overnight.",
        author: "Operations Head",
        company: "Logistics Company",
    },
    {
        quote:
            "We automated our entire patient billing cycle. Insurance claims that used to take days now process in minutes. The ROI was visible within the first month.",
        author: "CFO",
        company: "Healthcare Network",
    },
    {
        quote:
            "Our support team now focuses on high-value interactions. Routine tickets, escalations, and follow-ups are handled autonomously. Customer satisfaction is at an all-time high.",
        author: "VP of Customer Success",
        company: "SaaS Platform",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 lg:py-32 bg-card border-y border-border">
            <div className="section-container">

                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-semibold text-foreground text-center mb-16"
                >
                    Real teams. Real outcomes.
                </motion.h2>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl border border-border bg-background"
                        >
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />

                            <p className="text-foreground mb-6 leading-relaxed">
                                “{testimonial.quote}”
                            </p>

                            <div className="border-t border-border pt-4">
                                <p className="font-semibold text-foreground">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
