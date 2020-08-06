export function isBetween(needle: number, boundaries: [number, number], includeBorders: boolean = true) {
  if (includeBorders) {
    return boundaries[0] <= needle && needle <= boundaries[1];
  } else {
    return boundaries[0] < needle && needle < boundaries[1];
  }
}