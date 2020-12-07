import { Box, Text } from '@chakra-ui/react';
import React from "react";

interface Props {
  value: number;
}

const VolumeFaderText: React.FC<Props> = ({value}) => {
  return (
    <Box w={'35%'} bg={'gray.800'} boxShadow={'inner'} p={2} rounded={'md'}>
      <Text textAlign={'center'} fontSize={'sm'} >{value}</Text>
    </Box>
  );
};

export default VolumeFaderText;
