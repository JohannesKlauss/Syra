import { useEffect, useState } from 'react';
import loadSoulPatch from '../../soul/loadSoulPatch';
import useAudioContext from '../audio/useAudioContext';
import * as Tone from 'tone';
import { SoulPatch } from '../../types/SoulPatch';

export default function useSoulPatch(path: string): [AudioWorkletNode | null, SoulPatch | null] {
  const context = useAudioContext();
  const [audioWorkletNode, setAudioWorkletNode] = useState<AudioWorkletNode | null>(null);
  const [patch, setPatch] = useState<SoulPatch | null>(null);

  useEffect(() => {
    async function loadPatch() {
      await context.addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

      const patch = await loadSoulPatch(path);

      setPatch(patch);

      const node = context.createAudioWorkletNode('soul-wasm-audio-worklet-processor', {
        processorOptions: {
          module: patch.module,
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

      setAudioWorkletNode(node);
    }

    loadPatch();
  }, [path, context]);

  return [audioWorkletNode, patch];
}