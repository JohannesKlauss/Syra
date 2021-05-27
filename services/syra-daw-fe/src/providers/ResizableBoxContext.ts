import React from 'react';
import { MotionValue } from "framer-motion";

type TResizableBoxContext = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  width: MotionValue<number>;
  boxOffset: MotionValue<number>;
}

export const ResizableBoxContext = React.createContext<TResizableBoxContext>({
  x: new MotionValue<number>(0),
  y: new MotionValue<number>(0),
  width: new MotionValue<number>(0),
  boxOffset: new MotionValue<number>(0),
});