import { useCallback, useContext } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import { channelStore } from '../../recoil/channelStore';
import useRecorder from './useRecorder';
import useAudioDisconnect from './useAudioDisconnect';
import useSyncChannelToSolo from './useSyncChannelToSolo';
import useSyncPlayersToTransport from './useSyncPlayersToTransport';
import useConnectDisconnect from './useConnectDisconnect';
import useToneAudioNodes from './useToneAudioNodes';
import useToneJsTransport from './useToneJsTransport';

export default function useAudioToneConnector() {
  const channelId = useContext(ChannelContext);
  const { soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));

  const {merge, players, channel, audioIn, recorder, rmsMeter} = useToneAudioNodes();

  const disconnect = useAudioDisconnect();

  useRecorder(isArmed);
  useSyncChannelToSolo(isSolo);
  useSyncPlayersToTransport();

  const connect = useCallback(async () => {
    // If splinter is recording we do not change anything in the tone connection.
    if (recorder.state === 'started') {
      return;
    }

    disconnect();

    if (isMuted) {
      return;
    }

    if (isArmed) {
      await audioIn.open();
    }

    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    audioIn.connect(recorder);
    audioIn.connect(merge, 0, 0);
    audioIn.connect(merge, 0, 1);
    players.connect(merge, 0, 0);
    players.connect(merge, 0, 1);

    Tone.connectSeries(merge, ...pluginNodes, channel, rmsMeter, Tone.Destination);
  }, [audioIn, merge, recorder, soulPlugins, isMuted, isArmed, channel, rmsMeter, disconnect, players]);

  useConnectDisconnect(connect, disconnect, isMuted, isArmed);
}