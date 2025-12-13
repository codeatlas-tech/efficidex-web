"use client";

import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const REMOVE_DELAY = 400; // much saner
const LIMIT = 3;

type InternalToast = ToastProps & {
    id: string;
    action?: ToastActionElement;
};

type State = { toasts: InternalToast[] };

let state: State = { toasts: [] };
const listeners = new Set<(s: State) => void>();

function notify() {
    listeners.forEach((l) => l(state));
}

function add(toast: InternalToast) {
    state = {
        toasts: [toast, ...state.toasts].slice(0, LIMIT),
    };
    notify();
}

function update(id: string, partial: Partial<InternalToast>) {
    state = {
        toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...partial } : t)),
    };
    notify();
}

function dismiss(id: string) {
    update(id, { open: false });
    setTimeout(() => {
        state = { toasts: state.toasts.filter((t) => t.id !== id) };
        notify();
    }, REMOVE_DELAY);
}

export function toast(props: ToastProps) {
    const id = crypto.randomUUID();

    add({
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
            if (!open) dismiss(id);
        },
    });

    return {
        id,
        dismiss: () => dismiss(id),
        update: (p: Partial<InternalToast>) => update(id, p),
    };
}

export function useToast() {
    const [local, setLocal] = React.useState(state);

    React.useEffect(() => {
        const listener = (s: State) => setLocal(s);
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }, []);

    return {
        ...local,
        toast,
        dismiss,
    };
}
