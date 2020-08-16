import { atom, selector } from 'recoil/dist';
import {
  ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT,
  ZOOM_LEVEL_ARRANGE_WINDOW_WIDTH,
  ZOOM_RESOLUTION_MAP,
} from '../const/ui';
import { EditMode } from '../types/RegionManipulation';
import { RefObject } from 'react';
import { projectStore } from './projectStore';

const waveformSmoothing = atom({
  key: 'arrangeWindow/waveformSmoothing',
  default: 2,
})

const viewportWidth = atom({
  key: 'arrangeWindow/viewportWidth',
  default: 0,
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

// The position of the transport bar. currently we set this to 1 as bars, but this will most certainly change, since we
// need it to be more detailed.
const playheadPosition = atom({
  key: 'arrangeWindow/playheadPosition',
  default: 1,
});

// This is the zoom level. The zoom level defines how many bars are visible in the arrange window.
// This goes from 1 to 11
const horizontalZoomLevel = atom({
  key: 'arrangeWindow/horizontalZoomLevel',
  default: 2,
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
  get: ({get}) => get(width) / ((get(projectStore.length) / get(resolution) * (1 / get(snapValue))))
});

const width = selector({
  key: 'arrangeWindow/width',
  get: ({get}) => ZOOM_LEVEL_ARRANGE_WINDOW_WIDTH[get(horizontalZoomLevel)],
});

const trackHeight = selector({
  key: 'arrangeWindow/trackHeight',
  get: ({get}) => ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[get(verticalZoomLevel)],
});

// The resolution is measured in shown bars. So 4 means show every 4th bar as a number on the ruler.
const resolution = selector({
  key: 'arrangeWindow/resolution',
  get: ({get}) => ZOOM_RESOLUTION_MAP[get(horizontalZoomLevel)],
});

const pixelPerSecond = selector({
  key: 'arrangeWindow/pixelPerSecond',
  get: ({get}) => get(pixelPerBeat) / get(projectStore.beatsPerSecond),
});

const pixelPerBeat = selector({
  key: 'arrangeWindow/pixelPerBeat',
  get: ({get}) => (get(width) / get(projectStore.length) / 4),
});

// TODO: CALCULATING THIS SHOULD HAPPEN IN THE LOWEST SUPPORTED TIME SIGNATURE BASE (e.g. 16ths or 32nds)
// BECAUSE OF POSSIBLE TIME SIGNATURE CHANGES ALONG THE WAY.
const rulerItems = selector({
  key: 'arrangeWindow/rulerItems',
  get: ({get}) => {
    const rulerResolution = get(resolution);
    const barResolution = rulerResolution / 4; // Currently the lowest supported time sig base is 4ths.
    const projectLength = get(projectStore.length);
    const rulerItems = [1]; // We always start with bar 1.1.1
    let barNumber = 1;

    while (barNumber + barResolution < projectLength + 1) {
      // We could surely simplify this. Currently we go through in a lower interval to catch all time sig changes.
      // Even though we only support one at the moment. But in general there has to be a smarter algorithm for this.
      barNumber += barResolution;

      if ((rulerResolution <= 1 && barNumber % rulerResolution === 0) || (rulerResolution > 1 && barNumber % rulerResolution === 1)) {
        rulerItems.push(barNumber);
      }
    }

    return rulerItems;
  }
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
  rulerItems,
  pixelPerSecond,
  pixelPerBeat,
  marqueePosition,
  marqueeChannelPosition,
};