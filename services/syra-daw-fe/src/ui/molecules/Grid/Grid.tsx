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
  splitScrollerRef?: React.RefObject<HTMLDivElement>;
  additionalRulerContent?: JSX.Element;
}

const Grid: React.FC<Props> = ({ view, additionalRulerContent, splitScrollerRef, children }) => {
  const viewRef = useRef<HTMLDivElement | null>(null);
  const setViewWidth = useSetRecoilState(gridStore.viewWidth(view));
  const { width } = useDimensions(viewRef);

  useLayoutEffect(() => {
    setViewWidth(width);
  }, [width, setViewWidth]);

  const viewContextValue = useMemo(
    () => ({
      viewRef,
      view,
    }),
    [viewRef, view],
  );

  return (
    <Box
      bg={'gray.800'}
      ref={viewRef}
      userSelect={'none'}
    >
      {viewRef.current !== null && (
        <ViewContext.Provider value={viewContextValue}>
          <RulerV2 additionalRulerContent={additionalRulerContent} splitScrollerRef={splitScrollerRef}/>
          {children}
        </ViewContext.Provider>
      )}
    </Box>
  );
};

// @ts-ignore
Grid.whyDidYouRender = true;

export default Grid;
