import React, { useCallback, useMemo, useState } from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import {
  arrangeWindowStore,
} from '../../recoil/arrangeWindow';
import { ARRANGE_GRID_OFFSET } from '../../const/ui';

interface BaseContainerProps {
  windowWidth: number;
}

interface PlayheadProps {
  translateX: number;
}

const BaseContainer = styled(Box)({
  backgroundColor: splinterTheme.palette.background.default,
  width: ({ windowWidth }: BaseContainerProps) => windowWidth,
  position: 'absolute',
  bottom: 0,
  height: 20,
  marginLeft: ARRANGE_GRID_OFFSET,
});

const Playhead = styled('span')({
  zIndex: 12,
  width: 15,
  top: 20,
  position: 'absolute',
  height: 1200,
  display: 'inline-block',
  cursor: 'col-resize',
  willChange: 'transform',
  pointerEvents: 'none',
  transform: ({ translateX }: PlayheadProps) => `translateX(${translateX}px)`,
  '&::before': {
    content: '"\\25BC"',
    bottom: '100%',
    color: 'white',
    fontSize: 28,
    left: -7,
    position: 'absolute',
    textAlign: 'center',
    width: 30,
    top: -28,
  },
  '&:after': {
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: '100%',
    marginLeft: 7,
    marginTop: -1,
    width: 2,
  },
});

function GridTransportCursor() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const setPlayheadPos = useSetRecoilState(arrangeWindowStore.playheadPosition);
  const snappedPlayheadPos = useRecoilValue(arrangeWindowStore.snappedPlayheadPosition);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const snapValue = useRecoilValue(arrangeWindowStore.snapValue);
  const [isCursorDragging, setIsCursorDragging] = useState(false);

  const translateX = useMemo(() => (snappedPlayheadPos - 1) * (snapWidth * (1 / snapValue)), [snappedPlayheadPos, snapWidth, snapValue]);

  const calcPlayheadPos = useCallback((e: any) => {
    const x = e.clientX - e.target.getBoundingClientRect().left + ARRANGE_GRID_OFFSET;

    let exactPos = x / (snapWidth * (1 / snapValue)) + 1;

    if (exactPos < 1) {
      exactPos = 1;
    }

    setPlayheadPos(exactPos);
  }, [setPlayheadPos, snapWidth, snapValue]);

  const onClickTransport = useCallback(e => {
    if (!isCursorDragging) {
      calcPlayheadPos(e);
    }
  }, [calcPlayheadPos, isCursorDragging]);

  const onPlayheadDrag = useCallback(e => {
    if (isCursorDragging) {
      calcPlayheadPos(e);
    }
  }, [calcPlayheadPos, isCursorDragging]);

  return (
    <BaseContainer windowWidth={windowWidth} onMouseDown={() => setIsCursorDragging(true)}
                   onMouseUp={() => setIsCursorDragging(false)} onMouseMove={onPlayheadDrag}
                   onClick={onClickTransport}>
      <Playhead translateX={translateX}/>
    </BaseContainer>
  );
}

export default GridTransportCursor;
