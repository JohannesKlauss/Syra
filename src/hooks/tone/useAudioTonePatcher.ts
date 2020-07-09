import { useContext, useEffect, useState } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';
import * as Tone from 'tone';
import { toneAudioInputFactorySync, toneChannelFactory, toneMeterFactory } from '../../utils/tonejs';

export default function useAudioTonePatcher() {
  const channelId = useContext(ChannelContext);
  const { soulPlugins, isArmed, isMuted } = useRecoilValue(channelState(channelId));
  console.log('before audioIn');
  const [audioIn] = useState(toneAudioInputFactorySync());
  console.log('afterAudioIn');
  const [toneChannel] = useState(toneChannelFactory());
  console.log('aftertoneChannel');
  const [toneMeter] = useState(toneMeterFactory());
  console.log('after tone meter');

  useEffect(() => {
    (async () => {
      const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

      if(isArmed && !isMuted) {
        await audioIn.open();

        Tone.connectSeries(audioIn, ...pluginNodes, toneChannel, toneMeter, Tone.Destination);
      }
      else {
        audioIn.close();
        Tone.disconnect(audioIn)
      }
    })();

    return () => {
      audioIn.close();
      Tone.disconnect(audioIn);
    };
  }, [audioIn, soulPlugins, isArmed, isMuted, toneChannel, toneMeter]);

  return toneChannel;
}