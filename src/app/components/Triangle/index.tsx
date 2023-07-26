import { FC } from 'react';

interface TRiangleProps {
  arrValues: number[][];
}
const TRiangle: FC<TRiangleProps> = ({ arrValues }) => {
  return (
    <div>
      {arrValues.map((row, i) => (
        <div key={`${i}-{row[0]}`} className="flex justify-center">
          {row.map((item, i) => (
            <div key={i} className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-[0.74rem]">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TRiangle;
