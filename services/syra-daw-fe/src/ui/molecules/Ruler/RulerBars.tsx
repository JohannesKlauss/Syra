import { Box } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { projectStore } from '../../../recoil/projectStore';
import { transportStore } from '../../../recoil/transportStore';

const ProjectEndHandle: React.FC<{ left: number }> = ({ left, children }) => (
  <Box
    as={'span'}
    pos={'absolute'}
    borderLeft={'3px solid rgba(255, 255, 255, 0.3)'}
    pl={'4px'}
    pointerEvents={'none'}
    zIndex={3}
    h={'20px'}
    w={'inherit'}
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
    left={`${left}px`}
  >
    {children}
  </Box>
);

function RulerBars() {
  const bars = useRecoilValue(transportStore.filteredBars);
  const zoomedQuarterPixelWidth = useRecoilValue(arrangeWindowStore.zoomedQuarterPixelWidth);
  const projectLengthInQuarters = useRecoilValue(projectStore.lengthInQuarters);

  const filteredBars = useMemo(() => bars.filter((item) => item.displayOnRulerBar), [bars]);

  return (
    <Box h={'20px'} pos={'absolute'} top={0} w={'100%'} pointerEvents={'none'} userSelect={'none'} bg={'gray.900'}>
      {filteredBars.map((bar) => {
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

export default React.memo(RulerBars);
