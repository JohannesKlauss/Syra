import { atomFamily, AtomFamilyOptions, RecoilState, SerializableParam } from "recoil";
import { RecoilAtomEffect } from "../../types/Recoil";

interface AtomFamilyWithEffectsOptions<T, P extends SerializableParam> extends AtomFamilyOptions<T, P> {
  effects: ReadonlyArray<RecoilAtomEffect>;
}

export default function atomFamilyWithEffects<T, P extends SerializableParam>(
  options: AtomFamilyWithEffectsOptions<T, P>
): (param: P) => RecoilState<T> {
  return atomFamily<T, P>({
    ...options,
    effects_UNSTABLE: param => options.effects.map(effectFn => effectFn(options.key, param)),
  });
}