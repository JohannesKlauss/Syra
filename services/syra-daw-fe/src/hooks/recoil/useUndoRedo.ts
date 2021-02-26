import { useHotkeys } from "react-hotkeys-hook";
import { redoHistory, undoHistory, onFirstPushToUndoStack } from "../../recoil/effects/undoRedoEffect";
import { useCallback, useEffect, useState } from "react";

export default function useUndoRedo() {
  const [hasUndoStack, setHasUndoStack] = useState(false);
  const [hasRedoStack, setHasRedoStack] = useState(false);

  const undo = useCallback(() => {
    undoHistory.pop()?.trigger();

    setHasUndoStack(undoHistory.length > 0);
    setHasRedoStack(redoHistory.length > 0);
  }, [undoHistory, redoHistory, setHasRedoStack, setHasUndoStack]);

  const redo = useCallback(() => {
    redoHistory.pop()?.trigger();

    setHasUndoStack(undoHistory.length > 0);
    setHasRedoStack(redoHistory.length > 0);
  }, [undoHistory, redoHistory, setHasRedoStack, setHasUndoStack]);

  useHotkeys('cmd+z', e => {
    e.preventDefault();
    e.stopPropagation();

    undo();
  }, [undo]);

  useHotkeys('shift+cmd+z', e => {
    e.preventDefault();
    e.stopPropagation();

    redo();
  }, [redo]);

  useEffect(() => {
    onFirstPushToUndoStack(() => setHasUndoStack(true));
  }, []);

  return {hasRedoStack, hasUndoStack, undo, redo};
}