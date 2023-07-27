import { CheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { ChangeEvent, FC } from 'react';
import { useCallback } from 'react';

import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';
import useDragFile from '@/hooks/useDragFile';

type FileUploadProps = {
  id: string;
  onChange: (file: File | null) => void;
  isLoading?: boolean;
  accept?: string;
  title?: string;
  description?: string;
  fileName?: string;
  viewOnly?: boolean;
};

export const FileUpload: FC<FileUploadProps> = ({
  id,
  accept,
  title = 'Upload file',
  description,
  onChange,
  fileName,
  viewOnly = false,
  isLoading = false,
}) => {
  const { containerProps, isDragging } = useDragFile(onChange);

  const onFileUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.currentTarget?.files;
      const file = fileList?.item(0);
      if (file) {
        onChange(file);
      }
    },
    [onChange],
  );

  return (
    <div className="mx-auto my-4 max-w-sm">
      <div {...containerProps}>
        <div
          className={clsx('h-48 rounded-md border border-dashed p-5', {
            'border-white': !isDragging,
            'border-blue-200': isDragging,
          })}
        >
          <div className="h-20 text-center">
            {isLoading && <Loading additionalClasses="mt-7" />}
            {!fileName && !isLoading && (
              <>
                <DocumentTextIcon className="mx-auto my-2 h-12 w-12 stroke-1 text-white" />

                <div className="text-sm text-gray-600">
                  <label
                    htmlFor={id}
                    className="relative cursor-pointer rounded-md font-medium text-white  focus-within:outline-none hover:text-indigo-500"
                  >
                    <p className="mx-auto w-40 rounded-3xl bg-white p-0.5 text-blue-700">{title}</p>
                    <p className="my-2 text-sm text-white">or drag and drop it here.</p>
                    <input
                      id={id}
                      data-testid={id}
                      name={id}
                      type="file"
                      className="sr-only"
                      accept={accept}
                      multiple={false}
                      onChange={onFileUpload}
                    />
                  </label>
                </div>
                {description && <p className="text-xs text-gray-200">{description}</p>}
              </>
            )}

            {fileName && !isLoading && (
              <div className="relative flex h-36 flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-[70]">
                  <CheckIcon className="mx-auto h-10 w-10 text-green-600" />
                </div>
                <span className="block py-2 text-sm text-white">{fileName} is uploaded.</span>
                {!viewOnly && <Button onClick={() => onChange(null)}>Remove file</Button>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
