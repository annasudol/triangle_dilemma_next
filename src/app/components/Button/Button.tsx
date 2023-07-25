import { FC, forwardRef, createElement } from "react";
import clsx from "clsx";
import * as HeroIcons from "@heroicons/react/24/solid";
import type { ButtonProps } from "./Button.types";
import useButtonVariant from "./hooks/useButtonVariant";

const defaultClasses =
  "flex items-center relative justify-self-start border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500";

const Button: FC<ButtonProps> = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      additionalClasses,
      type = "button",
      variant,
      fullWidth,
      children,
      onClick,
      disabled,
      href,
      rounded = true,
      isActive = false,
      size = "medium",
      icon,
      iconPosition = "start",
      isLoading = false,
      split = false,
      ...props
    },
    ref
  ) => {
    const buttonVariant = useButtonVariant(variant);

    if (!buttonVariant) {
      return null;
    }

    const optionalClasses = {
      [buttonVariant.default]: variant,
      [buttonVariant.active]: isActive,
      ["shadow-sm"]: variant !== "link",
      "w-full justify-center": fullWidth,
      "opacity-50 pointer-events-none": disabled || isLoading,
      "rounded-md": rounded,
      ["px-2.5 py-1.5 text-xs gap-x-2"]: size === "extra-small",
      ["px-3 py-2 text-sm gap-x-2"]: size === "small",
      ["px-4 py-2 text-sm gap-x-2"]: size === "medium",
      ["px-4 py-2 text-base gap-x-3.5"]: size === "large",
      ["px-6 py-3 text-base gap-x-3.5"]: size === "extra-large",
    };

    const ButtonIcon: FC = () => {
      if (!icon) {
        return null;
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const Icon: any = (HeroIcons as any)[icon];

      return (
        <Icon
          className={clsx({
            ["h-4 w-4"]:
              size === "extra-small" || size === "small" || size === "medium",
            ["h-5 w-5"]: size === "large" || size === "extra-large",
          })}
        />
      );
    };

    const sharedProps = {
      ref: ref,
      onClick: onClick,
      className: clsx(defaultClasses, optionalClasses, additionalClasses),
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
        {icon && iconPosition === "start" && <ButtonIcon />}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
        {icon && iconPosition === "end" && <ButtonIcon />}
        {split && (
          <div className="absolute right-3 bg-button-primary border border-white border-y-0 border-r-0 pl-2">
            <HeroIcons.ChevronDownIcon
              fill="white"
              height={20}
              width={20}
            ></HeroIcons.ChevronDownIcon>
          </div>
        )}
      </>
    );

    const Component = href ? "a" : "button";
    const componentProps = Component === "button" ? buttonProps : anchorProps;

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
Button.displayName = "Button";
export default Button;
