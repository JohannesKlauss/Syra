import { atom, AtomOptions, RecoilState } from "recoil";
import { RecoilAtomEffect } from "../../types/Recoil";

interface AtomWithEffectsOptions<T> extends AtomOptions<T> {
  effects: ReadonlyArray<RecoilAtomEffect<string, T>>;
}

export default function atomWithEffects<T>(options: AtomWithEffectsOptions<T>): RecoilState<T> {
  return atom({
    ...options,
    effects_UNSTABLE: options.effects.map(effectFn => effectFn(options.key)),
  });
}