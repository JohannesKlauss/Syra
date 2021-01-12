import {RegionContext} from "../../providers/RegionContext";
import {useContext, useEffect, useRef} from "react";
import {regionStore} from "../../recoil/regionStore";
import {useRecoilValue} from "recoil";
import useToneJsTransport from "./useToneJsTransport";
import {ChannelContext} from "../../providers/ChannelContext";
import {channelStore} from "../../recoil/channelStore";
import { createPreScheduledMidiMessage } from "../../utils/midi";
import {MIDI_MSG} from "../../types/Midi";
import {transportStore} from "../../recoil/transportStore";
import usePanic from "../midi/usePanic";

export default function useMidiRegionScheduler() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const notes = useRecoilValue(regionStore.midiNotes(regionId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const transport = useToneJsTransport();
  const scheduleId = useRef<number>(0);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const panic = usePanic(soulInstance?.audioNode.port);

  // TODO: WE SHOULD SHORTEN AND GENERALISE THIS, BECAUSE WE WILL NEED THIS IN A LOT OF DIFFERENT PLACES.
  useEffect(() => {
    scheduleId.current = transport.schedule((time) => {
      soulInstance?.audioNode.port.postMessage({
        type: "PRE_SCHEDULE_MIDI_MESSAGES",
        value: [
          ...notes.map(note => createPreScheduledMidiMessage(MIDI_MSG.CH1_NOTE_ON, note.midi, note.velocity, time + note.time)),
          ...notes.map(note => createPreScheduledMidiMessage(MIDI_MSG.CH1_NOTE_OFF, note.midi, 0, time + note.time + note.duration)),
        ],
      });
    }, 0);

    return () => {
      transport.clear(scheduleId.current);

      soulInstance?.audioNode.port.postMessage({
        type: "DELETE_PRE_SCHEDULED_MIDI_MESSAGES"
      });
    }
  }, [notes, transport, soulInstance]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      soulInstance?.audioNode.port.postMessage({
        type: "DELETE_PRE_SCHEDULED_MIDI_MESSAGES"
      });

      panic();
    }
  }, [isRecording, isPlaying, panic]);
}