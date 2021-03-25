import { RecoilAtomEffect } from '../../types/Recoil';
import { DefaultValue } from 'recoil';
import { isEqual } from 'lodash';

let dbContent: Record<string, any> = {};

export const populateFromDb = (content: Record<string, any>) => dbContent = content;

export const loadInitialStateEffect: RecoilAtomEffect<string | Record<string, any> | number, any> = (key, id) => ({
  trigger,
  setSelf,
}) => {
  if (trigger === 'get') {
    if (typeof id === 'string' && id.length === 0) {
      return;
    }

    let val = dbContent[key] || JSON.parse(localStorage.getItem(key) ?? 'null');

    if (val != null) {
      if (id && val instanceof Array) {
        setSelf(val.find(v => isEqual(v.id, id))?.value ?? new DefaultValue());
      } else {
        setSelf(val);
      }

      return;
    }
  }
};
