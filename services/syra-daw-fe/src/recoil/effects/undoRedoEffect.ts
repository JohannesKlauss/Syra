import { RecoilAtomEffect } from "../../types/Recoil";

type UndoRedoHistory = Array<{
  label: string,
  trigger: () => void,
}>;

let onFirstPushToUndoStackExternalCallback = () => {};

export const undoHistory: UndoRedoHistory = [];

export const redoHistory: UndoRedoHistory = [];

export const onFirstPushToUndoStack = (callback: () => void) => onFirstPushToUndoStackExternalCallback = callback;

export const undoRedoEffect: RecoilAtomEffect<string, any> = (key, id) => ({ setSelf, onSet }) => {
  const labelKey = `${key}${id ? `-${id}` : null}`;

  onSet((newValue, oldValue) => {
    const undoRedoPair = {
      label: `Undo ${labelKey}: ${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
      trigger: () => {
        setSelf(oldValue);

        redoHistory.push({
          label: `Redo ${labelKey}: ${JSON.stringify(newValue)} -> ${JSON.stringify(oldValue)}`,
          trigger: () => {
            setSelf(newValue);

            undoHistory.push(undoRedoPair);
          },
        });
      },
    };

    if (undoHistory.length === 0) {
      onFirstPushToUndoStackExternalCallback();
    }

    undoHistory.push(undoRedoPair);
  });
};