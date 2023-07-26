import { useCallback, useState } from 'react';

const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleUpload = useCallback(async (file: File | null) => {
    setIsUploading(true);
    return await uploadFile(file)
      .then((res) => {
        const data: TFileData = {
          fileUrl: res?.downloadUrl,
          filePath: res?.path,
          fileName: file.name,
        };

        setFileData(data);
        props?.onUpload?.(data);
      })
      .finally(() => {
        setIsUploading(false);
      });
  }, []);

  return {
    upload: handleUpload,
    isUploading,
  };
};

export default useFileUpload;
