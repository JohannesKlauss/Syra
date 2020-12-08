export default function createMidiMessage(firstByte: number, secondByte: number, thirdByte: number) {
  const value = new Uint8Array(3);

  value[0] = firstByte;
  value[1] = secondByte;
  value[2] = thirdByte;

  return value;
}