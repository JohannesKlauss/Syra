import React, { useContext } from 'react';
import { determineTextColor } from '../../../utils/color';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilState } from 'recoil';
import { Flex, Text, TextProps } from '@chakra-ui/react';
import ChannelSettings from './ChannelSettings';

interface Props extends TextProps {
  backgroundColor?: string;
  channelPrefix?: number;
}

function ChannelName({ backgroundColor, channelPrefix, px, ...props }: Props) {
  const channelId = useContext(ChannelContext);
  const [name] = useRecoilState(channelStore.name(channelId));

  return (
    <Flex bg={backgroundColor} justify={'space-between'} align={'center'} px={px}>
      <Text
        {...props}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        userSelect={'none'}
        fontSize={'sm'}
        textAlign={'left'}
        fontWeight={'600'}
        py={2}
        color={backgroundColor ? determineTextColor(backgroundColor) : 'gray.50'}
      >
        {channelPrefix}
        {channelPrefix && ' - '}
        {name}
      </Text>
      <ChannelSettings/>
    </Flex>
  );
}

export default ChannelName;
