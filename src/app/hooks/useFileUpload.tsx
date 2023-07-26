import { useState } from 'react';

import { calculateMaxPathNumbers, parseToArr } from '@/utils/calculateMaxPathNumbers';
const useFileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [maxTotal, setMaxTotal] = useState<number>();
  const [arr, setArr] = useState<number[][]>();

  const handleUpload = async (file: File | null) => {
    setFile(file);
    if (file) {
      setIsUploading(true);
      return file
        .text()
        .then((res) => {
          setArr(parseToArr(res));
          setMaxTotal(calculateMaxPathNumbers(res));
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
    arr,
  };
};

export default useFileUpload;
