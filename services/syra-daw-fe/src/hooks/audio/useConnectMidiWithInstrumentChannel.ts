import useSendMidiToSoul from '../soul/useSendMidiToSoul';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../recoil/channelStore';
import useListenForExternalMidiIn from '../midi/useListenForExternalMidiIn';
import { useCallback } from "react";

export default function useConnectMidiWithInstrumentChannel(channelId: string) {
  const instrument = useRecoilValue(channelStore.soulInstance(channelId));
  const selectedId = useRecoilValue(channelStore.selectedId);
  const filter = useCallback(() => selectedId === channelId, [selectedId, channelId]);

  const onNote = useSendMidiToSoul(filter, instrument?.audioNode.port);

  return useListenForExternalMidiIn(onNote);
}