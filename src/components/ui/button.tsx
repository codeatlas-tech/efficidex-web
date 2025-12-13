import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] rounded-lg",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
                outline:
                    "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground rounded-lg",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
                ghost:
                    "hover:bg-secondary hover:text-secondary-foreground rounded-lg",
                link:
                    "text-primary underline-offset-4 hover:underline",

                /* Custom variants */
                hero:
                    "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] shadow-md hover:shadow-lg rounded-full",
                "hero-secondary":
                    "border border-border bg-card text-foreground hover:bg-secondary active:scale-[0.98] rounded-full",
                accent:
                    "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] shadow-md rounded-full",
                pill:
                    "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
                "pill-outline":
                    "rounded-full border border-border bg-transparent hover:bg-secondary",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-12 px-6 text-base",
                xl: "h-14 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
