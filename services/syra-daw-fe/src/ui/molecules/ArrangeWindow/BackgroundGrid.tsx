import React from 'react';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useRecoilValue } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { Box } from '@chakra-ui/core';

interface Props {
  ticksFullHeight?: boolean;
}

function BackgroundGrid({ticksFullHeight}: Props) {
  const gridId = createNewId('grid-pattern');
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const rulerItemWidth = useRecoilValue(arrangeWindowStore.barWidthInPixel);

  const rectWidth = 1 / window.devicePixelRatio;

  return (
    <Box pos={'absolute'} top={0} left={0} w={'100%'} h={'100%'}>
      <svg width={windowWidth} height={ticksFullHeight ? '3200' : '100%'} pointerEvents={'none'}>
        <defs>
          <pattern id={gridId} x="0" y="0" width={rulerItemWidth} height="100%" patternUnits="userSpaceOnUse">
            <rect width={rectWidth} height="200%" x="0" y="0" stroke={'#808080'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(rulerItemWidth * 0.25)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(rulerItemWidth * 0.5)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(rulerItemWidth * 0.75)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
          </pattern>
        </defs>
        <rect fill={`url(#${gridId})`} x="0" y="0" width={windowWidth} height="100%"/>
      </svg>
    </Box>
  );
}

export default BackgroundGrid;
