import { selectorFamily, SerializableParam } from 'recoil';
import { projectStore } from '../projectStore';
import { isEqual } from 'lodash';

type StateValue<P, T> = { id: P; value: T };

export default function makeInitialStateSelectorFamily<T, P extends SerializableParam>(key: string, defaultValue: T) {
  return selectorFamily<T, P>({
    key: `${key}/Default`,
    get: (id) => ({ get }) => {
      const initialState = get(projectStore.initialState);

      return initialState[key]?.find((value: StateValue<P, T>) => isEqual(value.id, id))?.value ?? defaultValue;
    },
  });
}
