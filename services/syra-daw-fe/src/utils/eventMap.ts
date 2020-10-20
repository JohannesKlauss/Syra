export function getSortedKeysOfEventMap(map: {[name: number]: any}) {
  return Object.keys(map).map(change => parseFloat(change)).sort((a, b) => a - b);
}