import { Box, RadioProps, useRadio } from '@chakra-ui/react';
import React from "react";

interface Props extends RadioProps {

}

const RadioCard: React.FC<Props> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.500",
          color: "white",
          borderColor: "teal.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={1}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
};

export default RadioCard;
