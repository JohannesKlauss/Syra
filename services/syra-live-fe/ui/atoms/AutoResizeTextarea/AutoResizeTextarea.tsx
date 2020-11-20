import { Textarea, TextareaProps } from '@chakra-ui/core';
import React from 'react';
import ResizeTextarea from 'react-textarea-autosize';

const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
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