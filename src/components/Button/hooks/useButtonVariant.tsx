import { BUTTON_ERROR_MESSAGE } from '@/types/error.types';

import type { ButtonVariant } from '../Button.types';

const useButtonVariant = (variant: ButtonVariant): string | null => {
  const variants = {
    primary: 'text-white bg-blue-900',
    link: 'text-blue-900 underline',
    outline: 'text-blue-900 border-2 border-blue-900',
  };

  if (!variants[variant]) {
    // eslint-disable-next-line no-console
    console.error(BUTTON_ERROR_MESSAGE);
    return null;
  }

  return variants[variant];
};

export default useButtonVariant;
