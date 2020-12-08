export type OnMidiEvent = (msg: number, note: number, velocity: number) => void;

export type MidiEvent = {
  msg: number;
  note: number;
  velocity: number;
  triggerAtPosition: number;
}