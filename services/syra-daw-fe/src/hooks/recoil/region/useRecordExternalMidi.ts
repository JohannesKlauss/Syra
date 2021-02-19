import useListenForExternalMidiIn from '../../midi/useListenForExternalMidiIn';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { MidiEvent, MidiEventCallable, MidiNote } from '../../../types/Midi';
import * as Tone from 'tone';
import { transportStore } from '../../../recoil/transportStore';
import { useRecoilValue } from 'recoil';
import { ChannelContext } from '../../../providers/ChannelContext';
import { removeItemAtIndex } from '../../../utils/recoil';
import { createNewId } from '../../../utils/createNewId';
import { MIDI_ID_PREFIX } from '../../../const/ids';
import { channelStore } from '../../../recoil/channelStore';
import { regionStore } from '../../../recoil/regionStore';
import useCreateMidiRegion from './useCreateMidiRegion';
import useAddMidiNotesToRegion from "./useAddMidiNotesToRegion";

export default function useRecordExternalMidi() {
  const channelId = useContext(ChannelContext);
  const name = useRecoilValue(channelStore.name(channelId));
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isRecording = useRecoilValue(transportStore.isRecording);
  const seconds = useRecoilValue(transportStore.seconds);
  const nearByRegionId = useRecoilValue(
    regionStore.findNearbyRegionId({
      channelId,
      position: Tone.Ticks(seconds, 's').toTicks(),
    }),
  );
  const start = useRecoilValue(regionStore.start(nearByRegionId ?? ''));
  const recordedMidiNotes = useRef<MidiNote[]>([]);
  const recordedEvents = useRef<MidiEvent[]>([]);
  const openMidiNotes = useRef<number[]>([]); // The midi notes that are currently being held by the device
  const createMidiRegion = useCreateMidiRegion();
  const addMidiNotesToRegion = useAddMidiNotesToRegion();

  const onMidiNote: MidiEventCallable = (firstByte, secondByte, thirdByte) => {
    const position = Tone.getTransport().seconds;

    switch (firstByte) {
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
        openMidiNotes.current = removeItemAtIndex(
          openMidiNotes.current,
          openMidiNotes.current.findIndex((val) => val === secondByte),
        );

        const eventIndex = recordedEvents.current.findIndex((val) => val.note === secondByte && val.msg === 144);
        const event = recordedEvents.current[eventIndex];

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

          recordedEvents.current = removeItemAtIndex(recordedEvents.current, eventIndex);
        }

        break;
      default:
        console.log('Currently unsupported MIDI event detected', [firstByte, secondByte, thirdByte]);
    }
  };

  const [connect, disconnect] = useListenForExternalMidiIn(onMidiNote);

  const pushNotesToMidiRegion = useCallback(
    (notes: MidiNote[]) => {
      const clonedNotes = [...notes];

      if (nearByRegionId == null) {
        console.log('create region');

        const position = clonedNotes[0].ticks;
        const duration = clonedNotes[clonedNotes.length - 1].ticks + clonedNotes[clonedNotes.length - 1].durationTicks - position;

        clonedNotes.forEach(note => {
          note.ticks -= position;
          note.time = Tone.Ticks(note.ticks).toSeconds();
        });

        createMidiRegion({
          channelId,
          duration: Tone.Ticks(duration),
          notes: clonedNotes,
          start: Tone.Ticks(position),
        });
      } else {
        console.log('extend region at channel' + name, nearByRegionId);

        const offsetStart = notes[0].ticks - start;

        clonedNotes.forEach(note => {
          note.ticks -= start;
          note.time = Tone.Ticks(note.ticks).toSeconds();
        });

        addMidiNotesToRegion(nearByRegionId, clonedNotes, offsetStart);
      }
    },
    [nearByRegionId, createMidiRegion, channelId, name, start, addMidiNotesToRegion],
  );

  useEffect(() => {
    if (!isRecording && isArmed && recordedMidiNotes.current.length > 0) {
      pushNotesToMidiRegion(recordedMidiNotes.current);
      recordedMidiNotes.current = [];
    }
  }, [recordedMidiNotes, isArmed, isRecording, pushNotesToMidiRegion]);

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
    };
  }, [isRecording, isArmed, connect, disconnect, openMidiNotes, recordedEvents]);
}
