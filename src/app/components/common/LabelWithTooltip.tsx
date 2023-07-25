import React, { FC } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import Tooltip from '@/components/ToolTip';
import Label, { LabelProps } from '@/components/common/Label';

type LabelWithTooltipProps = LabelProps & {
  tooltip: string;
};

const LabelWithTooltip: FC<LabelWithTooltipProps> = ({ tooltip, ...props }) => (
  <div className={'flex gap-1 items-center'}>
    <Label {...props} />
    <Tooltip content={tooltip}>
      <QuestionMarkCircleIcon className="w-4 h-4 dark:text-white text-blue-gray-800" />
    </Tooltip>
  </div>
);

export default LabelWithTooltip;
