import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';
import useTonePatcher from '../tone/useTonePatcher';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';

export default function useChannelPatcher(id: string) {
  const {soulInstrument, soulPlugins} = useRecoilValue(channelState(id));

  const onNote = useSendMidiToSoul(soulInstrument);

  useTonePatcher(soulPlugins, soulInstrument);

  return {
    soulInstrument,
    onNote,
    soulPlugins
  }
}