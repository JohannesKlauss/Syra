import { useCallback, useContext, useRef } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import { channelStore } from '../../recoil/channelStore';
import { regionStore } from '../../recoil/regionStore';
import useToneJsTransport from './useToneJsTransport';
import useRecorder from './useRecorder';
import useAudioDisconnect from './useAudioDisconnect';
import useSyncChannelToSolo from './useSyncChannelToSolo';
import useSyncPlayersToTransport from './useSyncPlayersToTransport';
import useConnectDisconnect from './useConnectDisconnect';
import useToneAudioNodes from './useToneAudioNodes';

// TODO: THIS WHOLE APPROACH IS SUB OPTIMAL. WE HAVE TO DO ALL THE CONNECTIONS AND SCHEDULING IN ONE PLACE, WHICH IS NOT CORRECT.
// NORMALLY THE SCHEDULING WOULD BE INSIDE THE REGION, BUT WE ONLY CAN GET THIS DONE WHEN WE ARE FIXING THE RECOIL BUG.
// CHANGING THE POSITION OF A REGION WHEN RUNNING A RECORDING OR PLAYBACK WILL CAUSE A DROPOUT, BECAUSE OF THE RECONNECTION.
export default function useAudioToneConnector() {
  const transport = useToneJsTransport();
  const channelId = useContext(ChannelContext);
  const { soulPlugins, isArmed, isMuted, isSolo } = useRecoilValue(channelStore.state(channelId));
  const regions = useRecoilValue(regionStore.findByChannelId(channelId));
  const regionIds = useRecoilValue(regionStore.ids(channelId));
  const playerSchedules = useRef<number[]>([]);

  const {merge, players, channel, audioIn, recorder, rmsMeter} = useToneAudioNodes();

  const disconnect = useAudioDisconnect();

  useRecorder(isArmed);
  useSyncChannelToSolo(isSolo);
  useSyncPlayersToTransport();

  const connect = useCallback(async () => {
    if (isMuted) {
      disconnect();

      return;
    }

    if (isArmed) {
      await audioIn.open();
    }

    const pluginNodes = soulPlugins.map(plugin => plugin.audioNode);

    audioIn.fan(recorder, merge);
    players.connect(merge);

    Tone.connectSeries(merge, ...pluginNodes, channel, rmsMeter, Tone.Destination);
  }, [audioIn, merge, recorder, soulPlugins, isMuted, isArmed, channel, rmsMeter, disconnect, regions, regionIds, playerSchedules, players, transport]);

  useConnectDisconnect(connect, disconnect, isMuted, isArmed);
}