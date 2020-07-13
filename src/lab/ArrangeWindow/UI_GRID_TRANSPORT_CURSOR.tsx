import React, { useCallback, useMemo, useState } from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import {
  arrangeWindowWidth,
  playheadPosition,
  rulerItems,
  snapValueWidthInPixels,
} from '../../recoil/atoms/arrangeWindow';
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

interface Props {

}

function UI_GRID_TRANSPORT_CURSOR({}: Props) {
  const windowWidth = useRecoilValue(arrangeWindowWidth);
  const items = useRecoilValue(rulerItems);
  const [playheadPos, setPlayheadPos] = useRecoilState(playheadPosition);
  const snapWidth = useRecoilValue(snapValueWidthInPixels);
  const [isCursorDragging, setIsCursorDragging] = useState(false);

  // TODO: These two should probably live in the recoil state.
  const translateX = useMemo(() => (playheadPos - 1) * (windowWidth / items.length), [items, windowWidth, playheadPos]);

  const onClickTransport = useCallback(e => {
    // @ts-ignore
    const x = e.clientX - e.target.getBoundingClientRect().left + ARRANGE_GRID_OFFSET;

    setPlayheadPos(Math.round(x / snapWidth) + 1);
  }, [snapWidth, setPlayheadPos]);

  const onPlayheadDrag = useCallback(e => {
    if (isCursorDragging) {
      const x = e.clientX - e.target.getBoundingClientRect().left + ARRANGE_GRID_OFFSET;

      if (Math.round(x / snapWidth) + 1 === 1) {
        console.log('x', x);
        console.log('snapWidth', snapWidth);
      }

      setPlayheadPos(Math.round(x / snapWidth) + 1);
    }
  }, [isCursorDragging, snapWidth]);

  return (
    <BaseContainer windowWidth={windowWidth} onMouseDown={() => setIsCursorDragging(true)}
                   onMouseUp={() => setIsCursorDragging(false)} onMouseMove={onPlayheadDrag}
                   onClick={onClickTransport}>
      <Playhead translateX={translateX}/>
    </BaseContainer>
  );
}

export default UI_GRID_TRANSPORT_CURSOR;
