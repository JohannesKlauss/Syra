import * as Tone from 'tone';
import loadSoulPatchWasm from './loadSoulPatchWasm';
import { SoulInstance } from '../types/SoulInstance';

export async function createSoulInstance (patchName: string, isInstrument?: boolean): Promise<SoulInstance> {
    await Tone.context.addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

    const soulPatch = await loadSoulPatchWasm(`soul/${isInstrument ? 'instruments' : 'plugins'}/${patchName}.wasm`);

    const audioNode = Tone.context.createAudioWorkletNode('soul-wasm-audio-worklet-processor', {
      processorOptions: {
        module: soulPatch.module,
        sampleRate: Tone.context.rawContext.sampleRate,
        initialParamValues: '',
        bufferSize: 128,
        totalInputs: 1,
        totalOutputs: 1,
        endpoints: JSON.stringify([]),
      },
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    return {soulPatch, audioNode};
}