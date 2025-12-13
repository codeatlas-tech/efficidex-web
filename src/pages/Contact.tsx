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


import { Mail, Phone, Send } from "lucide-react";

const contactFormSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone: z
        .string()
        .trim()
        .min(10)
        .max(20)
        .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number"),
    company: z.string().trim().min(2).max(100),
    industry: z.string().min(1, "Please select an industry"),
    message: z.string().trim().min(10).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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

export default function Contact() {


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            industry: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed request");
            }

            toast.success("Message sent! Our team will reach out shortly.");
            form.reset();
        } catch {
            toast.error("Failed to send message. Please try again.");
        }
    }



    return (
        <div className="min-h-screen bg-background">

            <Header />

            {/* HERO */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="section-container text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We’re here to help you automate your operations and scale effortlessly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-16">
                <div className="section-container">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* CONTACT INFO */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-1 space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <p className="text-muted-foreground mb-8">
                                    Reach out to us — we usually respond within a few hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <InfoItem
                                    icon={Mail}
                                    label="Email"
                                    value="support@efficidex.com"
                                    href="mailto:support@efficidex.com"
                                />

                                <InfoItem
                                    icon={Phone}
                                    label="Phone"
                                    value="+91 80876 98438"
                                    href="tel:+918087698438"
                                />
                            </div>
                        </motion.div>

                        {/* CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-2"
                        >
                            <div className="card-elevated p-8">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                                        {/* Name / Email */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <TextField control={form.control} name="name" label="Full Name" placeholder="John Doe" />
                                            <TextField control={form.control} name="email" label="Email" placeholder="john@company.com" type="email" />
                                        </div>

                                        {/* Phone / Company */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <TextField control={form.control} name="phone" label="Phone Number" placeholder="+91 98765 43210" />
                                            <TextField control={form.control} name="company" label="Company" placeholder="Acme Inc." />
                                        </div>

                                        {/* Industry */}
                                        <FormField
                                            control={form.control}
                                            name="industry"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Industry</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select your industry" />
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

                                        {/* Message */}
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Tell us what you're trying to automate..."
                                                            className="min-h-[120px] resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" size="lg" className="w-full md:w-auto">
                                            Send Message <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </Form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

/* COMPONENTS */

function InfoItem({ icon: Icon, label, value, href }: any) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
            </div>
            <div>
                <p className="font-medium">{label}</p>
                <a href={href} className="text-muted-foreground hover:text-accent transition-colors">
                    {value}
                </a>
            </div>
        </div>
    );
}

function TextField({ control, name, label, placeholder, type = "text" }) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
