import { FC } from 'react';
import clsx from 'clsx';
import { Triangle } from '@/types/triangle.types';
interface TRiangleProps {
  arrValues: Triangle[][];
}
const TRiangle: FC<TRiangleProps> = ({ arrValues }) => {
  console.log(arrValues, 'arrValues');
  return (
    <div>
      {arrValues.map((row, i) => (
        <div key={`${i}-{row[0]}`} className="flex justify-center">
          {row.map((item, i) => (
            <div
              key={i}
              className={clsx(' h-8 w-8 rounded-full flex justify-center items-center text-[0.74rem]', {
                'bg-red-600 text-white': item.isMax,
                'bg-white text-blue-950': !item.isMax,
              })}
            >
              {item.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TRiangle;
