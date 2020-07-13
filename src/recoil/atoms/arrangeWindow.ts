import { atom, selector } from 'recoil/dist';
import { projectLength } from './project';

// The position of the transport bar. currently we set this to 1 as bars, but this will most certainly change, since we
// need it to be more detailed.
export const playheadPosition = atom({
  key: 'playheadPosition',
  default: 1,
});

// This is the zoom level. The zoom level defines how many bars are visible in the arrange window.
// This goes from 1 to 11
export const zoomLevel = atom({
  key: 'zoomLevel',
  default: 5,
});

// This is the value the grid snaps to. Default is 1 which stands for 1 bar. A quarter note would be 0.25, a sixteenth 0.0625 and so on.
export const snapValue = atom({
  key: 'snapValue',
  default: 1,
})

export const snapValueWidthInPixels = selector({
  key: 'snapValueWidthInPixels',
  get: ({get}) => get(arrangeWindowWidth) / get(rulerItems).length * get(snapValue)
});

export const arrangeWindowWidth = selector({
  key: 'arrangeWindowWidth',
  get: ({get}) => get(zoomLevel) * 3600
});

// The resolution is measured in shown bars. So 4 means show every 4th bar as a number on the ruler.
export const arrangeWindowResolution = selector({
  key: 'arrangeWindowResolution',
  get: () => 1
});

export const rulerItems = selector({
  key: 'rulerItems',
  get: ({get}) => {
    const numOfItems = get(projectLength) / get(arrangeWindowResolution);

    const rulerItems = [];

    for (let i = 1; i <= numOfItems + 1; i++) {
      rulerItems.push((i - 1) * get(arrangeWindowResolution));
    }

    if (rulerItems[1] !== 1) {
      rulerItems[0] = 1;
    } else {
      rulerItems.shift();
    }

    return rulerItems;
  }
})