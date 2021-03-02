import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReadonlyArray<ReactNode>;
}

const SplitScroller: React.ForwardRefRenderFunction<HTMLDivElement, Props> = ({ children }, ref) => {
  return (
    <Flex maxW={'100%'} maxH={'100%'} pos={'relative'} overflow={'auto'} ref={ref}>
      <Box flexDir={'column'} pos={'sticky'} left={0} float={'left'} zIndex={2}>
        {children[0]}
      </Box>
      <Box flexDir={'column'} w={'100%'} h={'100%'} pos={'relative'}>
        {children[1]}
      </Box>
    </Flex>
  );
};

export default React.forwardRef(SplitScroller);
