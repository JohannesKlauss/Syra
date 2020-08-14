import React from 'react';

type Rect = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export const SelectableContext = React.createContext<Rect>({
  x0: -1,
  y0: -1,
  x1: -1,
  y1: -1,
});