import React from 'react';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../recoil/arrangeWindowStore';
import { useRecoilValue } from 'recoil/dist';

const CustomContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

interface Props {
  ticksFullHeight?: boolean;
}

function BackgroundGrid({ticksFullHeight}: Props) {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const snapValueWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);

  return (
    <CustomContainer>
      <svg className="mix-editor-grid" width={windowWidth} height="100%">
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width={snapValueWidth} height="100%" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="3240" x="0" y="0" stroke={'#808080'}/>
            <rect width="0.5" height="3240" x={snapValueWidth * 0.25} y={ticksFullHeight ? '0' : '30'} stroke={'#505050'}/>
            <rect width="0.5" height="3240" x={snapValueWidth * 0.5} y={ticksFullHeight ? '0' : '30'} stroke={'#505050'}/>
            <rect width="0.5" height="3240" x={snapValueWidth * 0.75} y={ticksFullHeight ? '0' : '30'} stroke={'#505050'}/>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" x="0" y="0" width={windowWidth} height={'100%'}/>
      </svg>
    </CustomContainer>
  );
}

export default BackgroundGrid;
