import type { ReactNode } from 'react';

export interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}


export type ButtonType = 'link' | 'button' | 'submit';
