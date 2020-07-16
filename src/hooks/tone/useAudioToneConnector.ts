import { useCallback, useContext, useEffect, useState } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import {
  toneAudioInputFactorySync,
  toneChannelFactory,
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

  const disconnect = useCallback(() => {
    audioIn.close();
    Tone.disconnect(audioIn);
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

        console.log('start', region.start);

        transport.schedule(() => {
          tonePlayers.player(id).set({mute: region.isMuted}).start(region.start);
          tonePlayers.player(id).onstop = () => console.log('stop', id);
        }, 0);
      }
    });


    Tone.connectSeries(tonePlayers, ...pluginNodes, toneChannel, toneRmsMeter, Tone.Destination);
  }, [audioIn, soulPlugins, isArmed, isMuted, toneChannel, toneRmsMeter, disconnect, regions, regionIds]);

  useEffect(() => {
    toneChannel.set({solo: isSolo});
  }, [isSolo, toneChannel]);

  useEffect(() => {
    (async () => await connect())();

    return () => disconnect();
  }, [isMuted, isArmed, connect, disconnect, regions]);

  return { toneChannel, toneRmsMeter };
}