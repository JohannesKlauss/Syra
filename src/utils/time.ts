import { TIME_CONVERSION_RESOLUTION } from '../const/musicalConversionConstants';
import { getSortedKeysOfEventMap } from './eventMap';
import { isBetween } from './numbers';

export function formatSecondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().substr(11, 12)
}

// This return the current beat number for the current playhead position.
// This is used to update everything UI related when the user sets the playhead to a different position.
export function getBeatCountForTransportSeconds(tsMap: {[name: number]: [number, number]}, transportSeconds: number) {
  const tsChanges = getSortedKeysOfEventMap(tsMap);

  let beats = 1;

  const tempo = 120;
  const secondPerBeat = 60 / tempo;

  for (let i = 0; i < tsChanges.length; i++) {
    const change = tsChanges[i];
    const rightBoundary = (i < tsChanges.length - 1) ? tsChanges[i + 1] : 1597660821; // This is just a very big number the transport will never reach.
    const beatsPerSecond = (tsMap[change][1] / TIME_CONVERSION_RESOLUTION) / secondPerBeat;

    if (isBetween(transportSeconds, [change, rightBoundary])) {
      beats = (beats + beatsPerSecond * (transportSeconds - change)) % tsMap[change][0];

      break;
    } else {
      beats = (beats + beatsPerSecond * (rightBoundary - change)) % tsMap[change][0];
    }
  }

  return Math.floor(beats);
}