import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import RulerBarsV2 from './RulerBarsV2';
import { Box } from '@chakra-ui/react';
import { ViewContext } from '../../../providers/ViewContext';
import { gridStore } from '../../../recoil/gridStore';
import RulerTransportCursorV2 from './RulerTransportCursorV2';

function RulerV2() {
  const { view } = useContext(ViewContext);
  const windowWidth = useRecoilValue(gridStore.totalWidth(view));

  return (
    <Box
      w={`${windowWidth}px`}
      bg={'gray.800'}
      h={'40px'}
      pos={'sticky'}
      top={0}
      zIndex={1}
      borderBottom={`1px solid rgba(255, 255, 255, 0.3)`}
      userSelect={'none'}
    >
      <RulerBarsV2 />
      <RulerTransportCursorV2 />
    </Box>
  );
}

export default React.memo(RulerV2);
