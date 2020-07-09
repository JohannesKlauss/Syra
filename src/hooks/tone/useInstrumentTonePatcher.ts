import { useContext, useEffect, useState } from 'react';
import * as Tone from 'tone';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';
import { toneChannelFactory, toneMeterFactory } from '../../utils/tonejs';

export default function useInstrumentTonePatcher() {
  const channelId = useContext(ChannelContext);
  const { soulInstrument, soulPlugins, isArmed, isMuted } = useRecoilValue(channelState(channelId));
  const [toneChannel] = useState(toneChannelFactory());
  const [toneMeter] = useState(toneMeterFactory());

  useEffect(() => {
    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);
    const doConnect = isArmed && !isMuted;

    if (soulInstrument) {
      !doConnect
        ? Tone.disconnect(soulInstrument.audioNode)
        : Tone.connectSeries(soulInstrument.audioNode, ...pluginNodes, toneChannel, toneMeter, Tone.Destination);
    }

    return () => {
      if (soulInstrument) {
        Tone.disconnect(soulInstrument.audioNode);
      }
    };
  }, [soulPlugins, soulInstrument, isArmed, isMuted, toneChannel, toneMeter]);

  return toneChannel;
}