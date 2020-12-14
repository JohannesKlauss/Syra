import { Box } from '@chakra-ui/react';
import React, { useContext, useMemo } from "react";
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import { ViewContext } from "../../../providers/ViewContext";
import { gridStore } from "../../../recoil/gridStore";

const ProjectEndHandle: React.FC<{ left: number }> = ({ left, children }) => (
  <Box
    as={'span'}
    pos={'absolute'}
    borderLeft={'3px solid rgba(255, 255, 255, 0.3)'}
    pl={'4px'}
    pointerEvents={'none'}
    zIndex={3}
    h={'20px'}
    bg={'gray.800'}
    left={`${left}px`}
  >
    {children}
  </Box>
);

const RulerItem: React.FC<{ left: number }> = ({ left, children }) => (
  <Box
    as={'span'}
    pos={'absolute'}
    borderLeft={'1px solid rgba(255, 255, 255, 0.3)'}
    pl={'4px'}
    pointerEvents={'none'}
    zIndex={3}
    fontSize={'13.5px'}
    left={`${left}px`}
  >
    {children}
  </Box>
);

function RulerBarsV2() {
  const view = useContext(ViewContext);
  const bars = useRecoilValue(gridStore.filteredBars(view));
  const zoomedQuarterPixelWidth = useRecoilValue(gridStore.zoomedQuarterPixelWidth(view));
  const projectLengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);

  console.log('zoomedPixelWidthQ', zoomedQuarterPixelWidth);

  return (
    <Box h={'20px'} pos={'absolute'} top={0} w={'100%'} pointerEvents={'none'} userSelect={'none'} bg={'gray.900'}>
      {bars.map(bar => {
        console.log('quarterInProject', bar);
        return (
          <RulerItem key={bar.bar} left={zoomedQuarterPixelWidth * bar.quarterInProject}>
            {bar.bar}
          </RulerItem>
        );
      })}
      <ProjectEndHandle left={zoomedQuarterPixelWidth * projectLengthInQuarters} />
    </Box>
  );
}

export default React.memo(RulerBarsV2);