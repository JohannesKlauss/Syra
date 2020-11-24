import React from 'react';
import { useRecoilValue } from 'recoil';
import NewChannelFab from '../../Fabs/NewChannelFab';
import { channelStore } from '../../../../recoil/channelStore';
import BaseChannel from './BaseChannel';
import { Box, Flex } from '@chakra-ui/react';

function HorizontalChannelList() {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <Flex
      align={'flex-end'}
      pos={'absolute'}
      bottom={0}
      left={0}
      bg={'gray.800'}
      rounded={4}
      pt={2}
      borderTop={`2px solid cyan.200`}
      zIndex={1}
      w={'100%'}
    >
      <Box overflowX={'scroll'} transform={'translateZ(0)'}>
        {channels.map((id) => (
          <BaseChannel key={id} channelId={id} />
        ))}
      </Box>
      <NewChannelFab />
    </Flex>
  );
}

export default HorizontalChannelList;
