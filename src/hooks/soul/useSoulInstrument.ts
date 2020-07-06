import useSoulPatch from './useSoulPatch';
import useSendMidiToSoul from './useSendMidiToSoul';
import { useCallback } from 'react';
import { SoulPatch } from '../../types/SoulPatch';
import { MidiCallable } from '../ui/usePiano';

export default function useSoulInstrument(instrument: string): [AudioWorkletNode | null, SoulPatch | null, MidiCallable] {
  const [soulPatchNode, soulPatch] = useSoulPatch(instrument, true);

  const sendMidi = useSendMidiToSoul(soulPatchNode);

  const onNote = useCallback((msg: number, note: number, velocity: number = 120) => sendMidi(msg, note, velocity), [sendMidi]);

  return [soulPatchNode, soulPatch, onNote];
}