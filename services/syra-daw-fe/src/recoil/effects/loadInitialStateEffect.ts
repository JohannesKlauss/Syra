import { RecoilAtomEffect } from '../../types/Recoil';
import { AtomEffect, DefaultValue } from 'recoil';
import { isEqual } from 'lodash';
import { CHANNEL_ID_PREFIX } from "../../const/ids";

let dbContent: Record<string, any> = {};

export const populateFromDb = (content: Record<string, any>) => (dbContent = content);

export const loadInitialStateEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({
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
