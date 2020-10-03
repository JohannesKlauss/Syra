import * as Tone from 'tone';

export default function useAudioContext() {
  return Tone.getContext();
}