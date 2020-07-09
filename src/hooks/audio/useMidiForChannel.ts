import { useContext } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { useRecoilValue } from 'recoil/dist';
import { isChannelArmed, soulInstance } from '../../recoil/selectors/channel';
import useListenForMidiIn from './useListenForMidiIn';

export default function useMidiForChannel() {
  const channelId = useContext(ChannelContext);
  const isArmed = useRecoilValue(isChannelArmed(channelId));
  const instrument = useRecoilValue(soulInstance(channelId));

  const onNote = useSendMidiToSoul(instrument?.audioNode.port);
  useListenForMidiIn(onNote, !isArmed);
}