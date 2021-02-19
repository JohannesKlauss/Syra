import { MenuGroup, MenuItem } from '@chakra-ui/react';
import React, { useContext } from "react";
import useCreateMidiRegion from "../../../../hooks/recoil/region/useCreateMidiRegion";
import { ChannelContext } from "../../../../providers/ChannelContext";
import * as Tone from 'tone';
import usePixelToTicks from "../../../../hooks/tone/usePixelToTicks";
import useSnapPixelValue from "../../../../hooks/ui/useSnapPixelValue";

interface Props {
  offset?: number[];
}

const MidiTrackContextMenu: React.FC<Props> = ({offset}) => {
  const createMidiRegion = useCreateMidiRegion();
  const channelId = useContext(ChannelContext);
  const pixelToTicks = usePixelToTicks();
  const snapPixel = useSnapPixelValue();

  const onClickCreateMidiRegion = () => {
    createMidiRegion({
      channelId,
      notes: [],
      start: Tone.Ticks(offset ? pixelToTicks(snapPixel(offset[0])) : 0),
      duration: Tone.Ticks(4, 'm'),
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
