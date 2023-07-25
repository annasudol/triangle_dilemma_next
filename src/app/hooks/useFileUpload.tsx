import { useCallback, useState } from 'react';

const emptyFileData = {
  fileUrl: '',
  filePath: '',
  fileName: '',
};

type TFileData = typeof emptyFileData;

type TUseFileUpload = {
  onUpload?: (fileData: TFileData) => void;
};

const useFileUpload = (props?: TUseFileUpload) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [fileData, setFileData] = useState<{
    fileUrl: string;
    filePath: string;
    fileName: string;
  }>(emptyFileData);

  const handleUpload = useCallback(
    async (file: File | null) => {
      setFileData(emptyFileData);

      if (!file) {
        props?.onUpload?.(emptyFileData);
        return;
      }

      setIsUploading(true);
    },
    [props]
  );

  return {
    upload: handleUpload,
    isUploading,
    fileUrl: fileData.fileUrl,
    filePath: fileData.filePath,
    fileName: fileData.fileName,
  };
};

export default useFileUpload;
