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
  marginLeft: -6,
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
    content: '"\\E62B"',
    bottom: '100%',
    color: 'white',
    fontSize: 19,
    left: -8,
    position: 'absolute',
    textAlign: 'center',
    width: 30,
  },
  '&:after': {
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: '100%',
    marginLeft: 7,
    marginTop: -1,
    width: 1,
  },
});

interface Props {

}

function UI_GRID_TRANSPORT_CURSOR({}: Props) {
  const windowWidth = useRecoilValue(arrangeWindowWidth);
  const items = useRecoilValue(rulerItems);
  const [playheadPos, setPlayheadPos] = useRecoilState(playheadPosition);
  const snapWidth = useRecoilValue(snapValueWidthInPixels);

  // TODO: These two should probably live in the recoil state.
  const translateX = useMemo(() => (playheadPos - 1) * (windowWidth / items.length), [items, windowWidth, playheadPos]);

  const onClickTransport = useCallback(e => {
    // -6 because the parent container has a marginleft of -6 pixels.
    // @ts-ignore
    const x = e.clientX - e.target.getBoundingClientRect().left - 6;// TODO: THIS SHOULD BE A CONSTANT TO AVOID BUGS WHEN WE CHANGE LAYOUT.

    setPlayheadPos(Math.round((x - 6) / snapWidth) + 1);
  }, [snapWidth, setPlayheadPos]);

  return (
    <BaseContainer windowWidth={windowWidth} onClick={onClickTransport}>
      <Playhead translateX={translateX}/>
    </BaseContainer>
  );
}

export default UI_GRID_TRANSPORT_CURSOR;
