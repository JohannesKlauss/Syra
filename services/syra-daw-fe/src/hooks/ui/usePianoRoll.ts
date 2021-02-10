import {useCallback, useState} from 'react';
import { MidiEventCallable } from '../../types/Midi';

export default function usePianoRoll(triggerEvent: MidiEventCallable) {
  const [isMousePressed, setMousePressed] = useState(false);

  const onMouseDown = useCallback((note: number) => {
    setMousePressed(true);
    triggerEvent(144, note, 120);
  }, [setMousePressed, triggerEvent]);

  const onMouseUp = useCallback((note: number) => {
    setMousePressed(false);
    triggerEvent(128, note, 0);
  }, [setMousePressed, triggerEvent]);

  return {isMousePressed, onMouseDown, onMouseUp};
}