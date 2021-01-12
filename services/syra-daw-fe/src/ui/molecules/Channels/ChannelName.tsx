import React, { useContext, useState } from 'react';
import { determineTextColor } from '../../../utils/color';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilState } from 'recoil';
import ClickAwayListener from 'react-click-away-listener';
import { Box, Input, Text } from '@chakra-ui/react';

interface Props {
  backgroundColor?: string;
}

function ChannelName({ backgroundColor }: Props) {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelStore.name(channelId));
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <Box whiteSpace={'nowrap'} bg={backgroundColor} px={2}>
      {isEditingName ? (
        <ClickAwayListener onClickAway={() => setIsEditingName(false)}>
          <Input size={'sm'} py={2} defaultValue={name} onChange={(e) => setName(e.target.value)} />
        </ClickAwayListener>
      ) : (
        <Text
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          userSelect={'none'}
          fontSize={'sm'}
          textAlign={'left'}
          fontWeight={'600'}
          py={2}
          onDoubleClick={() => setIsEditingName(true)}
          color={backgroundColor ? determineTextColor(backgroundColor) : 'gray.50'}
        >
          {name}
        </Text>
      )}
    </Box>
  );
}

export default ChannelName;
