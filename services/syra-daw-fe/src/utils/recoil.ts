export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T): T[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex<T>(arr: T[], index: number): T[] {
  if (index === 0 && arr.length === 1) {
    return [];
  }

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}