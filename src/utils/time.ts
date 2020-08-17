export function formatSecondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().substr(11, 12)
}

export function isTimeBetween(needle: number, boundaries: [number, number], includeRightBorder: boolean = false) {
  if (includeRightBorder) {
    return boundaries[0] <= needle && needle <= boundaries[1];
  } else {
    return boundaries[0] <= needle && needle < boundaries[1];
  }
}

// This return the current beat number for the current playhead position.
// This is used to update everything UI related when the user sets the playhead to a different position.
export function getBeatCountForTransportSeconds(tsMap: {[name: number]: [number, number]}, transportSeconds: number) {
  const tsChanges = Object.keys(tsMap).map(change => parseFloat(change)).sort((a, b) => a - b);

  let beats = 1;

  const tempo = 120;
  const secondPerBeat = 60 / tempo;

  for (let i = 0; i < tsChanges.length; i++) {
    const change = tsChanges[i];
    const rightBoundary = (i < tsChanges.length - 1) ? tsChanges[i + 1] : 1597660821; // This is just a very big number the transport will never reach.
    const beatsPerSecond = (tsMap[change][1] / 4) / secondPerBeat;

    if (isTimeBetween(transportSeconds, [change, rightBoundary])) {
      beats = (beats + beatsPerSecond * (transportSeconds - change)) % tsMap[change][0];

      break;
    } else {
      beats = (beats + beatsPerSecond * (rightBoundary - change)) % tsMap[change][0];
    }
  }

  return Math.floor(beats);
}

export function getBarCountForTransportSeconds(tsMap: {[name: number]: [number, number]}, transportSeconds: number) {
  const tsChanges = Object.keys(tsMap).map(change => parseFloat(change)).sort((a, b) => a - b);

  let bars = 1;

  const tempo = 120;
  const secondPerBeat = 60 / tempo;

  for (let i = 0; i < tsChanges.length; i++) {
    const change = tsChanges[i];
    const rightBoundary = (i < tsChanges.length - 1) ? tsChanges[i + 1] : 1597660821; // This is just a very big number the transport will never reach.
    const barsPerSecond = (tsMap[change][1] / tsMap[change][0]) / (secondPerBeat * 4);

    if (isTimeBetween(transportSeconds, [change, rightBoundary])) {
      bars = bars + (barsPerSecond * (transportSeconds - change));

      break;
    } else {
      bars = bars + (barsPerSecond * (rightBoundary - change));
    }
  }

  return Math.max(Math.floor(bars), 1);
}