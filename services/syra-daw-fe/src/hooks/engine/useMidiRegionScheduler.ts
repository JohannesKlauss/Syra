import { RegionContext } from "../../providers/RegionContext";
import { useContext, useEffect, useMemo } from "react";
import { regionStore } from "../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import { ChannelContext } from "../../providers/ChannelContext";
import { channelStore } from "../../recoil/channelStore";
import { createPreScheduledMidiMessage } from "../../utils/midi";
import { MIDI_MSG } from "../../types/Midi";
import * as Tone from "tone";
import { transportStore } from "../../recoil/transportStore";

export default function useMidiRegionScheduler() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const notes = useRecoilValue(regionStore.midiNotes(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const offset = useRecoilValue(regionStore.offset(regionId));
  const duration = useRecoilValue(regionStore.duration(regionId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const currentTempo = useRecoilValue(transportStore.currentTempo);

  const messagesToSchedule = useMemo(() => {
    const filteredNotes = notes.filter((note) => note.ticks >= offset && note.ticks < offset + duration);
    const regionStartInSeconds = Tone.Ticks(start).toSeconds();
    const regionOffsetInSeconds = Tone.Ticks(offset).toSeconds();

    const messages = [
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_OFF,
          note.midi,
          note.noteOffVelocity,
          Math.ceil((Tone.Ticks(note.ticks).toSeconds() + Tone.Ticks(note.durationTicks).toSeconds() + regionStartInSeconds - regionOffsetInSeconds) * Tone.getContext().sampleRate - 3),
        )
      ),
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_ON,
          note.midi,
          note.velocity,
          Math.ceil((Tone.Ticks(note.ticks).toSeconds() + regionStartInSeconds - regionOffsetInSeconds) * Tone.getContext().sampleRate),
        )
      ),
    ];

    return messages.sort((msgA, msgB) => msgA[3] - msgB[3]);
  }, [notes, offset, duration, start, currentTempo /* This is here to force trigger an update */]);

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
}
