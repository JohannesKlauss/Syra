import { pianoRollStore } from "../../../../recoil/pianoRollStore";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { GridMouseMode } from "../../../../types/GridMouseMode";

export default function usePianoRollCursor() {
  const mouseMode = useRecoilValue(pianoRollStore.mouseMode);

  return useMemo(() => {
    switch (mouseMode) {
      case GridMouseMode.PAINT: return 'url("/icons/cursor/pencil.svg") 0 24, auto';
      case GridMouseMode.VELOCITY: return 'vertical-text';
      default: return 'default';
    }
  }, [mouseMode]);
}