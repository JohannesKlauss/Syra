import { useRecoilState, useRecoilValue } from "recoil";
import { keyboardMidiStore } from '../../recoil/keyboardMidiStore';
import { useCallback } from "react";
import WebMidi, { InputEventNoteoff, InputEventNoteon } from "webmidi";
import { MidiEventCallable } from '../../types/Midi';

export default function useListenForExternalMidiIn(onMidiEvent: MidiEventCallable) {
  const [midiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);
  const isMidiEnabled = useRecoilValue(keyboardMidiStore.isMidiEnabled);

  const onNoteOnEvent = useCallback((event: InputEventNoteon) => onMidiEvent(144, event.note.number, event.rawVelocity), [onMidiEvent]);
  const onNoteOffEvent = useCallback((event: InputEventNoteoff) => onMidiEvent(128, event.note.number, event.rawVelocity), [onMidiEvent]);

  const connect = useCallback(() => {
    if (midiDevice === null || !isMidiEnabled) {
      return;
    }

    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.removeListener('noteon', 'all', onNoteOnEvent);
      input.removeListener('noteoff', 'all', onNoteOffEvent);

      input.addListener('noteon', 'all', onNoteOnEvent);
      input.addListener('noteoff', 'all', onNoteOffEvent);
    }
  }, [midiDevice, onNoteOnEvent, onNoteOffEvent, isMidiEnabled]);

  const disconnect = useCallback(() => {
    if (midiDevice === null || !isMidiEnabled) {
      return;
    }

    const input = WebMidi.getInputByName(midiDevice);

    if (input) {
      input.removeListener('noteon', 'all', onNoteOnEvent);
      input.removeListener('noteoff', 'all', onNoteOffEvent);
    }
  }, [midiDevice, isMidiEnabled, onNoteOffEvent, onNoteOnEvent]);

  return [connect, disconnect];
}