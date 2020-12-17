import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { View } from "../types/View";
import { projectStore } from "./projectStore";
import { transportStore } from "./transportStore";
import { Bar } from "../types/Ui";
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from "../const/ui";

// This is the width of the specific window viewport (i.e. arrange view, piano roll view, etc.), not the whole browser screen.
const viewWidth = atomFamily<number, View>({
  key: 'grid/viewWidth',
  default: 0,
});

// This is the zoom level. The zoom level defines how many bars are visible in a grid window.
// This goes from 1 to 11
const horizontalZoomLevel = atomFamily<number, View>({
  key: 'grid/horizontalZoomLevel',
  default: 6,
});

// This is the zoom level. The zoom level defines how many tracks are visible in the arrange window.
// This goes from 1 to 11
const verticalZoomLevel = atomFamily<number, View>({
  key: 'grid/verticalZoomLevel',
  default: 6,
});

const trackHeight = selectorFamily<number, View>({
  key: 'arrangeWindow/trackHeight',
  get: view => ({get}) => ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[get(verticalZoomLevel(view))],
});

// The total width of the inner scrollable container (region window, midi notes window, channel list, etc.)
const totalWidth = selectorFamily<number, View>({
  key: 'grid/totalWidth',
  get: view => ({get}) => get(viewWidth(view)) * get(horizontalZoomLevel(view)),
});

const baseQuarterPixelWidth = selectorFamily<number, View>({
  key: 'grid/baseQuarterPixelWidth',
  get: view => ({get}) => (get(viewWidth(view)) - 30) / get(projectStore.lengthInQuarters),
});

const zoomedQuarterPixelWidth = selectorFamily<number, View>({
  key: 'grid/zoomedQuarterPixelWidth',
  get: view => ({get}) => (get(totalWidth(view)) - 30) / get(projectStore.lengthInQuarters),
});

const playheadPosition = selectorFamily<number, View>({
  key: 'grid/playheadPosition',
  get: view => ({get}) => get(transportStore.currentQuarter) * get(zoomedQuarterPixelWidth(view)),
});

// This is the value the grid snaps to. Default is 4 which stands for 4 quarters. A quarter note would be 1, a sixteenth 0.25 and so on.
const snapValue = atomFamily<number, View>({
  key: 'grid/snapValue',
  default: 4,
});

const snapValueWidthInPixels = selectorFamily<number, View>({
  key: 'grid/snapValueWidthInPixels',
  get: view => ({get}) => get(zoomedQuarterPixelWidth(view)) * get(snapValue(view)),
});

const isSnapActive = atomFamily<boolean, View>({
  key: 'grid/isSnapActive',
  default: true,
});

const pixelPerSecond = selectorFamily<number, View>({
  key: 'grid/pixelPerSecond',
  get: view => ({get}) => get(zoomedQuarterPixelWidth(view)) / get(projectStore.secondsPerBeat),
});

const filteredBars = selectorFamily<Bar[], View>({
  key: 'transport/filteredRulerItems',
  get: view => ({get}) => {
    const allItems = get(transportStore.bars);
    const quarterWidth = get(zoomedQuarterPixelWidth(view));

    let gapBetweenBars = 40;

    return allItems.filter((item) => {
      gapBetweenBars += item.lengthInQuarters * quarterWidth;

      if (gapBetweenBars >= 40) {
        gapBetweenBars = 0;

        return true;
      }

      return false;
    });
  }
});

export const gridStore = {
  horizontalZoomLevel,
  verticalZoomLevel,
  trackHeight,
  viewWidth,
  totalWidth,
  baseQuarterPixelWidth,
  zoomedQuarterPixelWidth,
  playheadPosition,
  snapValue,
  snapValueWidthInPixels,
  isSnapActive,
  pixelPerSecond,
  filteredBars,
}