import { useContext, useEffect } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import { channelStore } from '../../recoil/channelStore';
import useAudioDisconnect from './useAudioDisconnect';
import useSyncChannelToSolo from './useSyncChannelToSolo';
import useToneAudioNodes from './useToneAudioNodes';
import useRecorder from '../audio/useRecorder';
import { transportStore } from '../../recoil/transportStore';

export default function useAudioToneConnector() {
  const channelId = useContext(ChannelContext);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const { soulPluginIds, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));
  const activePlugins = useRecoilValue(channelStore.findActivePluginsByIds(soulPluginIds));

  const {merge, players, channel, audioIn, rmsMeter} = useToneAudioNodes();

  const disconnect = useAudioDisconnect();

  useRecorder();
  useSyncChannelToSolo(isSolo);

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

      try {
        if (isArmed) {
          await audioIn.open();
        }
        else {
          audioIn.close();
        }
      } catch(e) {
        console.error("Could not open Audio Input", e);
      }

      const pluginNodes = activePlugins.map(plugin => plugin.audioNode);

      audioIn.connect(merge, 0, 0);
      audioIn.connect(merge, 0, 1);
      players.connect(merge, 0, 0);
      players.connect(merge, 0, 1);

      Tone.connectSeries(merge, ...pluginNodes, channel, rmsMeter, Tone.Destination);
    })();
  }, [isRecording, audioIn, merge, activePlugins, isMuted, isArmed, channel, rmsMeter, disconnect, players]);
}