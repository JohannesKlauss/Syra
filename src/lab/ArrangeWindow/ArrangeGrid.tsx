import React, { useEffect, useRef } from 'react';
import { Box, RootRef, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import GridTracks from './GridTracks';
import { ARRANGE_GRID_OFFSET } from '../../const/ui';
import Ruler from '../Ruler/Ruler';

const BaseContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'scroll',
  overflowY: 'hidden',
  backgroundColor: splinterTheme.palette.background.default,
  paddingLeft: ARRANGE_GRID_OFFSET * (-2),
});

function ArrangeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: ADD SCROLLING WHEN PLAYHEAD IS TRACKED AND NOT VISIBLE ANYMORE.
  }, [containerRef]);

  return (
    <RootRef rootRef={containerRef}>
      <BaseContainer>
        <Ruler/>
        <GridTracks/>
      </BaseContainer>
    </RootRef>
  );
}

export default React.memo(ArrangeGrid);
