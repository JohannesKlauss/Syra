export function amplitudeTodB(amplitude: number) {
  return 20 * Math.log(amplitude) / Math.LN10;
}

export function dBToAmplitude(db: number) {
  return Math.pow(10, db / 20);
}

export function getPeakMeterValue(value: number | number[]): number {
  return (value as number[]).length ? Math.max(...(value as number[])) : value as number;
}