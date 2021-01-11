import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import BaseChannel from './BaseChannel';
import { Box, Flex } from '@chakra-ui/react';

interface Props {
  showView?: boolean;
}

function HorizontalChannelList({showView}: Props) {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <Box overflowX={'scroll'} transform={'translateZ(0)'} display={showView ? 'block' : 'none'}>
      <Flex align={'flex-start'} zIndex={1} w={'100%'}>
        {channels.map((id) => (
          <BaseChannel key={id} channelId={id} />
        ))}
      </Flex>
    </Box>
  );
}

export default HorizontalChannelList;
