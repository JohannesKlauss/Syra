export function isBetween(needle: number, boundaries: [number, number], includeBorders: boolean = true) {
  if (includeBorders) {
    return boundaries[0] <= needle && needle <= boundaries[1];
  } else {
    return boundaries[0] < needle && needle < boundaries[1];
  }
}

export function isIntersecting(area: [number, number], boundaries: [number, number]) {
  return (area[0] <= boundaries[0] && area[1] >= boundaries[0]) || (boundaries[0] <= area[0] && boundaries[1] >= area[0]);
}