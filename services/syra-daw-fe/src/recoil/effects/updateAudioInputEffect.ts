import { RecoilAtomEffect } from "../../types/Recoil";
import { AtomEffect } from "recoil";

export const updateAudioInputEffect: RecoilAtomEffect = <P, T>(key: string): AtomEffect<T> => ({ onSet }) => {
  onSet((newValue, oldValue) => {

  });
};