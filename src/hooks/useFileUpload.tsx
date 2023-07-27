import { useState } from 'react';

import type { TriangleType } from '@/types/triangle.types';
import { parseTriangleArr } from '@/utils/parseTriangleArr';

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [maxTotal, setMaxTotal] = useState<number>();
  const [arrValues, setArrValues] = useState<TriangleType[][]>();
  const [error, setError] = useState<{ message: string; isError: boolean }>({ message: '', isError: false });

  const handleUpload = async (fileDoc: File | null): Promise<void> => {
    setFile(fileDoc);
    if (fileDoc !== null) {
      if (fileDoc?.type === 'text/plain') {
        setIsUploading(true);
        return fileDoc
          .text()
          .then((res) => {
            let sum: undefined | number;
            setArrValues(parseTriangleArr(res));
            parseTriangleArr(res).map((row) =>
              row.forEach((item) => {
                if (item.isMax) {
                  if (!sum) {
                    sum = 0;
                  }
                  sum += item.value;
                }
              }),
            );
            setMaxTotal(sum);
            console.log(maxTotal, 'maxTotal');
          })
          .finally(() => {
            setIsUploading(false);
          });
      } else {
        setFile(null);
        setError({ message: 'Only text file accepted', isError: true });
        setTimeout(() => setError({ isError: false, message: '' }), 3000);
      }
    }
  };

  return {
    upload: handleUpload,
    isUploading,
    file,
    maxTotal,
    arrValues,
    error,
  };
};
