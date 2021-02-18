import { RegionContext } from "../../providers/RegionContext";
import { useCallback, useContext, useEffect, useMemo } from "react";
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
  const transportSeconds = useRecoilValue(transportStore.seconds);
  const panic = usePanic(soulInstance?.audioNode.port);

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
          Math.ceil((note.time + note.duration + regionStartInSeconds - regionOffsetInSeconds) * Tone.getContext().sampleRate - 3),
        )
      ),
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_ON,
          note.midi,
          note.velocity,
          Math.ceil((note.time + regionStartInSeconds - regionOffsetInSeconds) * Tone.getContext().sampleRate),
        )
      ),
    ];

    return messages.sort((msgA, msgB) => msgA[3] - msgB[3]);
  }, [notes, offset, duration, start]);

  const triggerTransportOffset = useCallback(() => {
    soulInstance?.audioNode.parameters.get('transportOffsetInSamples')?.setValueAtTime(
      Math.floor(transportSeconds * Tone.getContext().sampleRate), Tone.getContext().currentTime
    );
  }, [soulInstance, transportSeconds]);

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
    transport.on('start', triggerTransportOffset);

    return () => {
      transport.off('start', triggerTransportOffset);
    }
  }, [transport, soulInstance, triggerTransportOffset]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      soulInstance?.audioNode.parameters.get('transportOffsetInSamples')?.setValueAtTime(-1, Tone.getContext().currentTime);
      panic();
    }
  }, [isRecording, isPlaying, panic, soulInstance]);
}
