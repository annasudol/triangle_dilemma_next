import clsx from 'clsx';
import type { FC, LabelHTMLAttributes, PropsWithChildren } from 'react';

export type LabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement>
> & {
  required?: boolean;
  id: string;
};
const Label: FC<LabelProps> = ({
  children,
  className,
  required,
  id,
  ...props
}) => (
  <label
    htmlFor={id}
    {...props}
    className={clsx('text-sm text-gray-700 dark:text-white', className)}
  >
    {children}
    {required && <span className="ml-0.5 text-red-500">*</span>}
  </label>
);

export default Label;
