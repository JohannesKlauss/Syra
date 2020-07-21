import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import ChannelColorPicker from './ChannelColorPicker';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilState } from 'recoil/dist';
import { removeItemAtIndex } from '../../../utils/recoil';

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
}

function ChannelMenu({isMenuOpen, onClose}: Props) {
  const channelId = useContext(ChannelContext);
  const [channelIds, setChannelIds] = useRecoilState(channelStore.ids);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const divRef = useRef<HTMLDivElement>(null);

  const onDeleteChannel = useCallback(() => {
    const index = channelIds.findIndex(val => val === channelId);

    setChannelIds(currVal => removeItemAtIndex(currVal, index));
  }, [setChannelIds, channelIds, channelId]);

  const options = useMemo(() => ([
    <MenuItem><ChannelColorPicker activeColor={color} onChangeColor={setColor}/></MenuItem>,
    <MenuItem onClick={onDeleteChannel}>Delete</MenuItem>,
  ]), [color, setColor]);

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
