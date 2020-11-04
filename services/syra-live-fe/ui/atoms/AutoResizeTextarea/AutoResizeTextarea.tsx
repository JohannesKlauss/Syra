import { Textarea } from '@chakra-ui/core';
import React from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { InputProps } from '@chakra-ui/core/dist/Input';

const AutoResizeTextarea: React.FC<InputProps<HTMLTextAreaElement>> = React.forwardRef<HTMLTextAreaElement, InputProps<HTMLTextAreaElement>>((props, ref) => {
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      // @ts-ignore
      minRows={1}
      transition="height none"
      as={ResizeTextarea}
      ref={ref}
      {...props}
    />
  );
});

export default AutoResizeTextarea;