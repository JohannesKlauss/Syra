import {useCallback, useState} from 'react';
import { OnMidiEvent } from '../../types/Midi';

export default function usePianoRoll(onEvent: OnMidiEvent) {
  const [isMousePressed, setMousePressed] = useState(false);

  const onMouseDown = useCallback((note: number) => {
    setMousePressed(true);
    onEvent(144, note, 120);
  }, [setMousePressed, onEvent]);

  const onMouseUp = useCallback((note: number) => {
    setMousePressed(false);
    onEvent(128, note, 0);
  }, [setMousePressed, onEvent]);

  return {isMousePressed, onMouseDown, onMouseUp};
}