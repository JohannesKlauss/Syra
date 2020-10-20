import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import GridTracks from './GridTracks';
import Ruler from '../Ruler/Ruler';
import useWindowSize from '../../../hooks/ui/useWindowResize';
import { useSetRecoilState } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import DropTrack from '../Track/DropTrack';

const BaseContainer = styled('div')(({ theme }) => ({
  overflowX: 'scroll',
  overflowY: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

function ArrangeGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const windowSize = useWindowSize();
  const setRef = useSetRecoilState(arrangeWindowStore.ref);
  const setViewportWidth = useSetRecoilState(arrangeWindowStore.viewportWidth);

  useEffect(() => {
    setRef(containerRef);
  }, [containerRef, setRef]);

  useLayoutEffect(() => {
    setViewportWidth(containerRef.current?.offsetWidth ?? 0);
  }, [windowSize, containerRef, setViewportWidth]);

  return (
    <BaseContainer ref={containerRef}>
      <Ruler/>
      <GridTracks/>
      <DropTrack/>
    </BaseContainer>
  );
}

export default React.memo(ArrangeGrid);
