import clsx from 'clsx';
import type { FC } from 'react';
import { createElement, forwardRef } from 'react';

import type { ButtonProps } from './Button.types';
import useButtonVariant from './hooks/useButtonVariant';

export const Button: FC<ButtonProps> = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      additionalClasses,
      type = 'button',
      variant = 'primary',
      children,
      onClick,
      disabled,
      href,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const buttonVariant = useButtonVariant(variant);

    if (!buttonVariant) {
      return null;
    }

    const optionalClasses = {
      [buttonVariant]: variant,
      'opacity-50 pointer-events-none': disabled || isLoading,
    };

    const sharedProps = {
      ref,
      onClick,
      className: clsx(
        'relative flex items-center justify-center rounded-md px-4 py-2 font-medium',
        optionalClasses,
        additionalClasses,
      ),
    };

    const buttonProps = {
      ...sharedProps,
      disabled: disabled || isLoading,
      type,
    };

    const anchorProps = {
      ...sharedProps,
      href,
    };

    const componentContent = (
      <>
        {isLoading && (
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </>
    );

    const Component = href ? 'a' : 'button';
    const componentProps = Component === 'button' ? buttonProps : anchorProps;

    return createElement(
      Component,
      {
        ...componentProps,
        ...props,
      },
      componentContent,
    );
  },
);
Button.displayName = 'Button';
export default Button;
