import { useRecoilCallback } from 'recoil/dist';
import { backboneMixerStore } from '../../../recoil/backboneMixerStore';

export default function useAudioNodes() {
  return useRecoilCallback(({snapshot}) => (channelId: string) => {
    return snapshot.getLoadable(backboneMixerStore.nodeState(channelId)).contents;
  });
}