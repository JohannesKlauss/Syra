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
    merge: factory(Tone.Merge),
    players: factory(Tone.Players),
    channel: factory(Tone.Channel),
    audioIn: factory(Tone.UserMedia),
    recorder: factory(Tone.Recorder),
    rmsMeter: factory(toneMeterFactory),
  }
}