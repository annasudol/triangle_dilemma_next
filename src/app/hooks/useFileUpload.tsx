import { useState } from 'react';

import calculateMaxPathNumbers from '@/utils/calculateMaxPathNumbers';
const useFileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleUpload = async (file: File | null) => {
    setFile(file);
    if (file) {
      setIsUploading(true);
      return file
        .text()
        .then((res) => {
          return calculateMaxPathNumbers(res);
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
  };
};

export default useFileUpload;
