export type OnMidiEvent = (firstByte: number, secondByte: number, thirdByte: number) => void;

export type MidiEvent = {
  msg: number;
  note: number;
  velocity: number;
  triggerAtPosition: number;
}

export enum MIDI_MSG {
  CH1_NOTE_OFF = 128,
  CH1_NOTE_ON = 144,
  CH1_POLY_AFTER_TOUCH = 160,
  CH1_CC = 176,
  CH1_PC = 192,
  CH1_CHANNEL_AFTER_TOUCH = 208,
  CH1_PITCH_BEND_CHANGE = 224,
}