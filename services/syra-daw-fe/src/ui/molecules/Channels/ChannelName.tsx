import React, { useContext, useRef } from "react";
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
  const ref = useRef<HTMLButtonElement>(null);

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
        isTruncated
        onDblClick={() => ref.current?.click()}
        color={backgroundColor ? determineTextColor(backgroundColor) : 'gray.50'}
      >
        {channelPrefix}
        {channelPrefix && ' - '}
        {name}
      </Text>
      <ChannelSettings ref={ref}/>
    </Flex>
  );
}

export default ChannelName;
