"use client";

import React, {
    Suspense,
    type ComponentType,
    type ComponentProps,
    type PropsWithChildren,
} from "react";
import { SkeletonLayout } from "./skeleton-layout";

type SkeletonType =
    | "card"
    | "list"
    | "avatar"
    | "table-row"
    | "text"
    | "default";

interface SuspenseWithSkeletonProps extends PropsWithChildren {
    fallbackType?: SkeletonType;
    fallback?: React.ReactNode;
}

export function SuspenseWithSkeleton({
    fallbackType = "default",
    fallback,
    children,
}: SuspenseWithSkeletonProps) {
    const resolvedFallback = fallback ?? (
        <SkeletonLayout type={fallbackType} />
    );

    return <Suspense fallback={resolvedFallback}>{children}</Suspense>;
}

interface WithSkeletonOptions {
    fallbackType?: SkeletonType;
    fallback?: React.ReactNode;
}

export function withSkeleton<P extends object>(
    Wrapped: ComponentType<P>,
    options?: WithSkeletonOptions
) {
    const { fallbackType = "default", fallback } = options || {};

    const WithSkeletonComponent = (props: ComponentProps<typeof Wrapped>) => {
        return (
            <SuspenseWithSkeleton fallbackType={fallbackType} fallback={fallback}>
                {/* Allow Server Components inside Suspense */}
                {React.createElement(Wrapped as any, props)}
            </SuspenseWithSkeleton>
        );
    };

    WithSkeletonComponent.displayName = `WithSkeleton(${Wrapped.displayName || Wrapped.name || "Component"
        })`;

    // Copy static properties (optional but recommended)
    Object.assign(WithSkeletonComponent, Wrapped);

    return WithSkeletonComponent;
}
