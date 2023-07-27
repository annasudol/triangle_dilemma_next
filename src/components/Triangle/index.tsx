import clsx from 'clsx';
import type { FC } from 'react';

import type { TriangleType } from '@/types/triangle.types';

interface TRiangleProps {
  arrValues: TriangleType[][];
}
export const Triangle: FC<TRiangleProps> = ({ arrValues }) => {
  return (
    <>
      {arrValues.map((row) => (
        <div key={Math.random()} className="flex justify-center">
          {row.map((item) => (
            <div
              key={Math.random()}
              className={clsx('flex items-center justify-center rounded-full', {
                'bg-red-600 text-white': item.isMax,
                'bg-white text-blue-950': !item.isMax,
                'h-3 w-3 text-[0.3rem] hover:scale-300 hover:text-[0.2rem]': arrValues.length > 80,
                'h-8 w-8 text-[0.74rem]': arrValues.length <= 80,
              })}
            >
              {item.value}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
