import { useCallback, useEffect, useState } from 'react';

export default function useIsDragOnDocument() {
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnter = useCallback(() => setIsDragging(true), [setIsDragging]);
  const onDragLeave = useCallback(() => setIsDragging(false), [setIsDragging]);

  useEffect(() => {
    document.addEventListener('dragover', onDragEnter);
    document.addEventListener('dragleave', onDragLeave);
    document.addEventListener('dragend', onDragLeave);
    document.addEventListener('drop', onDragLeave);

    return () => {
      document.removeEventListener('dragover', onDragEnter);
      document.removeEventListener('dragleave', onDragLeave);
      document.removeEventListener('dragend', onDragLeave);
      document.removeEventListener('drop', onDragLeave);
    };
  }, [onDragEnter, onDragLeave]);

  return isDragging;
}