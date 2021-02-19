import { useHotkeys } from "react-hotkeys-hook";
import { redoHistory, undoHistory } from "../../recoil/effects/undoRedoEffect";

export default function useUndoRedo() {
  useHotkeys('cmd+z', e => {
    e.preventDefault();
    e.stopPropagation();

    undoHistory.pop()?.trigger();
  }, [undoHistory, redoHistory]);

  useHotkeys('shift+cmd+z', e => {
    e.preventDefault();
    e.stopPropagation();

    redoHistory.pop()?.trigger();
  }, [undoHistory, redoHistory]);
}