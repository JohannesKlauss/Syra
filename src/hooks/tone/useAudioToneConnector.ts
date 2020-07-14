import { useCallback, useContext, useEffect, useState } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import {
  toneAudioInputFactorySync,
  toneChannelFactory,
  toneMeterFactory,
} from '../../utils/tonejs';
import { channelStore } from '../../recoil/channelStore';

export default function useAudioToneConnector() {
  const channelId = useContext(ChannelContext);
  const { soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));
  const [audioIn] = useState(toneAudioInputFactorySync());
  const [toneChannel] = useState(toneChannelFactory());
  const [toneRmsMeter] = useState(toneMeterFactory());

  const disconnect = useCallback(() => {
    audioIn.close();
    Tone.disconnect(audioIn);
  }, [audioIn]);

  const connect = useCallback(async () => {
    if (!isArmed || isMuted) {
      disconnect();

      return;
    }

    await audioIn.open();

    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    Tone.connectSeries(audioIn, ...pluginNodes, toneChannel, toneRmsMeter, Tone.Destination);
  }, [audioIn, soulPlugins, isArmed, isMuted, toneChannel, toneRmsMeter, disconnect]);

  useEffect(() => {
    toneChannel.set({solo: isSolo});
  }, [isSolo, toneChannel]);

  useEffect(() => {
    (async () => await connect())();

    return () => disconnect();
  }, [isMuted, isArmed, connect, disconnect]);

  return { toneChannel, toneRmsMeter };
}