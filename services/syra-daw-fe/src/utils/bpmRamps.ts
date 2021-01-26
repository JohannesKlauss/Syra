/**
 * This file contains different expressions for bpm changes over time. Function always have to return a function that
 * gets then evaluated with a frame argument.
 *
 * The frame number is always relative to when the ramp function becomes active.
 *
 * So for illustration we have a staticText ramp with a 120 bpm for 2 seconds.
 *
 * Then we get a linear ramp over 2 seconds to 240 bpm. This means that the frame after two seconds will trigger the
 * linear ramp which start by itself at frame 1 even though the transport frame count is way higher.
 *
 * This way we can execute every function in isolation and don't need to know where in the transport timeline the function
 * gets triggered.
 */

export type BpmRamp = (sampleCount: number) => number;

// Frames as argument isn't needed here
export const bpmStaticRampFactory = (bpm: number): BpmRamp => (numOfFrame) => {
  if (typeof numOfFrame === 'function') {
    throw new Error('given function instead of frame');
  }

  return bpm * (numOfFrame + 1);
};

export const bpmLinearRampFactory = (bpmStart: number, bpmTarget: number, overNumOfFrames: number): BpmRamp => sampleCount => {
  const m = (bpmTarget - bpmStart) / overNumOfFrames;

  return m * sampleCount + bpmStart;
}