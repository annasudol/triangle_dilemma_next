/* eslint-disable consistent-return */
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
    if (fileDoc?.type !== 'text/plain') {
      setError({ message: 'Only text file accepted', isError: true });
      setTimeout(() => setError({ isError: false, message: '' }), 3000);
    } else {
      setFile(fileDoc);
      setIsUploading(true);
      return fileDoc
        .text()
        .then((res) => {
          let sum = 0;
          setArrValues(parseTriangleArr(res));
          arrValues &&
            arrValues.forEach((row) =>
              row.forEach((item) => {
                if (item.isMax) {
                  sum += item.value;
                }
              }),
            );
          setMaxTotal(sum);
        })
        .finally(() => {
          setIsUploading(false);
        });
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
