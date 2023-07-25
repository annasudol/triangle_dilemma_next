// import FileUpload from '@/components/FileUpload';
'use client';
import UploadForm from './components/UploadForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl font-bold text-white text-center py-4">Triangle problem</h1>
        <p className="text-white text-center">
          A web app that calculate the maximum total from top to bottom in a text file
        </p>
      </div>
      <div className="mb-2 sm:mb-4 mt-3">
        <UploadForm />
        {/* <FileUpload
          id="csv_file"
          title="Upload a text file"
          label="Upload .txt"
          required
          accept="text/txt"
          description="Supported format is .txt"
          onChange={(value) => console.log(value)}
          // isUploadingFile={isValidatingCSV || isUploadingCSV}
          // error={Boolean(getValues('csv_file'))}
          // fileName={CSVFile}
        /> */}
        {/* <p className="text-xs text-blue-gray-700 dark:text-white mt-2">Not sure how to add your .txt file?</p>
        <button className="underline">Click here</button>
        and download our template */}
      </div>
    </main>
  );
}
