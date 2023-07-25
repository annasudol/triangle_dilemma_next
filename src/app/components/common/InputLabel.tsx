import clsx from 'clsx';
import Label, { LabelProps } from '@/components/common/Label';
import LabelWithTooltip from '@/components/common/LabelWithTooltip';
import { FC } from 'react';

type InputLabelProps = LabelProps & {
  tooltip?: string;
  label?: string;
  visuallyHiddenLabel?: boolean;
};
const InputLabel: FC<InputLabelProps> = ({ label, tooltip, required, visuallyHiddenLabel, ...props }) => {
  if (!label) return null;

  if (tooltip) {
    return (
      <LabelWithTooltip {...props} htmlFor={label} required={required} tooltip={tooltip}>
        {label}
      </LabelWithTooltip>
    );
  }

  return (
    <Label
      {...props}
      htmlFor={label}
      required={required}
      className={clsx({
        'sr-only': visuallyHiddenLabel,
      })}
    >
      {label}
    </Label>
  );
};

export default InputLabel;
