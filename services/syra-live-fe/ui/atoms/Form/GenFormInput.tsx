import React from 'react';
import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

interface Props {
  isRequired?: boolean;
  label: string;
  helpText?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  type?: string;
}

const GenFormInput = React.forwardRef<HTMLInputElement, Props>(({ type, defaultValue, isRequired, name, label, helpText, placeholder }, ref) => {
  return (
    <FormControl isRequired={isRequired} marginY={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
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
