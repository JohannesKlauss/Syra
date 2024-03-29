import { Box, useTheme } from '@chakra-ui/react';
import React, { useRef } from 'react';
import SplitScroller from '../../../atoms/Layout/SplitScroller';
import Grid from '../../../molecules/Grid/Grid';
import VerticalPiano from '../../../molecules/Piano/VerticalPiano';
import { View } from '../../../../types/View';
import MidiTrackList from '../../../molecules/Midi/MidiTrackList';
import PianoRollSettings from '../../../molecules/PianoRoll/PianoRollSettings';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { pianoRollStore } from '../../../../recoil/pianoRollStore';
import { useRecoilValue } from 'recoil';
import MidiRegionIndicatorList from './MidiRegionIndicatorList';
import BackgroundGridV2 from '../../../molecules/Grid/BackgroundGridV2';

interface Props {
  minNote: number;
  maxNote: number;
  showView?: boolean;
}

const PianoRoll: React.FC<Props> = ({ minNote, maxNote, showView }) => {
  const theme = useTheme();
  const selectedChannelId = useRecoilValue(pianoRollStore.selectedChannelId);
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <ChannelContext.Provider value={selectedChannelId}>
      <Box
        w={'100%'}
        h={'calc(100% - 49px)'}
        borderTop={`1px solid ${theme.colors.teal[300]}`}
        display={showView ? 'block' : 'none'}
      >
        <PianoRollSettings />
        <SplitScroller ref={viewRef}>
          <VerticalPiano min={minNote} max={maxNote} />
          <Grid view={View.PIANO_ROLL} viewRef={viewRef} additionalRulerContent={<MidiRegionIndicatorList />}>
            <MidiTrackList min={minNote} max={maxNote} />
            <BackgroundGridV2 />
          </Grid>
        </SplitScroller>
      </Box>
    </ChannelContext.Provider>
  );
};

export default PianoRoll;
