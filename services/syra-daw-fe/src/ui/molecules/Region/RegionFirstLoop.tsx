import React from 'react';
import {Box} from "@chakra-ui/react";
import tinycolor from "tinycolor2";

interface Props {
  color: string;
}

const RegionFirstLoop: React.FC<Props> = ({color, children}) => {
  return (
      <Box h={'100%'} pos={'relative'} overflow={'hidden'} pt={'15px'} w={'100%'} bg={color}>
        {children}
      </Box>
  );
};

export default RegionFirstLoop;