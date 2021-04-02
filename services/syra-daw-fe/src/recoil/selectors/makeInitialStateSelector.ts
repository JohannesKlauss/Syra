import { selector } from "recoil";
import { projectStore } from "../projectStore";

export default function makeInitialStateSelector<T>(key: string, defaultValue: T) {
  return selector<T>({
    key: `${key}/Default`,
    get: ({get}) => {
      const initialState = get(projectStore.initialState) as Record<string, T>;

      return initialState[key] ?? defaultValue;
    }
  });
}