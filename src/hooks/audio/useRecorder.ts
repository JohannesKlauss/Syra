import { useContext, useEffect, useRef } from 'react';
import useCreateAudioRegionAsync from '../recoil/region/useCreateAudioRegionAsync';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { transportStore } from '../../recoil/transportStore';
import useBackboneChannel from '../tone/BackboneMixer/useBackboneChannel';
import useAudioContext from './useAudioContext';
import { BackboneMixerContext } from '../../providers/BackboneMixerContext';

const BUFFER_SIZE = 2048;

export default function useRecorder(channelId: string) {
  const backboneMixer = useContext(BackboneMixerContext);
  const ctx = useAudioContext();
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const createAsyncRegion = useCreateAudioRegionAsync();
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

        param && param.setValueAtTime(0, ctx.currentTime + 0.5);
      }
    }
  }, [isRecording, isArmed, createAsyncRegion, channelId, recorderNode]);

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

            const bufferData = new Float32Array(bufferLength);

            for (let i = 0; i < recordedChunks.current.length; i++) {
              const chunk = recordedChunks.current[i];

              for (let j = 0; j < chunk.length; j++) {
                bufferData[(i + 1) * BUFFER_SIZE + j] = chunk[j];
              }
            }

            const trimStartSamples = Math.floor((backboneMixer.meta.values.transportStartedAt - e.data.startedAt) * ctx.sampleRate);
            const trimEndSamples = Math.ceil((e.data.stoppedAt - backboneMixer.meta.values.transportStoppedAt) * ctx.sampleRate);
            const firstDataPoint = bufferData.findIndex(val => val !== 0);
            const trimStart = Math.max(trimStartSamples, firstDataPoint);
            const trimmedBufferLength = bufferLength - trimStart - (trimEndSamples - trimStart);

            // There is a weird offset of around double the BUFFER_SIZE. TODO: Figure out where this is coming from. For now we just cut it.
            const trimmedData = bufferData.slice(trimStart, bufferData.length - (trimEndSamples - trimStart));
            const buffer = ctx.createBuffer(1, trimmedBufferLength, ctx.sampleRate);

            buffer.copyToChannel(trimmedData, 0);

            regionPushBuffer.current && regionPushBuffer.current(buffer);
        }
      };
    }
  }, [recorderNode, recordedChunks, regionPushBuffer, ctx]);
}