import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


import {
    Play,
    Clock,
    Users,
    Sparkles,
    CheckCircle,
    Mic,
    Calendar,
} from "lucide-react";

const demoFormSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone: z
        .string()
        .trim()
        .min(10)
        .max(20)
        .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
    company: z.string().trim().min(2).max(100),
    companySize: z.string().min(1),
    industry: z.string().min(1),
    challenge: z.string().trim().min(10).max(500),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const industries = [
    "Healthcare",
    "Finance & Banking",
    "Manufacturing",
    "Retail & E-commerce",
    "Logistics & Supply Chain",
    "Insurance",
    "SaaS",
    "Hospitality",
    "Education",
    "Real Estate",
    "Professional Services",
    "Other",
];

const companySizes = [
    "1-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
];

const demoFeatures = [
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Synaptic AI Engine",
        description:
            "See how our AI understands context, SOPs, and business logic to orchestrate workflows end-to-end.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Autonomous Agents",
        description:
            "Watch AI agents execute complex operational tasks with reasoning and decision-making.",
    },
    {
        icon: <Mic className="w-6 h-6" />,
        title: "Voice AI Agents",
        description:
            "Experience AI voice agents that handle inbound and outbound calls, collect information, and trigger workflows automatically.",
    },
    {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Human Approval Gates",
        description:
            "Control critical decisions with built-in human-in-the-loop approval checkpoints.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Real-Time Analytics",
        description:
            "Track execution status, outcomes, and performance metrics across all agents in real time.",
    },
];

const benefits = [
    "Personalized walkthrough tailored to your industry",
    "Live Q&A with our solutions experts",
    "Custom ROI analysis for your organization",
    "No commitment required",
];

export default function Demo() {

    const form = useForm<DemoFormValues>({
        resolver: zodResolver(demoFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            companySize: "",
            industry: "",
            challenge: "",
        },
    });

    async function submitDemo(formData: {
        name: string;
        email: string;
        phone?: string;
        company: string;
        companySize?: string;
        industry?: string;
        challenge?: string;
    }) {
        const res = await fetch("/api/demo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            throw new Error("Demo request failed");
        }

        return res.json();
    }


    return (
        <>

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-accent/5 to-background">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                                <Play className="w-4 h-4" />
                                <span className="text-sm font-medium">Live Product Demo</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                See Efficidex in Action
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Get a personalized 30-minute demo and discover how AI-powered
                                automation can transform your operations.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 border-b border-border">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4">What You'll Experience</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our demos are tailored to your specific industry and challenges
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {demoFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.1,
                                    }}
                                    className="card-elevated p-6 text-center"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Demo Form */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-2 space-y-8"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="w-6 h-6 text-accent" />
                                        <h2 className="text-2xl font-semibold">
                                            Schedule Your Demo
                                        </h2>
                                    </div>

                                    <p className="text-muted-foreground">
                                        Fill out the form and we'll reach out within 24 hours to find a
                                        time that works for you.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={benefit}
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.3 + index * 0.1,
                                            }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Average demo duration
                                    </p>
                                    <p className="text-2xl font-bold">30 minutes</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Followed by live Q&A and next steps discussion
                                    </p>
                                </div>
                            </motion.div>

                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-3"
                            >
                                <div className="card-elevated p-8">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            {/* Row 1 */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/** Name */}
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Full Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="John Doe" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/** Email */}
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Work Email</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="john@company.com" type="email" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            {/* Row 2 */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/** Phone */}
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Phone Number</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+1 (555) 000-0000" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/** Company */}
                                                <FormField
                                                    control={form.control}
                                                    name="company"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Company Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Acme Inc." {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            {/* Row 3 */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/** Company Size */}
                                                <FormField
                                                    control={form.control}
                                                    name="companySize"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Company Size</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select company size" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {companySizes.map((size) => (
                                                                        <SelectItem key={size} value={size}>
                                                                            {size}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/** Industry */}
                                                <FormField
                                                    control={form.control}
                                                    name="industry"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Industry</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select industry" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {industries.map((i) => (
                                                                        <SelectItem key={i} value={i}>
                                                                            {i}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            {/* Challenge */}
                                            <FormField
                                                control={form.control}
                                                name="challenge"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>What challenges are you looking to solve?</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us about your current workflow challenges and what you hope to achieve..."
                                                                className="min-h-[100px] resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Submit */}
                                            <Button type="submit" size="lg" className="w-full">
                                                Request Demo
                                                <Play className="ml-2 h-4 w-4" />
                                            </Button>

                                            <p className="text-xs text-center text-muted-foreground">
                                                By submitting this form, you agree to our privacy policy and terms of service.
                                            </p>
                                        </form>
                                    </Form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}