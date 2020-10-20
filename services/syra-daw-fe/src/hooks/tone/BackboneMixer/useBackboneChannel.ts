import { useContext } from 'react';
import { BackboneMixerContext } from '../../../providers/BackboneMixerContext';

export default function useBackboneChannel(channelId: string) {
  const mixer = useContext(BackboneMixerContext);

  return mixer.channel(channelId);
}