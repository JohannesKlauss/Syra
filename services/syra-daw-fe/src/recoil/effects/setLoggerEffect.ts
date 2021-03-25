import { RecoilAtomEffect } from "../../types/Recoil";

export const setLoggerEffect: RecoilAtomEffect<string, any> = (key, id) => ({ onSet }) => {
  onSet((newValue, oldValue) => {
    console.log(`Set ${key} (${id}) from`, oldValue, 'to', newValue);
  });
}