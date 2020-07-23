import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../recoil/channelStore';
import useListenForExternalMidiIn from '../midi/useListenForExternalMidiIn';

export default function useConnectMidiWithInstrumentChannel(channelId: string) {
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const instrument = useRecoilValue(channelStore.soulInstance(channelId));
  const onNote = useSendMidiToSoul(instrument?.audioNode.port, isArmed);

  useListenForExternalMidiIn(onNote);
}