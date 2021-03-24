import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { View } from '../../../types/View';
import { useSetRecoilState } from 'recoil';
import { Box } from '@chakra-ui/react';
import { gridStore } from '../../../recoil/gridStore';
import { ViewContext } from '../../../providers/ViewContext';
import RulerV2 from '../RulerV2/RulerV2';
import useDimensions from '../../../hooks/ui/useDimensions';

interface Props {
  view: View;
  viewRef: React.RefObject<HTMLDivElement>;
  additionalRulerContent?: JSX.Element;
}

const Grid: React.FC<Props> = ({ view, additionalRulerContent, viewRef, children }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const setViewWidth = useSetRecoilState(gridStore.viewWidth(view));
  const { width } = useDimensions(gridRef);

  useLayoutEffect(() => {
    setViewWidth(width);
  }, [width, setViewWidth]);

  const viewContextValue = useMemo(
    () => ({
      viewRef,
      gridRef,
      view,
    }),
    [viewRef, view],
  );

  return (
    <Box
      bg={'gray.800'}
      ref={gridRef}
      userSelect={'none'}
      data-id={'Grid container'}
    >
      {gridRef.current !== null && (
        <ViewContext.Provider value={viewContextValue}>
          <RulerV2 additionalRulerContent={additionalRulerContent}/>
          {children}
        </ViewContext.Provider>
      )}
    </Box>
  );
};

// @ts-ignore
Grid.whyDidYouRender = true;

export default Grid;
