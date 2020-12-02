import { Box, useTheme } from '@chakra-ui/react';
import React from 'react';
import AddChannelMenu from './Header/AddChannelMenu';

function VerticalChannelListHeader() {
  const theme = useTheme();

  return (
    <Box h={'40px'} width={'250px'} p={2} borderBottom={`1px solid ${theme.colors.gray[600]}`} bg={'gray.900'}>
      <AddChannelMenu/>
    </Box>
  );
}

export default VerticalChannelListHeader;
