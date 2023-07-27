import { DragEvent, useCallback, useState } from 'react';

const useDragFile = (onDrop: (file: File) => void) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    switch (event.type) {
      case 'dragover':
        setIsDragging(true);
        break;
      case 'dragleave':
      case 'drop':
        setIsDragging(false);
        break;
    }
  }, []);

  const handleOnDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      handleDragOver(event);
      const files = event.dataTransfer.files;
      if (files.length) {
        onDrop(files[0] as File);
      }
    },
    [handleDragOver, onDrop],
  );

  return {
    isDragging,
    containerProps: {
      onDragOver: handleDragOver,
      onDragLeave: handleDragOver,
      onDrop: handleOnDrop,
    },
  };
};

export default useDragFile;
