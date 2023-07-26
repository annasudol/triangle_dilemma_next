import { ChangeEvent, FC } from 'react';
import clsx from 'clsx';
import { useCallback } from 'react';
import { CheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/Badge';

import InputLabel from '@/components/common/InputLabel';
import useDragFile from '@/hooks/useDragFile';
import Button from '@/components/Button';

type FileUploadProps = {
  id: string;
  label: string;
  required?: boolean;
  accept?: string;
  title?: string;
  description?: string;
  onChange: (file: File | null) => void;
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
    <div className="grid gap-y-1">
      <InputLabel required={required} label={label} />
      <div {...containerProps} className="mt-1 sm:col-span-2 sm:mt-0">
        <div
          className={clsx('flex justify-center rounded-md border border-dashed p-5 h-38', {
            'border-white': !isDragging,
            'border-blue-200': isDragging,
          })}
        >
          <div className="space-y-1 text-center h-25">
            {!fileName && (
              <>
                <DocumentTextIcon className="mx-auto h-12 w-12 text-whit stroke-1 text-white" />
                <div className="flex justify-center items-center text-sm text-gray-600">
                  <label
                    htmlFor={id}
                    className="relative text-white cursor-pointer rounded-md font-medium  focus-within:outline-none hover:text-indigo-500"
                  >
                    <Badge size="basic" colour="violet">
                      {title}
                    </Badge>
                    <span className="text-label text-white text-xs opacity-80 ml-1">or drag and drop it here.</span>
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
                {description && <p className="text-xs text-gray-500 dark:text-white">{description}</p>}
              </>
            )}

            {fileName && (
              <div className="h-38 overflow-hidden rounded-md relative z-auto space-y-1">
                <CheckIcon className="h-12 w-12 text-green-600 mx-auto" />
                <label className="block text-xs text-white">{fileName} is uploaded.</label>
                {!viewOnly && (
                  <Button onClick={() => onChange(null)} icon="FolderMinusIcon">
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
