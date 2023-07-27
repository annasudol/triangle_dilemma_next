import { FileUpload } from '@/components/FileUpload';
import { Triangle } from '@/components/Triangle';
import { useFileUpload } from '@/hooks/useFileUpload';

export const UploadForm = () => {
  const { upload, file, isUploading, maxTotal, arrValues } = useFileUpload();
  return (
    <>
      <FileUpload
        id="csv_file"
        title="Upload a text file"
        accept=".txt"
        description="Supported format is .txt"
        onChange={(e) => upload(e)}
        fileName={file?.name}
        isLoading={isUploading}
      />
      {maxTotal && (
        <div className="mb-6 flex w-full flex-col items-center">
          <p className="mb-4 text-center text-xl font-bold text-white">
            Maximum Total:
          </p>
          <div className="h-12 animate-waving-hand rounded-full bg-white bg-opacity-[70] px-3 py-2 text-center text-2xl font-bold text-blue-950">
            {maxTotal}
          </div>
        </div>
      )}
      {arrValues && <Triangle arrValues={arrValues} />}
    </>
  );
};
