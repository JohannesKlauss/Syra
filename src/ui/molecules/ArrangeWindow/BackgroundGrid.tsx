import React from 'react';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useRecoilValue } from 'recoil/dist';
import { createNewId } from '../../../utils/createNewId';

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
  const gridId = createNewId('grid-pattern');
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const snapValueWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);

  const rectWidth = 1 / window.devicePixelRatio;

  return (
    <CustomContainer>
      <svg width={windowWidth}  height={ticksFullHeight ? '3200' : '100%'} pointerEvents={'none'}>
        <defs>
          <pattern id={gridId} x="0" y="0" width={snapValueWidth} height="100%" patternUnits="userSpaceOnUse">
            <rect width={rectWidth} height="200%" x="0" y="0" stroke={'#808080'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(snapValueWidth * 0.25)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(snapValueWidth * 0.5)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(snapValueWidth * 0.75)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
          </pattern>
        </defs>
        <rect fill={`url(#${gridId})`} x="0" y="0" width={windowWidth} height="100%"/>
      </svg>
    </CustomContainer>
  );
}

export default BackgroundGrid;
