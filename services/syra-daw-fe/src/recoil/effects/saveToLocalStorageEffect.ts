import { RecoilAtomEffect } from '../../types/Recoil';

export const saveToLocalStorageEffect: RecoilAtomEffect<string | number, any> = (key, id) => ({ onSet }) => {
  onSet((value) =>
    localStorage.setItem(
      key,
      id
        ? JSON.stringify([
            {
              id,
              value,
            },
          ])
        : typeof value === 'string'
        ? value
        : JSON.stringify(value),
    ),
  );
};
