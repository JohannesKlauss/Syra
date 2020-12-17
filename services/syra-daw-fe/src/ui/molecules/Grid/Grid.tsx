import React, { ReactNode, useLayoutEffect, useRef } from "react";
import { View } from '../../../types/View';
import { useSetRecoilState } from 'recoil';
import { Box } from '@chakra-ui/react';
import { gridStore } from '../../../recoil/gridStore';
import { ViewContext } from '../../../providers/ViewContext';
import RulerV2 from '../RulerV2/RulerV2';
import useDimensions from '../../../hooks/ui/useDimensions';

interface Props {
  view: View;
}

const Grid: React.FC<Props> = ({ view, children }) => {
  const viewRef = useRef<HTMLDivElement | null>(null);
  const setViewWidth = useSetRecoilState(gridStore.viewWidth(view));
  const { width } = useDimensions(viewRef);

  useLayoutEffect(() => {
    setViewWidth(width);
  }, [width, setViewWidth]);

  return (
    <Box overflowX={'scroll'} overflowY={'hidden'} pos={'relative'} bg={'gray.800'} w={'100%'} ref={viewRef}>
      <ViewContext.Provider value={{
        viewRef: viewRef,
        view
      }}>
        <RulerV2 />
        {children}
      </ViewContext.Provider>
    </Box>
  );
};

export default Grid;
