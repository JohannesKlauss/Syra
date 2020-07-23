import { useState } from 'react';
import { OnMidiEvent } from '../../types/Midi';

export default function usePianoRoll(onEvent: OnMidiEvent) {
  const [isMousePressed, setMousePressed] = useState(false);

  const onMouseDown = (note: number) => {
    setMousePressed(true);
    onEvent(144, note, 120);
  };

  const onMouseUp = (note: number) => {
    setMousePressed(false);
    onEvent(128, note, 0);
  };

  return {isMousePressed, onMouseDown, onMouseUp};
}