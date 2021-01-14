import { Box } from '@chakra-ui/react';
import React from "react";
import MidiTrack from "./MidiTrack";
import {useRecoilValue} from "recoil";
import {pianoRollStore} from "../../../recoil/pianoRollStore";
import {regionStore} from "../../../recoil/regionStore";
import useMidiRegionWidth from "../../../hooks/ui/region/useMidiRegionWidth";

interface Props {
  min: number;
  max: number;
}

const MidiTrackList: React.FC<Props> = React.memo(({min, max}) => {
  return (
    <Box>
      {Array.from({length: (max - min) + 1}, (_, i) => max - i).map((note, i) => (
        <MidiTrack note={note} key={note} isEven={i % 2 === 0}/>
      ))}
    </Box>
  );
});

// @ts-ignore
MidiTrackList.whyDidYouRender = true;

export default MidiTrackList;
