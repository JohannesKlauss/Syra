import { useContext, useEffect } from 'react';
import * as Tone from 'tone';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import useBackboneChannel from './BackboneMixer/useBackboneChannel';

export default function useInstrumentToneConnector() {
  const channelId = useContext(ChannelContext);
  const { soulInstrument, soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));
  const {channel, rmsMeter} = useBackboneChannel(channelId);

  useEffect(() => {
    channel.set({ mute: isMuted || !isArmed });
  }, [isMuted, isArmed, channel]);

  useEffect(() => {
    channel.set({ solo: isSolo });
  }, [isSolo, channel]);

  useEffect(() => {
    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    if (soulInstrument) {
      Tone.connectSeries(soulInstrument.audioNode, ...pluginNodes, channel, rmsMeter, Tone.getDestination());
    }

    return () => {
      if (soulInstrument) {
        Tone.disconnect(soulInstrument.audioNode);
      }
    };
  }, [soulPlugins, soulInstrument, isArmed, channel, rmsMeter]);
}