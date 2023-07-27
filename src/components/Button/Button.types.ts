import type { ReactNode } from 'react';

export interface ButtonProps {
  additionalClasses?: string;
  type?: ButtonType;
  onClick?: () => void;
  variant?: ButtonVariant;
  children?: ReactNode;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
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

export type ButtonVariant = 'primary' | 'outline' | 'link';
export type ButtonType = 'link' | 'button' | 'submit';
