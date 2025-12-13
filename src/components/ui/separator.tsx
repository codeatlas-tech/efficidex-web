import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

interface SeparatorProps
    extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
    /** Thickness for horizontal separators (default 1px) */
    thickness?: number;
    /** Thickness for vertical separators (default 1px) */
    verticalThickness?: number;
}

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    SeparatorProps
>(
    (
        {
            className,
            orientation = "horizontal",
            decorative = true,
            thickness = 1,
            verticalThickness = 1,
            ...props
        },
        ref
    ) => {
        const isHorizontal = orientation === "horizontal";

        return (
            <SeparatorPrimitive.Root
                ref={ref}
                decorative={decorative}
                orientation={orientation}
                className={cn(
                    "shrink-0 bg-border",
                    isHorizontal
                        ? `h-[${thickness}px] w-full`
                        : `w-[${verticalThickness}px] h-full`,
                    className
                )}
                {...props}
            />
        );
    }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
