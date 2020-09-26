export const ARRANGE_GRID_OFFSET = -6;
export const ARRANGE_GRID_CHANNEL_LIST_GAP = ARRANGE_GRID_OFFSET * (-2);

export const ARRANGE_GRID_WAVEFORM_SAMPLE_RATE = 4000; // This is the rate the audio buffers get down sampled to for waveform vis.

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
export const ZOOM_RESOLUTION_MAP: ({[name: number]: number}) = {
  1: 1,
  2: 1.2,
  3: 1.6,
  4: 2,
  5: 2.5,
  6: 3,
  7: 4,
  8: 5,
  9: 7,
  10: 9,
  11: 10,
}