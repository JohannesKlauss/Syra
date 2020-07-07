import { useEffect, useState } from 'react';
import loadSoulPatchWasm from '../../soul/loadSoulPatchWasm';
import useAudioContext from '../audio/useAudioContext';
import * as Tone from 'tone';
import { SoulPatch } from '../../types/SoulPatch';

export default function useSoulPatch(path?: string, isInstrument?: boolean): [AudioWorkletNode | null, SoulPatch | null] {
  const context = useAudioContext();
  const [audioWorkletNode, setAudioWorkletNode] = useState<AudioWorkletNode | null>(null);
  const [patch, setPatch] = useState<SoulPatch | null>(null);

  useEffect(() => {
    async function loadPatch() {
      await context.addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

      if (path == null || path.length === 0) {
        return;
      }

      const patch = await loadSoulPatchWasm(`soul/${isInstrument ? 'instruments' : 'plugins'}/${path}.wasm`);

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