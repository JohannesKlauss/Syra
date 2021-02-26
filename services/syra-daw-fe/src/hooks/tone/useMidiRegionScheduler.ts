import { RegionContext } from "../../providers/RegionContext";
import { useContext, useEffect, useMemo, useRef } from "react";
import { regionStore } from "../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import { ChannelContext } from "../../providers/ChannelContext";
import { channelStore } from "../../recoil/channelStore";
import { createPreScheduledMidiMessage } from "../../utils/midi";
import { MIDI_MSG } from "../../types/Midi";
import * as Tone from "tone";
import { projectStore } from "../../recoil/projectStore";
import useToneJsTransport from "./useToneJsTransport";
import { differenceWith } from 'lodash';

const messageValueToPrefixedString = (val: number) => val < 100 ? val < 10 ? `00${val}` : `0${val}` : val;

export default function useMidiRegionScheduler() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);
  const notes = useRecoilValue(regionStore.midiNotes(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const offset = useRecoilValue(regionStore.offset(regionId));
  const duration = useRecoilValue(regionStore.duration(regionId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const currentTempo = useRecoilValue(projectStore.currentTempo);
  const transport = useToneJsTransport();

  const scheduledIds = useRef<number[]>([]);

  const messagesToSchedule = useMemo(() => {
    const filteredNotes = notes.filter((note) => note.ticks >= offset && note.ticks < offset + duration);

    const messages = [
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_OFF,
          note.midi,
          note.noteOffVelocity,
          note.ticks + note.durationTicks + start - offset - Tone.Ticks(0.0000625, 's').toTicks(),
        )
      ),
      ...filteredNotes.map((note) =>
        createPreScheduledMidiMessage(
          MIDI_MSG.CH1_NOTE_ON,
          note.midi,
          note.velocity,
          note.ticks + start - offset,
        )
      ),
    ];

    return messages.sort((msgA, msgB) => msgA[3] - msgB[3]);
  }, [notes, offset, duration, start, currentTempo]);

  useEffect(() => {
    const messageTimes = messagesToSchedule
      .filter((value, index, self) => self.findIndex(val => val[3] === value[3]) === index)
      .map(msg => msg[3]);

    messageTimes.forEach(transportTicks => {
      const messages = messagesToSchedule.filter(message => message[3] === transportTicks);

      const value = messages.reduce((prevValue, msg) => {
        return `${prevValue}${messageValueToPrefixedString(msg[0])}${messageValueToPrefixedString(msg[1])}${messageValueToPrefixedString(msg[2])}`;
      }, '');

      scheduledIds.current.push(transport.schedule(time => {
        const currentFrame = Math.ceil(time * Tone.getContext().sampleRate);

        // The modulo of currentFrame prevents that midi notes are triggered in each processing block.
        // The parameter doesn't change inside the AWP, so we need a sort of a hash to ensure that the
        // AWP can check its own time against the messaged time.
        const frameHash = currentFrame % 999999;

        console.log('value', value);
        console.log('send trigger', parseFloat(`${value}.${frameHash}`));

        soulInstance?.audioNode.parameters.get('midiTrigger')?.setValueAtTime(parseFloat(`${value}.${frameHash}`), time);
      }, Tone.Ticks(Math.ceil(transportTicks))));
    });

    return () => {
      scheduledIds.current.forEach(id => transport.clear(id));
    }
  }, [messagesToSchedule, offset, duration, start, scheduledIds, soulInstance]);

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
