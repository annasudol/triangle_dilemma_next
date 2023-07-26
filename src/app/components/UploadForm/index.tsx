import { ChangeEvent, useState } from 'react';
import FileUpload from '../FileUpload';

function UploadForm() {
  const [file, setFile] = useState<File | null>();

  return (
    <div>
      <FileUpload
        id="csv_file"
        title="Upload a text file"
        label="Upload .txt"
        required
        accept="text/txt"
        description="Supported format is .txt"
        onChange={(e) => setFile(e)}
        fileName={file?.name}
      />
    </div>
  );
}

export default UploadForm;
