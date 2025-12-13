"use client";
// @ts-nocheck

import * as React from "react";
import { Toast, type ToastProps } from "./toast";

type ToastItem = ToastProps & { id: string };

const ToastContext = React.createContext<{
    show: (opts: ToastProps) => void;
} | null>(null);

export function Toaster() {
    const [toasts, setToasts] = React.useState<ToastItem[]>([]);

    const remove = React.useCallback(
        (id: string) => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        },
        [setToasts]
    );

    const show = React.useCallback(
        (opts: ToastProps) => {
            const id = crypto.randomUUID();

            const item: ToastItem = {
                ...opts,
                id,
                duration: opts.duration ?? 3500,
            };

            setToasts((prev) => [...prev, item]);

            // Auto-dismiss
            if (item.duration && item.duration > 0) {
                setTimeout(() => remove(id), item.duration);
            }
        },
        [remove]
    );

    return (
        <ToastContext.Provider value={{ show }}>
            <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
                {toasts.map((t) => (
                    <Toast key={t.id} {...t} onClose={() => remove(t.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = React.useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used inside <Toaster />");

    const { show } = ctx;

    return {
        toast: {
            show,
            success: (title: string, description?: string) =>
                show({ type: "success", title, description }),

            error: (title: string, description?: string) =>
                show({ type: "error", title, description }),

            warning: (title: string, description?: string) =>
                show({ type: "warning", title, description }),

            info: (title: string, description?: string) =>
                show({ type: "info", title, description }),
        },
    };
}
