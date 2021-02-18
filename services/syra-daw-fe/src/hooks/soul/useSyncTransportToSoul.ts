import { useCallback, useContext, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import useToneJsTransport from '../tone/useToneJsTransport';
import { useRecoilValue } from 'recoil';
import { transportStore } from '../../recoil/transportStore';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import usePanic from '../midi/usePanic';

export default function useSyncTransportToSoul() {
  const channelId = useContext(ChannelContext);
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const transport = useToneJsTransport();
  const transportSeconds = useRecoilValue(transportStore.seconds);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const cycleEnd = useRecoilValue(transportStore.cycleEnd);
  const isCycleActive = useRecoilValue(transportStore.isCycleActive);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const panic = usePanic(soulInstance?.audioNode.port);
  const cycleScheduleId = useRef<number>(0);

  // Sync start position and start to Soul
  const triggerTransportOffset = useCallback((triggerTime: number, overrideSeconds?: number) => {
    soulInstance?.audioNode.parameters
      .get('transportOffsetInSamples')
      ?.setValueAtTime(
        Math.floor((overrideSeconds ?? transportSeconds) * Tone.getContext().sampleRate),
        Tone.getContext().currentTime,
      );
    }, [soulInstance, transportSeconds]);

  // Sync stop to soul
  const kill = useCallback(() => {
    soulInstance?.audioNode.parameters
      .get('transportOffsetInSamples')
      ?.setValueAtTime(-1, Tone.getContext().currentTime);
    panic();
  }, [panic, soulInstance]);

  // Sync Cycle to Soul
  useEffect(() => {
    if (soulInstance) {
      soulInstance.audioNode.parameters
        .get('cycleStart')
        ?.setValueAtTime(Math.floor(cycleStart * Tone.getContext().sampleRate), Tone.getContext().currentTime);

      soulInstance.audioNode.parameters
        .get('cycleEnd')
        ?.setValueAtTime(Math.floor(cycleEnd * Tone.getContext().sampleRate), Tone.getContext().currentTime);

      soulInstance.audioNode.parameters
        .get('isCycleActive')
        ?.setValueAtTime(isCycleActive ? 1 : 0, Tone.getContext().currentTime);
    }
  }, [soulInstance, cycleStart, cycleEnd, isCycleActive]);

  useEffect(() => {
    if (isCycleActive) {
      cycleScheduleId.current = Tone.getTransport().schedule(time => {
        console.log('trigger offset from cycle', Tone.getTransport().loopStart);

        triggerTransportOffset(time, Tone.getTransport().loopStart as number);
      }, Tone.getTransport().loopStart);
    }

    return () => {
      Tone.getTransport().clear(cycleScheduleId.current);
    };
  }, [isCycleActive, triggerTransportOffset, cycleScheduleId, isPlaying, isRecording]);

  useEffect(() => {
    transport.on('start', triggerTransportOffset);
    transport.on('stop', kill);

    return () => {
      transport.off('start', triggerTransportOffset);
      transport.off('stop', kill);
    };
  }, [transport, soulInstance, triggerTransportOffset]);
}
