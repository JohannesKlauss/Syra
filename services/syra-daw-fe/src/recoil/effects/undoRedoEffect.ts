import { AtomEffect } from "recoil";
import { RecoilAtomEffect } from "../../types/Recoil";

const history: Array<{
  label: string,
  undo: () => void,
}> = [];

export const undoRedoEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ setSelf, onSet, trigger }) => {
  onSet((newValue, oldValue) => {
    history.push({
      label: `${key}: ${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
      undo: () => {
        setSelf(oldValue);
      },
    });
  });
};