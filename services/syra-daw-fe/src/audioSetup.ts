import * as Tone from 'tone';

export async function audioSetup() {
  Tone.getTransport().timeSignature = [1, 4]; // Internally we let Tone handle everything in quarters.

  await Tone.start();
  await Tone.getContext().addAudioWorkletModule(
    '/worklets/SoulWasmAudioWorkletProcessor.js',
    'soul-wasm-audio-worklet-processor',
  );
  await Tone.getContext().addAudioWorkletModule('/worklets/RecorderWorkletProcessor.js', 'recorder-worklet');
}
