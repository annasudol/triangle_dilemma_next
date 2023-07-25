import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  additionalClasses?: string;
  size?: BadgeSizes;
  colour: BadgeColours;
  link?: string;
  onClick?: () => void;
  onRemove?: () => void;
  openicon?: boolean;
}

export type BadgeSizes = "basic" | "large";

export type BadgeColourObject = {
  [keyof in BadgeColours]: string;
};
export type BadgeSizeObject = { [key: string]: string };

export type BadgeColours =
  | "blue-grey-light"
  | "blue-grey"
  | "red"
  | "yellow"
  | "light-yellow"
  | "green"
  | "dark-green"
  | "light-blue"
  | "violet"
  | "turquoise"
  | "dark-yellow";
