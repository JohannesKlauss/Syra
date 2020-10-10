import React from "react";
import { Box, Text } from "@chakra-ui/core";

interface Props {
  claim: string
}

function CenteredClaim({claim}: Props) {
  return (
    <Box w={'100%'} marginY={25}>
      <Text fontSize={'lg'}>{claim}</Text>
    </Box>
  );
}

export default CenteredClaim;
