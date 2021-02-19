import { useCallback, useEffect, useRef } from "react";

export default function useDocumentTitle(retainOnUnmount: boolean = true) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, [retainOnUnmount]);

  return useCallback((title: string) => {
    document.title = title;
  }, []);
}