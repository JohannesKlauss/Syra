import React, { useContext } from "react";
import { useRecoilValue } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { Box } from '@chakra-ui/react';
import { ViewContext } from "../../../providers/ViewContext";
import { gridStore } from "../../../recoil/gridStore";

interface Props {
  ticksFullHeight?: boolean;
}

function BackgroundGridV2({ticksFullHeight}: Props) {
  const { view } = useContext(ViewContext);
  const gridId = createNewId('grid-pattern');
  const windowWidth = useRecoilValue(gridStore.viewWidth(view));
  const zoomedBarPixelWidth = Math.max(useRecoilValue(gridStore.zoomedQuarterPixelWidth(view)) * 4, 0);

  const rectWidth = 1 / window.devicePixelRatio;

  return (
    <Box pos={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bg={'transparent'} pointerEvents={'none'}>
      <svg width={windowWidth} height={ticksFullHeight ? '3200' : '100%'} pointerEvents={'none'}>
        <defs>
          <pattern id={gridId} x="0" y="0" width={zoomedBarPixelWidth} height="100%" patternUnits="userSpaceOnUse">
            <rect width={rectWidth} height="200%" x="0" y="0" stroke={'#808080'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(zoomedBarPixelWidth * 0.25)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(zoomedBarPixelWidth * 0.5)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
            <rect width={rectWidth} height="200%" x={Math.ceil(zoomedBarPixelWidth * 0.75)} y={ticksFullHeight ? 0 : 30} stroke={'#505050'}/>
          </pattern>
        </defs>
        <rect fill={`url(#${gridId})`} x="0" y="0" width={windowWidth} height="100%"/>
      </svg>
    </Box>
  );
}

export default BackgroundGridV2;
