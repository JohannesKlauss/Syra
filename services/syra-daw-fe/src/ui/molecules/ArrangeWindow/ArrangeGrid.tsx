import React, { useEffect, useLayoutEffect, useRef } from 'react';
import GridTracks from './GridTracks';
import useWindowSize from '../../../hooks/ui/useWindowResize';
import { useSetRecoilState } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import DropTrack from '../Track/DropTrack';
import { Box } from '@chakra-ui/react';

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
    <Box overflowX={'scroll'} overflowY={'hidden'} pos={'relative'} bg={'gray.800'}>
      <GridTracks/>
      <DropTrack/>
    </Box>
  );
}

export default React.memo(ArrangeGrid);
