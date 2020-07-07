import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../recoil/selectors/channel';
import useSoulPatch from '../soul/useSoulPatch';
import useTonePatcher from '../tone/useTonePatcher';
import useSendMidiToSoul from '../soul/useSendMidiToSoul';

export default function useChannelPatcher(id: string) {
  const {soulInstrument, plugins} = useRecoilValue(channelState(id));

  const onNote = useSendMidiToSoul(soulInstrument?.audioNode);
  const [soulPluginNode, soulPlugin] = useSoulPatch(plugins[0]);

  useTonePatcher([soulPluginNode], soulInstrument?.audioNode);

  return {
    soulInstrument,
    onNote,
    soulPlugin,
    pluginPort: soulPluginNode?.port,
  }
}