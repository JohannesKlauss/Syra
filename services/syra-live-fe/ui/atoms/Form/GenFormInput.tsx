import React from 'react';
import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

interface Props {
  isInvalid?: boolean;
  isRequired?: boolean;
  label: string;
  helpText?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  type?: string;
}

const GenFormInput = React.forwardRef<HTMLInputElement, Props>(({ type, isInvalid, defaultValue, isRequired, name, label, helpText, placeholder }, ref) => {
  return (
    <FormControl isRequired={isRequired} marginY={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        isInvalid={isInvalid}
        type={type}
        id={name}
        name={name}
        ref={ref}
        isFullWidth
        defaultValue={defaultValue}
        aria-describedby={`${name}-helper-text`}
        placeholder={placeholder}/>
      <FormHelperText id={`${name}-helper-text`}>
        {helpText}
      </FormHelperText>
    </FormControl>
  );
});

GenFormInput.defaultProps = {
  type: 'text'
};

export default GenFormInput;
