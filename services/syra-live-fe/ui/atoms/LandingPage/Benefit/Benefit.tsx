import React from "react";
import { Box, Divider, Text } from "@chakra-ui/core";

interface Props {
  text: string;
}

function Benefit({text}: Props) {
  return (
    <Box>
      <Divider borderColor={'cyan.400'} borderWidth={8} width={'35%'}/>
      <Text fontWeight={700} fontSize={'xl'} width={'79%'}>{text}</Text>
    </Box>
  );
}

export default Benefit;
