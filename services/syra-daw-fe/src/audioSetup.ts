import * as Tone from 'tone';

export function audioSetup() {
  Tone.getTransport().timeSignature = [1, 4]; // Internally we let Tone handle everything in quarters.

  async function firstClick() {
    console.log('first click');

    await Tone.start();
    await Tone.getContext().addAudioWorkletModule('/worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');
    await Tone.getContext().addAudioWorkletModule('/worklets/RecorderWorkletProcessor.js', 'recorder-worklet');

    document.removeEventListener('click', firstClick);
  }

  console.log('attach');

  document.addEventListener('click', firstClick);
}