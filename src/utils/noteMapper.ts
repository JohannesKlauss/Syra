// TODO: THIS IS CONFUSING NAMING. NOTE DOES NOT REFER TO AN ACTUAL NOTE, BUT RATHER A TIME VALUE, LIKE A QUARTER NOTE.
import { CONVERT_TO_MUSICAL_TIME } from '../const/musicalConversionConstants';

export function mapNumberToNote(val: number): string {
  if (val >= 1) {
    return `${val} Bar`;
  }

  return `1/${1 / val} Note`;
}

export function numberToMusicalBarTime(val: number): string {
  let musicalBarTime: string = ''; // This is the bar value, e.g. 1.1.3 for 1.125

  let remainder = val;

  function addSubdivision(division: number) {
    const subdivision = remainder / division;

    if (subdivision > 0) {
      musicalBarTime += `${division < 1 ? '.' + (Math.floor(subdivision) + 1) : Math.floor(subdivision)}`;

      remainder = remainder % division;
    }
  }

  addSubdivision(CONVERT_TO_MUSICAL_TIME.WHOLE);
  addSubdivision(CONVERT_TO_MUSICAL_TIME.QUARTERS);
  addSubdivision(CONVERT_TO_MUSICAL_TIME.SIXTEENS);

  return musicalBarTime;
}