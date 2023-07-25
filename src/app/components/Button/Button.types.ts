import { ReactNode } from "react";
import * as HeroIcons from "@heroicons/react/24/solid";
type IconName = keyof typeof HeroIcons;

export interface ButtonProps {
  additionalClasses?: string;
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
  variant: ButtonVariant;
  fullWidth?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  href?: string;
  rounded?: boolean;
  isActive?: boolean;
  icon?: IconName;
  iconPosition?: "start" | "end";
  isLoading?: boolean;
  split?: boolean;
}

export interface DropDownButtonProps extends ButtonProps {
  additionSplitClasses?: string;
  items: {
    label: string;
    id: number;
  }[];
  handleSelect: (id: number) => void;
}

export interface TransactionButtonProps extends ButtonProps {
  content?: string;
  noOfTx?: number;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link"
  | "error"
  | "warning";
export type ButtonType = "reset" | "button" | "submit";
export type ButtonSize =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large";

export type ButtonVariantProps = {
  default: string;
  active: string;
};

export type ButtonVariantObject = {
  [key: string]: ButtonVariantProps;
};
