/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, { useCallback, useMemo } from "react";
import {
  getAllMidiNumbersInRange,
  getNaturalKeyWidthRatio,
} from '../../../utils/keyboardMidiHelper';
import useConnectPianoRollToSelectedChannel from '../../../hooks/midi/useConnectPianoRollToSelectedChannel';
import PianoContainer from './components/PianoContainer';
import KeyComponent from './components/KeyComponent';
import usePianoRoll from "../../../hooks/ui/usePianoRoll";
import { MidiEventCallable } from "../../../types/Midi";
import useUpdateMidiStore from "../../../hooks/midi/useUpdateMidiStore";

interface Props {
  min: number;
  max: number;
  renderVertical?: boolean;
  baseHeight?: number;
}

const Piano = ({renderVertical, min, max, baseHeight = 205}: Props) => {
  const onNote = useConnectPianoRollToSelectedChannel();
  const range = useMemo(() => ({first: min, last: max}), [min, max]);
  const naturalKeyWidth = useMemo(() => getNaturalKeyWidthRatio(range) * 100, [range]);
  const updateStore = useUpdateMidiStore();

  const midis = useMemo(() => {
    const notes = getAllMidiNumbersInRange(range);

    if (renderVertical) {
      return notes.reverse();
    }

    return notes;
  }, [range, renderVertical]);

  const triggerNoteEvent = useCallback<MidiEventCallable>(
    (msg, note, velocity) => {
      onNote && onNote(msg, note, velocity);
      updateStore(msg, note, velocity);
    },
    [onNote, updateStore],
  );

  const { isMousePressed, onMouseUp, onMouseDown } = usePianoRoll(triggerNoteEvent);

  return (
    <PianoContainer renderVertical={renderVertical}>
      {midis.map((note, i) => (
        <KeyComponent
          key={note}
          baseHeight={baseHeight}
          renderVertical={renderVertical}
          note={note}
          naturalKeyWidth={naturalKeyWidth}
          i={i}
          range={range}
          isMousePressed={isMousePressed}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          triggerNoteEvent={triggerNoteEvent}
        />
      ))
      }
    </PianoContainer>
  );
};

Piano.whyDidYouRender = true;

export default Piano;
