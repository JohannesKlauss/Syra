import { MenuGroup, MenuItem } from '@chakra-ui/react';
import React, { useContext } from "react";
import useCreateMidiRegion from "../../../../hooks/recoil/region/useCreateMidiRegion";
import { ChannelContext } from "../../../../providers/ChannelContext";

interface Props {

}

const MidiTrackContextMenu: React.FC<Props> = ({}) => {
  const createMidiRegion = useCreateMidiRegion();
  const channelId = useContext(ChannelContext);

  const onClickCreateMidiRegion = async () => {
    await createMidiRegion({
      channelId,
      notes: [],
      start: 0,
      duration: 300,
    });
  }

  return (
    <>
      <MenuGroup>
        <MenuItem command={'ctrl+cmd+m'} onClick={onClickCreateMidiRegion}>New MIDI region</MenuItem>
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