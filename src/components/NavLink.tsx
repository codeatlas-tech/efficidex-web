import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps
    extends Omit<NavLinkProps, "className" | "children"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
    children?: React.ReactNode;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
    (
        {
            className,
            activeClassName = "text-primary font-medium",
            pendingClassName = "opacity-50",
            children,
            ...props
        },
        ref
    ) => {
        return (
            <RouterNavLink
                ref={ref}
                {...props}
                className={({ isActive, isPending }) =>
                    cn(
                        className,
                        isActive && activeClassName,
                        isPending && pendingClassName
                    )
                }
            >
                {children}
            </RouterNavLink>
        );
    }
);

NavLink.displayName = "NavLink";
