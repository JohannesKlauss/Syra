import {RegionContext} from "../../providers/RegionContext";
import { useCallback, useContext, useEffect } from "react";
import {regionStore} from "../../recoil/regionStore";
import {useRecoilValue} from "recoil";
import useToneJsTransport from "./useToneJsTransport";
import {ChannelContext} from "../../providers/ChannelContext";
import {channelStore} from "../../recoil/channelStore";
import { createPreScheduledMidiMessage } from "../../utils/midi";
import {MIDI_MSG} from "../../types/Midi";
import {transportStore} from "../../recoil/transportStore";
import usePanic from "../midi/usePanic";
import * as Tone from 'tone';
import { getToneJsTransport } from "../../utils/tonejs";

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

  const scheduleMidi = useCallback(time => {
    console.log('pos', getToneJsTransport().seconds);

    const notesToSchedule = notes.filter(note => note.ticks >= offset && note.ticks < offset + duration);
    const regionStartInSeconds = Tone.Ticks(start).toSeconds();
    const regionOffsetInSeconds = Tone.Ticks(offset).toSeconds();
    const cutoff = Tone.Ticks(3).toSeconds();

    soulInstance?.audioNode.port.postMessage({
      type: "PRE_SCHEDULE_MIDI_MESSAGES",
      value: [
        ...notesToSchedule
          .map(note => createPreScheduledMidiMessage(MIDI_MSG.CH1_NOTE_ON, note.midi, note.velocity, time + note.time + regionStartInSeconds - regionOffsetInSeconds)),
        ...notesToSchedule
          .map(note => createPreScheduledMidiMessage(MIDI_MSG.CH1_NOTE_OFF, note.midi, 0, time + note.time + note.duration + regionStartInSeconds - regionOffsetInSeconds - cutoff)),
      ],
    });
  }, [soulInstance, notes]);

  useEffect(() => {
    transport.on('start', scheduleMidi);

    return () => {
      transport.off('start', scheduleMidi);

      soulInstance?.audioNode.port.postMessage({
        type: "DELETE_PRE_SCHEDULED_MIDI_MESSAGES"
      });
    }
  }, [notes, transport, soulInstance, offset, start, duration]);

  useEffect(() => {
    if (!isPlaying && !isRecording) {
      soulInstance?.audioNode.port.postMessage({
        type: "DELETE_PRE_SCHEDULED_MIDI_MESSAGES"
      });

      panic();
    }
  }, [isRecording, isPlaying, panic, soulInstance]);
}