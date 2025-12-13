import type { LucideIcon } from "lucide-react";
import { Headphones } from "lucide-react";

export type UseCase = {
    name: string;
    description: string;
    icon: LucideIcon;
    bgColor: string;
    color: string;
    workflow: string[];
    kpiImpact: string;
    timeSaved: string;
};

export const useCases: UseCase[] = [
    {
        name: "Customer Support Automation",
        description:
            "AI agents handle inbound support queries, resolve common issues, and escalate only when needed.",
        icon: Headphones,
        bgColor: "bg-blue-500/10",
        color: "text-blue-500",
        workflow: ["Receive Query", "Understand Intent", "Resolve / Escalate"],
        kpiImpact: "↓ 45% ticket volume",
        timeSaved: "3x faster resolution",
    }

];
