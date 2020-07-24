import React, { useContext, useMemo, useRef } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import ChannelColorPicker from './ChannelColorPicker';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import { useRecoilState } from 'recoil/dist';
import useDeleteChannel from '../../../../hooks/recoil/channel/useDeleteChannel';

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
}

function ChannelMenu({isMenuOpen, onClose}: Props) {
  const channelId = useContext(ChannelContext);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const divRef = useRef<HTMLDivElement>(null);
  const deleteChannel = useDeleteChannel(channelId);

  const options = useMemo(() => ([
    <MenuItem><ChannelColorPicker activeColor={color} onChangeColor={setColor}/></MenuItem>,
    <MenuItem onClick={deleteChannel}>Delete</MenuItem>,
  ]), [color, setColor, deleteChannel]);

  return (
    <div ref={divRef}>
      <Menu
        open={isMenuOpen}
        onClose={onClose}
        anchorEl={divRef.current}
      >
        {options.map((option, i) => (
          <div key={i}>{option}</div>
        ))}
      </Menu>
    </div>
  );
}

export default ChannelMenu;
