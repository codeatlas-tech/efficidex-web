import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
    className,
    ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
    <ResizablePrimitive.PanelGroup
        className={cn(
            "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
            className
        )}
        {...props}
    />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
    withHandle,
    className,
    ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => (
    <ResizablePrimitive.PanelResizeHandle
        tabIndex={0} // REQUIRED for keyboard accessibility
        className={cn(
            "relative flex items-center justify-center",
            "bg-border transition-colors",
            // Horizontal
            "w-1 data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:w-full",
            "data-[panel-group-direction=vertical]:cursor-row-resize cursor-col-resize",
            // Hit target (improves usability massively)
            "hover:bg-border/80",
            // Focus ring
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
            // The thin guideline inside
            "after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2",
            "data-[panel-group-direction=vertical]:after:h-0.5 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
            className
        )}
        {...props}
    >
        {withHandle && (
            <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                <GripVertical className="h-2.5 w-2.5" />
            </div>
        )}
    </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
