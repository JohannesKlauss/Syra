import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { View } from '../../../types/View';
import { useSetRecoilState } from 'recoil';
import { Box } from '@chakra-ui/react';
import { gridStore } from '../../../recoil/gridStore';
import { ViewContext } from '../../../providers/ViewContext';
import RulerV2 from '../RulerV2/RulerV2';
import useDimensions from '../../../hooks/ui/useDimensions';

interface Props {
  windowView: View;
}

const Grid: React.FC<Props> = ({ windowView, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setViewWidth = useSetRecoilState(gridStore.viewWidth(windowView));
  const { width } = useDimensions(containerRef);

  useLayoutEffect(() => {
    setViewWidth(width);
  }, [width, setViewWidth]);

  return (
    <Box overflowX={'scroll'} overflowY={'hidden'} pos={'relative'} bg={'gray.800'} w={'100%'} ref={containerRef}>
      <ViewContext.Provider value={{
        viewRef: containerRef,
        view: View.PIANO_ROLL
      }}>
        <RulerV2 />
        {children}
      </ViewContext.Provider>
    </Box>
  );
};

export default Grid;
