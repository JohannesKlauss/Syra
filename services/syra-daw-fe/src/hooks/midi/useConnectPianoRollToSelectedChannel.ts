import { useRecoilValue } from 'recoil';
import { channelStore } from '../../recoil/channelStore';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';

export default function useConnectPianoRollToSelectedChannel() {
  const selectedChannel = useRecoilValue(channelStore.findSelectedChannel);

  return useSendMidiToSoul(selectedChannel?.soulInstrument?.audioNode.port, selectedChannel?.isArmed);
}