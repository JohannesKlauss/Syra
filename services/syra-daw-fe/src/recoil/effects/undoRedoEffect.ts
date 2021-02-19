import { AtomEffect } from "recoil";
import { RecoilAtomEffect } from "../../types/Recoil";

type UndoRedoHistory = Array<{
  label: string,
  trigger: () => void,
}>;

export const undoHistory: UndoRedoHistory = [];

export const redoHistory: UndoRedoHistory = [];

export const undoRedoEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ setSelf, onSet }) => {
  const labelKey = `${key}${id ? `-${id}` : null}`;

  onSet((newValue, oldValue) => {
    const undoRedoPair = {
      label: `${labelKey}: ${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
      trigger: () => {
        setSelf(oldValue);

        redoHistory.push({
          label: `${labelKey}: ${JSON.stringify(newValue)} -> ${JSON.stringify(oldValue)}`,
          trigger: () => {
            setSelf(newValue);

            undoHistory.push(undoRedoPair);
          },
        });
      },
    };

    undoHistory.push(undoRedoPair);
  });
};