import { useState } from 'react';

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
          const parseData = (data: string) => {
            data = data.trim();
            const dataArr = data.split('\n');

            return dataArr.map((el) => {
              const row = el.split(' ').map((num) => parseInt(num, 10));
              return row;
            });
          };

          console.log(parseData(res), 'res');
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
