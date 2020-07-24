import { useContext, useEffect } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import { channelStore } from '../../recoil/channelStore';
import useAudioDisconnect from './useAudioDisconnect';
import useSyncChannelToSolo from './useSyncChannelToSolo';
import useSyncPlayersToTransport from './useSyncPlayersToTransport';
import useToneAudioNodes from './useToneAudioNodes';
import useRecorder from '../audio/useRecorder';
import { projectStore } from '../../recoil/projectStore';

export default function useAudioToneConnector() {
  const channelId = useContext(ChannelContext);
  const isRecording = useRecoilValue(projectStore.isRecording);
  const { soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));

  const {merge, players, channel, audioIn, rmsMeter} = useToneAudioNodes();

  const disconnect = useAudioDisconnect();

  useRecorder();
  useSyncChannelToSolo(isSolo);
  useSyncPlayersToTransport();

  useEffect(() => {
    (async () => {
      // If splinter is recording we do not change anything in the tone connection.
      if (isRecording) {
        return;
      }

      disconnect();

      if (isMuted) {
        return;
      }

      if (isArmed) {
        await audioIn.open();
      }
      else {
        audioIn.close();
      }

      const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

      audioIn.connect(merge, 0, 0);
      audioIn.connect(merge, 0, 1);
      players.connect(merge, 0, 0);
      players.connect(merge, 0, 1);

      Tone.connectSeries(merge, ...pluginNodes, channel, rmsMeter, Tone.Destination);
    })();
  }, [isRecording, audioIn, merge, soulPlugins, isMuted, isArmed, channel, rmsMeter, disconnect, players]);
}