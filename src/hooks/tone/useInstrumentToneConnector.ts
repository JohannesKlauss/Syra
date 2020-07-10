import { useContext, useEffect, useState } from 'react';
import * as Tone from 'tone';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';
import { toneChannelFactory, toneMeterFactory } from '../../utils/tonejs';

export default function useInstrumentToneConnector() {
  const channelId = useContext(ChannelContext);
  const { soulInstrument, soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelState(channelId));
  const [toneChannel] = useState(toneChannelFactory());
  const [toneRmsMeter] = useState(toneMeterFactory());

  useEffect(() => {
    toneChannel.set({ mute: isMuted || !isArmed });
  }, [isMuted, isArmed, toneChannel]);

  useEffect(() => {
    toneChannel.set({ solo: isSolo });
  }, [isSolo, toneChannel]);

  useEffect(() => {
    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    if (soulInstrument) {
      Tone.connectSeries(soulInstrument.audioNode, ...pluginNodes, toneChannel, toneRmsMeter, Tone.Destination);
    }

    return () => {
      if (soulInstrument) {
        Tone.disconnect(soulInstrument.audioNode);
      }
    };
  }, [soulPlugins, soulInstrument, isArmed, toneChannel, toneRmsMeter]);

  return { toneChannel, toneRmsMeter };
}