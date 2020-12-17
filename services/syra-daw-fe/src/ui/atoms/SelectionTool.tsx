import React, { useCallback, useContext, useRef, useState } from "react";
import useMovementTracker from '../../hooks/ui/useMovementTracker';
import { BoxArea } from '../../types/Ui';
import { useRecoilValue } from 'recoil';
import { Box } from '@chakra-ui/react';
import { ViewContext } from "../../providers/ViewContext";
import { gridStore } from "../../recoil/gridStore";

interface Props {
  onSelect: (area: BoxArea) => void;
}

const SelectionTool: React.FC<Props> = ({ children, onSelect }) => {
  const { view } = useContext(ViewContext);
  const [x0, setX0] = useState(-1);
  const [x1, setX1] = useState(-1);
  const [y0, setY0] = useState(-1);
  const [y1, setY1] = useState(-1);
  const [isHidden, setIsHidden] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);
  const trackHeight = useRecoilValue(gridStore.trackHeight(view));

  const onMouseMove = useCallback(
    (pos) => {
      setX1(pos.x);
      setY1(pos.y);
    },
    [setX1, setY1],
  );

  const onMouseUp = useCallback(() => {
    onSelect({
      x0: Math.min(x0, x1),
      x1: Math.max(x0, x1),
      y0: Math.min(y0, y1),
      y1: Math.max(y0, y1),
    });

    setIsHidden(true);
    setX0(-1);
    setX1(-1);
    setY0(-1);
    setY1(-1);
  }, [setIsHidden, setX0, setX1, setY0, setY1, onSelect, x0, x1, y0, y1]);

  const trigger = useMovementTracker(onMouseMove, onMouseUp, divRef);

  const onMouseDown = useCallback(
    (e) => {
      const x = e.clientX - (divRef.current?.getBoundingClientRect().left ?? 0);
      const y = e.clientY - (divRef.current?.getBoundingClientRect().top ?? 0);

      // If selection tool started dragging on bottom half of track, don't allow the box, but trigger the point selection.
      if (Math.round((y % trackHeight) / trackHeight) === 1) {
        onSelect({
          x0: x,
          x1: x,
          y0: y,
          y1: y,
        });

        return;
      }

      setX0(x);
      setX1(x);
      setY0(y);
      setY1(y);
      setIsHidden(false);
      trigger(e);
    },
    [trigger, setX0, setY0, divRef, trackHeight, onSelect],
  );

  const x2 = Math.min(x0, x1);
  const x3 = Math.max(x0, x1);
  const y2 = Math.min(y0, y1);
  const y3 = Math.max(y0, y1);

  return (
    <>
      <div onMouseDown={onMouseDown} ref={divRef}>
        {children}
      </div>
      <Box
        border={'1px solid white'}
        hidden={isHidden}
        backgroundColor={'rgba(255, 255, 255, 0.4)'}
        pos={'absolute'}
        zIndex={99999999}
        left={x2}
        top={y2}
        w={x3 - x2}
        h={y3 - y2}
      />
    </>
  );
};

// @ts-ignore
SelectionTool.whyDidYouRender = false;

export default SelectionTool;
