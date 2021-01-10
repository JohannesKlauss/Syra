import { RegionContext } from "../../providers/RegionContext";
import { useContext, useEffect, useRef } from "react";
import { regionStore } from "../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import useToneJsTransport from "./useToneJsTransport";
import { ChannelContext } from "../../providers/ChannelContext";
import { channelStore } from "../../recoil/channelStore";
import createMidiMessage from "../../utils/midi";
import { MIDI_MSG } from "../../types/Midi";
import { transportStore } from "../../recoil/transportStore";
import usePanic from "../midi/usePanic";

export default function useMidiRegionScheduler() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const notes = useRecoilValue(regionStore.midiNotes(regionId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const transport = useToneJsTransport();
  const scheduleIds = useRef<number[]>([]);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const panic = usePanic(soulInstance?.audioNode.port);

  // TODO: WE SHOULD SHORTEN AND GENERALISE THIS, BECAUSE WE WILL NEED THIS IN A LOT OF DIFFERENT PLACES.
  useEffect(() => {
    notes.forEach(note => {
      scheduleIds.current.push(transport.schedule(() => {
        soulInstance?.audioNode.port.postMessage({
          type: "MIDI_MESSAGE",
          value: createMidiMessage(MIDI_MSG.CH1_NOTE_ON, note.midi, note.velocity * 127)
        });
      }, `+${note.time}`));

      scheduleIds.current.push(transport.schedule(() => {
        soulInstance?.audioNode.port.postMessage({
          type: "MIDI_MESSAGE",
          value: createMidiMessage(MIDI_MSG.CH1_NOTE_OFF, note.midi, 0)
        });
      }, `+${note.time + note.duration}`));
    });

    console.log('notes changed', notes);

    return () => {
      scheduleIds.current.forEach(id => transport.clear(id));
    }
  }, [notes, transport, soulInstance]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      panic();
    }
  }, [isRecording, isPlaying, panic]);
}