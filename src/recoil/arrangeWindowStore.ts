import { atom, selector, selectorFamily } from 'recoil';
import {
  ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT,
  ZOOM_RESOLUTION_MAP,
} from '../const/ui';
import { EditMode } from '../types/RegionManipulation';
import { RefObject } from 'react';
import { projectStore } from './projectStore';
import { getSortedKeysOfEventMap } from '../utils/eventMap';
import { RulerItem } from '../types/Ui';

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

// This is the value the grid snaps to. Default is 1 which stands for 1 bar. A quarter note would be 0.25, a sixteenth 0.0625 and so on.
const snapValue = atom({
  key: 'arrangeWindow/snapValue',
  default: 1,
})

const snapValueWidthInPixels = selector({
  key: 'arrangeWindow/snapValueWidthInPixels',
  get: ({get}) => get(pixelPerBeat),
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
  get: ({get}) => {
    return 0;
  },
});

const pixelPerBeat = selector({
  key: 'arrangeWindow/pixelPerBeat',
  get: ({get}) => get(width) / get(projectStore.lengthInQuarters),
});

const tempoBlockWidthInPixel = selectorFamily<number, number>({
  key: 'arrangeWindow/tempoBlockWidthInPixel',
  get: blockAtSeconds => ({get}) => get(pixelPerBeat) * get(projectStore.beatsInTempoBlock(blockAtSeconds)),
});

const tempoBlockPixelAreas = selector<{[name: number]: [number, number]}>({
  key: 'arrangeWindow/tempoBlockPixelArea',
  get: ({get}) => {
    const changeAtKeys = getSortedKeysOfEventMap(get(projectStore.tempoMap));

    const map: {[name: number]: [number, number]} = {};
    let sumWidth: number = 0;

    for (let i = 0; i < changeAtKeys.length; i++) {
      const blockWidth = get(tempoBlockWidthInPixel(changeAtKeys[i]));

      map[changeAtKeys[i]] = [sumWidth + 1, sumWidth + blockWidth];

      sumWidth += blockWidth;
    }

    return map;
  }
});

const rulerItemWidth = selector({
  key: 'arrangeWindow/rulerItemWidth',
  get: ({get}) => get(width) / get(rulerItems).length
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

const rulerItems = selector<RulerItem[]>({
  key: 'arrangeWindow/rulerItems',
  get: ({get}) => {
    const projectLengthInQuarters = get(projectStore.lengthInQuarters);
    const timeSignatureMap = get(projectStore.timeSignatureMap);
    const changeKeys = getSortedKeysOfEventMap(timeSignatureMap);

    let currentTimeSignature = timeSignatureMap[0];
    let bar = 1;
    let lengthInQuarters = 0;

    const rulerItems: RulerItem[] = [];

    for (let divideBy = currentTimeSignature[1] / 4, i = 1; i <= projectLengthInQuarters; i += currentTimeSignature[0] / divideBy, bar++) {
      if (changeKeys.includes(i - 1)) {
        currentTimeSignature = timeSignatureMap[i - 1];
        lengthInQuarters = 0;
        divideBy = currentTimeSignature[1] / 4;
      }

      rulerItems.push({
        bar,
        quarterInProject: i,
        lengthInQuarters: currentTimeSignature[0] / divideBy,
        timeSignature: currentTimeSignature,
        displayOnRulerBar: true,
      });
    }

    return rulerItems;
  }
});

const filteredRulerItems = selector<RulerItem[]>({
  key: 'arrangeWindow/filteredRulerItems',
  get: ({get}) => {
    const allItems = get(rulerItems);
    const baseQuarterWidth = get(baseQuarterPixelWidth);

    let spaceBetween = 40;

    return allItems.map((item, i): RulerItem => {
      spaceBetween += item.lengthInQuarters * baseQuarterWidth;

      if (spaceBetween >= 40) {
        spaceBetween = 0;

        return item;
      }

      return {
        ...item,
        displayOnRulerBar: false,
      }
    });
  }
})

export const arrangeWindowStore = {
  waveformSmoothing,
  viewportWidth,
  tempoBlockWidthInPixel,
  tempoBlockPixelAreas,
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
  rulerItems,
  filteredRulerItems,
  rulerItemWidth,
  baseQuarterPixelWidth,
  zoomedQuarterPixelWidth,
  pixelPerSecond,
  pixelPerBeat,
  marqueePosition,
  marqueeChannelPosition,
};