import { FileUpload } from '@/components/FileUpload';
import { Triangle } from '@/components/Triangle';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UploadForm = () => {
  const { upload, file, isUploading, maxTotal, arrValues, error } = useFileUpload();
  useEffect(() => {
    error.isError && toast(error.message);
  }, [error]);
  return (
    <>
      <FileUpload
        id="text_file"
        title="Upload a text file"
        accept="text/.txt"
        description="Supported format is .txt"
        onChange={(e) => upload(e)}
        fileName={file?.name}
        isLoading={isUploading}
      />
      {maxTotal && (
        <div className="mb-6 flex w-full flex-col items-center">
          <p className="mb-4 text-center text-xl font-bold text-white">Maximum Total:</p>
          <div className="h-12 animate-waving-hand rounded-full bg-white bg-opacity-[70] px-3 py-2 text-center text-2xl font-bold text-blue-950">
            {maxTotal}
          </div>
        </div>
      )}
      <ToastContainer />
      {arrValues && <Triangle arrValues={arrValues} />}
    </>
  );
};
