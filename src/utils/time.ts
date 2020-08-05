export function formatSecondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().substr(11, 12)
}