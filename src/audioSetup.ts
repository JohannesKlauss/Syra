import * as Tone from 'tone';

export function audioSetup() {
  async function firstClick() {
    await Tone.start();
    await Tone.getContext().addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

    console.log('AudioCtx is', Tone.getContext().state);

    document.body.removeEventListener('click', firstClick);
  }

  document.body.addEventListener('click', firstClick);
}