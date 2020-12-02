import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import BaseChannel from './BaseChannel';
import { Box, Flex } from '@chakra-ui/react';

function HorizontalChannelList() {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <Box overflowX={'scroll'} transform={'translateZ(0)'}>
      <Flex align={'flex-start'} zIndex={1} w={'100%'}>
        {channels.map((id) => (
          <BaseChannel key={id} channelId={id} />
        ))}
      </Flex>
    </Box>
  );
}

export default HorizontalChannelList;
