import FileUpload from '@/components/FileUpload';
import useFileUpload from '@/hooks/useFileUpload';
function UploadForm() {
  const { upload, file, isUploading } = useFileUpload();
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
    </div>
  );
}

export default UploadForm;
