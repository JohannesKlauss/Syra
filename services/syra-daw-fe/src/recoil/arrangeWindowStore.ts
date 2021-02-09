import { atom, selector } from 'recoil';
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from '../const/ui';
import { EditMode } from '../types/RegionManipulation';
import { gridStore } from './gridStore';
import { View } from '../types/View';

const waveformSmoothing = atom({
  key: 'arrangeWindow/waveformSmoothing',
  default: 2,
});

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

const trackHeight = selector({
  key: 'arrangeWindow/trackHeight',
  get: ({get}) => ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[get(gridStore.verticalZoomLevel(View.ARRANGE_WINDOW))],
});

export const arrangeWindowStore = {
  waveformSmoothing,
  editMode,
  trackHeight,
  marqueePosition,
  marqueeChannelPosition,
};