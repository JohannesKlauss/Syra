import * as React from "react";
import {Box} from "@chakra-ui/react";

const withFixedWidth = (width: number) => (Story) => {
  return (
    <Box w={`${width}px`}>
      <Story/>
    </Box>
  )
}

export default withFixedWidth;