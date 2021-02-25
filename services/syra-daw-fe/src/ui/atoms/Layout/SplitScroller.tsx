import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReadonlyArray<ReactNode>;
}

const SplitScroller: React.ForwardRefRenderFunction<HTMLDivElement, Props> = ({ children }, ref) => {
  return (
    <Flex maxW={'100%'} maxH={'100%'} overflow={'auto'} ref={ref}>
      <Box flexDir={'column'} h={'100%'}>
        {children[0]}
      </Box>
      <Box flexDir={'column'} h={'100%'} overflowX={'auto'} w={'fill-available'} pos={'relative'}>
        {children[1]}
      </Box>
    </Flex>
  );
};

export default React.forwardRef(SplitScroller);
