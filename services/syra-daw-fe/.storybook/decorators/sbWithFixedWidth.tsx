import * as React from "react";
import {Box} from "@chakra-ui/react";

const sbWithFixedWidth = (width: number) => (Story) => {
  return (
    <Box w={`${width}px`}>
      <Story/>
    </Box>
  )
}

export default sbWithFixedWidth;