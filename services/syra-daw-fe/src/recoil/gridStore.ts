import { atom, atomFamily, selectorFamily } from "recoil";
import { WindowView } from "../types/WindowView";

// This is the width of the specific window viewport (i.e. arrange view, piano roll view, etc.), not the whole browser screen.
const windowViewportWidth = atomFamily<number, WindowView>({
  key: 'grid/windowViewportWidth',
  default: 0,
});

// This is the zoom level. The zoom level defines how many bars are visible in a grid window.
// This goes from 1 to 11
const horizontalZoomLevel = atomFamily<number, WindowView>({
  key: 'grid/horizontalZoomLevel',
  default: 6,
});

const gridWidth = selectorFamily<number, WindowView>({
  key: 'grid/gridWidth',
  get: windowView => ({get}) => get(windowViewportWidth(windowView)) * get(horizontalZoomLevel(windowView)),
});