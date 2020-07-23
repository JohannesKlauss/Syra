import * as Tone from 'tone';

export default function useToneJsTransport() {
  return Tone.getTransport();
}