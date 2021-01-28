import { RegionContext } from "../../providers/RegionContext";
import { useContext, useEffect, useMemo } from "react";
import { regionStore } from "../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import useToneJsTransport from "./useToneJsTransport";
import { ChannelContext } from "../../providers/ChannelContext";
import { channelStore } from "../../recoil/channelStore";
import { createPreScheduledMidiMessage } from "../../utils/midi";
import { MIDI_MSG } from "../../types/Midi";
import { transportStore } from "../../recoil/transportStore";
import usePanic from "../midi/usePanic";
import * as Tone from "tone";

export default function useMidiRegionScheduler() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const notes = useRecoilValue(regionStore.midiNotes(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const offset = useRecoilValue(regionStore.offset(regionId));
  const duration = useRecoilValue(regionStore.duration(regionId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const transport = useToneJsTransport();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const panic = usePanic(soulInstance?.audioNode.port);

  const messagesToSchedule = useMemo(() => {
    const filteredNotes = notes.filter((note) => note.ticks >= offset && note.ticks < offset + duration);
    const regionStartInSeconds = Tone.Ticks(start).toSeconds();
    const regionOffsetInSeconds = Tone.Ticks(offset).toSeconds();
    const cutoff = Tone.Ticks(3).toSeconds();

    const messages = [
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_ON,
          note.midi,
          note.velocity,
          note.time + regionStartInSeconds - regionOffsetInSeconds
        )
      ),
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_OFF,
          note.midi,
          0,
          note.time + note.duration + regionStartInSeconds - regionOffsetInSeconds - cutoff
        )
      )
    ];

    return messages.sort((msgA, msgB) => msgA[3] - msgB[3]);
  }, [notes, offset, duration, start]);

  useEffect(() => {
    soulInstance?.audioNode.port.postMessage({
      type: "PRE_SCHEDULE_MIDI_MESSAGES",
      value: messagesToSchedule
    });

    return () => {
      soulInstance?.audioNode.port.postMessage({
        type: "DELETE_PRE_SCHEDULED_MIDI_MESSAGES"
      });
    };
  }, [soulInstance, messagesToSchedule]);

  useEffect(() => {
    const ids: number[] = [];

    messagesToSchedule.forEach((msg, i) => {
      ids.push(transport.schedule(time => {
        soulInstance?.audioNode.parameters.get('midiTriggerIndex')?.setValueAtTime(i, time);
      }, Math.max(msg[3], 0)));
    });

    return () => {
      ids.forEach(id => transport.clear(id));
    };
  }, [transport, soulInstance, messagesToSchedule]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      soulInstance?.audioNode.parameters.get('midiTriggerIndex')?.setValueAtTime(-1, Tone.getContext().currentTime);
      panic();
    }
  }, [isRecording, isPlaying, panic, soulInstance]);
}
