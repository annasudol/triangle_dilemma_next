import FileUpload from '@/components/FileUpload';
import useFileUpload from '@/hooks/useFileUpload';
import Triangle from '@/components/Triangle';
function UploadForm() {
  const { upload, file, isUploading, maxTotal, arrValues } = useFileUpload();
  return (
    <div>
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
      <p className="text-white text-center font-bold text-xl">Maximum Total:</p>
      <p className="text-white text-center font-bold text-2xl">{maxTotal}</p>
      {arrValues && <Triangle arrValues={arrValues} />}
    </div>
  );
}

export default UploadForm;
