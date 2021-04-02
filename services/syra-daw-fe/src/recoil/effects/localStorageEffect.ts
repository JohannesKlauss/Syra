import { RecoilAtomEffect } from '../../types/Recoil';
import { DefaultValue } from 'recoil';
import { isEqual } from 'lodash';

export const localStorageEffect: RecoilAtomEffect<string | Record<string, any> | number, any> = (key, id) => ({
  trigger,
  setSelf,
  onSet,
}) => {
  if (trigger === 'get') {
    let val = JSON.parse(localStorage.getItem(key) ?? 'null');

    if (val != null) {
      if (id && val instanceof Array) {
        setSelf(val.find(v => isEqual(v.id, id))?.value ?? new DefaultValue());
      } else {
        setSelf(val);
      }
    }
  }

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(
        key,
        id
          ? JSON.stringify([
            {
              id,
              newValue,
            },
          ])
          : typeof newValue === 'string'
          ? newValue
          : JSON.stringify(newValue),
      );
    }
  });

  if (trigger === 'get') {
    if (typeof id === 'string' && id.length === 0) {
      return;
    }


  }
};
