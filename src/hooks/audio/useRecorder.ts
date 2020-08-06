import { useEffect, useRef } from 'react';
import useAsyncRegionCreator from '../recoil/region/useAsyncRegionCreator';
import { useRecoilValue } from 'recoil/dist';
import { Recorder } from '../../audio/Recorder';
import { channelStore } from '../../recoil/channelStore';
import { transportStore } from '../../recoil/transportStore';
import useBackboneChannel from '../tone/BackboneMixer/useBackboneChannel';
import useAudioContext from './useAudioContext';

const BUFFER_SIZE = 32768;

export default function useRecorder(channelId: string) {
  const ctx = useAudioContext();
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const createAsyncRegion = useAsyncRegionCreator();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const regionPushBuffer = useRef<(audioBuffer: AudioBuffer) => void>();

  const recordedChunks = useRef<Float32Array[]>([]);

  const { recorder: recorderNode } = useBackboneChannel(channelId);

  useEffect(() => {
    if (isRecording && isArmed) {
      if (recorderNode) {
        const param = recorderNode.parameters.get('isRecording');

        param && param.setValueAtTime(1, ctx.currentTime + 0.001);
      }

      regionPushBuffer.current = createAsyncRegion(channelId);
    } else {
      if (recorderNode) {
        const param = recorderNode.parameters.get('isRecording');

        param && param.setValueAtTime(0, ctx.currentTime + 0.001);
      }
    }
  }, [isRecording, isArmed, createAsyncRegion, channelId]);

  useEffect(() => {
    if (recorderNode) {
      recorderNode.port.onmessage = (e) => {
        switch (e.data.eventType) {
          case 'data':
            recordedChunks.current.push(e.data.audioBuffer);
            break;
          case 'stop':
            let bufferLength = (recordedChunks.current.length - 1) * BUFFER_SIZE + recordedChunks.current[recordedChunks.current.length - 1].length;

            if (recordedChunks.current.length === 1) {
              bufferLength = recordedChunks.current[0].length;
            }

            // THE OFFSET SEEMS TO BE AROUND 0.125 seconds.

            const data = new Float32Array(bufferLength);
            const buffer = ctx.createBuffer(1, bufferLength, ctx.sampleRate);

            for (let i = 0; i < recordedChunks.current.length; i++) {
              const subset = recordedChunks.current[i];

              for (let j = 0; j < subset.length; j++) {
                data[(i + 1) * BUFFER_SIZE + j] = subset[j];
              }
            }

            buffer.copyToChannel(data, 0);

            regionPushBuffer.current && regionPushBuffer.current(buffer);
        }
      };
    }
  }, [recorderNode, recordedChunks, regionPushBuffer]);
}