import { ChangeEvent, useState } from 'react';
import FileUpload from '../FileUpload';

function UploadForm() {
  const [file, setFile] = useState<File | null>();

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  };

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
      {/* <input type="file" onChange={handleFileChange} /> */}

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default UploadForm;
