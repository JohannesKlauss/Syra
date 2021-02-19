import React, { useCallback, useEffect } from "react";
import { Box, Flex, Text } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { MdCloudUpload } from 'react-icons/md';

interface Props {
  accept: string;
  maxSize: number;
  name: string;
}

const FileInput: React.FC<Props> = ({ accept, maxSize, name }) => {
  const { register, unregister, setValue, watch } = useFormContext();

  const files: File[] = watch(name);

  const onDrop = useCallback(droppedFiles => {
    setValue(name, droppedFiles, { shouldValidate: true });
  }, [setValue, name]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, maxSize });

  useEffect(() => {
    register(name);

    return () => {
      unregister(name)
    };
  }, [register, unregister, name]);

  return (
    <Box
      {...getRootProps()}
      w={'100%'}
      cursor={'pointer'}
      zIndex={1}
      pos={'relative'}
      willChange={'transform'}
      borderRadius={4}
      p={4}
      border={'1px dashed'}
      borderColor={'gray.600'}
      userSelect={'none'}
      _hover={{
        borderColor: 'gray.500'
      }}
    >
      <input {...getInputProps()} id={name} />
      <Flex align={'center'} justify={'flex-start'}>
        <MdCloudUpload size={'2em'}/>
        <Text fontSize={'sm'} ml={4}>
          {!isDragActive ? 'Add Screenshots for better understanding of the issue.' : 'Drop files here'}
        </Text>
      </Flex>
      <Text fontSize={'xs'} color={'gray.400'} ml={12} mt={2}>{files?.map(file => file.name).join(', ')}</Text>
    </Box>
  );
};

export default FileInput;
