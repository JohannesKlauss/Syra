import React, { useContext } from 'react';
import ChannelColorPicker from './ChannelColorPicker';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import { useRecoilState } from 'recoil';
import useDeleteChannel from '../../../../hooks/recoil/channel/useDeleteChannel';
import { MenuItem, MenuList } from '@chakra-ui/core';

interface Props {
}

function ChannelMenu({}: Props) {
  const channelId = useContext(ChannelContext);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const deleteChannel = useDeleteChannel();

  return (
    <MenuList >
      <MenuItem>
        <ChannelColorPicker activeColor={color} onChangeColor={setColor}/>
      </MenuItem>
      <MenuItem onClick={() => deleteChannel(channelId)}><span>Delete</span></MenuItem>
    </MenuList>
  );
}

export default ChannelMenu;
