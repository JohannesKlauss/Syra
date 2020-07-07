import useSendMidiToSoul from './useSendMidiToSoul';
import { MidiCallable } from '../ui/usePiano';
import { SoulInstance } from '../../types/SoulInstance';

export default function useSoulInstrument(instrument?: SoulInstance): MidiCallable {
  return useSendMidiToSoul(instrument?.audioNode);
}