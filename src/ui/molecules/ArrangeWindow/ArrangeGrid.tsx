import React, { useEffect, useRef } from 'react';
import { Box, RootRef, styled } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import GridTracks from './GridTracks';
import Ruler from '../Ruler/Ruler';
import useWindowSize from '../../../hooks/ui/useWindowResize';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import DropTrack from '../Track/DropTrack';

const BaseContainer = styled(Box)({
  overflowX: 'scroll',
  overflowY: 'hidden',
  position: 'relative',
  backgroundColor: splinterTheme.palette.background.default,
});

function ArrangeGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const windowSize = useWindowSize();
  const setRef = useSetRecoilState(arrangeWindowStore.ref);
  const setViewportWidth = useSetRecoilState(arrangeWindowStore.viewportWidth);

  useEffect(() => {
    setRef(containerRef);
  }, [containerRef, setRef]);

  useEffect(() => {
    setViewportWidth(containerRef.current?.offsetWidth ?? 0);
  }, [windowSize, containerRef, setViewportWidth]);

  return (
    <RootRef rootRef={containerRef}>
      <BaseContainer>
        <Ruler/>
        <GridTracks/>
        <DropTrack/>
      </BaseContainer>
    </RootRef>
  );
}

export default React.memo(ArrangeGrid);
