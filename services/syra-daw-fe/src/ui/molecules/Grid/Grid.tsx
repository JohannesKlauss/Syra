import React, {useLayoutEffect, useMemo, useRef} from "react";
import {View} from '../../../types/View';
import {useSetRecoilState} from 'recoil';
import {Box} from '@chakra-ui/react';
import {gridStore} from '../../../recoil/gridStore';
import {ViewContext} from '../../../providers/ViewContext';
import RulerV2 from '../RulerV2/RulerV2';
import useDimensions from '../../../hooks/ui/useDimensions';

interface Props {
  view: View;
  additionalRulerContent?: JSX.Element;
}

const Grid: React.FC<Props> = ({view, additionalRulerContent, children}) => {
  const viewRef = useRef<HTMLDivElement | null>(null);
  const setViewWidth = useSetRecoilState(gridStore.viewWidth(view));
  const {width} = useDimensions(viewRef);

  useLayoutEffect(() => {
    setViewWidth(width);
  }, [width, setViewWidth]);

  const viewContextValue = useMemo(() => ({
    viewRef,
    view
  }), [viewRef, view]);

  return (
    <Box overflowX={'scroll'} overflowY={'hidden'} pos={'relative'} bg={'gray.800'} w={'100%'} ref={viewRef} userSelect={'none'}>
      {viewRef.current !== null && (
        <ViewContext.Provider value={viewContextValue}>
          <RulerV2>
            {additionalRulerContent}
          </RulerV2>
          {children}
        </ViewContext.Provider>
      )}
    </Box>
  );
};

export default Grid;
