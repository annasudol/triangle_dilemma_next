// import FileUpload from '@/components/FileUpload';
'use client';
import UploadForm from './components/UploadForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-white text-center py-4">Triangle problem</h1>
        <p className="text-white text-center">
          A web app that calculate the maximum total from top to bottom in a text file
        </p>
      </div>
      <div className="mb-2 sm:mb-4 mt-3">
        <UploadForm />
      </div>
    </main>
  );
}
