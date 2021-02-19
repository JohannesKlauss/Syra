import useListenForExternalMidiIn from "../../midi/useListenForExternalMidiIn";
import { useContext, useEffect, useRef } from "react";
import { MidiEvent, MidiEventCallable, MidiNote } from "../../../types/Midi";
import * as Tone from 'tone';
import { transportStore } from "../../../recoil/transportStore";
import { useRecoilValue } from "recoil";
import { ChannelContext } from "../../../providers/ChannelContext";
import { removeItemAtIndex } from "../../../utils/recoil";
import { createNewId } from "../../../utils/createNewId";
import { MIDI_ID_PREFIX } from "../../../const/ids";
import { channelStore } from "../../../recoil/channelStore";

export default function useRecordExternalMidi() {
  const channelId = useContext(ChannelContext);
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isRecording = useRecoilValue(transportStore.isRecording);
  const seconds = useRecoilValue(transportStore.seconds);
  const recordedMidiNotes = useRef<MidiNote[]>([]);
  const recordedEvents = useRef<MidiEvent[]>([]);
  const openMidiNotes = useRef<number[]>([]); // The midi notes that are currently being held by the device

  const onMidiNote: MidiEventCallable = (firstByte, secondByte, thirdByte) => {
    const position = Tone.getTransport().seconds;

    switch(firstByte) {
      case 144: // NoteOn
        openMidiNotes.current.push(secondByte);

        recordedEvents.current.push({
          msg: firstByte,
          note: secondByte,
          velocity: thirdByte,
          triggerAtPosition: Tone.Ticks(position, 's').toTicks(),
        });

        break;
      case 128: // NoteOff
        // Remove the Midi note from the open midi event
        openMidiNotes.current = removeItemAtIndex(openMidiNotes.current, openMidiNotes.current.findIndex(val => val === secondByte));

        const event = recordedEvents.current.find(val => val.note === secondByte && val.msg === 144);

        if (event) {
          const duration = Tone.Ticks(position, 's').toTicks() - event.triggerAtPosition;

          recordedMidiNotes.current.push({
            id: createNewId(MIDI_ID_PREFIX),
            midi: secondByte,
            time: Tone.Ticks(event.triggerAtPosition).toSeconds(),
            ticks: event.triggerAtPosition,
            velocity: event.velocity,
            duration: Tone.Ticks(duration).toSeconds(),
            durationTicks: duration,
            noteOffVelocity: thirdByte,
          });
        }

        break;
      default:
        console.log('Currently unsupported MIDI event detected', [firstByte, secondByte, thirdByte]);
    }
  };

  const [connect, disconnect] = useListenForExternalMidiIn(onMidiNote);

  useEffect(() => {
    if (!isRecording) {
      console.log('recorded notes', recordedMidiNotes.current);
    }
  }, [recordedMidiNotes, isRecording]);

  useEffect(() => {
    if (isRecording && isArmed) {
      recordedEvents.current = [];
      recordedMidiNotes.current = [];
      connect();
    } else {
      disconnect();
    }

    return () => {
      // Close all open midi events.

      disconnect();
    }
  }, [isRecording, isArmed, connect, disconnect, openMidiNotes, recordedEvents]);
}