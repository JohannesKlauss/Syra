import { Box } from '@chakra-ui/react';
import React from "react";
import MidiTrack from "./MidiTrack";
import ContextMenu from "../ContextMenu/ContextMenu";
import ContextMenuTrigger from '../ContextMenu/ContextMenuTrigger';
import PianoRollContextMenu from '../PianoRoll/PianoRollContextMenu';

interface Props {
  min: number;
  max: number;
}

const MidiTrackList: React.FC<Props> = React.memo(({min, max}) => {
  return (
    <Box>
      <ContextMenu hotkey={'t'}>
        <ContextMenuTrigger>
          {Array.from({length: (max - min) + 1}, (_, i) => max - i).map((note, i) => (
            <MidiTrack note={note} key={note} isEven={i % 2 === 0}/>
          ))}
        </ContextMenuTrigger>
        <PianoRollContextMenu/>
      </ContextMenu>
    </Box>
  );
});

// @ts-ignore
MidiTrackList.whyDidYouRender = true;

export default MidiTrackList;
