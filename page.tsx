'use client';

import UploadForm from '@/components/UploadForm';
export default function Home() {
  return (
    <main className=" min-h-screen pb-12">
      <h1 className="text-5xl font-bold text-white text-center py-4">Triangle problem</h1>
      <p className="text-white text-center">
        A web app that calculate the maximum total from top to bottom in a text file
      </p>

      <UploadForm />
    </main>
  );
}
