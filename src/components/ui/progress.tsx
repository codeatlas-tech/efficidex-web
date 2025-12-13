import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max = 100, ...props }, ref) => {
    // Clamp safely
    const clamped =
        value !== undefined ? Math.min(Math.max(value, 0), max) : undefined;

    const percentage =
        clamped !== undefined ? (clamped / max) * 100 : undefined;

    return (
        <ProgressPrimitive.Root
            ref={ref}
            value={clamped}
            max={max}
            className={cn(
                "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className={cn(
                    "h-full w-full flex-1 bg-primary transition-transform duration-300",
                    percentage === undefined && "animate-pulse"
                )}
                style={{
                    transform:
                        percentage !== undefined
                            ? `translateX(-${100 - percentage}%)`
                            : "translateX(-100%)",
                }}
            />
        </ProgressPrimitive.Root>
    );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
