import FileUpload from '@/components/FileUpload';
import useFileUpload from '@/hooks/useFileUpload';
import Triangle from '@/components/Triangle';
function UploadForm() {
  const { upload, file, isUploading, maxTotal, arrValues } = useFileUpload();
  return (
    <>
      <FileUpload
        id="csv_file"
        title="Upload a text file"
        label="Upload .txt"
        required
        accept=".txt"
        description="Supported format is .txt"
        onChange={(e) => upload(e)}
        fileName={file?.name}
        isLoading={isUploading}
      />
      {maxTotal && (
        <div className="w-full flex flex-col items-center mb-4">
          <p className="text-white text-center font-bold text-xl">Maximum Total:</p>
          <div className="text-center font-bold text-2xl animate-waving-hand h-12 text-blue-950 bg-white bg-opacity-70 rounded-full px-3 py-2">
            {maxTotal}
          </div>
        </div>
      )}
      {arrValues && <Triangle arrValues={arrValues} />}
    </>
  );
}

export default UploadForm;
