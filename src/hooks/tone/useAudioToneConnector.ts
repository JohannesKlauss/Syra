import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import {
  toneAudioInputFactorySync,
  toneChannelFactory, toneMergeFactory,
  toneMeterFactory, tonePlayersFactory,
} from '../../utils/tonejs';
import { channelStore } from '../../recoil/channelStore';
import { regionStore } from '../../recoil/regionStore';
import useToneJsTransport from './useToneJsTransport';

export default function useAudioToneConnector() {
  const transport = useToneJsTransport();
  const channelId = useContext(ChannelContext);
  const { soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));
  const regions = useRecoilValue(regionStore.findByChannelId(channelId));
  const regionIds = useRecoilValue(regionStore.ids(channelId));
  const [audioIn] = useState(toneAudioInputFactorySync());
  const [toneChannel] = useState(toneChannelFactory());
  const [toneRmsMeter] = useState(toneMeterFactory());
  const [tonePlayers] = useState(tonePlayersFactory());
  const [toneMerge] = useState(toneMergeFactory());
  const playerSchedules = useRef<number[]>([]);

  useEffect(() => {
    transport.on('stop', () => tonePlayers.stopAll());
  }, []);

  const disconnect = useCallback(() => {
    audioIn.close();
    Tone.disconnect(audioIn);
    Tone.disconnect(tonePlayers);
  }, [audioIn, tonePlayers]);

  const connect = useCallback(async () => {
    if (isMuted) {
      disconnect();

      return;
    }

    isArmed ? await audioIn.open() : audioIn.close();

    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    // TODO: THIS APPROACH IS A WASTE OF PROCESSING POWER. IMPROVE THIS ONCE WE GET A HANG OF IT.
    regions.forEach((region, i) => {
      const id = regionIds[i];

      if (region.audioBuffer && !tonePlayers.has(id)) {
        tonePlayers.add(id, region.audioBuffer);
      }

      const clearId = playerSchedules.current.shift();

      if (clearId !== undefined) {
        transport.clear(clearId);
      }

      const scheduleId = transport.schedule((time) => {
        tonePlayers.player(id).set({ mute: region.isMuted }).start(time + 0.005);
      }, region.start - (region.start === 0 ? 0 : 0.005));

      playerSchedules.current.push(scheduleId);
    });

    audioIn.connect(toneMerge);
    tonePlayers.connect(toneMerge);

    Tone.connectSeries(toneMerge, ...pluginNodes, toneChannel, toneRmsMeter, Tone.Destination);
  }, [audioIn, toneMerge, soulPlugins, isArmed, isMuted, toneChannel, toneRmsMeter, disconnect, regions, regionIds, playerSchedules, tonePlayers, transport]);

  useEffect(() => {
    toneChannel.set({ solo: isSolo });
  }, [isSolo, toneChannel]);

  useEffect(() => {
    (async () => await connect())();

    return () => disconnect();
  }, [isMuted, isArmed, connect, disconnect]);

  return { toneChannel, toneRmsMeter };
}