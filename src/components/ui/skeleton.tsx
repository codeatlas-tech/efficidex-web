"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Skeleton v4 — cleaned & production hardened
 */

const skeletonVariants = cva(
    "relative overflow-hidden bg-muted/50 rounded-md isolate",
    {
        variants: {
            variant: {
                pulse: "animate-pulse",
                shimmer: "",
                wave: "skeleton-wave",
                grid: "skeleton-grid",
            },
            rounded: {
                none: "",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            },
            size: {
                xs: "h-2",
                sm: "h-3",
                md: "h-4",
                lg: "h-6",
                xl: "h-10",
                full: "h-full w-full",
            },
            direction: {
                lr: "",
                rl: "",
                tb: "",
                none: "",
            },
        },
        defaultVariants: {
            size: "md",
            rounded: "md",
            variant: "pulse",
            direction: "none",
        },
    }
);

export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
    shimmer?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
    ({ className, variant, size, rounded, direction, shimmer, ...props }, ref) => {
        const useShimmer = variant === "shimmer" || shimmer;

        let shimmerAnimClass = "";
        if (useShimmer) {
            switch (direction) {
                case "rl":
                    shimmerAnimClass = "animate-[shimmer-rl_1.2s_infinite]";
                    break;
                case "tb":
                    shimmerAnimClass = "animate-[shimmer-tb_1.2s_infinite]";
                    break;
                default:
                    shimmerAnimClass = "animate-[shimmer-lr_1.2s_infinite]";
            }
        }

        return (
            <div
                ref={ref}
                aria-hidden="true"
                data-skeleton
                className={cn(
                    skeletonVariants({ variant, rounded, size, direction }),
                    className
                )}
                {...props}
            >
                {useShimmer && (
                    <span
                        data-skeleton-anim
                        className={cn(
                            "pointer-events-none absolute inset-0 will-change-transform opacity-60 mix-blend-overlay",
                            "bg-gradient-to-r from-transparent via-white/30 to-transparent",
                            shimmerAnimClass
                        )}
                    />
                )}
            </div>
        );
    }
);

Skeleton.displayName = "Skeleton";

/**
 * Keyframe injection — now stable, safe, and never duplicated
 */

let injected = false;

if (typeof window !== "undefined" && !injected) {
    injected = true;

    const style = document.createElement("style");
    style.id = "skeleton-v4-keyframes";
    style.innerHTML = `
@keyframes shimmer-lr {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes shimmer-rl {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
@keyframes shimmer-tb {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
@keyframes skeleton-wave {
  0% { transform: translateX(-10%); opacity: .4; }
  50% { transform: translateX(10%); opacity: 1; }
  100% { transform: translateX(-10%); opacity: .4; }
}
@keyframes skeleton-grid {
  0% { background-position: 0 0; }
  100% { background-position: 20px 20px; }
}
.skeleton-wave {
  animation: skeleton-wave .9s ease-in-out infinite;
}
.skeleton-grid {
  background-image:
    linear-gradient(90deg, hsla(var(--border), .35) 1px, transparent 1px),
    linear-gradient(180deg, hsla(var(--border), .35) 1px, transparent 1px);
  background-size: 12px 12px;
  animation: skeleton-grid .9s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-skeleton-anim],
  .animate-pulse,
  .skeleton-wave,
  .skeleton-grid {
    animation: none !important;
  }
}`;
    document.head.appendChild(style);
}

export { skeletonVariants };
