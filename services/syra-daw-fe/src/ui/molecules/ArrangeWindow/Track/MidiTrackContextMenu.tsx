import { MenuGroup, MenuItem } from '@chakra-ui/react';
import React from "react";

interface Props {

}

const MidiTrackContextMenu: React.FC<Props> = ({}) => {
  return (
    <>
      <MenuGroup>
        <MenuItem>New MIDI region</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem>Select all regions</MenuItem>
        <MenuItem>Select muted regions</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem>Paste</MenuItem>
      </MenuGroup>
    </>
  );
};

export default MidiTrackContextMenu;
