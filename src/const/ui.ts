export const ARRANGE_GRID_OFFSET = -6;
export const ARRANGE_GRID_CHANNEL_LIST_GAP = ARRANGE_GRID_OFFSET * (-2);

export const ZOOM_LEVEL_ARRANGE_WINDOW_WIDTH: {[name: number]: number} = {
  1: 1200,
  2: 1800,
  3: 3600,
  4: 5400,
  5: 7200,
  6: 14400,
  7: 21600,
  8: 36000,
  9: 72000,
  10: 144000,
  11: 288000,
  12: 576000,
  13: 1152000,
  14: 2304000,
}

// This defines the default height of a track based on the vertical zoom level.
export const ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT: {[name: number]: number} = {
  1: 30,
  2: 45,
  3: 60,
  4: 70,
  5: 80,
  6: 95,
  7: 110,
  8: 130,
  9: 150,
  10: 180,
  11: 230,
};

// This defines the ruler resolution based on the zoom level. Zoom level is the key, resolution the value.
// A value of 1 means 1 bar is shown as a number divided by the time signature, 2 means every second bar is shown as a number.
// 0.5 means every half bar is shown (i.e. 1.1 and 1.3 in 4/4).
export const ZOOM_RESOLUTION_MAP: {[name: number]: number} = {
  1: 8,
  2: 8,
  3: 4,
  4: 4,
  5: 2,
  6: 2,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
}