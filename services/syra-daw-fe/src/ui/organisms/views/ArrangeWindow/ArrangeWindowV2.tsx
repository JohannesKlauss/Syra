import React, { useRef } from 'react';
import SplitScroller from '../../../atoms/Layout/SplitScroller';
import Grid from '../../../molecules/Grid/Grid';
import { View } from '../../../../types/View';
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';
import RulerSettings from '../../../molecules/Ruler/Settings/RulerSettings';
import VerticalChannelList from '../../../molecules/Channels/VerticalChannels/VerticalChannelList';
import GridTracks from '../../../molecules/ArrangeWindow/GridTracks';
import DropTrack from '../../../molecules/ArrangeWindow/Track/DropTrack';
import ReportIssue from '../../../molecules/Support/ReportIssue';
import RulerSnapSettings from '../../../molecules/Ruler/Settings/RulerSnapSettings';
import RulerZoomInOut from '../../../molecules/Ruler/Settings/RulerZoomInOut';
import RulerCycleSettings from '../../../molecules/Ruler/Settings/RulerCycleSettings';
import UndoRedo from '../../../molecules/UndoRedo';

interface Props extends BoxProps {}

const ArrangeWindowV2: React.FC<Props> = (props) => {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <Box {...props} w={'100%'} pos={'fixed'}>
      <RulerSettings>
        <Image boxSize={'2rem'} src="/assets/gfx/syra-logo.png" alt="Syra DAW" />
        <RulerSnapSettings view={View.ARRANGE_WINDOW} />
        <RulerZoomInOut view={View.ARRANGE_WINDOW} />
        <UndoRedo />
        <RulerCycleSettings />
        <ReportIssue />
      </RulerSettings>

      <Flex flexFlow={'column'} h={'100%'} overflowY={'auto'}>
        <SplitScroller ref={viewRef}>
          <VerticalChannelList />
          <Grid view={View.ARRANGE_WINDOW} viewRef={viewRef}>
            <GridTracks />
          </Grid>
        </SplitScroller>
        <DropTrack />
      </Flex>
    </Box>
  );
};

export default ArrangeWindowV2;
