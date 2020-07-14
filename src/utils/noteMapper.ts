export function mapNumberToNote(val: number): string {
  if (val >= 1) {
    return `${val} Bar`;
  }

  return `1/${1 / val} Note`;
}