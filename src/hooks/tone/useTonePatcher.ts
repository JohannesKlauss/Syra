import { useContext, useEffect, useState } from 'react';
import * as Tone from 'tone';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';

const channel = new Tone.Channel(0, 0);

export default function useTonePatcher() {
  const channelId = useContext(ChannelContext);
  const { soulInstrument, soulPlugins, isArmed, isMuted } = useRecoilValue(channelState(channelId));
  const [toneChannelRef] = useState(channel);

  useEffect(() => {
    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);
    const doConnect = isArmed && !isMuted;

    if (soulInstrument) {
      !doConnect
        ? Tone.disconnect(soulInstrument.audioNode)
        : Tone.connectSeries(soulInstrument.audioNode, ...pluginNodes, channel, Tone.Destination);
    } else if (soulPlugins.length > 0) {
      // TODO: WHEN DEALING WITH AUDIO WE PROBABLY NEED A SOURCE AS A AUDIO NODE INSTEAD OF A INSTRUMENT
      !doConnect
        ? Tone.disconnect(pluginNodes[0])
        : Tone.connectSeries(...pluginNodes, channel, Tone.Destination);
    }

    return () => {
      if (soulInstrument) {
        Tone.disconnect(soulInstrument.audioNode);
      } else if (soulPlugins.length > 0) {
        Tone.disconnect(pluginNodes[0]);
      }
    };
  }, [soulPlugins, soulInstrument, isArmed, isMuted]);

  return toneChannelRef;
}