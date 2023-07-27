/* eslint-disable consistent-return */
import { useState } from 'react';

import type { TriangleType } from '@/types/triangle.types';
import { parseTriangleArr } from '@/utils/parseTriangleArr';

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [maxTotal, setMaxTotal] = useState<number>();
  const [arrValues, setArrValues] = useState<TriangleType[][]>();

  const handleUpload = async (fileDoc: File | null): Promise<void> => {
    setFile(fileDoc);
    if (fileDoc) {
      setIsUploading(true);
      return fileDoc
        .text()
        .then((res) => {
          let sum = 0;
          parseTriangleArr(res).forEach((row) =>
            row.forEach((item) => {
              if (item.isMax) {
                sum += item.value;
              }
            }),
          );
          setMaxTotal(sum);
          setArrValues(parseTriangleArr(res));
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
  };
};
