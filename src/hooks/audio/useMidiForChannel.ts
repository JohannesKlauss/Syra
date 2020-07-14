import { useContext } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { useRecoilValue } from 'recoil/dist';
import useListenForMidiIn from './useListenForMidiIn';
import { channelStore } from '../../recoil/channelStore';

export default function useMidiForChannel() {
  const channelId = useContext(ChannelContext);
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const instrument = useRecoilValue(channelStore.soulInstance(channelId));

  const onNote = useSendMidiToSoul(instrument?.audioNode.port);
  useListenForMidiIn(onNote, !isArmed);
}