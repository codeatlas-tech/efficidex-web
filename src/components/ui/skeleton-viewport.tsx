"use client";

import React, { useEffect, useRef, useState } from "react";
import { Skeleton, type SkeletonProps } from "./skeleton";

type ViewportSkeletonProps = SkeletonProps & {
    /** Start animating when this % of the element is visible */
    threshold?: number;
    /** Load animation slightly before element becomes visible */
    rootMargin?: string;
};

export function ViewportSkeleton({
    threshold = 0.2,
    rootMargin = "200px",
    className,
    ...props
}: ViewportSkeletonProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    // While not visible, return a static placeholder that keeps identical layout
    if (!visible) {
        return (
            <div
                ref={ref}
                aria-hidden="true"
                className={className}
                style={{
                    ...props.style,
                    backgroundColor: "hsl(var(--muted) / 0.35)",
                    borderRadius: props.rounded === "full" ? "9999px" : undefined,
                    height: resolveSkeletonHeight(props.size),
                }}
            />
        );
    }

    // Once in viewport → load real Skeleton animation
    return <Skeleton ref={ref} className={className} {...props} />;
}

/**
 * Converts the skeleton size variant into an actual height.
 * Prevents layout shift.
 */
function resolveSkeletonHeight(size: SkeletonProps["size"]) {
    switch (size) {
        case "xs":
            return "0.5rem";
        case "sm":
            return "0.75rem";
        case "md":
            return "1rem";
        case "lg":
            return "1.5rem";
        case "xl":
            return "2.5rem";
        case "full":
            return "100%";
        default:
            return "1rem";
    }
}
