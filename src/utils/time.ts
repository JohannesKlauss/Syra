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