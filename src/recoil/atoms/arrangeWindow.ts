import { atom, selector } from 'recoil/dist';
import { projectLength } from './project';

// This is the zoom level. The zoom level defines how many bars are visible in the arrange window.
// This goes from 1 to 11
export const zoomLevel = atom({
  key: 'zoomLevel',
  default: 5,
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