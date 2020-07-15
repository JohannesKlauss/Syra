// TODO: THIS IS CONFUSING NAMING. NOTE DOES NOT REFER TO AN ACTUAL NOTE, BUT RATHER A TIME VALUE, LIKE A QUARTER NOTE.
export function mapNumberToNote(val: number): string {
  if (val >= 1) {
    return `${val} Bar`;
  }

  return `1/${1 / val} Note`;
}