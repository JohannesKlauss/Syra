import { useContext } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import useListenForExternalMidiIn from '../midi/useListenForExternalMidiIn';

export default function useConnectMidiWithInstrumentChannel() {
  const channelId = useContext(ChannelContext);
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const instrument = useRecoilValue(channelStore.soulInstance(channelId));
  const onNote = useSendMidiToSoul(instrument?.audioNode.port, isArmed);

  useListenForExternalMidiIn(onNote);
}