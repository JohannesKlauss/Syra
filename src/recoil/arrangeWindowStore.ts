import { atom, selector } from 'recoil';
import {
  ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT,
  ZOOM_RESOLUTION_MAP,
} from '../const/ui';
import { EditMode } from '../types/RegionManipulation';
import { RefObject } from 'react';
import { projectStore } from './projectStore';
import { transportStore } from './transportStore';

const waveformSmoothing = atom({
  key: 'arrangeWindow/waveformSmoothing',
  default: 2,
})

// This is the width of the arrange window, not the whole browser screen.
const viewportWidth = atom({
  key: 'arrangeWindow/viewportWidth',
  default: 0,
});

const width = selector({
  key: 'arrangeWindow/width',
  get: ({get}) => get(viewportWidth) * get(horizontalZoomLevel),
});

// The ref object of the arrange window itself. Used to track scrolling inside the arrange window.
const ref = atom<RefObject<HTMLDivElement> | undefined>({
  key: 'arrangeWindow/ref',
  default: undefined,
})

const editMode = atom<EditMode>({
  key: 'arrangeWindow/editMode',
  default: EditMode.DEFAULT,
});

const marqueePosition = atom<null | number>({
  key: 'arrangeWindow/marqueePosition',
  default: null,
});

// determines on which channel the marquee should be displayed.
const marqueeChannelPosition = atom<null | string>({
  key: 'arrangeWindow/marqueeChannelPosition',
  default: null,
});

const isSnapActive = atom({
  key: 'arrangeWindow/isSnapActive',
  default: true,
});

// The position of the transport bar. This is measured in pixel!
const playheadPosition = atom({
  key: 'arrangeWindow/playheadPosition',
  default: 0,
});

// This is the zoom level. The zoom level defines how many bars are visible in the arrange window.
// This goes from 1 to 11
const horizontalZoomLevel = atom({
  key: 'arrangeWindow/horizontalZoomLevel',
  default: 6,
});

// This is the zoom level. The zoom level defines how many tracks are visible in the arrange window.
// This goes from 1 to 11
const verticalZoomLevel = atom({
  key: 'arrangeWindow/verticalZoomLevel',
  default: 6,
});

// This is the value the grid snaps to. Default is 4 which stands for 4 quarters. A quarter note would be 1, a sixteenth 0.25 and so on.
const snapValue = atom({
  key: 'arrangeWindow/snapValue',
  default: 4,
})

const snapValueWidthInPixels = selector({
  key: 'arrangeWindow/snapValueWidthInPixels',
  get: ({get}) => get(zoomedQuarterPixelWidth) * get(snapValue),
});

const trackHeight = selector({
  key: 'arrangeWindow/trackHeight',
  get: ({get}) => ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[get(verticalZoomLevel)],
});

// The resolution is a multiplier by which the quarterBaseWidth gets multiplied.
const resolution = selector({
  key: 'arrangeWindow/resolution',
  get: ({get}) => ZOOM_RESOLUTION_MAP[get(horizontalZoomLevel)],
});

const pixelPerSecond = selector({
  key: 'arrangeWindow/pixelPerSecond',
  get: ({get}) => get(zoomedQuarterPixelWidth) / get(projectStore.secondsPerBeat),
});

const barWidthInPixel = selector({
  key: 'arrangeWindow/barWidthInPixel',
  get: ({get}) => get(width) / get(transportStore.bars).length
});

// 30 is just a margin, so that the last quarter doesn't exactly end on the border of the arrange window, but has some
// margin between it.
// This also represents the smallest amount of space between quarters, because in this calculations all quarters are shown in the window.
const baseQuarterPixelWidth = selector({
  key: 'arrangeWindow/baseQuarterPixelWidth',
  get: ({get}) => (get(viewportWidth) - 30) / get(projectStore.lengthInQuarters)
});

const zoomedQuarterPixelWidth = selector({
  key: 'arrangeWindow/zoomedQuarterPixelWidth',
  get: ({get}) => get(baseQuarterPixelWidth),
});

export const arrangeWindowStore = {
  waveformSmoothing,
  viewportWidth,
  ref,
  editMode,
  playheadPosition,
  horizontalZoomLevel,
  verticalZoomLevel,
  snapValue,
  snapValueWidthInPixels,
  isSnapActive,
  width,
  trackHeight,
  resolution,
  barWidthInPixel,
  baseQuarterPixelWidth,
  zoomedQuarterPixelWidth,
  pixelPerSecond,
  marqueePosition,
  marqueeChannelPosition,
};