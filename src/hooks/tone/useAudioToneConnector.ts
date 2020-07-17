import { useCallback, useContext, useRef, useState } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import {
  toneMeterFactory,
} from '../../utils/tonejs';
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

    for (let i = 0; i < playerSchedules.current.length; i++) {
      const clearId = playerSchedules.current[i];

      if (clearId !== undefined) {
        transport.clear(clearId);
      }
    }

    // TODO: THIS APPROACH IS A WASTE OF PROCESSING POWER. IMPROVE THIS ONCE WE GET A HANG OF IT.
    regions.forEach((region, i) => {
      const id = regionIds[i];

      if (region.audioBuffer && !players.has(id)) {
        players.add(id, region.audioBuffer);
      }

      const clearId = playerSchedules.current.shift();

      if (clearId !== undefined) {
        transport.clear(clearId);
      }

      const scheduleId = transport.schedule((time) => {
        players.player(id).set({ mute: region.isMuted }).start(time + 0.005);
        console.log('start ' + id + ' at', region.start - (region.start === 0 ? 0 : 0.005));
      }, region.start - (region.start === 0 ? 0 : 0.005));

      playerSchedules.current.push(scheduleId);
    });

    audioIn.fan(recorder, merge);
    players.connect(merge);

    Tone.connectSeries(merge, ...pluginNodes, channel, rmsMeter, Tone.Destination);
  }, [audioIn, merge, recorder, soulPlugins, isMuted, isArmed, channel, rmsMeter, disconnect, regions, regionIds, playerSchedules, players, transport]);

  useConnectDisconnect(connect, disconnect, isMuted, isArmed);
}