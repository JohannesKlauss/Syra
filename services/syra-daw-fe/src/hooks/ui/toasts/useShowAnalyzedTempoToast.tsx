import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  IconButton,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback } from "react";
import { projectStore } from "../../../recoil/projectStore";
import { useRecoilState } from "recoil";
import { BiCheck, BiX } from "react-icons/all";

export default function useShowAnalyzedTempoToast() {
  const toast = useToast();
  const [tempoMap, setTempoMap] = useRecoilState(projectStore.tempoMap);

  return useCallback((analyzedTempo: number) => {
    if (tempoMap[0] !== analyzedTempo) {
      const id = toast({
        position: 'bottom-right',
        duration: 6000,
        render: () => (
          <Alert status="info" justifyContent="center" variant={'solid'} rounded={4}>
            <AlertIcon />
            <Box flex={1}>
              <AlertTitle mr={2}>Detected tempo difference</AlertTitle>
              <AlertDescription display={'block'}>
                <Flex>
                  <Text>The file contains a tempo of {analyzedTempo} BPM. Do you want to change the project tempo?</Text>
                  <IconButton aria-label={'Yes'} title={'Yes'} icon={<BiCheck/>} onClick={() => setTempoMap({0: analyzedTempo})} />
                  <IconButton aria-label={'Yes'} title={'Yes'} icon={<BiX/>} ml={2} onClick={() => toast.close(id!)} />
                </Flex>
              </AlertDescription>
            </Box>
          </Alert>
        )
      });
    }
  }, [toast, tempoMap, setTempoMap]);
}