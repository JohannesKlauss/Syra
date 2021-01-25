import { atomFamily, AtomFamilyOptions, RecoilState, selector, SerializableParam } from "recoil";
import { publishChangeEffect } from "../effects/publishChangeEffect";
import { subscribeChangeEffect } from "../effects/subscribeChangeEffect";

export default function atomFamilySynced<T, P extends SerializableParam>(
  options: AtomFamilyOptions<T, P>
): (param: P) => RecoilState<T> {

  return atomFamily<T, P>({
    ...options,
    effects_UNSTABLE: param => [
      publishChangeEffect(options.key, param),
      subscribeChangeEffect(options.key, param),
    ]
  });
}