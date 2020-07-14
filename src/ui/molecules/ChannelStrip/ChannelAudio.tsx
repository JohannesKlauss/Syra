import React from 'react';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import { ListItem } from '@material-ui/core';

function ChannelAudio() {
  return (
    <ListItem>
      <DropdownButton onClick={() => null} menuItems={[]}>
        In 1
      </DropdownButton>
    </ListItem>
  );
}

export default ChannelAudio;
