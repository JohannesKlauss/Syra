import React, { useCallback, useState } from 'react';
import { Box, BoxProps, styled } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import {
  arrangeWindowStore,
} from '../../../recoil/arrangeWindowStore';
import { ARRANGE_GRID_OFFSET } from '../../../const/ui';
import RulerPlayhead from './RulerPlayhead';

interface BaseContainerProps {
  windowWidth: number;
}

const BaseContainer = styled(
  ({ windowWidth, ...other }: BaseContainerProps & Omit<BoxProps, keyof BaseContainerProps>) => <Box {...other} />,
)({
  backgroundColor: 'transparent',
  width: ({ windowWidth }: BaseContainerProps) => windowWidth,
  position: 'absolute',
  bottom: 0,
  height: 20,
  marginLeft: ARRANGE_GRID_OFFSET,
  zIndex: 2,
});

function RulerTransportCursor() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const setPlayheadPos = useSetRecoilState(arrangeWindowStore.playheadPosition);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const snapValue = useRecoilValue(arrangeWindowStore.snapValue);
  const [isCursorDragging, setIsCursorDragging] = useState(false);

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
                   onMouseLeave={() => setIsCursorDragging(false)}
                   onMouseUp={() => setIsCursorDragging(false)} onMouseMove={onPlayheadDrag}
                   onClick={onClickTransport}>
      <RulerPlayhead/>
    </BaseContainer>
  );
}

export default RulerTransportCursor;
