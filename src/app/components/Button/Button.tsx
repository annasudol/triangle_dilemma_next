import { FC, forwardRef, createElement } from 'react';
import clsx from 'clsx';
import * as HeroIcons from '@heroicons/react/24/solid';
import type { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      additionalClasses,
      type = 'button',
      children,
      onClick,
      disabled,
      href,
      icon,
      iconPosition = 'start',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const optionalClasses = {
      'opacity-50 pointer-events-none': disabled || isLoading,
    };

    const ButtonIcon: FC = () => {
      if (!icon) {
        return null;
      }
      const Icon = HeroIcons[icon];

      return (
        <Icon className={clsx('h-4 w-4', { 'mr-2': iconPosition === 'start' }, { 'ml-2': iconPosition === 'end' })} />
      );
    };

    const sharedProps = {
      ref: ref,
      onClick: onClick,
      className: clsx(
        'flex items-center relative justify-center font-medium text-white bg-blue-900 px-4 py-2 rounded-md',
        optionalClasses,
        additionalClasses
      ),
    };

    const buttonProps = {
      ...sharedProps,
      disabled: disabled || isLoading,
      type: type,
    };

    const anchorProps = {
      ...sharedProps,
      href: href,
    };

    const componentContent = (
      <>
        {icon && iconPosition === 'start' && <ButtonIcon />}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
        {icon && iconPosition === 'end' && <ButtonIcon />}
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
      componentContent
    );
  }
);
Button.displayName = 'Button';
export default Button;
