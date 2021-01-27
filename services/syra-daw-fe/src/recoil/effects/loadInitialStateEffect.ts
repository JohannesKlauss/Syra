import { RecoilAtomEffect } from '../../types/Recoil';
import { AtomEffect, DefaultValue } from "recoil";

let dbContent: Record<string, any> = {};

export const populateFromDb = (content: Record<string, any>) => dbContent = content;

export const loadInitialStateEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({
  trigger,
  setSelf,
}) => {
  if (trigger === 'get') {
    let val = dbContent[key] || localStorage.getItem(key);

    if (val) {
      if (id && typeof val === 'string') {
        val = JSON.parse(val);
      }

      if (id && val instanceof Array) {
        setSelf(val.find(v => v.id === id)?.value ?? new DefaultValue());
      } else {
        setSelf(val);
      }

      return;
    }
  }
};
