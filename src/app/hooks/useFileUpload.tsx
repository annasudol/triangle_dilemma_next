import { useState } from 'react';
import { parseTriangleArr } from '@/utils/calculateMaxPathNumbers';
import { Triangle } from '@/types/triangle.types';

const useFileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [maxTotal, setMaxTotal] = useState<number>();
  const [arrValues, setArrValues] = useState<Triangle[][]>();

  const handleUpload = async (file: File | null) => {
    setFile(file);
    if (file) {
      setIsUploading(true);
      return file
        .text()
        .then((res) => {
          console.log(
            res.split(/\n/).map((val) => Number(val)),
            'res'
          );
          let sum = 0;
          parseTriangleArr(res).forEach((row) =>
            row.forEach((item) => {
              if (item.isMax) {
                sum += item.value;
              }
            })
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

export default useFileUpload;
function calculateMaxPathNumbers(arg0: number[][]) {
  throw new Error('Function not implemented.');
}
