import React, { useContext, useEffect, useRef } from "react";
import { useDropzone } from 'react-dropzone';
import useIsDragOnDocument from '../../../../hooks/ui/useIsDragOnDocument';
import { useRecoilState } from 'recoil';
import useOnDropTrack from '../../../../hooks/ui/arrangeGrid/useOnDropTrack';
import { projectStore } from '../../../../recoil/projectStore';
import { Flex, Text, useToast } from '@chakra-ui/react';

function DropTrack() {
  const onDrop = useOnDropTrack();
  const isDragOnDocument = useIsDragOnDocument();
  const ref = useRef<HTMLDivElement>(null);
  const toast = useToast();

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'audio/*' });

  const [lastAnalyzedBpmFromImport, setLastAnalyzedBpmFromImport] = useRecoilState(
    projectStore.lastAnalyzedBpmFromImport,
  );

  useEffect(() => {
    if (lastAnalyzedBpmFromImport !== null) {
      toast({
        description: `Your imported track has a tempo of ${lastAnalyzedBpmFromImport}bpm. Would you like to update your project?`,
        status: "info",
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      });

      // TODO: THIS WILL CURRENTLY NOT WORK. WE HAVE TO ADJUST THE TEMPO MAP, BUT WE DON'T KNOW WHAT THE LOGIC SHOULD BE YET.
      // TODO: THIS HAS TO LIVE INSIDE A onConfirm callback of the toast, but there is no such button yet.
      //setCurrentTempo(lastAnalyzedBpmFromImport!);
      setLastAnalyzedBpmFromImport(null);
    }
  }, [setLastAnalyzedBpmFromImport, lastAnalyzedBpmFromImport, toast])

  return (
    <>
      <Flex
        {...getRootProps()}
        data-cy={'drop-track-zone'}
        ref={ref}
        w={'100vw'}
        h={'66px'}
        justify={'center'}
        align={'center'}
        zIndex={100}
        pos={'absolute'}
        bottom={'-46px'}
        bg={'gray.900'}
        border={'1px dashed gray.700'}
        userSelect={'none'}
      >
        <input {...getInputProps()} data-cy={'drop-track-input'} />
        <Text color={isDragOnDocument ? 'teal.500' : 'gray.500'}>
          Drop audio here to add new track
        </Text>
      </Flex>
    </>
  );
}

DropTrack.whyDidYouRender = false;

export default React.memo(DropTrack);
