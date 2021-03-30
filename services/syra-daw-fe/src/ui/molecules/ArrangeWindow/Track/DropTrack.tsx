import React, { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import useIsDragOnDocument from '../../../../hooks/ui/useIsDragOnDocument';
import useOnDropTrack from '../../../../hooks/ui/arrangeGrid/useOnDropTrack';
import { Flex, Text } from '@chakra-ui/react';

function DropTrack() {
  const onDrop = useOnDropTrack();
  const isDragOnDocument = useIsDragOnDocument();
  const ref = useRef<HTMLDivElement>(null);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'audio/*' });

  return (
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
      <Text color={isDragOnDocument ? 'teal.500' : 'gray.500'}>Drop audio here to add new track</Text>
    </Flex>
  );
}

DropTrack.whyDidYouRender = false;

export default React.memo(DropTrack);
