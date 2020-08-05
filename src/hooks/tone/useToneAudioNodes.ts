import { useContext } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import { useRecoilState } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import { toneJsFactory, toneMeterFactory } from '../../utils/tonejs';
import * as Tone from 'tone';

export default function useToneAudioNodes() {
  const channelId = useContext(ChannelContext);
  const toneJsMapState = useRecoilState(channelStore.toneJsMap(channelId));

  const factory = toneJsFactory(toneJsMapState);

  return {
    merge: factory(Tone.Merge, 'merge'),
    players: factory(Tone.Players, 'players'),
    channel: factory(Tone.Channel, 'channel'),
    audioIn: factory(Tone.UserMedia, 'userMedia'),
    rmsMeter: factory(toneMeterFactory, 'meter'),
  };
}