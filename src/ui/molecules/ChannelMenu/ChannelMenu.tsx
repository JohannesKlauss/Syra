import React, { useContext, useMemo, useRef } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import ChannelColorPicker from './ChannelColorPicker';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilState } from 'recoil/dist';

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
}

function ChannelMenu({isMenuOpen, onClose}: Props) {
  const channelId = useContext(ChannelContext);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const divRef = useRef<HTMLDivElement>(null);

  const options = useMemo(() => ([
    <ChannelColorPicker activeColor={color} onChangeColor={setColor}/>,
  ]), [color, setColor]);

  return (
    <div ref={divRef}>
      <Menu
        open={isMenuOpen}
        onClose={onClose}
        anchorEl={divRef.current}
      >
        {options.map((option, i) => (
          <MenuItem key={i}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default ChannelMenu;
