import { BUTTON_ERROR_MESSAGE } from "../../../types/error.types";
import {
  ButtonVariant,
  ButtonVariantObject,
  ButtonVariantProps,
} from "../Button.types";

const useButtonVariant = (
  variant: ButtonVariant
): ButtonVariantProps | null => {
  const variants: ButtonVariantObject = {
    primary: {
      default:
        "text-violet-50 bg-primary border-violet-700 hover:border-violet-900 hover:bg-primary-hover hover:text-button-primary-hover",
      active: "border-violet-900  bg-primary-hover text-button-primary-hover",
    },
    secondary: {
      default:
        "text-blue-gray-900 bg-secondary border-violet-200 hover:border-violet-700 hover:bg-secondary-hover hover:text-button-secondary-hover",
      active:
        "border-violet-700 bg-secondary-hover text-button-secondary-hover",
    },
    tertiary: {
      default:
        "text-bule-gray-900 bg-button-tertiary border-gray-300 hover:border-gray-600 dark:border-gray-200 dark:hover:border-white dark:text-gray-200 dark:hover:text-white hover:bg-button-tertiary hover:bg-tertiary-hover hover:text-button-tertiary-hover",
      active:
        "border-gray-600 bg-button-tertiary bg-button-tertiary-hover text-button-tertiary-hover",
    },
    link: {
      default:
        "text-button-link bg-button-link border-button-link hover:border-button-link-hover hover:bg-button-link hover:bg-button-link-hover hover:text-button-link-hover",
      active:
        "border-button-link-hover bg-button-link bg-button-link-hover text-button-link-hover",
    },
    error: {
      default:
        "text-button-error bg-button-error hover:bg-button-error hover:bg-button-error-hover hover:text-button-error-hover",
      active: "bg-button-error bg-button-error-hover text-button-error-hover",
    },
    warning: {
      default:
        "text-button-warning bg-button-warning hover:bg-button-warning hover:bg-button-warning-hover hover:text-button-warning-hover",
      active:
        "bg-button-warning bg-button-warning-hover text-button-warning-hover",
    },
  };

  if (!variants[variant]) {
    console.error(BUTTON_ERROR_MESSAGE);
    return null;
  }

  return variants[variant];
};

export default useButtonVariant;
