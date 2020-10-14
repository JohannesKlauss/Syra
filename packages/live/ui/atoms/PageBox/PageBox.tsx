import React from 'react';
import { Box } from '@chakra-ui/core';

interface Props {

}

const PageBox: React.FC<Props> = ({children}) => {
  return (
    <Box paddingX={56} paddingY={12} marginTop={'74px'}>
      {children}
    </Box>
  );
};

export default PageBox;
