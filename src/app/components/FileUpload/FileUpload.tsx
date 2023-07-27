import { ChangeEvent, FC } from 'react';
import clsx from 'clsx';
import { useCallback } from 'react';
import { CheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Loading from '@/components/Loading';

import InputLabel from '@/components/common/InputLabel';
import useDragFile from '@/hooks/useDragFile';
import Button from '@/components/Button';

type FileUploadProps = {
  id: string;
  label: string;
  onChange: (file: File | null) => void;
  isLoading?: boolean;
  required?: boolean;
  accept?: string;
  title?: string;
  description?: string;
  fileName?: string;
  viewOnly?: boolean;
};

const FileUpload: FC<FileUploadProps> = ({
  id,
  label,
  required,
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
    [onChange]
  );

  return (
    <div className="max-w-sm mx-auto my-4">
      <InputLabel required={required} label={label} />
      <div {...containerProps}>
        <div
          className={clsx('rounded-md border border-dashed p-5 h-38', {
            'border-white': !isDragging,
            'border-blue-200': isDragging,
          })}
        >
          <div className="text-center h-25">
            {isLoading && <Loading additionalClasses="mt-7" />}
            {!fileName && !isLoading && (
              <>
                <DocumentTextIcon className="mx-auto my-2 h-12 w-12 text-whit stroke-1 text-white" />

                <div className="text-sm text-gray-600">
                  <label
                    htmlFor={id}
                    className="relative text-white cursor-pointer rounded-md font-medium  focus-within:outline-none hover:text-indigo-500"
                  >
                    <p className="p-0.5 bg-white rounded-3xl text-blue-700 w-40 mx-auto">{title}</p>
                    <p className="text-label text-white text-sm my-2">or drag and drop it here.</p>
                    <input
                      id={id}
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
              <div className="h-38 overflow-hidden rounded-md relative flex flex-col justify-center items-center">
                <div className="bg-white h-14 w-14 rounded-full bg-opacity-70 flex justify-center items-center">
                  <CheckIcon className="h-10 w-10 text-green-600 mx-auto" />
                </div>
                <label className="block text-sm text-white py-2">{fileName} is uploaded.</label>
                {!viewOnly && (
                  <Button onClick={() => onChange(null)} icon="FolderMinusIcon" variant="outline">
                    Remove file
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
