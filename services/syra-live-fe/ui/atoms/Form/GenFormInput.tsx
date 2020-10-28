import React from 'react';
import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/core';

interface Props {
  isRequired?: boolean;
  label: string;
  helpText?: string;
  placeholder: string;
  name: string;
}

const GenFormInput = React.forwardRef<HTMLInputElement, Props>(({ isRequired, name, label, helpText, placeholder }, ref) => {
  return (
    <FormControl isRequired={isRequired} marginY={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        type="text"
        id={name}
        name={name}
        ref={ref}
        isFullWidth
        aria-describedby={`${name}-helper-text`}
        placeholder={placeholder}/>
      <FormHelperText id={`${name}-helper-text`}>
        {helpText}
      </FormHelperText>
    </FormControl>
  );
});

export default GenFormInput;
