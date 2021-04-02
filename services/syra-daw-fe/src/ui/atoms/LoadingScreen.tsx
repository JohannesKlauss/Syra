import { Box, Flex, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

interface Props {
  isLoading: boolean;
}

const LoadingScreen: React.FC<Props> = ({ isLoading, children }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isLoading) {
      controls.start({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 }, { repeat: 0 });
    }
  }, [isLoading]);

  return (
    <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'}>
      <Box>
        <motion.div
          animate={controls}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1, ease: 'easeInOut' }}
        >
          <Image boxSize={'30rem'} src="/assets/gfx/syra-logo-large.png" alt="Syra DAW" />
        </motion.div>
        {children}
      </Box>
    </Flex>
  );
};

export default LoadingScreen;
