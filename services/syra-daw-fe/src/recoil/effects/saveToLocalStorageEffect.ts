import { RecoilAtomEffect } from "../../types/Recoil";
import { AtomEffect } from "recoil";

export const saveToLocalStorageEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({ onSet }) => {
  onSet((value) => localStorage.setItem(key, id ? JSON.stringify([{ id, value }]) : JSON.stringify(value)));
};