import { Flex } from '@chakra-ui/react';
import React from "react";

interface Props {

}

const PianoContainer: React.FC<Props> = ({children}) => {
  return (
    <Flex w={"100%"} pos={"relative"} overflowX={"hidden"} justify={"center"} mt={"20px"}>
      {children}
    </Flex>
  );
}

export default PianoContainer;
