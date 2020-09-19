import * as Tone from 'tone';

export function audioSetup() {
  async function firstClick() {
    await Tone.start();
    await Tone.getContext().addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');
    await Tone.getContext().addAudioWorkletModule('worklets/RecorderWorkletProcessor.js', 'recorder-worklet');

    Tone.getTransport().timeSignature = [1, 4]; // Internally we let track Tone handle everything in quarters.

    console.log('AudioCtx is', Tone.getContext().state);

    document.body.removeEventListener('click', firstClick);
  }

  document.body.addEventListener('click', firstClick);
}