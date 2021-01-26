import { RecoilAtomEffect } from '../../types/Recoil';
import { AtomEffect, DefaultValue } from "recoil";

let dbContent: Record<string, any> = {};

export const populateFromDb = (content: Record<string, any>) => dbContent = content;

export const loadInitialState: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({
  trigger,
  setSelf,
}) => {
  if (trigger === 'get') {
    const val = dbContent[key];

    if (val) {
      if (id && val instanceof Array) {
        setSelf(val.find(v => v.id === id)?.value ?? new DefaultValue());
      } else {
        setSelf(val);
      }
    }
  }
};
