"use client";

import React, {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import { Skeleton } from "./skeleton";
import { SkeletonText, SkeletonListItem, SkeletonCard } from "./skeleton-primitives";

/**
 * Auto-Skeleton
 * - Measures container shape
 * - Picks best skeleton type
 * - Avoids hydration issues (always renders a static placeholder first)
 */

export function SkeletonAuto({
    fallbackType,
    className,
    style,
}: {
    fallbackType?: "text" | "list" | "card" | "block";
    className?: string;
    style?: CSSProperties;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    const [visible, setVisible] = useState(false);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
    const [type, setType] = useState<
        "text" | "list" | "card" | "block"
    >(fallbackType || "block");

    // --- Detect visibility ---
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.15 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    // --- Measure element & infer type ---
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;

            setDimensions({ w: width, h: height });

            // Infer approximated shape
            if (!fallbackType) {
                if (height < 32) {
                    setType("text");
                } else if (height < 80) {
                    setType("list");
                } else if (height > 150) {
                    setType("card");
                } else {
                    setType("block");
                }
            }
        });

        ro.observe(el);
        return () => ro.disconnect();
    }, [fallbackType]);

    // --- Render correct skeleton ---
    const renderSkeleton = () => {
        if (type === "text") return <SkeletonText lines={3} />;
        if (type === "list") return <SkeletonListItem />;
        if (type === "card") return <SkeletonCard />;

        // fallback: use a full block shimmer
        return (
            <Skeleton
                variant="shimmer"
                direction="lr"
                className="w-full h-full rounded-md"
            />
        );
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                position: "relative",
                minHeight: dimensions.h || 40,
            }}
        >
            {visible ? (
                renderSkeleton()
            ) : (
                <div className="absolute inset-0 bg-muted/40 rounded-md" />
            )}
        </div>
    );
}
