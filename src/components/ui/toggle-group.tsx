import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

type ToggleVariant = VariantProps<typeof toggleVariants>;

const ToggleGroupContext = React.createContext<ToggleVariant | null>(null);

const ToggleGroup = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, size, variant, children, ...props }, ref) => {
    return (
        <ToggleGroupPrimitive.Root
            ref={ref}
            className={cn("flex items-center justify-center gap-1", className)}
            {...props}
        >
            <ToggleGroupContext.Provider value={{ size, variant }}>
                {children}
            </ToggleGroupContext.Provider>
        </ToggleGroupPrimitive.Root>
    );
});

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, size, variant, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    // Child overrides group when defined
    const finalSize = size ?? context?.size ?? "default";
    const finalVariant = variant ?? context?.variant ?? "default";

    return (
        <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(
                toggleVariants({
                    size: finalSize,
                    variant: finalVariant,
                }),
                className
            )}
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
