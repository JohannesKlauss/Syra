import React, { HTMLAttributes, useCallback, useRef, useState } from 'react';
import { styled, Theme } from '@material-ui/core';
import useMovementTracker from '../../hooks/ui/useMovementTracker';
import { BoxArea } from '../../types/Ui';

interface SelectionBoxProps {
  x2: number;
  y2: number;
  x3: number;
  y3: number;
}

const SelectionBox = styled(
  ({ x2, x3, y2, y3, ...other }: SelectionBoxProps & Omit<HTMLAttributes<HTMLDivElement>, keyof SelectionBoxProps>) =>
    <div {...other} />,
)<Theme, SelectionBoxProps>(({ x2, x3, y2, y3 }) => ({
  border: '1px solid white',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  position: 'absolute',
  zIndex: 9999999,
  left: x2,
  top: y2,
  width: x3 - x2,
  height: y3 - y2,
}));

interface Props {
  onSelect: (area: BoxArea) => void;
}

const SelectionTool: React.FC<Props> = ({ children, onSelect }) => {
  const [x0, setX0] = useState(-1);
  const [x1, setX1] = useState(-1);
  const [y0, setY0] = useState(-1);
  const [y1, setY1] = useState(-1);
  const [isHidden, setIsHidden] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((pos) => {
    setX1(pos.x);
    setY1(pos.y);
  }, [setX1, setY1]);

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

  const onMouseDown = useCallback((e) => {
    setX0(e.clientX - (divRef.current?.getBoundingClientRect().left ?? 0));
    setX1(e.clientX - (divRef.current?.getBoundingClientRect().left ?? 0));
    setY0(e.clientY - (divRef.current?.getBoundingClientRect().top ?? 0));
    setY1(e.clientY - (divRef.current?.getBoundingClientRect().top ?? 0));
    setIsHidden(false);
    trigger(e);
  }, [trigger, setX0, setY0, divRef]);

  const x2 = Math.min(x0, x1);
  const x3 = Math.max(x0, x1);
  const y2 = Math.min(y0, y1);
  const y3 = Math.max(y0, y1);

  return (
    <>
      <div onMouseDown={onMouseDown} ref={divRef}>
        {children}
      </div>
      <SelectionBox x2={x2} y2={y2} x3={x3} y3={y3} hidden={isHidden}/>
    </>
  );
};

// @ts-ignore
SelectionTool.whyDidYouRender = true;

export default SelectionTool;
