import { Box } from '@chakra-ui/react';
import React from "react";
import MidiTrack from "./MidiTrack";

interface Props {
  min: number;
  max: number;
}

const MidiTrackList: React.FC<Props> = ({min, max}) => {
  return (
    <Box cursor={'url("/icons/cursor/pencil.svg") 0 24, auto'}>
      {Array.from({length: (max - min) + 1}, (_, i) => max - i).map((note, i) => (
        <MidiTrack note={note} key={note} isEven={i % 2 === 0}/>
      ))}
    </Box>
  );
};

export default MidiTrackList;
