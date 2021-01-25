import { atom, AtomOptions, RecoilState } from "recoil";
import { publishChangeEffect } from "../effects/publishChangeEffect";
import { subscribeChangeEffect } from "../effects/subscribeChangeEffect";

export default function atomSynced<T>(options: AtomOptions<T>): RecoilState<T> {
  return atom({
    ...options,
    effects_UNSTABLE: [
      publishChangeEffect(options.key),
      subscribeChangeEffect(options.key),
    ]
  })
}