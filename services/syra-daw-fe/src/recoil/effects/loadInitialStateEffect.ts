import { RecoilAtomEffect } from '../../types/Recoil';
import { AtomEffect, DefaultValue } from 'recoil';
import { isEqual } from 'lodash';

let dbContent: Record<string, any> = {};

export const populateFromDb = (content: Record<string, any>) => (dbContent = content);

export const loadInitialStateEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => ({
  trigger,
  setSelf,
}) => {
  if (trigger === 'get') {
    let val = dbContent[key] || JSON.parse(localStorage.getItem(key) ?? 'null');

    if (key === 'channel/isPluginActive') {
      console.log('Val for ' + key + ' (' + id + ')', val);

      if (val != null) {
        if (id && val instanceof Array) {
          console.log('set parameter to', val.find((v) => isEqual(v.id, id))?.value ?? new DefaultValue());

          console.log('val', val);
          console.log('id', id);
        } else {
          console.log('set parameter to', val);
        }
      }
    }

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
