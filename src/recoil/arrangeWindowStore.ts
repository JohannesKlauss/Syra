import { atom, selector } from 'recoil/dist';
import { projectStore } from './projectStore';

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

const snappedPlayheadPosition = selector({
  key: 'arrangeWindow/snappedPlayheadPosition',
  get: ({get}) => {
    const inverse = 1 / get(snapValue);
    const exactPos = get(playheadPosition);

    const snappedPos = get(isSnapActive) ? Math.round(exactPos * inverse) / inverse : exactPos;

    return snappedPos >= 1 ? snappedPos : 1;
  }
});

// This is the zoom level. The zoom level defines how many bars are visible in the arrange window.
// This goes from 1 to 11
const zoomLevel = atom({
  key: 'arrangeWindow/zoomLevel',
  default: 5,
});

// This is the value the grid snaps to. Default is 1 which stands for 1 bar. A quarter note would be 0.25, a sixteenth 0.0625 and so on.
const snapValue = atom({
  key: 'arrangeWindow/snapValue',
  default: 1,
})

const snapValueWidthInPixels = selector({
  key: 'arrangeWindow/snapValueWidthInPixels',
  get: ({get}) => get(width) / (get(rulerItems).length * (1 / get(snapValue)))
});

const width = selector({
  key: 'arrangeWindow/width',
  get: ({get}) => get(zoomLevel) * 3600
});

// The resolution is measured in shown bars. So 4 means show every 4th bar as a number on the ruler.
const resolution = selector({
  key: 'arrangeWindow/resolution',
  get: () => 1
});

const pixelPerSecond = selector({
  key: 'arrangeWindow/pixelPerSecond',
  get: ({get}) => get(pixelPerBeat) / get(beatsPerSecond),
});

const pixelPerBeat = selector({
  key: 'arrangeWindow/pixelPerBeat',
  get: ({get}) => (get(width) / get(projectStore.length) / 4),
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / (get(projectStore.bpm) / 60),
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(projectStore.bpm),
});

const rulerItems = selector({
  key: 'arrangeWindow/rulerItems',
  get: ({get}) => {
    const numOfItems = get(projectStore.length) / get(resolution);

    const rulerItems = [];

    for (let i = 1; i <= numOfItems + 1; i++) {
      rulerItems.push((i - 1) * get(resolution));
    }

    if (rulerItems[1] !== 1) {
      rulerItems[0] = 1;
    } else {
      rulerItems.shift();
    }

    return rulerItems;
  }
});

export const arrangeWindowStore = {
  playheadPosition,
  snappedPlayheadPosition,
  zoomLevel,
  snapValue,
  snapValueWidthInPixels,
  isSnapActive,
  width,
  resolution,
  rulerItems,
  pixelPerSecond,
  pixelPerBeat,
  beatsPerSecond,
  secondsPerBeat,
};