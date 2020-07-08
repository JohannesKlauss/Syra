import * as Tone from 'tone';
import loadSoulPatchWasm from './loadSoulPatchWasm';
import { AvailableSoulPatch } from '../recoil/atoms/soulPatches';
import { SoulInstance } from '../types/Soul';

export async function createSoulInstance (patch: AvailableSoulPatch, isInstrument?: boolean): Promise<SoulInstance> {
    const soulPatch = await loadSoulPatchWasm(`soul/${isInstrument ? 'instruments' : 'plugins'}/${patch.pathWasm}.wasm`, patch.UID);

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