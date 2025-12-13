"use client";

import React from "react";
import { Skeleton } from "./skeleton";
import {
    SkeletonAvatar,
    SkeletonCard,
    SkeletonListItem,
    SkeletonTableRow,
    SkeletonText,
} from "./skeleton-primitives";

export type SkeletonLayoutType =
    | "card"
    | "list"
    | "avatar"
    | "table-row"
    | "text"
    | "default";

interface SkeletonLayoutProps {
    type?: SkeletonLayoutType;
    count?: number;       // repeat skeletons
    direction?: "vertical" | "horizontal";
    gap?: number;         // tailwind spacing (e.g., 2 = gap-2)
    className?: string;
}

const mapTypeToComponent = {
    card: SkeletonCard,
    list: SkeletonListItem,
    avatar: (props: any) => <SkeletonAvatar size={48} {...props} />,
    "table-row": SkeletonTableRow,
    text: (props: any) => <SkeletonText lines={4} {...props} />,
    default: (props: any) => <Skeleton size="md" className="w-full" {...props} />,
} as const;

export function SkeletonLayout({
    type = "default",
    count = 1,
    direction = "vertical",
    gap = 3,
    className,
}: SkeletonLayoutProps) {
    const Comp = mapTypeToComponent[type] ?? mapTypeToComponent.default;

    return (
        <div
            className={`
        flex
        ${direction === "horizontal" ? "flex-row" : "flex-col"}
        gap-${gap}
        ${className ?? ""}
      `}
        >
            {Array.from({ length: count }).map((_, i) => (
                <div key={i}>
                    {/* Each layout type already handles its own sizing */}
                    <Comp />
                </div>
            ))}
        </div>
    );
}
