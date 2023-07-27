import { FC } from 'react';
import clsx from 'clsx';
import { Triangle } from '@/types/triangle.types';
interface TRiangleProps {
  arrValues: Triangle[][];
}
const TRiangle: FC<TRiangleProps> = ({ arrValues }) => {
  console.log(arrValues.length, 'arrValues');
  return (
    <>
      {arrValues.map((row, i) => (
        <div key={`${i}-{row[0]}`} className="flex justify-center">
          {row.map((item, i) => (
            <div
              key={i}
              className={clsx('rounded-full flex justify-center items-center', {
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

export default TRiangle;
