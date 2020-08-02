export const ARRANGE_GRID_OFFSET = -6;
export const ARRANGE_GRID_CHANNEL_LIST_GAP = ARRANGE_GRID_OFFSET * (-2);

// This defines the arrange window width based on the zoom level.
// For now this is taken from bandlab, but it's far from ideal and we should be more leaning toward the way Logic X does it.
// TODO: It is probably way better to define a resolution and distance between bars and then calculate the window length from there.
export const ZOOM_LEVEL_ARRANGE_WINDOW_WIDTH: {[name: number]: number} = {
  1: 3600,
  2: 7200,
  3: 14400,
  4: 21600,
  5: 36000,
  6: 72000,
  7: 144000,
  8: 288000,
  9: 576000,
  10: 1152000,
  11: 2304000,
};

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
  5: 1,
  6: 1,
  7: 0.5,
  8: 0.5,
  9: 0.25,
  10: 0.125,
  11: 0.0625,
}