"use client";

import React from "react";
import { Skeleton } from "./skeleton";

/* ------------------------------------------------------------ */
/* TEXT                                                         */
/* ------------------------------------------------------------ */

export function SkeletonText({
    lines = 3,
    lineSize = "sm",
}: {
    lines?: number;
    lineSize?: "xs" | "sm" | "md";
}) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    size={lineSize}
                    className={i === 0 ? "w-3/4" : "w-full"}
                />
            ))}
        </div>
    );
}

/* ------------------------------------------------------------ */
/* AVATAR                                                       */
/* ------------------------------------------------------------ */

export function SkeletonAvatar({
    size = 40,
    variant = "shimmer",
    direction = "lr",
}: {
    size?: number;
    variant?: "shimmer" | "pulse";
    direction?: "lr" | "rl" | "tb";
}) {
    return (
        <Skeleton
            rounded="full"
            variant={variant}
            direction={direction}
            className="aspect-square"
            style={{ width: size, height: size }}
        />
    );
}

/* ------------------------------------------------------------ */
/* LIST ITEM                                                    */
/* ------------------------------------------------------------ */

export function SkeletonListItem({
    avatarSize = 32,
    lines = 2,
}: {
    avatarSize?: number;
    lines?: number;
}) {
    return (
        <div className="flex items-center gap-3 py-2">
            <SkeletonAvatar size={avatarSize} />
            <div className="flex-1 space-y-1.5">
                {Array.from({ length: lines }).map((_, i) => (
                    <Skeleton
                        key={i}
                        size="sm"
                        className={i === 0 ? "w-1/2" : "w-1/3"}
                    />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------ */
/* CARD                                                         */
/* ------------------------------------------------------------ */

export function SkeletonCard({
    lines = 2,
    imageHeight = 160,
}: {
    lines?: number;
    imageHeight?: number;
}) {
    return (
        <div className="rounded-lg border p-4 space-y-3">
            <Skeleton size="md" className="w-1/3" />
            <SkeletonText lines={lines} />

            <Skeleton
                size="full"
                rounded="lg"
                variant="shimmer"
                direction="lr"
                className="w-full"
                style={{ height: imageHeight }}
            />
        </div>
    );
}

/* ------------------------------------------------------------ */
/* TABLE ROW                                                    */
/* ------------------------------------------------------------ */

export function SkeletonTableRow({
    columns = 4,
    size = "sm",
}: {
    columns?: number;
    size?: "xs" | "sm" | "md";
}) {
    return (
        <tr>
            {Array.from({ length: columns }).map((_, i) => (
                <td key={i} className="px-4 py-3">
                    <Skeleton size={size} className="w-full" />
                </td>
            ))}
        </tr>
    );
}
