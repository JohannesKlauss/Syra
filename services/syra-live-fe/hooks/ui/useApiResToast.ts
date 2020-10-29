import { IAlert, useToast } from '@chakra-ui/core';
import { useCallback } from 'react';

export default function useApiResToast() {
  const toast = useToast();

  return useCallback((title: string, status: IAlert['status'] = 'success') => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: 'bottom-right'
    });
  }, [toast]);
}