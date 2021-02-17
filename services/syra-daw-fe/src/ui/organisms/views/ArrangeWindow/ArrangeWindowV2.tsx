import React from "react";
import SplitScroller from "../../../atoms/Layout/SplitScroller";
import Grid from "../../../molecules/Grid/Grid";
import { View } from "../../../../types/View";
import { Box, Button, useTheme } from '@chakra-ui/react';
import RulerSettings from "../../../molecules/Ruler/Settings/RulerSettings";
import VerticalChannelList from "../../../molecules/Channels/VerticalChannels/VerticalChannelList";
import GridTracks from "../../../molecules/ArrangeWindow/GridTracks";
import DropTrack from "../../../molecules/ArrangeWindow/Track/DropTrack";
import ReportIssue from "../../../molecules/Support/ReportIssue";

interface Props {

}

const ArrangeWindowV2: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <Box w={'100%'} h={'100%'} borderTop={`1px solid ${theme.colors.teal[300]}`}>
      <RulerSettings>
        <ReportIssue/>
      </RulerSettings>
      <SplitScroller>
        <VerticalChannelList/>
        <Grid view={View.ARRANGE_WINDOW}>
          <GridTracks/>
          <DropTrack/>
        </Grid>
      </SplitScroller>
    </Box>
  );
};

export default ArrangeWindowV2;
