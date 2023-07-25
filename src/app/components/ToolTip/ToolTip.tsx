import type { Side } from "@floating-ui/react";
import { FloatingPortal } from "@floating-ui/react";
import clsx from "clsx";
import type { FC } from "react";
import React, { useMemo, useRef } from "react";
import { useTooltip } from "./useTooltip";
import { TooltipProps } from "./ToolTip.types";

/**
 * @example
 * <Tooltip content='Hello world!'>
 *   <div>Hover me</div>
 * </Tooltip>
 */
const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  className,
  required = false,
  ...options
}) => {
  const arrowRefBg = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const tooltip = useTooltip(options, arrowRef);

  const arrowPlacement = useMemo(() => {
    const arrowData = tooltip.middlewareData.arrow;
    const placement = tooltip.placement as Side;
    const sides = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    };

    return {
      left: arrowData?.x != null ? `${arrowData.x}px` : "",
      top: arrowData?.y != null ? `${arrowData.y}px` : "",
      [sides[placement]]: "0",
      clipPath:
        placement === "top"
          ? "polygon(28% 77%,51% 100%,72% 77%)"
          : "polygon(50% 0%,0% 47%,100% 46%)",
      marginBottom: placement === "top" ? "-11px" : "0px",
      marginTop: placement === "bottom" ? "-11px" : "0px",
    };
  }, [tooltip.middlewareData.arrow, tooltip.placement]);

  return (
    <>
      <FloatingPortal>
        {tooltip.open && (
          <div
            {...tooltip.getFloatingProps()}
            className={clsx(
              className,
              "bg-white dark:bg-gray-600 relative z-50 border-2 dark:border dark:border-gray-600 border-[#E8EBF8] p-4 shadow-lg"
            )}
            ref={tooltip.refs.setFloating}
            style={{
              position: tooltip.strategy,
              top: tooltip?.y ?? 0,
              left: tooltip?.x ?? 0,
              maxWidth: 350,
              wordWrap: "break-word",
              minHeight: "fit-content",
              padding: "10px 20px",
              fontSize: "12px",
              borderRadius: "9px",
              textAlign: "center",
              verticalAlign: "middle",
              visibility: tooltip.x == null ? "hidden" : "visible",
            }}
          >
            {content}
            <div
              ref={arrowRefBg}
              className="bg-[#E8EBF8] dark:bg-gray-600 absolute h-12 w-12 z-30"
              style={arrowPlacement}
            />
            <div
              ref={arrowRef}
              className="bg-white dark:bg-gray-600 absolute h-12 w-12 z-40"
              style={arrowPlacement}
            />
          </div>
        )}
      </FloatingPortal>
      <div
        {...tooltip.getReferenceProps()}
        ref={tooltip.refs.setReference}
        data-state={tooltip.open ? "open" : "closed"}
      >
        {required ? (
          <>
            <div className="flex space-x-2">
              <span className="text-input-error">*</span>
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default Tooltip;
