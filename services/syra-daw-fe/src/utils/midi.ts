export default function createMidiMessage(firstByte: number, secondByte: number, thirdByte: number) {
  const value = new Float32Array(3);

  value[0] = firstByte;
  value[1] = secondByte;
  value[2] = thirdByte;

  return value;
}

export function createPreScheduledMidiMessage(firstByte: number, secondByte: number, thirdByte: number, time: number) {
  const value = new Float32Array(4);

  value[0] = firstByte;
  value[1] = secondByte;
  value[2] = thirdByte;
  value[3] = time;

  return value;
}