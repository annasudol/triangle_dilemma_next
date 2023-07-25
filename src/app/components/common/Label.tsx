import clsx from "clsx";
import type { FC, LabelHTMLAttributes, PropsWithChildren } from "react";

export type LabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement>
> & {
  required?: boolean;
};
const Label: FC<LabelProps> = ({ children, className, required, ...props }) => (
  <label
    {...props}
    className={clsx("text-sm text-gray-700 dark:text-white", className)}
  >
    {children}
    {required && <span className="text-red-500 ml-0.5">*</span>}
  </label>
);

export default Label;
