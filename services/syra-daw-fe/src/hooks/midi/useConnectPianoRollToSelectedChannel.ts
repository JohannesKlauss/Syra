import { useRecoilValue } from 'recoil';
import { channelStore } from '../../recoil/channelStore';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { SendMidiMode } from '../../types/SendMidiMode';

export default function useConnectPianoRollToSelectedChannel(sendMidiMode: SendMidiMode = SendMidiMode.WHEN_ARMED) {
  const selectedChannel = useRecoilValue(channelStore.findSelectedChannel);

  return useSendMidiToSoul(selectedChannel?.soulInstrument?.audioNode.port, selectedChannel?.isArmed);
}