import { RecoilAtomEffect } from "../../types/Recoil";
import { AtomEffect } from "recoil";

export const setLoggerEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet((newValue, oldValue) => {
    console.log(`Set ${key} (${id}) from`, oldValue, 'to', newValue);
  });
}