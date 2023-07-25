import { Placement } from "@floating-ui/react";
import { ReactNode } from "react";

export type TooltipOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delay?: number;
};

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  required?: boolean;
  className?: string;
} & TooltipOptions;
