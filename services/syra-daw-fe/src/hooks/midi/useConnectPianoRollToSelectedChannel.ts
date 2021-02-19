import { useRecoilValue } from "recoil";
import { channelStore } from "../../recoil/channelStore";
import useSendMidiToSoul from "../soul/useSendMidiToSoul";
import { SendMidiMode } from "../../types/SendMidiMode";
import { pianoRollStore } from "../../recoil/pianoRollStore";
import { useCallback } from "react";
import { transportStore } from "../../recoil/transportStore";

export default function useConnectPianoRollToSelectedChannel(sendMidiMode: SendMidiMode = SendMidiMode.ALWAYS) {
  const selectedChannelId = useRecoilValue(pianoRollStore.selectedChannelId);
  const channel = useRecoilValue(channelStore.state(selectedChannelId));
  const isRecording = useRecoilValue(transportStore.isRecording);

  const filter = useCallback(() => {
    switch (sendMidiMode) {
      case SendMidiMode.ALWAYS:
        return true;
      case SendMidiMode.WHEN_ARMED:
        return channel.isArmed;
      case SendMidiMode.WHEN_RECORDING_AND_ARMED:
        return isRecording;
    }

    return false;
  }, [sendMidiMode]);

  return useSendMidiToSoul(filter, channel.soulInstrument?.audioNode.port);
}