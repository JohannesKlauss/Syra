import React, { useContext } from 'react';
import ChannelMenu from '../../ChannelMenu/ChannelMenu';
import AudioChannelInput from './Input/AudioChannelInput';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../../recoil/channelStore';
import { ChannelContext } from '../../../../../providers/ChannelContext';
import { ChannelType } from '../../../../../types/Channel';
import InstrumentChannelInput from './Input/InstrumentChannelInput';
import { Flex, IconButton, Menu, MenuButton } from '@chakra-ui/react';
import {RiMore2Fill} from 'react-icons/ri';

function ChannelHeader() {
  const channelId = useContext(ChannelContext);
  const channelType = useRecoilValue(channelStore.type(channelId));

  return (
    <Flex>
      {channelType === ChannelType.AUDIO ? <AudioChannelInput/> : <InstrumentChannelInput/>}

      <Menu>
        <MenuButton as={IconButton} aria-label="Search database" icon={<RiMore2Fill />} />
        <ChannelMenu />
      </Menu>
    </Flex>
  );
}

export default React.memo(ChannelHeader);
